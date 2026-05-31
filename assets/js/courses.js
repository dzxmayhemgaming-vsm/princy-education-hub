/* 
 * COURSES & CLASSROOM CONTROLLER - PRINCY EDUCATION HUB
 * Course Progress Dashboard, Collapsible playlists, Simulated E-Lecture stream, and Toast triggers
 */

const coursesController = {
  activeCourse: null,
  activeLecture: null,
  
  init() {
    window.coursesController = this;
  },
  
  renderIndex(container) {
    let cardsHtml = '';
    
    window.EXAMS_DATABASE.courses.forEach(course => {
      const category = window.EXAMS_DATABASE.categories.find(c => c.id === course.categoryId);
      
      cardsHtml += `
        <div class="glass-card course-card">
          <div class="course-thumbnail-area">
            <span class="tag-badge tag-accent course-category-badge" style="background: ${category.color} !important; color: white;">
              ${category.title}
            </span>
            <i class="fa-solid fa-clapperboard"></i>
          </div>
          
          <div class="course-body">
            <div>
              <h3 class="course-title">${course.title}</h3>
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div class="course-instructor">
                  <i class="fa-solid fa-chalkboard-user" style="color: var(--accent);"></i> ${course.instructor}
                </div>
                <div class="rating-badge">
                  <i class="fa-solid fa-star"></i> ${course.rating}
                </div>
              </div>
              
              <p class="course-desc">${course.description}</p>
              
              <!-- Progress Tracker Bar -->
              <div class="course-progress-container">
                <div class="progress-header">
                  <span>कोर्स प्रोग्रेस / Progress</span>
                  <span id="course-pct-${course.id}">${course.progress}%</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" id="course-fill-${course.id}" style="width: ${course.progress}%;"></div>
                </div>
              </div>
            </div>
            
            <div class="course-footer-row">
              <span class="course-meta-detail">
                <i class="fa-solid fa-list-check"></i> ${course.totalLectures} Lectures
              </span>
              <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;" onclick="window.coursesController.enterClassroom('${course.id}')">
                <i class="fa-solid fa-graduation-cap"></i> क्लासरूम में जाएं
              </button>
            </div>
          </div>
        </div>
      `;
    });
    
    container.innerHTML = `
      <div class="fade-in-section">
        <div class="section-header">
          <div>
            <span class="section-subtitle">Active Classrooms</span>
            <h2 class="section-title">तैयार कोर्सेज एवं <span>वीडियो लेक्चर्स</span></h2>
          </div>
        </div>
        
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 30px; max-width: 800px;">
          राजस्थान के बेहतरीन शिक्षकों द्वारा तैयार किए गए पूर्ण विस्तृत कोर्सेज। अपनी प्रगति ट्रैक करें और कहीं भी, कभी भी सीखें।
        </p>
        
        <div class="courses-hub-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  },
  
  enterClassroom(courseId) {
    const course = window.EXAMS_DATABASE.courses.find(c => c.id === courseId);
    if (!course) return;
    
    this.activeCourse = course;
    
    // Auto-select first uncompleted lecture or first lecture
    let firstLec = null;
    for(let ch of course.chapters) {
      firstLec = ch.lectures.find(l => !l.completed);
      if (firstLec) break;
    }
    if (!firstLec) {
      firstLec = course.chapters[0].lectures[0];
    }
    
    this.activeLecture = firstLec;
    
    const container = document.getElementById('app-viewport-container');
    container.style.opacity = 0;
    
    setTimeout(() => {
      this.renderClassroomWorkspace(container);
      container.style.opacity = 1;
      window.showToastAlert(`Classroom Opened: ${course.title}`, 'success');
    }, 150);
  },
  
  renderClassroomWorkspace(container) {
    const course = this.activeCourse;
    const lec = this.activeLecture;
    
    // Compile Playlist Accordion Sidebar
    let playlistHtml = '';
    course.chapters.forEach((ch, chIdx) => {
      let lecturesListHtml = '';
      
      ch.lectures.forEach(l => {
        const isActive = l.id === lec.id ? 'active' : '';
        const iconClass = l.completed 
          ? 'fa-solid fa-circle-check completed' 
          : 'fa-regular fa-circle-play';
          
        lecturesListHtml += `
          <li class="lecture-playlist-item ${isActive}" onclick="window.coursesController.playLecture('${l.id}')">
            <span class="playlist-icon"><i class="${iconClass}"></i></span>
            <span style="max-width: 70%; line-height: 1.25;">${l.title}</span>
            <span class="playlist-info-meta"><i class="fa-regular fa-clock"></i> ${l.duration}</span>
          </li>
        `;
      });
      
      // Keep expanded if active lecture is inside this chapter
      const isExpanded = ch.lectures.some(l => l.id === lec.id) ? 'expanded' : '';
      const showListClass = ch.lectures.some(l => l.id === lec.id) ? 'show' : '';
      
      playlistHtml += `
        <div class="glass-card chapter-accordion-card">
          <div class="chapter-header ${isExpanded}" onclick="window.coursesController.toggleChapter(this)">
            <h4>Chapter ${chIdx + 1}: ${ch.title}</h4>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <ul class="chapter-lectures-list ${showListClass}">
            ${lecturesListHtml}
          </ul>
        </div>
      `;
    });
    
    container.innerHTML = `
      <div class="fade-in-section">
        <!-- Header -->
        <div class="glass-card" style="padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; border-radius: var(--border-radius-sm); margin-bottom: 20px;">
          <div>
            <span style="font-size: 0.75rem; color: var(--accent); text-transform: uppercase; font-weight: 700;">
              ${course.title} Classroom
            </span>
            <h2 style="font-size: 1.25rem; font-weight: 700;">${lec.title}</h2>
          </div>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('courses')">
            <i class="fa-solid fa-chevron-left"></i> Back to Courses
          </button>
        </div>
        
        <div class="classroom-layout">
          <!-- Left side: Player -->
          <div class="classroom-player-section">
            <div class="video-container-wrapper">
              <iframe class="classroom-video-player" src="${lec.videoUrl}?autoplay=0&enablejsapi=1" title="YouTube video player" allowfullscreen></iframe>
            </div>
            
            <div class="glass-card classroom-details" style="border-radius: var(--border-radius-md);">
              <h3 class="lecture-nav-title">${lec.title}</h3>
              <div class="lecture-nav-meta">
                <span><i class="fa-solid fa-user-tie"></i> ${course.instructor}</span>
                <span><i class="fa-regular fa-clock"></i> Duration: ${lec.duration}</span>
                <span style="color: var(--success); cursor: pointer;" onclick="window.coursesController.completeActiveLecture()">
                  <i class="fa-solid fa-circle-check"></i> Mark as Completed
                </span>
              </div>
              
              <div class="lecture-notes-promo">
                <span style="font-size: 0.9rem; font-weight: 600;">
                  <i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 6px;"></i> इस लेक्चर का क्लास शार्ट पीडीएफ नोट्स डाउनलोड करें
                </span>
                <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.75rem; background: var(--card-bg);" onclick="window.spaRouter.navigate('pdfs')">
                  Go to Notes <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Right side: Playlist -->
          <div class="classroom-playlist-sidebar">
            <div class="glass-card" style="padding: 20px;">
              <h3 style="font-size: 1.1rem; margin-bottom: 12px; font-weight: 700;"><i class="fa-solid fa-list-ol"></i> Course Playlist</h3>
              <div class="progress-bar-bg" style="height: 4px; margin-bottom: 10px;">
                <div class="progress-bar-fill" id="classroom-progress-bar-fill" style="width: ${course.progress}%;"></div>
              </div>
              <span style="font-size: 0.8rem; color: var(--text-sub); font-weight: 500;" id="classroom-progress-text">
                ${course.progress}% Completed (Progress saves in browser)
              </span>
            </div>
            
            ${playlistHtml}
          </div>
        </div>
      </div>
    `;
  },
  
  toggleChapter(headerEl) {
    const list = headerEl.nextElementSibling;
    headerEl.classList.toggle('expanded');
    list.classList.toggle('show');
  },
  
  playLecture(lectureId) {
    let foundLec = null;
    for(let ch of this.activeCourse.chapters) {
      foundLec = ch.lectures.find(l => l.id === lectureId);
      if (foundLec) break;
    }
    if (!foundLec) return;
    
    this.activeLecture = foundLec;
    this.renderClassroomWorkspace(document.getElementById('app-viewport-container'));
  },
  
  completeActiveLecture() {
    if (this.activeLecture.completed) {
      window.showToastAlert("यह व्याख्यान पहले ही पूर्ण हो चुका है!", "warning");
      return;
    }
    
    this.activeLecture.completed = true;
    
    // Re-calculate course progress
    let totalLecs = 0;
    let completedLecs = 0;
    
    this.activeCourse.chapters.forEach(ch => {
      ch.lectures.forEach(l => {
        totalLecs++;
        if (l.completed) completedLecs++;
      });
    });
    
    const nextProgress = Math.round((completedLecs / totalLecs) * 100);
    this.activeCourse.progress = nextProgress;
    
    // Update progress elements on active classroom view
    const fill = document.getElementById('classroom-progress-bar-fill');
    const txt = document.getElementById('classroom-progress-text');
    if (fill) fill.style.width = `${nextProgress}%`;
    if (txt) txt.innerText = `${nextProgress}% Completed (Progress saves in browser)`;
    
    // Celebrate with animations
    window.showToastAlert("बधाई हो! लेक्चर पूरा हुआ। आपकी प्रगति दर्ज कर ली गई है।", "success");
    
    // Rerender layout to show completed tick on playlist sidebar
    this.renderClassroomWorkspace(document.getElementById('app-viewport-container'));
  }
};

// Initialize
coursesController.init();
