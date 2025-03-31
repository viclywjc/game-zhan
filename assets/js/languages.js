// 语言配置文件
const languages = {
    zh: {
        // 通用
        home: '首页',
        back: '返回',
        start: '开始',
        save: '保存',
        load: '加载',
        settings: '设置',
        language: '语言',
        english: 'English',
        chinese: '中文',
        play: '开始游戏',
        viewMore: '查看更多',
        byType: '按游戏类型',
        search: '搜索游戏...',
        noResults: '没有找到匹配的游戏，请尝试其他关键词',
        
        // 返回链接
        back: {
            toHome: '返回首页'
        },
        
        // 游戏通用
        games: {
            controls: '游戏控制',
            keyboardControls: '键盘控制',
            tips: '游戏提示',
            moveUp: '↑ 向上移动',
            moveDown: '↓ 向下移动',
            moveLeft: '← 向左移动',
            moveRight: '→ 向右移动',
            
            // 太空冒险
            space: {
                title: '太空冒险',
                description: '探索浩瀚宇宙，体验惊险刺激的太空冒险！',
                longDescription: '在这款刺激的太空射击游戏中，你将驾驶宇宙飞船在浩瀚的宇宙中探索，与外星生物战斗，收集能量晶体。准备好开始你的太空冒险了吗？',
                shootLaser: '空格键 发射激光',
                tip1: '• 收集蓝色能量晶体可以提升武器威力',
                tip2: '• 躲避红色敌人的攻击',
                tip3: '• 击败Boss可以获得额外奖励',
                tip4: '• 注意管理你的能量值'
            },
            
            // 丛林探险
            jungle: {
                title: '丛林探险',
                description: '在神秘的丛林中展开惊险刺激的探险之旅！'
            },
            
            // 城市建设者
            city: {
                title: '城市建设者',
                description: '规划并建设你的理想城市，成为一位出色的城市规划师！'
            },
            
            // 训练矿工
            trainMiner: {
                title: '训练矿工',
                longDescription: '在这款刺激的挖矿游戏中，你将驾驶一辆小火车，通过矿洞收集宝贵的资源。随着你的挖掘，火车会变得更快、更强大，但也需要面对更多的挑战。挖掘更深处的矿石，升级你的火车，解锁新的矿区，成为最成功的矿工！',
                description: '驾驶小火车，在矿洞中挖掘珍贵资源。升级你的火车，探索新矿区，成为最厉害的矿工！',
                features: {
                    title: '游戏特点：',
                    mining: '有趣的挖矿机制',
                    upgrade: '多种火车升级选择',
                    resources: '各种珍贵资源可收集',
                    areas: '多个矿区等待探索'
                },
                controls: {
                    move: '点击或触摸屏幕来移动火车',
                    collect: '收集各种矿石和资源',
                    upgrade: '使用收集到的资源升级火车',
                    explore: '探索不同的矿区获取稀有资源'
                },
                startButton: '开始游戏'
            },
            
            // Om Nom Run
            omNom: {
                title: 'Om Nom Run',
                longDescription: '和可爱的小怪物Om Nom一起奔跑！从《割绳子》系列游戏中走出来的Om Nom现在要在这款无尽跑酷游戏中收集糖果和躲避障碍。帮助他跑得越远越好，解锁更多角色和能力！',
                description: '和可爱的小怪物Om Nom一起奔跑！收集糖果和躲避障碍，帮助他跑得越远越好，解锁更多角色和能力！',
                features: {
                    title: '游戏特点：',
                    characters: '多个可爱的角色可解锁',
                    candy: '收集糖果和特殊道具',
                    obstacles: '各种障碍和挑战',
                    graphics: '精美的卡通风格画面'
                },
                controls: {
                    swipe: '上滑：跳跃',
                    swipeDown: '下滑：滑行',
                    swipeSide: '左右滑：切换跑道',
                    tap: '点击：使用特殊能力'
                },
                startButton: '开始游戏'
            },
            
            // 3D Free Kick
            freeKick: {
                title: '3D Free Kick',
                longDescription: '体验逼真的3D足球任意球！选择你喜欢的球队，计算角度和力度，用精准的射门技巧击败守门员，赢得比赛。多种比赛模式和难度级别等你挑战！',
                description: '体验逼真的3D足球任意球！选择你喜欢的球队，计算角度和力度，用精准的射门技巧击败守门员。',
                features: {
                    title: '游戏特点：',
                    graphics: '精美的3D图形',
                    teams: '多支球队可选择',
                    modes: '锦标赛和练习模式',
                    physics: '真实的球体物理效果'
                },
                controls: {
                    aim: '瞄准：拖动球来调整射门方向',
                    power: '力度：按住射门按钮的时间决定力度',
                    curve: '弧线球：射门时向左或向右滑动',
                    technique: '技巧：结合方向和力度创造不同的射门效果'
                },
                startButton: '开始游戏'
            },
            
            // Rise Up
            riseUp: {
                title: 'Rise Up',
                longDescription: '保护你的气球上升，使用护盾挡开所有障碍物！在这款简单易上手但充满挑战的益智游戏中，考验你的反应速度和精准度。你能带着气球飞多高？',
                description: '保护你的气球上升，使用护盾挡开所有障碍物！在这款简单易上手但充满挑战的益智游戏中，考验你的反应速度和精准度。',
                features: {
                    title: '游戏特点：',
                    simple: '简单的操作方式',
                    challenge: '逐渐增加的难度',
                    obstacles: '各种各样的障碍物',
                    visual: '精美的视觉效果'
                },
                controls: {
                    shield: '拖动：移动护盾保护气球',
                    avoid: '避开：尽量不要让障碍物碰到气球',
                    careful: '小心：某些障碍物会移动或旋转',
                    speed: '速度：气球会随着高度增加而上升速度变快'
                },
                startButton: '开始游戏'
            },
            
            // Giant Rush
            giantRush: {
                title: 'Giant Rush',
                longDescription: '在这款刺激的奔跑游戏中，控制你的角色，收集宝石，击败敌人，并不断成长变得更加强大。挑战不同的关卡，解锁更多角色，成为最强大的巨人！',
                description: '在这款刺激的奔跑游戏中，控制你的角色，收集宝石，击败敌人，并不断成长变得更加强大。',
                features: {
                    title: '游戏特点：',
                    running: '快节奏的跑酷体验',
                    growing: '随着游戏进行角色会越来越大',
                    characters: '多种可解锁的角色',
                    bosses: '刺激的BOSS战'
                },
                controls: {
                    swipe: '滑动屏幕左右移动角色',
                    collect: '收集宝石和食物来增加体型',
                    avoid: '避开障碍物以免减小体型',
                    boss: '在BOSS战中保持足够大的体型以击败敌人'
                },
                startButton: '开始游戏'
            },
            
            // 8 Ball Billiards Classic
            billiards: {
                title: '8 Ball台球经典版',
                longDescription: '体验经典台球游戏的乐趣！在这款真实的台球模拟游戏中，你可以瞄准、计算角度，一杆进洞。挑战电脑AI或与朋友一起游戏，在各种精美的台球桌上展示你的台球技巧。',
                description: '体验经典台球游戏的乐趣！瞄准、计算角度，一杆进洞。挑战电脑或与朋友一起游戏，展示你的台球技巧。',
                features: {
                    title: '游戏特点：',
                    graphics: '精美真实的台球桌和球体',
                    physics: '真实的物理引擎',
                    modes: '单人和多人游戏模式',
                    levels: '多种难度级别'
                },
                controls: {
                    aim: '瞄准：拖动球杆调整方向',
                    power: '力度：按住并拉动球杆',
                    view: '视角：双指缩放查看台面',
                    spin: '旋转：点击球位置添加旋转效果'
                },
                startButton: '开始游戏'
            }
        },
        
        // 网站通用
        site: {
            title: 'GoodGame.mom',
            description: '最好玩的在线游戏站'
        },
        
        // 导航
        nav: {
            games: '游戏列表',
            categories: '分类',
            new: '新游戏'
        },
        
        // 页面部分
        sections: {
            popular: '热门游戏',
            categories: '游戏分类'
        },
        
        // 分类
        categories: {
            action: '动作游戏',
            adventure: '冒险游戏',
            puzzle: '益智游戏',
            strategy: '策略游戏',
            sports: '体育游戏',
            racing: '赛车游戏',
            shooter: '射击游戏',
            runner: '跑酷游戏'
        },
        
        // 页脚
        footer: {
            about: '关于我们',
            description: 'GoodGame.mom 是一个免费的游戏平台，提供各种有趣的在线游戏。',
            links: '快速链接',
            contact: '联系我们',
            rights: '保留所有权利'
        },
        
        // 城市建设者
        cityBuilder: {
            title: '城市建设者',
            description: '欢迎来到城市建设者！在这款创意十足的城市规划游戏中，你将扮演一位城市规划师，从零开始建设你的理想城市。',
            features: {
                title: '游戏特点：',
                planning: '自由的城市规划系统',
                buildings: '丰富的建筑类型',
                simulation: '真实的城市发展模拟',
                management: '经济与人口管理系统'
            },
            controls: {
                title: '游戏控制',
                move: '移动视角：方向键或WASD',
                select: '选择建筑：鼠标左键',
                place: '放置建筑：鼠标右键',
                delete: '删除建筑：Delete键'
            },
            game: {
                newCity: '新城市',
                date: '日期',
                population: '人口',
                satisfaction: '满意度',
                resources: '资源',
                money: '资金',
                power: '电力',
                water: '水资源',
                waste: '垃圾处理',
                tools: {
                    bulldozer: '推土机',
                    road: '道路',
                    residential: '住宅',
                    commercial: '商业',
                    industrial: '工业',
                    park: '公园',
                    public: '公共设施',
                    water: '水体'
                },
                time: {
                    pause: '暂停',
                    speed1: '1x',
                    speed2: '2x',
                    speed3: '3x'
                },
                camera: {
                    move: '摄像机移动: WASD',
                    rotate: '旋转视角: Q和E',
                    zoom: '缩放: 鼠标滚轮',
                    select: '选择工具: 1-8数字键'
                },
                start: '开始建设',
                welcome: '欢迎来到城市建设者!'
            }
        }
    },
    en: {
        // Common
        home: 'Home',
        back: 'Back',
        start: 'Start',
        save: 'Save',
        load: 'Load',
        settings: 'Settings',
        language: 'Language',
        english: 'English',
        chinese: '中文',
        play: 'Play Now',
        viewMore: 'View More',
        byType: 'By Game Type',
        search: 'Search games...',
        noResults: 'No matching games found, please try other keywords',
        
        // Back Links
        back: {
            toHome: 'Back to Home'
        },
        
        // Game Common
        games: {
            controls: 'Game Controls',
            keyboardControls: 'Keyboard Controls',
            tips: 'Game Tips',
            moveUp: '↑ Move Up',
            moveDown: '↓ Move Down',
            moveLeft: '← Move Left',
            moveRight: '→ Move Right',
            
            // Space Adventure
            space: {
                title: 'Space Adventure',
                description: 'Explore the vast universe in this thrilling space adventure!',
                longDescription: 'In this exciting space shooter game, you will pilot a spaceship to explore the vast universe, battle alien creatures, and collect energy crystals. Are you ready to start your space adventure?',
                shootLaser: 'Spacebar Fire Laser',
                tip1: '• Collect blue energy crystals to enhance weapon power',
                tip2: '• Avoid attacks from red enemies',
                tip3: '• Defeat bosses for extra rewards',
                tip4: '• Monitor your energy level carefully'
            },
            
            // Jungle Adventure
            jungle: {
                title: 'Jungle Adventure',
                description: 'Embark on an exciting expedition through mysterious jungles!'
            },
            
            // City Builder
            city: {
                title: 'City Builder',
                description: 'Plan and build your ideal city as an urban planner!'
            },
            
            // Train Miner
            trainMiner: {
                title: 'Train Miner',
                longDescription: 'In this exciting mining game, you\'ll drive a small train through mine tunnels collecting valuable resources. As you dig, your train becomes faster and more powerful, but also faces more challenges. Dig deeper for rarer minerals, upgrade your train, unlock new mining areas, and become the most successful miner!',
                description: 'Drive a small train through mines, collecting valuable resources. Upgrade your train, explore new areas, and become the best miner!',
                features: {
                    title: 'Game Features:',
                    mining: 'Fun mining mechanics',
                    upgrade: 'Multiple train upgrade options',
                    resources: 'Various valuable resources to collect',
                    areas: 'Multiple mining areas to explore'
                },
                controls: {
                    move: 'Click or tap the screen to move the train',
                    collect: 'Collect various minerals and resources',
                    upgrade: 'Use collected resources to upgrade your train',
                    explore: 'Explore different mining areas for rare resources'
                },
                startButton: 'Start Game'
            },
            
            // Om Nom Run
            omNom: {
                title: 'Om Nom Run',
                longDescription: 'Run with the adorable monster Om Nom! Stepping out from the Cut the Rope series, Om Nom now collects candy and avoids obstacles in this endless runner game. Help him run as far as possible and unlock more characters and abilities!',
                description: 'Run with the adorable monster Om Nom! Collect candy and avoid obstacles, help him run as far as possible and unlock more characters and abilities!',
                features: {
                    title: 'Game Features:',
                    characters: 'Multiple cute characters to unlock',
                    candy: 'Collect candy and special items',
                    obstacles: 'Various obstacles and challenges',
                    graphics: 'Beautiful cartoon-style graphics'
                },
                controls: {
                    swipe: 'Swipe up: Jump',
                    swipeDown: 'Swipe down: Slide',
                    swipeSide: 'Swipe left/right: Switch lanes',
                    tap: 'Tap: Use special ability'
                },
                startButton: 'Start Game'
            },
            
            // 3D Free Kick
            freeKick: {
                title: '3D Free Kick',
                longDescription: 'Experience realistic 3D soccer free kicks! Choose your favorite team, calculate angles and power, and use precise shooting techniques to beat the goalkeeper and win the match. Multiple match modes and difficulty levels await your challenge!',
                description: 'Experience realistic 3D soccer free kicks! Choose your favorite team, calculate angles and power, and use precise shooting techniques to beat the goalkeeper.',
                features: {
                    title: 'Game Features:',
                    graphics: 'Beautiful 3D graphics',
                    teams: 'Multiple teams to choose from',
                    modes: 'Tournament and practice modes',
                    physics: 'Realistic ball physics'
                },
                controls: {
                    aim: 'Aim: Drag the ball to adjust shooting direction',
                    power: 'Power: Hold the shoot button to determine power',
                    curve: 'Curve: Swipe left or right while shooting',
                    technique: 'Technique: Combine direction and power for different shooting effects'
                },
                startButton: 'Start Game'
            },
            
            // Rise Up
            riseUp: {
                title: 'Rise Up',
                longDescription: 'Protect your balloon as it rises by deflecting all obstacles with your shield! In this simple yet challenging puzzle game, test your reflexes and precision. How high can you make your balloon go?',
                description: 'Protect your balloon as it rises by deflecting all obstacles with your shield! This simple yet challenging puzzle game tests your reflexes and precision.',
                features: {
                    title: 'Game Features:',
                    simple: 'Simple control mechanism',
                    challenge: 'Progressively increasing difficulty',
                    obstacles: 'Various types of obstacles',
                    visual: 'Beautiful visual effects'
                },
                controls: {
                    shield: 'Drag: Move the shield to protect your balloon',
                    avoid: 'Avoid: Don\'t let obstacles hit your balloon',
                    careful: 'Careful: Some obstacles move or rotate',
                    speed: 'Speed: The balloon rises faster as you go higher'
                },
                startButton: 'Start Game'
            },
            
            // Giant Rush
            giantRush: {
                title: 'Giant Rush',
                longDescription: 'In this exciting running game, control your character, collect gems, defeat enemies, and grow bigger and stronger as you progress. Challenge different levels, unlock more characters, and become the mightiest giant!',
                description: 'In this exciting running game, control your character, collect gems, defeat enemies, and grow bigger and stronger as you progress.',
                features: {
                    title: 'Game Features:',
                    running: 'Fast-paced runner experience',
                    growing: 'Character grows bigger during gameplay',
                    characters: 'Multiple characters to unlock',
                    bosses: 'Exciting boss battles'
                },
                controls: {
                    swipe: 'Swipe screen to move character left or right',
                    collect: 'Collect gems and food to increase size',
                    avoid: 'Avoid obstacles to prevent size reduction',
                    boss: 'Maintain sufficient size in boss battles to defeat enemies'
                },
                startButton: 'Start Game'
            },
            
            // 8 Ball Billiards Classic
            billiards: {
                title: '8 Ball Billiards Classic',
                longDescription: 'Experience the fun of classic billiards! In this realistic pool simulation game, you can aim, calculate angles, and make the perfect shot. Challenge the AI or play with friends, and show off your billiards skills on various beautifully designed pool tables.',
                description: 'Experience the fun of classic billiards! Aim, calculate angles, and make the perfect shot. Challenge the computer or play with friends to show off your billiards skills.',
                features: {
                    title: 'Game Features:',
                    graphics: 'Beautiful realistic pool tables and balls',
                    physics: 'Realistic physics engine',
                    modes: 'Single player and multiplayer modes',
                    levels: 'Multiple difficulty levels'
                },
                controls: {
                    aim: 'Aim: Drag the cue to adjust direction',
                    power: 'Power: Press and pull the cue',
                    view: 'View: Pinch to zoom and see the table',
                    spin: 'Spin: Tap on the ball position to add spin effect'
                },
                startButton: 'Start Game'
            }
        },
        
        // Site Common
        site: {
            title: 'GoodGame.mom',
            description: 'Best Online Gaming Platform'
        },
        
        // Navigation
        nav: {
            games: 'Game List',
            categories: 'Categories',
            new: 'New Games'
        },
        
        // Page Sections
        sections: {
            popular: 'Popular Games',
            categories: 'Game Categories'
        },
        
        // Categories
        categories: {
            action: 'Action Games',
            adventure: 'Adventure Games',
            puzzle: 'Puzzle Games',
            strategy: 'Strategy Games',
            sports: 'Sports Games',
            racing: 'Racing Games',
            shooter: 'Shooter Games',
            runner: 'Runner Games'
        },
        
        // Footer
        footer: {
            about: 'About Us',
            description: 'GoodGame.mom is a free gaming platform offering various fun online games.',
            links: 'Quick Links',
            contact: 'Contact Us',
            rights: 'All Rights Reserved'
        },
        
        // City Builder
        cityBuilder: {
            title: 'City Builder',
            description: 'Welcome to City Builder! In this creative city planning game, you will play as an urban planner and build your ideal city from scratch.',
            features: {
                title: 'Game Features:',
                planning: 'Free city planning system',
                buildings: 'Rich building types',
                simulation: 'Realistic city development simulation',
                management: 'Economy and population management'
            },
            controls: {
                title: 'Game Controls',
                move: 'Move camera: Arrow keys or WASD',
                select: 'Select building: Left mouse button',
                place: 'Place building: Right mouse button',
                delete: 'Delete building: Delete key'
            },
            game: {
                newCity: 'New City',
                date: 'Date',
                population: 'Population',
                satisfaction: 'Satisfaction',
                resources: 'Resources',
                money: 'Money',
                power: 'Power',
                water: 'Water',
                waste: 'Waste Management',
                tools: {
                    bulldozer: 'Bulldozer',
                    road: 'Road',
                    residential: 'Residential',
                    commercial: 'Commercial',
                    industrial: 'Industrial',
                    park: 'Park',
                    public: 'Public Facility',
                    water: 'Water'
                },
                time: {
                    pause: 'Pause',
                    speed1: '1x',
                    speed2: '2x',
                    speed3: '3x'
                },
                camera: {
                    move: 'Camera Move: WASD',
                    rotate: 'Rotate: Q and E',
                    zoom: 'Zoom: Mouse Wheel',
                    select: 'Select Tool: 1-8'
                },
                start: 'Start Building',
                welcome: 'Welcome to City Builder!'
            }
        }
    }
};

// 语言切换函数
function setLanguage(lang) {
    // 保存语言选择
    localStorage.setItem('language', lang);
    
    // 更新页面内容
    updatePageContent(lang);
    
    // 更新语言选择按钮状态
    updateLanguageButtons(lang);
}

// 获取当前语言
function getCurrentLanguage() {
    // 优先从localStorage获取
    const savedLang = localStorage.getItem('language');
    // 如果没有保存过语言设置，默认使用英文
    return savedLang || 'en';
}

// 更新语言选择按钮状态
function updateLanguageButtons(currentLang) {
    const zhBtn = document.querySelector('.lang-btn[data-lang="zh"]');
    const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    
    if (zhBtn && enBtn) {
        zhBtn.classList.toggle('active', currentLang === 'zh');
        enBtn.classList.toggle('active', currentLang === 'en');
    }
}

// 获取翻译文本
function getText(path, lang = getCurrentLanguage()) {
    const keys = path.split('.');
    let value = languages[lang];
    
    for (const key of keys) {
        value = value[key];
        if (!value) return path;
    }
    
    return value;
} 