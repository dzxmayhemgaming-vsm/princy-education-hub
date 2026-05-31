/* 
 * MAIN STATE & ROUTING CONTROLLER - PRINCY EDUCATION HUB
 * SPA Navigation, Light/Dark Modes, Toast Alerts, and Homepage Dashboard rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core modules
  themeController.init();
  drawerController.init();
  spaRouter.init();
});

/* --- Theme Management --- */
const themeController = {
  init() {
    const switcher = document.getElementById('theme-switcher-btn');
    const icon = document.getElementById('theme-icon');
    
    // Check saved choice or system default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateIcon(savedTheme, icon);
    
    switcher.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      this.updateIcon(nextTheme, icon);
      window.showToastAlert(`Switched to ${nextTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}!`, 'success');
    });
  },
  
  updateIcon(theme, icon) {
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      icon.parentElement.style.background = 'rgba(255, 170, 51, 0.1)';
    } else {
      icon.className = 'fa-solid fa-moon';
      icon.parentElement.style.background = 'rgba(15, 23, 42, 0.08)';
    }
  }
};

/* --- Mobile Drawer Navigation --- */
const drawerController = {
  init() {
    const drawer = document.getElementById('mobile-navigation-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const openBtn = document.getElementById('menu-drawer-toggle');
    const closeBtn = document.getElementById('menu-drawer-close');
    
    const openDrawer = () => {
      drawer.style.left = '0';
      backdrop.style.display = 'block';
    };
    
    const closeDrawer = () => {
      drawer.style.left = '-300px';
      backdrop.style.display = 'none';
    };
    
    openBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);
  }
};

/* --- Global Toast alerts --- */
window.showToastAlert = function(text, type = 'success') {
  const toast = document.getElementById('dynamic-alert-toast');
  const toastText = document.getElementById('dynamic-alert-toast-text');
  
  toastText.innerText = text;
  
  if (type === 'danger') {
    toast.style.background = 'var(--danger)';
    toast.querySelector('i').className = 'fa-solid fa-triangle-exclamation';
  } else if (type === 'warning') {
    toast.style.background = 'var(--warning)';
    toast.querySelector('i').className = 'fa-solid fa-circle-exclamation';
  } else {
    toast.style.background = 'var(--success)';
    toast.querySelector('i').className = 'fa-solid fa-circle-check';
  }
  
  toast.className = 'completion-toast show';
  
  setTimeout(() => {
    toast.className = 'completion-toast';
  }, 3500);
};

