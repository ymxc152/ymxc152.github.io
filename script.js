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
    
    // 添加名称动画效果
    addNameAnimation();
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

// 添加名称动画效果
function addNameAnimation() {
    const nameElement = document.querySelector('.name');
    if (!nameElement) return;
    
    let isAnimating = false;
    
    // 设置完成状态的通用函数
    const setCompleteState = () => {
        nameElement.style.width = '100%';
        nameElement.classList.add('typing-complete');
    };
    
    // 监听打字机动画完成
    nameElement.addEventListener('animationend', function(e) {
        if (e.animationName === 'typing') {
            setCompleteState();
        }
    });
    
    // 点击效果
    nameElement.addEventListener('click', function() {
        if (isAnimating) return;
        
        isAnimating = true;
        this.classList.remove('typing-complete');
        
        // 粒子爆炸效果
        createParticleExplosion(this);
        
        // 消失动画
        this.style.transition = 'all 0.3s ease';
        this.style.opacity = '0';
        this.style.transform = 'scale(0.8)';
        this.style.animation = 'none';
        
        // 重新显示并打字机效果
        setTimeout(() => {
            this.style.width = '0';
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
            this.style.transition = 'none';
            this.style.animation = 'typing 1.5s steps(20, end) forwards, gradient-shift 3s ease-in-out infinite 1.5s';
        }, 300);
        
        // 完成后恢复
        setTimeout(() => {
            setCompleteState();
            this.style.animation = 'gradient-shift 3s ease-in-out infinite';
            isAnimating = false;
        }, 1800);
    });
    
    // 悬停效果
    nameElement.addEventListener('mouseenter', function() {
        if (this.classList.contains('typing-complete') && !isAnimating) {
            this.style.filter = 'drop-shadow(0 0 20px rgba(120, 219, 255, 0.8)) brightness(1.2)';
        }
    });
    
    nameElement.addEventListener('mouseleave', function() {
        this.style.filter = 'drop-shadow(0 0 10px rgba(120, 219, 255, 0.3)) brightness(1)';
    });
}

// 创建粒子爆炸效果
function createParticleExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 创建8个粒子
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        Object.assign(particle.style, {
            position: 'fixed',
            left: centerX + 'px',
            top: centerY + 'px',
            width: '4px',
            height: '4px',
            background: `hsl(${180 + i * 45}, 70%, 60%)`,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: '1000',
            boxShadow: '0 0 10px currentColor'
        });
        
        document.body.appendChild(particle);
        
        // 粒子动画
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

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
    
    // 为名称添加触摸效果
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.addEventListener('touchstart', function() {
            createParticleExplosion(this);
        });
    }
}
