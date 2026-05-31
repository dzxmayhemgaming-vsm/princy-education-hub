/* 
 * CBT EXAM ENGINE & TEST PORTAL - PRINCY EDUCATION HUB
 * Interactive Question Slider, Countdown Timer, CBT Navigator, Dynamic Grading, and Explanations
 */

const testPortalController = {
  activeTest: null,
  currentQuestionIndex: 0,
  userAnswers: [], // Array of indices selected
  questionStatus: [], // Array of 'not-visited', 'not-answered', 'answered', 'marked'
  timeLeft: 0,
  timerInterval: null,
  
  init() {
    window.testPortalController = this;
  },
  
  renderIndex(container) {
    // Group tests by exam category name
    let html = `
      <div class="fade-in-section">
        <div class="section-header">
          <div>
            <span class="section-subtitle">Practice Series</span>
            <h2 class="section-title">कंप्यूटर आधारित <span>मॉक टेस्ट (CBT)</span></h2>
          </div>
        </div>
        
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 30px; max-width: 800px;">
          नवीनतम परीक्षा पैटर्न और सिलेबस पर आधारित उच्च गुणवत्ता वाले टेस्ट। वास्तविक परीक्षा कक्ष का अनुभव प्राप्त करने के लिए टेस्ट शुरू करें।
        </p>
        
        <div class="courses-hub-grid">
    `;
    
    window.EXAMS_DATABASE.mockTests.forEach(test => {
      const category = window.EXAMS_DATABASE.categories.find(c => c.id === test.categoryId);
      const isReet = test.categoryId === 'reet';
      const markingRule = isReet 
        ? `No Negative Marking` 
        : `Right: +${test.positiveMark} | Wrong: -${test.negativeMark}`;
        
      html += `
        <div class="glass-card course-card" style="border-radius: var(--border-radius-md);">
          <div class="course-thumbnail-area">
            <span class="tag-badge tag-accent course-category-badge" style="background: ${category.color} !important; color: white;">
              ${category.title}
            </span>
            <i class="fa-solid fa-file-signature"></i>
          </div>
          
          <div class="course-body">
            <div>
              <h3 class="course-title" style="margin-top: 10px;">${test.title}</h3>
              <p class="course-desc" style="font-size: 0.85rem; height: auto; margin-bottom: 12px; font-weight: 500;">
                <i class="fa-regular fa-clock" style="color: var(--accent); margin-right: 6px;"></i> <b>अवधि:</b> ${test.duration} मिनट | <b>कुल प्रश्न:</b> ${test.questions.length}
              </p>
              <p style="font-size: 0.8rem; color: var(--text-sub); margin-bottom: 20px; background: var(--card-border); padding: 6px 12px; border-radius: 6px; font-weight: 600;">
                <i class="fa-solid fa-circle-info" style="color: var(--accent); margin-right: 6px;"></i> ${markingRule}
              </p>
            </div>
            
            <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="window.testPortalController.startTest('${test.id}')">
              <i class="fa-solid fa-circle-play"></i> टेस्ट शुरू करें
            </button>
          </div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  },
  
  startTest(testId) {
    const test = window.EXAMS_DATABASE.mockTests.find(t => t.id === testId);
    if (!test) return;
    
    // Set State
    this.activeTest = test;
    this.currentQuestionIndex = 0;
    this.userAnswers = Array(test.questions.length).fill(null);
    this.questionStatus = Array(test.questions.length).fill('not-visited');
    this.questionStatus[0] = 'not-answered'; // Active first question starts as not-answered if viewed
    this.timeLeft = test.duration * 60; // Convert to seconds
    
    const container = document.getElementById('app-viewport-container');
    container.style.opacity = 0;
    
    setTimeout(() => {
      this.renderCbtWorkspace(container);
      container.style.opacity = 1;
      this.startCountdown();
      window.showToastAlert(`Starting ${test.title}! Good Luck.`, 'warning');
    }, 150);
  },
  
  renderCbtWorkspace(container) {
    const test = this.activeTest;
    
    // Generate Palette buttons
    let paletteButtons = '';
    for(let i = 0; i < test.questions.length; i++) {
      paletteButtons += `
        <button class="palette-btn not-visited" id="palette-btn-${i}" onclick="window.testPortalController.jumpToQuestion(${i})">
          ${i + 1}
        </button>
      `;
    }
    
    container.innerHTML = `
      <div class="fade-in-section">
        <!-- CBT Workspace header info -->
        <div class="glass-card" style="padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; border-radius: var(--border-radius-sm); margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 700;">${test.title}</h2>
            <span style="font-size: 0.8rem; color: var(--text-sub); font-weight: 600;">Princy Education Hub - CBT Portal</span>
          </div>
          <button class="btn btn-secondary" style="background: var(--danger); color: white; border: none; padding: 10px 20px;" onclick="window.testPortalController.confirmSubmit()">
            <i class="fa-solid fa-square-check"></i> Submit Test
          </button>
        </div>
        
        <div class="test-portal-workspace">
          <!-- Left side: Question screen -->
          <div class="glass-card question-panel" id="cbt-question-panel">
            <!-- Dynamic question injection -->
          </div>
          
          <!-- Right side: Timer & status panel -->
          <div class="palette-sidebar">
            <div class="glass-card sidebar-widget timer-widget">
              <div class="timer-label"><i class="fa-regular fa-clock"></i> Time Left</div>
              <div class="timer-countdown" id="cbt-timer-counter">00:00</div>
            </div>
            
            <div class="glass-card sidebar-widget">
              <div class="palette-title">Question Navigator</div>
              <div class="palette-grid">
                ${paletteButtons}
              </div>
              
              <div class="legend-container">
                <div class="legend-item"><div class="legend-box" style="background: var(--card-bg); border: 1px solid var(--card-border);"></div> Visited</div>
                <div class="legend-item"><div class="legend-box" style="background: var(--danger);"></div> Not Answered</div>
                <div class="legend-item"><div class="legend-box" style="background: var(--success);"></div> Answered</div>
                <div class="legend-item"><div class="legend-box" style="background: #a855f7;"></div> Marked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.renderQuestion();
  },
  
  startCountdown() {
    clearInterval(this.timerInterval);
    const counterEl = document.getElementById('cbt-timer-counter');
    
    const tick = () => {
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.submitTest(true); // Forced submit when time runs out
        return;
      }
      
      this.timeLeft--;
      
      const mins = Math.floor(this.timeLeft / 60);
      const secs = this.timeLeft % 60;
      
      counterEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      
      // Timer warnings when time < 2 minutes
      if (this.timeLeft < 120) {
        counterEl.classList.add('timer-warning');
      }
    };
    
    this.timerInterval = setInterval(tick, 1000);
    tick(); // Initial call
  },
  
  renderQuestion() {
    const qIndex = this.currentQuestionIndex;
    const q = this.activeTest.questions[qIndex];
    const userChoice = this.userAnswers[qIndex];
    const panel = document.getElementById('cbt-question-panel');
    
    // Compile Choices
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      const isSelected = userChoice === idx ? 'selected' : '';
      optionsHtml += `
        <div class="option-item ${isSelected}" onclick="window.testPortalController.selectOption(${idx})">
          <div class="option-index">${String.fromCharCode(65 + idx)}</div>
          <div class="option-text">${opt}</div>
        </div>
      `;
    });
    
    panel.innerHTML = `
      <div>
        <div class="panel-header">
          <span class="q-number-badge">Question ${qIndex + 1} of ${this.activeTest.questions.length}</span>
          <span class="q-marks-indicator">Right: +${this.activeTest.positiveMark} | Wrong: -${this.activeTest.negativeMark}</span>
        </div>
        
        <div class="question-text-area">
          <div class="q-text-hindi">${q.question}</div>
          <div class="q-text-english">${q.englishQuestion}</div>
        </div>
        
        <div class="options-list">
          ${optionsHtml}
        </div>
      </div>
      
      <div class="action-bar">
        <div class="action-bar-left">
          <button class="btn btn-secondary" onclick="window.testPortalController.markForReview()">
            <i class="fa-solid fa-tag" style="color: #a855f7;"></i> Mark for Review
          </button>
          <button class="btn btn-secondary" onclick="window.testPortalController.clearResponse()">Clear Response</button>
        </div>
        <button class="btn btn-primary" onclick="window.testPortalController.saveAndNext()">
          Save & Next <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    `;
    
    this.updatePaletteUI();
  },
  
  selectOption(optIdx) {
    this.userAnswers[this.currentQuestionIndex] = optIdx;
    this.questionStatus[this.currentQuestionIndex] = 'answered';
    this.renderQuestion();
  },
  
  clearResponse() {
    this.userAnswers[this.currentQuestionIndex] = null;
    this.questionStatus[this.currentQuestionIndex] = 'not-answered';
    this.renderQuestion();
  },
  
  markForReview() {
    this.questionStatus[this.currentQuestionIndex] = 'marked';
    this.advanceNext();
  },
  
  saveAndNext() {
    const currentStatus = this.questionStatus[this.currentQuestionIndex];
    if (this.userAnswers[this.currentQuestionIndex] !== null) {
      this.questionStatus[this.currentQuestionIndex] = 'answered';
    } else {
      this.questionStatus[this.currentQuestionIndex] = 'not-answered';
    }
    
    this.advanceNext();
  },
  
  advanceNext() {
    if (this.currentQuestionIndex < this.activeTest.questions.length - 1) {
      this.currentQuestionIndex++;
      // Set to 'not-answered' if not visited yet
      if (this.questionStatus[this.currentQuestionIndex] === 'not-visited') {
        this.questionStatus[this.currentQuestionIndex] = 'not-answered';
      }
      this.renderQuestion();
    } else {
      window.showToastAlert("यह आखिरी सवाल था। यदि आप तैयार हैं, तो टेस्ट सबमिट करें!", "warning");
    }
  },
  
  jumpToQuestion(idx) {
    this.currentQuestionIndex = idx;
    if (this.questionStatus[idx] === 'not-visited') {
      this.questionStatus[idx] = 'not-answered';
    }
    this.renderQuestion();
  },
  
  updatePaletteUI() {
    for (let i = 0; i < this.activeTest.questions.length; i++) {
      const btn = document.getElementById(`palette-btn-${i}`);
      if (!btn) continue;
      
      const status = this.questionStatus[i];
      btn.className = `palette-btn ${status}`;
      
      if (i === this.currentQuestionIndex) {
        btn.classList.add('active-q');
      } else {
        btn.classList.remove('active-q');
      }
    }
  },
  
  confirmSubmit() {
    const unattempted = this.userAnswers.filter(a => a === null).length;
    const confirmMsg = `क्या आप सच में टेस्ट सबमिट करना चाहते हैं?\n\nकुल प्रश्न: ${this.activeTest.questions.length}\nउत्तर दिए: ${this.activeTest.questions.length - unattempted}\nशेष अन-अटेम्प्टेड: ${unattempted}`;
    
    if (confirm(confirmMsg)) {
      this.submitTest(false);
    }
  },
  
  submitTest(forced = false) {
    clearInterval(this.timerInterval);
    
    const test = this.activeTest;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    
    this.userAnswers.forEach((ans, idx) => {
      if (ans === null) {
        unattempted++;
      } else if (ans === test.questions[idx].correct) {
        correct++;
      } else {
        incorrect++;
      }
    });
    
    // Marks Calculator
    const totalMarksPossible = test.questions.length * test.positiveMark;
    const score = (correct * test.positiveMark) - (incorrect * test.negativeMark);
    const finalScore = parseFloat(score.toFixed(2));
    
    if (forced) {
      alert("समय समाप्त! आपका मॉक टेस्ट स्वतः सबमिट कर दिया गया है।");
    }
    
    const container = document.getElementById('app-viewport-container');
    container.style.opacity = 0;
    
    setTimeout(() => {
      this.renderResults(container, finalScore, totalMarksPossible, correct, incorrect, unattempted);
      container.style.opacity = 1;
      window.showToastAlert("Test Submitted! View your detailed scorecard below.", "success");
    }, 150);
  },
  
  renderResults(container, score, totalMarksPossible, correct, incorrect, unattempted) {
    const test = this.activeTest;
    const accuracy = correct + incorrect > 0 
      ? Math.round((correct / (correct + incorrect)) * 100) 
      : 0;
      
    let reviewHtml = '';
    test.questions.forEach((q, idx) => {
      const userChoice = this.userAnswers[idx];
      const isCorrect = userChoice === q.correct;
      const isUnattempted = userChoice === null;
      
      let statusLabel = '';
      if (isUnattempted) {
        statusLabel = `<span class="review-status-label status-unattempted"><i class="fa-regular fa-circle-question"></i> Unattempted</span>`;
      } else if (isCorrect) {
        statusLabel = `<span class="review-status-label status-correct"><i class="fa-solid fa-circle-check"></i> Correct (+${test.positiveMark} Marks)</span>`;
      } else {
        statusLabel = `<span class="review-status-label status-incorrect"><i class="fa-solid fa-circle-xmark"></i> Incorrect (-${test.negativeMark} Marks)</span>`;
      }
      
      let choicesHtml = '';
      q.options.forEach((opt, optIdx) => {
        let optionClass = 'review-option';
        let iconHtml = `<i class="fa-regular fa-circle" style="color: var(--text-sub);"></i>`;
        
        if (optIdx === q.correct) {
          optionClass += ' review-option-correct';
          iconHtml = `<i class="fa-solid fa-circle-check" style="color: var(--success);"></i>`;
        } else if (userChoice === optIdx && !isCorrect) {
          optionClass += ' review-option-incorrect';
          iconHtml = `<i class="fa-solid fa-circle-xmark" style="color: var(--danger);"></i>`;
        }
        
        choicesHtml += `
          <div class="${optionClass}">
            ${iconHtml}
            <span>${opt}</span>
          </div>
        `;
      });
      
      reviewHtml += `
        <div class="glass-card review-q-card" style="border-radius: var(--border-radius-sm);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-bottom: 12px;">
            <h4 style="color: var(--accent);">Question ${idx + 1}</h4>
            ${statusLabel}
          </div>
          
          <div style="margin-bottom: 16px;">
            <div style="font-weight: 600; font-size: 1.1rem; margin-bottom: 6px;">${q.question}</div>
            <div style="color: var(--text-sub); font-style: italic; font-size: 0.95rem;">${q.englishQuestion}</div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${choicesHtml}
          </div>
          
          <div class="review-explanation">
            <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;"><i class="fa-solid fa-lightbulb"></i> व्याख्या / Explanation:</div>
            <div>${q.explanation}</div>
          </div>
        </div>
      `;
    });
    
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="border-radius: var(--border-radius-md);">
        <div class="results-header-text">
          <i class="fa-solid fa-circle-check"></i>
          <h2 style="font-size: 2.2rem; margin-bottom: 8px;">Mock Test Scorecard</h2>
          <p style="color: var(--text-sub); font-weight: 500;">${test.title}</p>
        </div>
        
        <div class="metrics-flex-row">
          <div class="glass-card metric-card" style="border-left: 4px solid var(--accent);">
            <h4>Your Score</h4>
            <p>${score} <span style="font-size: 1rem; color: var(--text-sub);">/ ${totalMarksPossible}</span></p>
          </div>
          <div class="glass-card metric-card" style="border-left: 4px solid var(--success);">
            <h4>Accuracy Rate</h4>
            <p>${accuracy}%</p>
          </div>
          <div class="glass-card metric-card" style="border-left: 4px solid #3b82f6;">
            <h4>Q. Analysis</h4>
            <p style="font-size: 1.25rem; font-weight: 700; margin-top: 14px;">
              <span style="color: var(--success);"><i class="fa-solid fa-check"></i> ${correct}</span> | 
              <span style="color: var(--danger);"><i class="fa-solid fa-xmark"></i> ${incorrect}</span> | 
              <span style="color: var(--text-sub);"><i class="fa-regular fa-circle-question"></i> ${unattempted}</span>
            </p>
            <span style="font-size: 0.75rem; color: var(--text-sub); font-weight: 600; display: block; margin-top: 6px;">Correct | Wrong | Unattempted</span>
          </div>
        </div>
        
        <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 50px;">
          <button class="btn btn-primary" onclick="window.spaRouter.navigate('tests')"><i class="fa-solid fa-rotate-left"></i> re-Take test</button>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('home')">Go to Dashboard <i class="fa-solid fa-house"></i></button>
        </div>
        
        <div class="review-header">
          <i class="fa-solid fa-list-check"></i> विस्तृत विश्लेषण एवं हल / Detailed Review & Solutions
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 24px;">
          ${reviewHtml}
        </div>
      </div>
    `;
  }
};

// Initialize
testPortalController.init();