/* --- SPA Route controller --- */
const spaRouter = {
  routes: {
    home: 'renderHome',
    tests: 'renderTests',
    courses: 'renderCourses',
    pdfs: 'renderPdfs',
    'ai-builder': 'renderAIBuilder',
    'gk-quiz': 'renderGKQuiz'
  },
  
  init() {
    window.spaRouter = this;
    
    // Set landing route
    this.navigate('home');
  },
  
  navigate(route) {
    const renderMethodName = this.routes[route];
    if (!renderMethodName) return;
    
    // Change active status in desktop navbar
    const navItems = document.querySelectorAll('#desktop-nav-menu .nav-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-view') === route) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Add page transition effects
    const container = document.getElementById('app-viewport-container');
    container.style.opacity = 0;
    container.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
      this[renderMethodName](container);
      container.style.opacity = 1;
      container.style.transform = 'translateY(0)';
      window.scrollTo(0, 0);
    }, 150);
  },
  
  /* --- Rendering Homescreen Views --- */
  renderHome(container) {
    const stats = [
      { num: "32+", label: "CBT Mock Tests", icon: "fa-clipboard-question" },
      { num: "450+", label: "Study Topics", icon: "fa-book" },
      { num: "150+", label: "revision Notes PDFs", icon: "fa-file-pdf" },
      { num: "45k+", label: "active Students", icon: "fa-users-line" }
    ];
    
    let statsHtml = stats.map(s => `
      <div class="glass-card stat-item">
        <div class="stat-icon"><i class="fa-solid ${s.icon}"></i></div>
        <div>
          <div class="stat-number">${s.num}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      </div>
    `).join('');
    
    let examsHtml = window.EXAMS_DATABASE.categories.map(c => `
      <div class="glass-card exam-card" onclick="window.spaRouter.navigate('tests')">
        <div class="exam-icon-circle" style="background: ${c.color}">
          <i class="fa-solid ${c.icon}"></i>
        </div>
        <div class="exam-fullname">${c.fullName}</div>
        <h3>${c.title}</h3>
        <p class="exam-desc">${c.description}</p>
        <div class="exam-meta-tags">
          <span><i class="fa-solid fa-file-pen"></i> ${c.testsCount} Tests</span>
          <span><i class="fa-solid fa-graduation-cap"></i> ${c.coursesCount} Courses</span>
          <span><i class="fa-solid fa-file-arrow-down"></i> ${c.pdfsCount} PDFs</span>
        </div>
      </div>
    `).join('');
    
    container.innerHTML = `
      <!-- Hero banner -->
      <section class="hero-section glass-card" style="border-radius: var(--border-radius-lg); padding: 50px;">
        <div class="hero-grid">
          <div>
            <span class="hero-tagline"><i class="fa-solid fa-star"></i> #1 preparation Platform in Rajasthan</span>
            <h1 class="hero-title">Rajasthan कॉम्पिटिटिव एग्जाम्स की<br>तैयारी अब <span>Princy Hub</span> के साथ!</h1>
            <p class="hero-desc">अग्रणी शिक्षकों द्वारा तैयार किए गए उत्कृष्ट मॉक टेस्ट सीरीज़, संपूर्ण विस्तृत कोर्स स्टडी गाइड्स, हस्तलिखित शार्ट रिवीज़न नोट्स, और दैनिक सामान्य ज्ञान चैलेंज। सभी लिखित अध्ययन सामग्री एक स्थान पर उपलब्ध।</p>
            
            <div class="search-box-wrapper">
              <input type="text" placeholder="अपने परीक्षा की खोज करें (जैसे RAS, REET, Police SI...)" class="search-input" id="global-exam-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <button class="btn btn-primary" onclick="window.spaRouter.navigate('tests')"><i class="fa-solid fa-play"></i> mock Tests शुरू करें</button>
              <button class="btn btn-secondary" onclick="window.spaRouter.navigate('pdfs')"><i class="fa-solid fa-file-pdf"></i> फ्री नोट्स डाउनलोड करें</button>
            </div>
          </div>
          
          <div class="hero-graphic">
            <div class="decorative-ring"></div>
            <div class="glass-card hero-avatar-card" style="width: 250px; background: rgba(26, 36, 57, 0.65);">
              <div class="avatar-badge"><i class="fa-solid fa-graduation-cap"></i></div>
              <h3>RPSC Advisory Panel</h3>
              <p>State Toppers & Mentors</p>
              <div style="margin-top: 15px; font-size: 0.8rem; color: var(--accent); font-weight: 700; background: var(--accent-bg); padding: 4px 10px; border-radius: 20px; display: inline-block;">Expert Board</div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Stats display -->
      <div class="stats-row">
        ${statsHtml}
      </div>
      
      <!-- Exam Grid section -->
      <section class="fade-in-section">
        <div class="section-header">
          <div>
            <span class="section-subtitle">Exams Categories</span>
            <h2 class="section-title">सभी भर्ती परीक्षाओं के लिए <span>संसाधन</span></h2>
          </div>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('tests')">View All Tests <i class="fa-solid fa-chevron-right" style="font-size: 0.8rem;"></i></button>
        </div>
        <div class="exams-grid" id="homepage-exams-grid-view">
          ${examsHtml}
        </div>
      </section>
      
      <!-- Split section: GK + featured notes -->
      <div class="features-split-grid">
        <div class="glass-card gk-promo-card" style="border-radius: var(--border-radius-md);">
          <div>
            <span class="tag-badge tag-accent gk-badge-flash"><i class="fa-solid fa-bolt"></i> Daily GK Booster</span>
            <h2>क्या आप आज के लिए राजस्थान GK टेस्ट के लिए तैयार हैं?</h2>
            <p>राजस्थान का इतिहास, कला, संस्कृति, भूगोल और अर्थव्यवस्था से जुड़े चुनिंदा महत्वपूर्ण प्रश्नों का संकलन। सिर्फ 3 मिनट में अपना स्कोर जांचें और तैयारी मजबूत करें।</p>
          </div>
          <button class="btn btn-primary" style="align-self: flex-start;" onclick="window.spaRouter.navigate('gk-quiz')">GK चैलेंज खेलें <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
        
        <div class="glass-card" style="padding: 30px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2 style="font-size: 1.6rem; margin-bottom: 12px;"><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 8px;"></i> नवीनतम हस्तलिखित नोट्स</h2>
            <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 20px;">कक्षा टॉपर्स और विशेषज्ञ व्याख्याताओं द्वारा विशेष रूप से तैयार किए गए हस्तलिखित पीडीएफ नोट्स डाउनलोड करें।</p>
            
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
              <li style="display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; border-bottom: 1px dashed var(--card-border); padding-bottom: 8px;">
                <span><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 8px;"></i> राजस्थान का भूगोल हस्तलिखित नोट्स</span>
                <span class="tag-badge tag-accent" style="font-size: 0.7rem; padding: 2px 6px;">New</span>
              </li>
              <li style="display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; border-bottom: 1px dashed var(--card-border); padding-bottom: 8px;">
                <span><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 8px;"></i> REET बाल मनोविज्ञान फ़ॉर्मूला बुक</span>
                <span style="color: var(--text-sub); font-size: 0.8rem;">3.8 MB</span>
              </li>
              <li style="display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; padding-bottom: 8px;">
                <span><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 8px;"></i> आर्थिक समीक्षा 2025-26 महत्वपूर्ण तथ्य</span>
                <span class="tag-badge tag-accent" style="font-size: 0.7rem; padding: 2px 6px;">Hot</span>
              </li>
            </ul>
          </div>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('pdfs')">पीडीएफ रिपोजिटरी में जाएं <i class="fa-solid fa-folder-open"></i></button>
        </div>
      </div>
    `;
    
    // Bind search functionality
    const searchInput = document.getElementById('global-exam-search');
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('#homepage-exams-grid-view .exam-card');
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  },
  
  renderTests(container) {
    if (window.testPortalController) {
      window.testPortalController.renderIndex(container);
    }
  },
  
  renderCourses(container) {
    if (window.coursesController) {
      window.coursesController.renderIndex(container);
    }
  },
  
  renderPdfs(container) {
    if (window.pdfVaultController) {
      window.pdfVaultController.renderIndex(container);
    }
  },
  
  renderAIBuilder(container) {
    if (window.aiBuilderController) {
      window.aiBuilderController.renderIndex(container);
    }
  },
  
  renderGKQuiz(container) {
    if (window.gkQuizController) {
      window.gkQuizController.renderIndex(container);
    }
  }
};
