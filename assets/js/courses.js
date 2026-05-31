/* 
 * COURSES & STUDY DESK CONTROLLER - PRINCY EDUCATION HUB
 * Interactive Reading Desk, Chapter-wise Study Materials, Progress Trackers, and Toast Alerts
 * Integrated dynamic Topic MCQ self-assessments and multi-chapter PDF compilation exports.
 */

const coursesController = {
  activeCourse: null,
  activeTopic: null,
  
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
            <i class="fa-solid fa-book-open-reader"></i>
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
                <i class="fa-solid fa-layer-group"></i> Structured Chapters
              </span>
              <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;" onclick="window.coursesController.enterClassroom('${course.id}')">
                <i class="fa-solid fa-book-open"></i> पढ़ाई शुरू करें / Open Course
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
            <span class="section-subtitle">Active Study Rooms</span>
            <h2 class="section-title">अध्याय-वार <span>संपूर्ण विस्तृत कोर्सेज</span></h2>
          </div>
        </div>
        
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 30px; max-width: 800px;">
          राजस्थान के विख्यात विशेषज्ञों द्वारा तैयार किए गए पूर्ण लिखित स्टडी गाइड्स। प्रत्येक अध्याय का गहराई से अध्ययन करें, नोट्स पढ़ें और प्रगति ट्रैक करें।
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
    
    // Auto-select first uncompleted topic or first topic
    let firstTopic = null;
    for(let ch of course.chapters) {
      firstTopic = ch.topics.find(t => !t.completed);
      if (firstTopic) break;
    }
    if (!firstTopic) {
      firstTopic = course.chapters[0].topics[0];
    }
    
    this.activeTopic = firstTopic;
    
    const container = document.getElementById('app-viewport-container');
    container.style.opacity = 0;
    
    setTimeout(() => {
      this.renderClassroomWorkspace(container);
      container.style.opacity = 1;
      window.showToastAlert(`Study Desk Opened: ${course.title}`, 'success');
    }, 150);
  },
  
  renderClassroomWorkspace(container) {
    const course = this.activeCourse;
    const topic = this.activeTopic;
    
    // Compile Playlist Accordion Sidebar
    let playlistHtml = '';
    course.chapters.forEach((ch, chIdx) => {
      let topicsListHtml = '';
      
      ch.topics.forEach(t => {
        const isActive = t.id === topic.id ? 'active' : '';
        const iconClass = t.completed 
          ? 'fa-solid fa-circle-check completed' 
          : 'fa-regular fa-file-lines';
          
        topicsListHtml += `
          <li class="lecture-playlist-item ${isActive}" onclick="window.coursesController.playTopic('${t.id}')">
            <span class="playlist-icon"><i class="${iconClass}"></i></span>
            <span style="max-width: 70%; line-height: 1.25;">${t.title}</span>
            <span class="playlist-info-meta"><i class="fa-regular fa-clock"></i> ${t.duration}</span>
          </li>
        `;
      });
      
      // Keep expanded if active topic is inside this chapter
      const isExpanded = ch.topics.some(t => t.id === topic.id) ? 'expanded' : '';
      const showListClass = ch.topics.some(t => t.id === topic.id) ? 'show' : '';
      
      playlistHtml += `
        <div class="glass-card chapter-accordion-card">
          <div class="chapter-header ${isExpanded}" onclick="window.coursesController.toggleChapter(this)">
            <h4>Chapter ${chIdx + 1}: ${ch.title}</h4>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <ul class="chapter-lectures-list ${showListClass}">
            ${topicsListHtml}
          </ul>
        </div>
      `;
    });
    
    // Compile integrated Topic Quiz HTML
    let quizHtml = '';
    if (topic.quiz && topic.quiz.length > 0) {
      let questionsHtml = '';
      topic.quiz.forEach((q, qIdx) => {
        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
          optionsHtml += `
            <div class="option-item" style="padding: 12px 16px; font-size: 0.92rem; margin-bottom: 8px;" onclick="window.coursesController.checkTopicQuiz(${qIdx}, ${optIdx}, ${q.correct}, this)">
              <div class="option-index" style="width: 24px; height: 24px; font-size: 0.8rem; font-weight:700;">${String.fromCharCode(65 + optIdx)}</div>
              <div class="option-text">${opt}</div>
            </div>
          `;
        });
        
        questionsHtml += `
          <div class="glass-card" style="padding: 24px; border-radius: 8px; margin-bottom: 20px; background: rgba(255,255,255,0.015);">
            <h4 style="font-size: 1rem; margin-bottom: 14px; color: var(--accent); font-weight: 700;"><i class="fa-regular fa-circle-question" style="margin-right: 6px;"></i> अभ्यास प्रश्न ${qIdx + 1}: ${q.question}</h4>
            <div class="options-list" style="gap: 8px; margin-bottom: 0;">
              ${optionsHtml}
            </div>
            <div class="review-explanation" id="quiz-exp-${qIdx}" style="display: none; margin-top: 15px; font-size: 0.88rem; padding: 14px; border-left: 4px solid var(--accent); border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0; background: var(--accent-bg);">
              <b>व्याख्या / Explanation:</b> ${q.explanation}
            </div>
          </div>
        `;
      });
      
      quizHtml = `
        <div style="margin-top: 50px; border-top: 2px solid var(--card-border); padding-top: 30px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-main); font-weight: 800;">
            <i class="fa-solid fa-square-poll-vertical" style="color: var(--accent); margin-right: 8px;"></i> टॉपिक टेस्ट / Practice Questions
          </h3>
          ${questionsHtml}
        </div>
      `;
    }
    
    container.innerHTML = `
      <div class="fade-in-section">
        <!-- Header -->
        <div class="glass-card" style="padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; border-radius: var(--border-radius-sm); margin-bottom: 20px;">
          <div>
            <span style="font-size: 0.75rem; color: var(--accent); text-transform: uppercase; font-weight: 700;">
              ${course.title} Desk
            </span>
            <h2 style="font-size: 1.25rem; font-weight: 700;">${topic.title}</h2>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-secondary" style="background: var(--success); color: white; border: none; font-size: 0.85rem;" onclick="window.coursesController.exportCoursePDF()">
              <i class="fa-solid fa-file-pdf"></i> पूरा कोर्स PDF डाउनलोड करें
            </button>
            <button class="btn btn-secondary" onclick="window.spaRouter.navigate('courses')">
              <i class="fa-solid fa-chevron-left"></i> Back to Courses
            </button>
          </div>
        </div>
        
        <div class="classroom-layout">
          <!-- Left side: Study Reading Desk -->
          <div class="classroom-player-section">
            <div class="glass-card classroom-details" style="border-radius: var(--border-radius-md); padding: 40px; min-height: 400px; display: flex; flex-direction: column; justify-content: space-between; border-left: 5px solid var(--accent);">
              
              <!-- Content Body -->
              <div class="study-notes-content-viewport" style="line-height: 1.8; font-size: 1.05rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--card-border); padding-bottom: 12px; margin-bottom: 20px;">
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent); text-transform: uppercase;"><i class="fa-solid fa-book-open"></i> E-Study Notes / ई-अध्ययन सामग्री</span>
                  <span style="font-size: 0.8rem; color: var(--text-sub);"><i class="fa-regular fa-clock"></i> ${topic.duration}</span>
                </div>
                
                <div style="color: var(--text-main);">
                  ${topic.content}
                </div>
              </div>
              
              <!-- Integrated Practice Quiz renders here -->
              ${quizHtml}
              
              <!-- Action Complete Trigger -->
              <div style="margin-top: 40px; border-top: 1.5px solid var(--card-border); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                <div style="font-size: 0.85rem; color: var(--text-sub); font-weight: 500;">
                  <i class="fa-solid fa-circle-info" style="color: var(--accent);"></i> क्या आपने इस टॉपिक का अध्ययन पूरा कर लिया है?
                </div>
                
                <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.9rem;" onclick="window.coursesController.completeActiveTopic()">
                  <i class="fa-solid fa-circle-check"></i> मैंने पढ़ लिया / Mark as Read
                </button>
              </div>
            </div>
            
            <div class="glass-card classroom-details" style="border-radius: var(--border-radius-md); margin-top: 20px;">
              <div class="lecture-notes-promo">
                <span style="font-size: 0.9rem; font-weight: 600;">
                  <i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 6px;"></i> इस अध्याय का संपूर्ण रिवीजन शार्ट पीडीएफ नोट्स डाउनलोड करें
                </span>
                <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.75rem; background: var(--card-bg);" onclick="window.spaRouter.navigate('pdfs')">
                  Notes Vault <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Right side: Playlist / Chapter list -->
          <div class="classroom-playlist-sidebar">
            <div class="glass-card" style="padding: 20px;">
              <h3 style="font-size: 1.1rem; margin-bottom: 12px; font-weight: 700;"><i class="fa-solid fa-list-check"></i> Syllabus Modules</h3>
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
  
  playTopic(topicId) {
    let foundTopic = null;
    for(let ch of this.activeCourse.chapters) {
      foundTopic = ch.topics.find(t => t.id === topicId);
      if (foundTopic) break;
    }
    if (!foundTopic) return;
    
    this.activeTopic = foundTopic;
    this.renderClassroomWorkspace(document.getElementById('app-viewport-container'));
  },
  
  completeActiveTopic() {
    if (this.activeTopic.completed) {
      window.showToastAlert("यह टॉपिक पहले ही पूर्ण हो चुका है!", "warning");
      return;
    }
    
    this.activeTopic.completed = true;
    
    // Re-calculate course progress
    let totalTopics = 0;
    let completedTopics = 0;
    
    this.activeCourse.chapters.forEach(ch => {
      ch.topics.forEach(t => {
        totalTopics++;
        if (t.completed) completedTopics++;
      });
    });
    
    const nextProgress = Math.round((completedTopics / totalTopics) * 100);
    this.activeCourse.progress = nextProgress;
    
    // Update progress elements on active classroom view
    const fill = document.getElementById('classroom-progress-bar-fill');
    const txt = document.getElementById('classroom-progress-text');
    if (fill) fill.style.width = `${nextProgress}%`;
    if (txt) txt.innerText = `${nextProgress}% Completed (Progress saves in browser)`;
    
    // Celebrate with animations
    window.showToastAlert("बधाई हो! आपने इस टॉपिक का अध्ययन पूरा किया। आपकी प्रगति दर्ज कर ली गई है।", "success");
    
    // Rerender layout to show completed tick on playlist sidebar
    this.renderClassroomWorkspace(document.getElementById('app-viewport-container'));
  },
  
  checkTopicQuiz(qIdx, optIdx, correctIdx, element) {
    const list = element.parentElement;
    if (list.getAttribute('data-checked') === 'true') return;
    list.setAttribute('data-checked', 'true');
    
    const items = list.querySelectorAll('.option-item');
    items.forEach((item, idx) => {
      if (idx === correctIdx) {
        item.classList.add('review-option-correct');
        const badge = item.querySelector('.option-index');
        badge.style.background = 'var(--success)';
        badge.style.borderColor = 'var(--success)';
        badge.style.color = 'white';
        badge.innerHTML = '<i class="fa-solid fa-check"></i>';
      } else if (idx === optIdx && optIdx !== correctIdx) {
        item.classList.add('review-option-incorrect');
        const badge = item.querySelector('.option-index');
        badge.style.background = 'var(--danger)';
        badge.style.borderColor = 'var(--danger)';
        badge.style.color = 'white';
        badge.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        item.style.opacity = '0.5';
        item.style.pointerEvents = 'none';
      }
    });
    
    // Reveal explanation
    const exp = document.getElementById(`quiz-exp-${qIdx}`);
    if (exp) {
      exp.style.display = 'block';
      exp.style.animation = 'fadeInUp 0.3s ease';
    }
    
    if (optIdx === correctIdx) {
      window.showToastAlert("बिल्कुल सही उत्तर! (+1 Point)", "success");
    } else {
      window.showToastAlert("गलत उत्तर! सही हल नीचे देखें।", "danger");
    }
  },
  
  exportCoursePDF() {
    const course = this.activeCourse;
    if (!course) return;
    
    window.showToastAlert("Generating printable course book PDF...", "warning");
    
    setTimeout(() => {
      let content = '';
      course.chapters.forEach((ch, chIdx) => {
        content += `<h1 style="font-size: 2.2rem; color: #1e3a8a; border-bottom: 3px solid #3b82f6; padding-bottom: 12px; margin-top: 50px; page-break-before: always;">Chapter ${chIdx + 1}: ${ch.title}</h1>`;
        
        ch.topics.forEach((t, tIdx) => {
          content += `
            <div style="margin-top: 30px;">
              <h2 style="font-size: 1.6rem; color: #0f172a; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">Unit ${chIdx + 1}.${tIdx + 1}: ${t.title}</h2>
              <div style="font-size: 0.85rem; color: #64748b; font-style: italic; margin-bottom: 15px;">Estimated reading time: ${t.duration}</div>
              <div style="line-height: 1.8; color: #334155; font-size: 1.05rem;">
                ${t.content}
              </div>
            </div>
          `;
        });
      });
      
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${course.title} - Complete Study Guide</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap">
          <style>
            body {
              font-family: 'Inter', sans-serif;
              padding: 40px;
              color: #1e293b;
              max-width: 800px;
              margin: 0 auto;
              line-height: 1.7;
            }
            h1, h2, h3 {
              font-family: 'Outfit', sans-serif;
            }
            .study-bullets {
              margin: 15px 0 15px 25px;
            }
            .study-bullets li {
              margin-bottom: 8px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #cbd5e1;
              padding: 10px 14px;
              text-align: left;
            }
            th {
              background-color: #f1f5f9;
            }
            @media print {
              body {
                padding: 0;
              }
              .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="no-print" style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
            <h3 style="margin-top:0;">Printable Course Book Preview</h3>
            <p style="font-size:0.9rem; color:#64748b; margin-bottom:15px;">This page compiles all chapters and complete textbook notes in a clean, print-friendly template. Use the button below or press <b>Ctrl + P</b> to save as a high-quality PDF.</p>
            <button onclick="window.print()" style="padding: 10px 24px; background: #3b82f6; color:#fff; border:none; border-radius:6px; font-weight:600; cursor:pointer;">Print / Save as PDF</button>
          </div>
          
          <div style="text-align: center; padding: 80px 0; border-bottom: 4px double #e2e8f0; page-break-after: always;">
            <div style="font-size: 1.2rem; color: #3b82f6; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Princy Education Hub</div>
            <h1 style="font-size: 3rem; margin: 20px 0 10px; color: #0f172a; font-weight: 800;">${course.title}</h1>
            <div style="font-size: 1.1rem; color: #64748b;">Instructor: ${course.instructor}</div>
            <div style="font-size: 0.95rem; color: #94a3b8; margin-top: 150px;">Compiled dynamically by AI Assistant using NCERT/RBSE Reference Material.</div>
          </div>
          
          ${content}
          
          <script>
            window.onload = function() {
              setTimeout(function() { window.print(); }, 800);
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
      
    }, 1500);
  }
};

// Initialize
coursesController.init();
