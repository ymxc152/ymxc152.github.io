// 个人介绍页配置文件
const CONFIG = {
    // 个人信息
    profile: {
        name: "雨墨星辰",
        bio: "一个不喜欢编程的二次元宅男",
        avatar: "/src/头像.jpg",
        contact: {
            email: "ymxc152@qq.com",
            location: "中国，广东"
        }
    },

    // 个人设备库
    devices: [
        {
            name: "七彩虹 RTX 4070Ti Ultra ",
            description: "2310-2745MHz 12G显存 OC超频",
            purchaseDate: "2023年10月",
            image: "src/4070ti.jpg"
        },
        {
            name: "Intel i5 13600KF",
            description: "6大核8小核 20线程 最大睿频5.1Ghz",
            purchaseDate: "2023年10月",
            image: "src/13600kf.png"
        },
        {
            name: "宏碁掠夺者GM7000",
            description: "2T PCle4.0 2G独缓",
            purchaseDate: "2023年10月",
            image: "src/GM7000.jpg"
        },
        {
            name: "金百达刃DDR5",
            description: "16G*2 6000MHz RGB ",
            purchaseDate: "2023年10月",
            image: "src/ren.jpg"
        },
        {
            name: "技嘉B760M AORUS ELITE AX",
            description: "Micro ATX板型 12+1+1相供电",
            purchaseDate: "2023年10月",
            image: "src/b760.jpg"
        },
        {
            name: "Redmi G27Q",
            description: "2K 27英寸 165Hz HDR400",
            purchaseDate: "2023年10月",
            image: "src/g27.jpg"
        },
        {
            name: "HONOR MagicBook Pro",
            description: "AMD R5 3500U 16+512G <br>当NAS、服务器用",
            purchaseDate: "2020年3月",
            image: "src/HONOR-MagicBook-Pro-2019-Ryzen.jpg"
        },
        {
            name: "东芝MG07氦气机械盘",
            description: "14T 7200转 256M缓存<br>二手货当NAS盘",
            purchaseDate: "2025年3月",
            image: "src/MG07.jpg"
        },
        {
            name: "Redmi K70 至尊版",
            description: "天玑9300+芯片 12+256GB",
            purchaseDate: "2024年8月",
            image: "src/K70至尊版.jpg"
        },
        {
            name: "Xiaomi pad 7",
            description: "第三代骁龙7+ 8+128GB",
            purchaseDate: "2024年11月",
            image: "src/pad7.jpg"
        },
        {
            name: "Xiaomi Be6500 Pro",
            description: "WiFi 7 中枢网关 NFC碰碰连 主路由",
            purchaseDate: "2025年5月",
            image: "src/be6500pro.jpg"
        },
        {
            name: "中国移动RAX3000-QY",
            description: "WiFi 6 已刷OpenWRT 旁路由",
            purchaseDate: "2024年4月",
            image: "src/ax3000.jpg"
        }
    ],

    // 友链网站
    links: [
        {
            name: "我的博客",
            description: "个人技术博客，分享编程心得、技术文章和生活感悟",
            url: "https://blog.ymxc152.top",
            icon: "https://file.ymxc152.top/横幅.jpg"
        },
        {
            name: "GitHub",
            description: "代码仓库，开源项目，技术贡献记录",
            url: "https://github.com/ymxc152",
            icon: "src/github.svg"
        },
        {
            name: "文件分享",
            description: "个人文件存储和分享平台",
            url: "https://file.ymxc152.top",
            icon: "src/folder.svg"
        },
        {
            name: "个人云盘",
            description: "微软服务器SG区可道云",
            url: "https://netdisk.ymxc152.top",
            icon: "src/KDY.png"
        },
        {
            name: "NAS云盘",
            description: "NAS可道云网盘，外网可访问",
            url: "http://8.138.215.60:8080",
            icon: "src/KDY.png"
        },
        {
            name: "雨墨星辰Fun",
            description: "最新季度番剧更新表，免登录，但不建议使用观看",
            url: "http://8.138.158.5:8090/web1/bangumi.html?nav=season",
            icon: "src/play.jpg"
        },
        {
            name: "Emby媒体库",
            description: "自用高清看番，外网可访问",
            url: "http://8.138.215.60:8096",
            icon: "src/emby.png"
        },
        {
            name: "校园网Emby媒体库",
            description: "自用高清看番，内网可访问",
            url: "https:/embygdut.ymxc.codes",
            icon: "src/emby.png"
        },
        {
            name: "校园网测速站",
            description: "校园网测速，内网可访问",
            url: "https:/speedtest.ymxc.codes",
            icon: "src/speedtest.png"
        }
    ],

    // 网站设置
    settings: {
        title: "个人介绍页",
        theme: {
            primaryColor: "#4ECDC4",
            secondaryColor: "#78CDD6",
            profileBgColor: "#2c3e50",
            profileBgColor2: "#34495e"
        },
        background: {
            stripesPattern: "", // 自定义条状背景图片URL，留空使用默认SVG图案
            stripesOpacity: 0.3, // 条状背景透明度
            particlesColor: "#4ECDC4" // 浮动粒子颜色
        },
        animations: {
            enabled: true,
            duration: 800
        }
    }
};

