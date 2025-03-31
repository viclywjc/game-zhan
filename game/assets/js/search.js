/**
 * GoodGame.mom 搜索功能
 * 处理游戏搜索和结果显示
 */

// 游戏数据库示例（实际应用中应从服务器获取）
const gamesDatabase = [
    {
        id: 'game1',
        title: '太空冒险',
        category: '动作游戏',
        tags: ['太空', '冒险', '科幻', '射击'],
        description: '探索未知的宇宙，与外星生物战斗，拯救银河系。',
        thumbnail: 'assets/images/games/game1.jpg'
    },
    {
        id: 'game2',
        title: '赛车挑战',
        category: '赛车游戏',
        tags: ['赛车', '速度', '竞技', '3D'],
        description: '体验极速赛车的刺激，在世界各地的赛道上一决高下。',
        thumbnail: 'assets/images/games/game2.jpg'
    },
    {
        id: 'game3',
        title: '方块消除',
        category: '益智游戏',
        tags: ['消除', '益智', '休闲', '策略'],
        description: '考验你的逻辑思维，消除方块获得高分。',
        thumbnail: 'assets/images/games/game3.jpg'
    },
    {
        id: 'game4',
        title: '王国防御',
        category: '策略游戏',
        tags: ['塔防', '战略', '防御', '王国'],
        description: '建立防御塔，抵御敌人的入侵，保卫你的王国。',
        thumbnail: 'assets/images/games/game4.jpg'
    },
    {
        id: 'game5',
        title: '二次元冒险',
        category: '冒险游戏',
        tags: ['二次元', '动漫', '冒险', 'RPG'],
        description: '进入动漫世界，与可爱的角色一起踏上冒险之旅。',
        thumbnail: 'assets/images/games/game5.jpg'
    },
    {
        id: 'game6',
        title: '篮球明星',
        category: '体育游戏',
        tags: ['篮球', '体育', '竞技', '技巧'],
        description: '成为篮球场上的明星，展示你的投篮技巧。',
        thumbnail: 'assets/images/games/game6.jpg'
    },
    {
        id: 'game7',
        title: '恐怖医院',
        category: '恐怖游戏',
        tags: ['恐怖', '生存', '解谜', '医院'],
        description: '在废弃的医院中生存，解开医院的恐怖秘密。',
        thumbnail: 'assets/images/games/game7.jpg'
    },
    {
        id: 'game8',
        title: '像素农场',
        category: '模拟经营',
        tags: ['像素', '农场', '经营', '休闲'],
        description: '经营你的像素农场，种植作物，饲养动物。',
        thumbnail: 'assets/images/games/game8.jpg'
    },
    {
        id: 'game9',
        title: '魔法世界',
        category: '角色扮演',
        tags: ['魔法', '奇幻', 'RPG', '冒险'],
        description: '在充满魔法的世界中冒险，成为最强大的魔法师。',
        thumbnail: 'assets/images/games/game9.jpg'
    },
    {
        id: 'game10',
        title: '僵尸生存',
        category: '射击游戏',
        tags: ['僵尸', '生存', '射击', '恐怖'],
        description: '在僵尸末日中生存，与成群的僵尸战斗。',
        thumbnail: 'assets/images/games/game10.jpg'
    }
];

// 在DOM加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化搜索框
    initSearchInput();
    
    // 如果是搜索结果页面，显示搜索结果
    if (window.location.pathname.includes('search.html')) {
        displaySearchResults();
    }
});

/**
 * 初始化搜索输入框
 */
function initSearchInput() {
    const searchInputs = document.querySelectorAll('input[placeholder="搜索游戏..."]');
    
    searchInputs.forEach(input => {
        // 添加输入事件监听，实现实时搜索建议
        input.addEventListener('input', debounce(function() {
            const searchTerm = this.value.trim();
            
            if (searchTerm.length >= 2) {
                showSearchSuggestions(searchTerm, this);
            } else {
                hideSearchSuggestions();
            }
        }, 300));
        
        // 添加回车键事件，执行搜索
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                
                if (searchTerm) {
                    performSearch(searchTerm);
                }
            }
        });
        
        // 添加焦点事件，当再次聚焦时如果有内容则显示建议
        input.addEventListener('focus', function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length >= 2) {
                showSearchSuggestions(searchTerm, this);
            }
        });
        
        // 点击文档其他地方时隐藏搜索建议
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                hideSearchSuggestions();
            }
        });
    });
}

