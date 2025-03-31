/**
 * GoodGame.mom 主要JavaScript文件
 * 实现网站的交互功能
 */

// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化搜索功能
    initSearch();
    
    // 初始化游戏卡片动画
    initGameCards();
    
    // 初始化页面平滑滚动
    initSmoothScroll();
    
    // 检测全屏按钮
    initFullscreenMode();
});

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInputs = document.querySelectorAll('input[placeholder="搜索游戏..."]');
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            // 当用户按下回车键时执行搜索
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                
                if (searchTerm) {
                    // 实际应用中，这里应该跳转到搜索结果页面
                    console.log('搜索: ' + searchTerm);
                    // 未来实现: window.location.href = 'search.html?q=' + encodeURIComponent(searchTerm);
                    
                    // 临时实现: 显示搜索结果提示
                    showSearchResultsToast(searchTerm);
                }
            }
        });
    });
}

/**
 * 显示搜索结果提示
 */
function showSearchResultsToast(searchTerm) {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center';
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
        <span>搜索 "${searchTerm}" 的结果将很快显示</span>
    `;
    
    // 添加到页面
    document.body.appendChild(toast);
    
    // 2秒后移除提示
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 2000);
}

/**
 * 初始化游戏卡片动画
 */
function initGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach((card, index) => {
        // 添加延迟加载动画
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 50)); // 错开加载时间，创建连续展开效果
    });
}

/**
 * 初始化页面平滑滚动
 */
function initSmoothScroll() {
    // 获取所有导航锚点
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // 确保目标存在且不是空锚点
            if (targetId && targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // 平滑滚动到目标位置
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 考虑固定导航栏的高度
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * 初始化全屏模式
 */
function initFullscreenMode() {
    const fullscreenButtons = document.querySelectorAll('button:contains("全屏模式")');
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 查找游戏容器
            const gameContainer = this.closest('.game-iframe-container') || 
                                document.getElementById('game-container');
            
            if (gameContainer) {
                toggleFullscreen(gameContainer);
            }
        });
    });
}

/**
 * 切换全屏模式
 */
function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        // 进入全屏模式
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        }
    } else {
        // 退出全屏模式
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

/**
 * 加载游戏数据的通用函数
 * @param {string} gameId - 游戏ID
 * @param {function} callback - 回调函数，接收游戏数据
 */
function loadGameData(gameId, callback) {
    // 在实际应用中，这里应该从API获取游戏数据
    // 这里使用模拟数据作为示例
    setTimeout(() => {
        // 模拟游戏数据
        const gameData = {
            id: gameId,
            title: '游戏 ' + gameId,
            category: getRandomCategory(),
            description: '这是一个精彩的游戏，玩家可以在这里体验刺激的冒险。游戏拥有精美的画面和流畅的操作体验，适合各个年龄段的玩家。',
            rating: Math.floor(Math.random() * 5) + 1, // 1-5星评分
            url: 'https://example.com/games/' + gameId
        };
        
        if (callback && typeof callback === 'function') {
            callback(gameData);
        }
    }, 500); // 模拟网络延迟
}

/**
 * 获取随机游戏分类
 * @returns {string} 随机分类名称
 */
function getRandomCategory() {
    const categories = [
        '动作游戏', '射击游戏', '益智游戏', '策略游戏', 
        '体育游戏', '赛车游戏', '冒险游戏', '角色扮演'
    ];
    
    return categories[Math.floor(Math.random() * categories.length)];
}

/**
 * 自定义选择器方法 - 用于按内容选择元素
 */
Element.prototype.contains = function(text) {
    return this.textContent.includes(text);
}; 