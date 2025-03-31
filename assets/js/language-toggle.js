// 页面加载完成后初始化语言
document.addEventListener('DOMContentLoaded', function() {
    // 设置初始语言
    const currentLang = getCurrentLanguage();
    updatePageContent(currentLang);
    updateLanguageButtons(currentLang);
    
    // 添加语言切换事件监听
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
            // 关闭下拉菜单
            document.getElementById('langDropdown').classList.remove('show');
            // 更新切换按钮显示
            updateToggleButtonText(lang);
        });
    });
    
    // 处理输入框的placeholder翻译
    updatePlaceholders(currentLang);
    
    // 初始化语言切换按钮文本
    updateToggleButtonText(currentLang);
    
    // 添加下拉菜单切换
    document.getElementById('langToggle').addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('langDropdown').classList.toggle('show');
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('langDropdown').classList.remove('show');
        }
    });
});

// 更新语言切换按钮文本
function updateToggleButtonText(lang) {
    const toggle = document.getElementById('langToggle');
    if (lang === 'zh') {
        toggle.querySelector('.current-lang').textContent = '中';
        toggle.title = '切换语言';
    } else {
        toggle.querySelector('.current-lang').textContent = 'EN';
        toggle.title = 'Switch Language';
    }
}

// 更新页面内容的函数
function updatePageContent(lang) {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = getText(key, lang);
    });
    
    // 更新输入框的placeholder
    updatePlaceholders(lang);
    
    // 更新页面标题
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.dataset.i18n) {
        document.title = getText(titleElement.dataset.i18n, lang);
    }
}

// 更新输入框placeholder的函数
function updatePlaceholders(lang) {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = getText(key, lang);
    });
} 