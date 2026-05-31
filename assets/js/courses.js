/* 
 * COURSES & CLASSROOM CONTROLLER - PRINCY EDUCATION HUB
 * Course Progress Dashboard, Collapsible playlists, Simulated E-Lecture stream, and Toast triggers
 * Custom interactive offline mock video player replacing external YouTube frames.
 */

const coursesController = {
  activeCourse: null,
  activeLecture: null,
  playInterval: null,
  currentTime: 0,
  isPlaying: false,
  
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
    this.isPlaying = false;
    this.currentTime = 0;
    if (this.playInterval) clearInterval(this.playInterval);
    
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
            <div class="video-container-wrapper" id="custom-video-player-container" style="position: relative;">
              <!-- 100% Custom Mock Interactive Video Player Canvas -->
              <div class="mock-player-canvas" style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); position: relative; cursor: pointer;">
                
                <!-- Center Big Play overlay -->
                <div class="mock-play-overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; gap: 12px; z-index: 10; transition: var(--transition-smooth);" id="player-play-btn">
                  <div style="width: 76px; height: 76px; border-radius: 50%; background: var(--accent); color: white; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; box-shadow: var(--glow-accent);"><i class="fa-solid fa-play" style="margin-left: 6px;" id="play-icon-state"></i></div>
                  <span style="font-size: 0.8rem; font-weight: 700; color: rgba(255,255,255,0.8); letter-spacing: 0.05em; text-transform: uppercase;">शुरू करें / Click to Play</span>
                </div>
                
                <!-- Video Watermark / Logo -->
                <div style="padding: 20px; display: flex; justify-content: space-between; align-items: center; color: rgba(255,255,255,0.4); font-size: 0.85rem; font-weight: 600; z-index: 5; pointer-events: none;">
                  <span><i class="fa-solid fa-graduation-cap"></i> Princy Education Hub</span>
                  <span style="font-size: 0.75rem; letter-spacing: 0.05em; background: rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 20px; color: var(--accent);">Digital Classroom</span>
                </div>
                
                <!-- Center topic details visual -->
                <div style="text-align: center; color: #fff; padding: 0 40px; z-index: 5; pointer-events: none;" id="player-topic-info">
                  <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; color: var(--accent);">${lec.title}</h3>
                  <p style="font-size: 0.95rem; color: rgba(255,255,255,0.5);">${course.instructor}</p>
                </div>
                
                <!-- Custom Control Bar -->
                <div style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%); padding: 20px; z-index: 5;">
                  <!-- Progress Bar timeline -->
                  <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.25); border-radius: 3px; cursor: pointer; margin-bottom: 15px; position: relative;" id="player-timeline-bg">
                    <div style="height: 100%; width: 0%; background: var(--accent); border-radius: 3px; transition: width 0.1s linear;" id="player-timeline-fill"></div>
                  </div>
                  
                  <!-- Controls Row -->
                  <div style="display: flex; justify-content: space-between; align-items: center; color: #fff; font-size: 0.9rem; pointer-events: auto;">
                    <div style="display: flex; align-items: center; gap: 20px;">
                      <i class="fa-solid fa-play" style="cursor: pointer; color: var(--accent); font-size: 1.1rem; width: 15px;" id="player-bottom-play-btn"></i>
                      <span style="font-size: 0.8rem; font-family: monospace; color: rgba(255,255,255,0.7);" id="player-time-display">00:00 / ${lec.duration}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 16px;">
                      <i class="fa-solid fa-volume-high" style="cursor: pointer; transition: var(--transition-smooth);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='#fff'"></i>
                      <i class="fa-solid fa-gear" style="cursor: pointer; transition: var(--transition-smooth);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='#fff'"></i>
                      <i class="fa-solid fa-expand" style="cursor: pointer; transition: var(--transition-smooth);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='#fff'"></i>
                    </div>
                  </div>
                </div>
              </div>
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
    
    // Attach Player Event Handlers
    this.initPlayerEvents();
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
    
    this.isPlaying = false;
    this.currentTime = 0;
    if (this.playInterval) clearInterval(this.playInterval);
    
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
  },
  
  initPlayerEvents() {
    const playBtn = document.getElementById('player-play-btn');
    const bottomPlayBtn = document.getElementById('player-bottom-play-btn');
    const timelineBg = document.getElementById('player-timeline-bg');
    
    if (!playBtn) return;
    
    const togglePlay = () => {
      this.isPlaying = !this.isPlaying;
      this.updatePlayerUI();
      
      if (this.isPlaying) {
        // Parse duration (e.g. "45 mins" -> seconds = 45 * 60)
        const durationStr = this.activeLecture.duration;
        const totalMins = parseInt(durationStr);
        const totalSecs = totalMins * 60;
        
        // Start simulated progression tick
        this.playInterval = setInterval(() => {
          this.currentTime += 1;
          
          if (this.currentTime >= totalSecs) {
            clearInterval(this.playInterval);
            this.isPlaying = false;
            this.updatePlayerUI();
            this.completeActiveLecture();
            return;
          }
          
          this.updatePlayerTimeUI(totalSecs);
        }, 1000);
      } else {
        clearInterval(this.playInterval);
      }
    };
    
    playBtn.addEventListener('click', togglePlay);
    bottomPlayBtn.addEventListener('click', togglePlay);
    
    // Timeline click simulator
    timelineBg.addEventListener('click', (e) => {
      const rect = timelineBg.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const pct = clickX / width;
      
      const durationStr = this.activeLecture.duration;
      const totalMins = parseInt(durationStr);
      const totalSecs = totalMins * 60;
      
      this.currentTime = Math.round(pct * totalSecs);
      
      this.updatePlayerTimeUI(totalSecs);
      if (!this.isPlaying) {
        this.updatePlayerUI();
      }
    });
  },
  
  updatePlayerUI() {
    const playBtn = document.getElementById('player-play-btn');
    const bottomPlayBtn = document.getElementById('player-bottom-play-btn');
    const playIconState = document.getElementById('play-icon-state');
    
    if (this.isPlaying) {
      playBtn.style.opacity = '0';
      playBtn.style.pointerEvents = 'none';
      bottomPlayBtn.className = 'fa-solid fa-pause';
      bottomPlayBtn.style.color = 'var(--accent)';
    } else {
      playBtn.style.opacity = '1';
      playBtn.style.pointerEvents = 'auto';
      playIconState.className = 'fa-solid fa-play';
      bottomPlayBtn.className = 'fa-solid fa-play';
      bottomPlayBtn.style.color = 'var(--accent)';
    }
  },
  
  updatePlayerTimeUI(totalSecs) {
    const fill = document.getElementById('player-timeline-fill');
    const display = document.getElementById('player-time-display');
    
    const pct = (this.currentTime / totalSecs) * 100;
    if (fill) fill.style.width = `${pct}%`;
    
    // Format times MM:SS
    const formatTime = (secs) => {
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };
    
    if (display) {
      display.innerText = `${formatTime(this.currentTime)} / ${this.activeLecture.duration}`;
    }
    
    // Proactively complete lecture after 8 seconds in the demo for student's instant feedback & wow factor!
    if (this.currentTime === 8 && !this.activeLecture.completed) {
      this.completeActiveLecture();
    }
  }
};

// Initialize
coursesController.init();