/**
 * 延迟执行函数 (debounce)
 * @param {Function} func - 要执行的函数
 * @param {number} delay - 延迟时间(毫秒)
 * @returns {Function} 延迟执行的函数
 */
function debounce(func, delay) {
    let timeout;
    
    return function() {
        const context = this;
        const args = arguments;
        
        clearTimeout(timeout);
        
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

/**
 * 显示搜索建议
 * @param {string} searchTerm - 搜索关键词
 * @param {HTMLElement} inputElement - 搜索输入框元素
 */
function showSearchSuggestions(searchTerm, inputElement) {
    // 搜索匹配的游戏
    const matchedGames = searchGames(searchTerm);
    
    // 建议容器
    let suggestionsContainer = document.querySelector('.search-suggestions');
    
    // 如果没有建议容器，创建一个
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions absolute z-20 top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden';
        inputElement.parentNode.appendChild(suggestionsContainer);
    }
    
    // 清空容器
    suggestionsContainer.innerHTML = '';
    
    // 如果有匹配结果，显示建议
    if (matchedGames.length > 0) {
        const maxSuggestions = Math.min(5, matchedGames.length);
        
        for (let i = 0; i < maxSuggestions; i++) {
            const game = matchedGames[i];
            const suggestionItem = document.createElement('div');
            
            suggestionItem.className = 'suggestion-item py-2 px-4 hover:bg-indigo-50 cursor-pointer';
            suggestionItem.innerHTML = `
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mr-2">
                        <span class="text-sm">${game.category.charAt(0)}</span>
                    </div>
                    <div>
                        <div class="font-medium">${highlightMatch(game.title, searchTerm)}</div>
                        <div class="text-xs text-gray-500">${game.category}</div>
                    </div>
                </div>
            `;
            
            // 点击建议项跳转到对应游戏页面
            suggestionItem.addEventListener('click', function() {
                window.location.href = `game.html?id=${game.id}`;
            });
            
            suggestionsContainer.appendChild(suggestionItem);
        }
        
        // 如果结果超过显示数量，添加"查看更多"选项
        if (matchedGames.length > maxSuggestions) {
            const viewMoreItem = document.createElement('div');
            viewMoreItem.className = 'view-more py-2 px-4 text-center text-indigo-600 hover:bg-indigo-50 cursor-pointer font-medium text-sm';
            viewMoreItem.textContent = `查看全部 ${matchedGames.length} 个结果`;
            
            viewMoreItem.addEventListener('click', function() {
                performSearch(searchTerm);
            });
            
            suggestionsContainer.appendChild(viewMoreItem);
        }
        
        // 显示建议容器
        suggestionsContainer.style.display = 'block';
    } else {
        // 没有匹配结果，显示无结果提示
        const noResultItem = document.createElement('div');
        noResultItem.className = 'py-3 px-4 text-center text-gray-500';
        noResultItem.textContent = `没有找到 "${searchTerm}" 相关的游戏`;
        
        suggestionsContainer.appendChild(noResultItem);
        suggestionsContainer.style.display = 'block';
    }
}

/**
 * 隐藏搜索建议
 */
function hideSearchSuggestions() {
    const suggestionsContainer = document.querySelector('.search-suggestions');
    
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

/**
 * 高亮匹配的文本
 * @param {string} text - 原始文本
 * @param {string} highlight - 需要高亮的部分
 * @returns {string} 包含高亮HTML的文本
 */
function highlightMatch(text, highlight) {
    const regex = new RegExp('(' + highlight + ')', 'gi');
    return text.replace(regex, '<span class="bg-yellow-100">$1</span>');
}

/**
 * 执行搜索并跳转到搜索结果页面
 * @param {string} searchTerm - 搜索关键词
 */
function performSearch(searchTerm) {
    // 在正式环境中，可以跳转到搜索页面
    // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
    
    // 示例中，我们创建一个模态框来显示搜索结果
    showSearchResultsModal(searchTerm);
}

/**
 * 显示搜索结果模态框
 * @param {string} searchTerm - 搜索关键词
 */
function showSearchResultsModal(searchTerm) {
    // 搜索匹配的游戏
    const matchedGames = searchGames(searchTerm);
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    modal.id = 'search-modal';
    
    // 模态框内容
    modal.innerHTML = `
        <div class="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
            <div class="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
                <h3 class="text-xl font-bold">搜索结果: "${searchTerm}"</h3>
                <button id="close-modal" class="text-white hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="p-6 overflow-y-auto flex-grow">
                <p class="mb-4">找到 ${matchedGames.length} 个相关游戏</p>
                <div id="search-results" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    ${matchedGames.map(game => `
                        <a href="game.html?id=${game.id}" class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
                            <div class="aspect-video bg-gray-100 flex items-center justify-center">
                                <div class="w-full h-full bg-gradient-to-br from-${getRandomColor()}-400 to-${getRandomColor()}-500 flex items-center justify-center text-white font-medium">
                                    ${game.title}
                                </div>
                            </div>
                            <div class="p-3">
                                <h3 class="font-medium">${highlightMatch(game.title, searchTerm)}</h3>
                                <p class="text-sm text-gray-500">${game.category}</p>
                                <div class="mt-2 flex flex-wrap gap-1">
                                    ${game.tags.map(tag => `
                                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
                ${matchedGames.length === 0 ? '<div class="text-center py-10 text-gray-500">没有找到相关游戏，请尝试其他关键词</div>' : ''}
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
    
    // 关闭按钮事件
    document.getElementById('close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.body.style.overflow = ''; // 恢复滚动
    });
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = ''; 
        }
    });
}

/**
 * 搜索游戏
 * @param {string} searchTerm - 搜索关键词
 * @returns {Array} 匹配的游戏数组
 */
function searchGames(searchTerm) {
    if (!searchTerm) return [];
    
    const term = searchTerm.toLowerCase();
    
    return gamesDatabase.filter(game => {
        // 检查游戏标题
        if (game.title.toLowerCase().includes(term)) return true;
        
        // 检查游戏分类
        if (game.category.toLowerCase().includes(term)) return true;
        
        // 检查游戏标签
        for (const tag of game.tags) {
            if (tag.toLowerCase().includes(term)) return true;
        }
        
        // 检查游戏描述
        if (game.description.toLowerCase().includes(term)) return true;
        
        return false;
    });
}

/**
 * 获取随机颜色
 * @returns {string} 颜色名称
 */
function getRandomColor() {
    const colors = [
        'red', 'blue', 'green', 'purple', 'pink', 
        'indigo', 'yellow', 'teal', 'orange', 'cyan'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * 在搜索结果页面显示结果
 */
function displaySearchResults() {
    // 获取URL中的搜索参数
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q');
    
    // 如果有搜索关键词，执行搜索
    if (searchTerm) {
        const resultsContainer = document.getElementById('search-results');
        const searchHeading = document.getElementById('search-heading');
        
        if (resultsContainer && searchHeading) {
            // 设置标题
            searchHeading.textContent = `搜索结果: "${searchTerm}"`;
            
            // 获取搜索结果
            const matchedGames = searchGames(searchTerm);
            
            // 显示结果数量
            const resultCountElem = document.getElementById('result-count');
            if (resultCountElem) {
                resultCountElem.textContent = `找到 ${matchedGames.length} 个相关游戏`;
            }
            
            // 清空结果容器
            resultsContainer.innerHTML = '';
            
            // 添加结果
            if (matchedGames.length > 0) {
                matchedGames.forEach(game => {
                    const gameCard = document.createElement('div');
                    gameCard.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300';
                    gameCard.innerHTML = `
                        <a href="game.html?id=${game.id}">
                            <div class="aspect-video bg-gray-100 flex items-center justify-center">
                                <div class="w-full h-full bg-gradient-to-br from-${getRandomColor()}-400 to-${getRandomColor()}-500 flex items-center justify-center text-white font-medium">
                                    ${game.title}
                                </div>
                            </div>
                            <div class="p-4">
                                <h3 class="font-medium">${highlightMatch(game.title, searchTerm)}</h3>
                                <p class="text-sm text-gray-500">${game.category}</p>
                                <div class="mt-2 flex flex-wrap gap-1">
                                    ${game.tags.map(tag => `
                                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">${tag}</span>
                                    `).join('')}
                                </div>
                                <p class="mt-2 text-sm text-gray-700">${game.description.substring(0, 100)}...</p>
                            </div>
                        </a>
                    `;
                    
                    resultsContainer.appendChild(gameCard);
                });
            } else {
                // 没有结果
                resultsContainer.innerHTML = `
                    <div class="col-span-full text-center py-10">
                        <div class="text-5xl mb-4">😢</div>
                        <h3 class="text-xl font-medium mb-2">没有找到相关游戏</h3>
                        <p class="text-gray-500">请尝试其他关键词，或浏览我们的游戏分类。</p>
                        <a href="categories.html" class="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg">浏览所有分类</a>
                    </div>
                `;
            }
        }
    }
} 