// 页面加载完成后自动更新
document.addEventListener('DOMContentLoaded', function() {
    updatePageFromConfig();
    updateBackgroundFromConfig();
});

// 动态更新页面内容的函数
function updatePageFromConfig() {
    // 更新页面标题
    document.title = CONFIG.settings.title;
    
    // 更新个人信息
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.textContent = CONFIG.profile.name;
    }
    
    const bioElement = document.querySelector('.bio p');
    if (bioElement) {
        bioElement.textContent = CONFIG.profile.bio;
    }
    
    // 更新头像
    const avatarElement = document.querySelector('.avatar');
    if (avatarElement) {
        avatarElement.src = CONFIG.profile.avatar;
        avatarElement.alt = CONFIG.profile.name + '的头像';
    }
    
    // 更新联系方式
    const emailElement = document.querySelector('.contact-item:first-child .contact-text');
    if (emailElement) {
        emailElement.textContent = 'Email：' + CONFIG.profile.contact.email;
    }
    
    const locationElement = document.querySelector('.contact-item:last-child .contact-text');
    if (locationElement) {
        locationElement.textContent = 'Location：' + CONFIG.profile.contact.location;
    }
    
    // 更新设备库
    updateDevicesFromConfig();
    
    // 更新友链网站
    updateLinksFromConfig();
    
    // 更新主题颜色
    updateThemeFromConfig();
}

// 更新设备库内容
function updateDevicesFromConfig() {
    const devicesGrid = document.querySelector('.devices-grid');
    if (!devicesGrid) return;
    
    devicesGrid.innerHTML = '';
    
    CONFIG.devices.forEach(device => {
        const deviceCard = document.createElement('div');
        deviceCard.className = 'device-card';
        deviceCard.innerHTML = `
            <div class="device-image">
                <img src="${device.image}" alt="${device.name}">
            </div>
            <div class="device-info">
                <h3>${device.name}</h3>
                <p class="device-desc">${device.description.replace(/\\n/g, '<br>')}</p>
                <p class="purchase-date">购入时间：${device.purchaseDate}</p>
            </div>
        `;
        devicesGrid.appendChild(deviceCard);
    });
}

// 更新友链网站内容
function updateLinksFromConfig() {
    const linksGrid = document.querySelector('.links-grid');
    if (!linksGrid) return;
    
    linksGrid.innerHTML = '';
    
    CONFIG.links.forEach(link => {
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        linkCard.onclick = () => window.open(link.url, '_blank');
        
        let iconHTML = '';
        if (link.icon && (link.icon.includes('.jpg') || link.icon.includes('.png') || link.icon.includes('.jpeg') || link.icon.includes('.webp') || link.icon.includes('.gif') || link.icon.includes('.svg'))) {
            iconHTML = `<img src="${link.icon}" alt="${link.name}图标" class="link-icon-img">`;
        } else if (link.icon) {
            iconHTML = `<div class="link-icon">${link.icon}</div>`;
        } else {
            iconHTML = `<div class="link-icon"></div>`;
        }
        
        linkCard.innerHTML = `
            ${iconHTML}
            <div class="link-info">
                <h3>${link.name}</h3>
                <p>${link.description}</p>
                <span class="link-url">${link.url.replace(/^https?:\/\//, '')}</span>
            </div>
        `;
        linksGrid.appendChild(linkCard);
    });
}

// 更新主题颜色
function updateThemeFromConfig() {
    const root = document.documentElement;
    const theme = CONFIG.settings.theme;
    
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--profile-bg-color', theme.profileBgColor);
    root.style.setProperty('--profile-bg-color2', theme.profileBgColor2);
}

// 更新背景配置
function updateBackgroundFromConfig() {
    const root = document.documentElement;
    const background = CONFIG.settings.background;
    
    // 更新条状背景图案
    if (background.stripesPattern) {
        root.style.setProperty('--stripes-pattern', `url('${background.stripesPattern}')`);
    }
    
    // 更新条状背景透明度
    root.style.setProperty('--stripes-opacity', background.stripesOpacity);
    
    // 更新浮动粒子颜色
    root.style.setProperty('--particles-color', background.particlesColor);
}
