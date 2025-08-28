// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有切换按钮
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    
    // 获取内容区域
    const devicesContent = document.getElementById('devices-content');
    const linksContent = document.getElementById('links-content');
    
    // 为每个切换按钮添加点击事件
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active类
            toggleBtns.forEach(b => b.classList.remove('active'));
            
            // 为当前点击的按钮添加active类
            this.classList.add('active');
            
            // 获取目标内容
            const target = this.getAttribute('data-target');
            
            // 隐藏所有内容区域
            devicesContent.classList.add('hidden');
            linksContent.classList.add('hidden');
            
            // 显示目标内容区域
            if (target === 'devices') {
                devicesContent.classList.remove('hidden');
            } else if (target === 'links') {
                linksContent.classList.remove('hidden');
            }
        });
    });
    
    // 添加悬停效果
    addHoverEffects();
    
    // 添加页面加载动画
    addPageLoadAnimation();
});

// 添加悬停效果
function addHoverEffects() {
    // 为设备卡片添加悬停效果
    const deviceCards = document.querySelectorAll('.device-card');
    deviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 为友链卡片添加悬停效果
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 添加页面加载动画
function addPageLoadAnimation() {
    // 为左侧个人介绍区域添加淡入动画
    const profileSection = document.querySelector('.profile-section');
    profileSection.style.opacity = '0';
    profileSection.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        profileSection.style.transition = 'all 0.8s ease';
        profileSection.style.opacity = '1';
        profileSection.style.transform = 'translateX(0)';
    }, 200);
    
    // 为右侧内容区域添加淡入动画
    const contentSection = document.querySelector('.content-section');
    contentSection.style.opacity = '0';
    contentSection.style.transform = 'translateX(50px)';
    
    setTimeout(() => {
        contentSection.style.transition = 'all 0.8s ease';
        contentSection.style.opacity = '1';
        contentSection.style.transform = 'translateX(0)';
    }, 400);
    
    // 为设备卡片添加逐个出现的动画
    const deviceCards = document.querySelectorAll('.device-card');
    deviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 600 + (index * 100));
    });
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    if (e.key === '1') {
        document.querySelector('[data-target="devices"]').click();
    } else if (e.key === '2') {
        document.querySelector('[data-target="links"]').click();
    }
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    // 为触摸设备优化悬停效果
    const cards = document.querySelectorAll('.device-card, .link-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}
