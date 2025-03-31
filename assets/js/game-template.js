/**
 * GoodGame.mom 游戏模板 JavaScript
 * 用于处理游戏页面的交互功能
 */

// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化游戏加载
    initGameLoading();
    
    // 初始化全屏功能
    initFullscreen();
    
    // 初始化重新开始功能
    initRestartGame();
    
    // 初始化游戏评分交互
    initRating();
    
    // 初始化评论功能
    initComments();
});

/**
 * 初始化游戏加载
 */
function initGameLoading() {
    const gameFrame = document.getElementById('game-frame');
    const gameLoading = document.getElementById('game-loading');
    
    if (!gameFrame || !gameLoading) return;
    
    // 监听iframe加载完成事件
    gameFrame.addEventListener('load', function() {
        // 隐藏加载动画，显示游戏
        gameLoading.classList.add('hidden');
        gameFrame.classList.remove('hidden');
    });
    
    // 如果加载超过15秒，自动显示游戏(防止某些游戏无法触发load事件)
    setTimeout(() => {
        if (!gameLoading.classList.contains('hidden')) {
            gameLoading.classList.add('hidden');
            gameFrame.classList.remove('hidden');
        }
    }, 15000);
}

/**
 * 初始化全屏功能
 */
function initFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameFrame = document.getElementById('game-frame');
    
    if (!fullscreenBtn || !gameFrame) return;
    
    fullscreenBtn.addEventListener('click', function() {
        // 检查浏览器支持的全屏API
        if (gameFrame.requestFullscreen) {
            gameFrame.requestFullscreen();
        } else if (gameFrame.webkitRequestFullscreen) { /* Safari */
            gameFrame.webkitRequestFullscreen();
        } else if (gameFrame.msRequestFullscreen) { /* IE11 */
            gameFrame.msRequestFullscreen();
        }
    });
    
    // 监听全屏状态变化
    document.addEventListener('fullscreenchange', updateFullscreenButtonText);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButtonText);
    document.addEventListener('mozfullscreenchange', updateFullscreenButtonText);
    document.addEventListener('MSFullscreenChange', updateFullscreenButtonText);
    
    function updateFullscreenButtonText() {
        if (document.fullscreenElement) {
            fullscreenBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                退出全屏
            `;
        } else {
            fullscreenBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                全屏模式
            `;
        }
    }
}

/**
 * 初始化重新开始游戏功能
 */
function initRestartGame() {
    const restartBtn = document.getElementById('restart-btn');
    const gameFrame = document.getElementById('game-frame');
    
    if (!restartBtn || !gameFrame) return;
    
    restartBtn.addEventListener('click', function() {
        // 显示加载提示
        const gameLoading = document.getElementById('game-loading');
        if (gameLoading) {
            gameFrame.classList.add('hidden');
            gameLoading.classList.remove('hidden');
        }
        
        // 重新加载iframe内容
        const currentSrc = gameFrame.src;
        gameFrame.src = 'about:blank';
        
        setTimeout(() => {
            gameFrame.src = currentSrc;
        }, 100);
    });
}

/**
 * 初始化游戏评分交互
 */
function initRating() {
    const ratingStars = document.querySelectorAll('.rating-star');
    
    if (!ratingStars.length) return;
    
    ratingStars.forEach((star, index) => {
        // 鼠标悬停时高亮星星
        star.addEventListener('mouseover', function() {
            for (let i = 0; i <= index; i++) {
                ratingStars[i].classList.add('text-amber-400');
                ratingStars[i].classList.remove('text-gray-300');
            }
            
            for (let i = index + 1; i < ratingStars.length; i++) {
                ratingStars[i].classList.add('text-gray-300');
                ratingStars[i].classList.remove('text-amber-400');
            }
        });
        
        // 点击星星进行评分
        star.addEventListener('click', function() {
            const rating = index + 1;
            // 这里可以发送评分到服务器
            console.log('用户评分:', rating);
            
            // 显示评分成功提示
            showRatingToast(rating);
        });
    });
    
    // 鼠标离开评分区域时恢复原始状态
    const ratingContainer = document.querySelector('.rating-container');
    if (ratingContainer) {
        ratingContainer.addEventListener('mouseleave', resetRatingStars);
    }
    
    function resetRatingStars() {
        // 恢复原始评分显示
        const currentRating = parseInt(ratingContainer.dataset.rating) || 0;
        
        ratingStars.forEach((star, index) => {
            if (index < currentRating) {
                star.classList.add('text-amber-400');
                star.classList.remove('text-gray-300');
            } else {
                star.classList.add('text-gray-300');
                star.classList.remove('text-amber-400');
            }
        });
    }
    
    function showRatingToast(rating) {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center';
        toast.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>感谢您的评分 (${rating}/5)!</span>
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
}

/**
 * 初始化评论功能
 */
function initComments() {
    const commentForm = document.querySelector('.comment-form');
    const commentTextarea = document.querySelector('.comment-textarea');
    const commentSubmitBtn = document.querySelector('.comment-submit');
    
    if (!commentForm || !commentTextarea || !commentSubmitBtn) return;
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const commentText = commentTextarea.value.trim();
        if (!commentText) return;
        
        // 这里可以提交评论到服务器
        console.log('用户评论:', commentText);
        
        // 添加评论到列表
        addCommentToList(commentText);
        
        // 清空输入框
        commentTextarea.value = '';
    });
    
    function addCommentToList(commentText) {
        const commentsList = document.querySelector('.comments-list');
        if (!commentsList) return;
        
        const now = new Date();
        const timeString = '刚刚';
        
        // 创建新评论HTML
        const newComment = document.createElement('div');
        newComment.className = 'flex space-x-4 animate-fadeIn';
        newComment.innerHTML = `
            <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">游</div>
            </div>
            <div class="flex-grow">
                <div class="flex items-center mb-1">
                    <h4 class="font-medium text-gray-900">游客</h4>
                    <span class="mx-2 text-gray-300">•</span>
                    <span class="text-sm text-gray-500">${timeString}</span>
                </div>
                <p class="text-gray-700">${commentText}</p>
                <div class="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <button class="flex items-center hover:text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>0</span>
                    </button>
                    <button class="hover:text-indigo-600">回复</button>
                </div>
            </div>
        `;
        
        // 添加到评论列表顶部
        commentsList.insertBefore(newComment, commentsList.firstChild);
    }
} 