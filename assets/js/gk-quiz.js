/* 
 * DAILY GK TRIVIA ENGINE - PRINCY EDUCATION HUB
 * Gamified Daily Quiz, Instant Correct/Incorrect Validation, Explanation reveal, Streak counters
 */

const gkQuizController = {
  questions: [],
  currentIndex: 0,
  score: 0,
  userSelections: [],
  isAnswered: false,
  
  init() {
    window.gkQuizController = this;
  },
  
  renderIndex(container) {
    this.questions = window.EXAMS_DATABASE.dailyGK;
    this.currentIndex = 0;
    this.score = 0;
    this.userSelections = [];
    this.isAnswered = false;
    
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 700px; padding: 40px; border-radius: var(--border-radius-md); text-align: center;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--accent-bg); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 20px;">
          <i class="fa-solid fa-fire"></i>
        </div>
        
        <h2 style="font-size: 2.2rem; margin-bottom: 12px;">Rajasthan Daily GK Booster</h2>
        <p style="color: var(--text-sub); font-size: 1rem; margin-bottom: 30px; max-width: 550px; margin-left: auto; margin-right: auto;">
          डेली 3-क्वेश्चन चैलेंज! राजस्थान के इतिहास, भूगोल और संस्कृति से जुड़े अति-महत्वपूर्ण प्रश्न। अपने ज्ञान का परीक्षण करें और अपनी दैनिक स्कोर-श्रृंखला (Streak) बढ़ाएं।
        </p>
        
        <div style="background: var(--card-border); padding: 20px; border-radius: 12px; display: inline-flex; gap: 30px; margin-bottom: 40px; flex-wrap: wrap; justify-content: center;">
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">3 Qs</div>
            <span style="font-size: 0.75rem; color: var(--text-sub); font-weight: 600;">Total Questions</span>
          </div>
          <div style="width: 1px; background: var(--card-border);"></div>
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--success);">+1 Point</div>
            <span style="font-size: 0.75rem; color: var(--text-sub); font-weight: 600;">Per Correct Answer</span>
          </div>
          <div style="width: 1px; background: var(--card-border);"></div>
          <div style="text-align: center;">
            <div style="font-size: 1.5rem; font-weight: 800; color: #3b82f6;">0.00</div>
            <span style="font-size: 0.75rem; color: var(--text-sub); font-weight: 600;">No Negative Marks</span>
          </div>
        </div>
        
        <div>
          <button class="btn btn-primary" style="padding: 14px 35px; font-size: 1.1rem;" onclick="window.gkQuizController.startQuiz()">
            <i class="fa-solid fa-play"></i> चैलेंज शुरू करें / Start Quiz
          </button>
        </div>
      </div>
    `;
  },
  
  startQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.userSelections = [];
    this.isAnswered = false;
    
    this.renderQuestion();
  },
  
  renderQuestion() {
    const q = this.questions[this.currentIndex];
    const container = document.getElementById('app-viewport-container');
    
    let choicesHtml = '';
    q.options.forEach((opt, idx) => {
      let optionClass = 'option-item';
      let iconHtml = `<div class="option-index">${String.fromCharCode(65 + idx)}</div>`;
      
      if (this.isAnswered) {
        const selected = this.userSelections[this.currentIndex];
        
        if (idx === q.correct) {
          optionClass += ' review-option-correct';
          iconHtml = `<div class="option-index" style="background: var(--success); border-color: var(--success); color: white;"><i class="fa-solid fa-check"></i></div>`;
        } else if (selected === idx && selected !== q.correct) {
          optionClass += ' review-option-incorrect';
          iconHtml = `<div class="option-index" style="background: var(--danger); border-color: var(--danger); color: white;"><i class="fa-solid fa-xmark"></i></div>`;
        } else {
          optionClass += ' disabled';
        }
      }
      
      choicesHtml += `
        <div class="${optionClass}" onclick="window.gkQuizController.selectChoice(${idx})">
          ${iconHtml}
          <div class="option-text">${opt}</div>
        </div>
      `;
    });
    
    let actionBtnHtml = '';
    if (this.isAnswered) {
      const btnText = this.currentIndex === this.questions.length - 1 ? 'Finish & View Score' : 'Next Question';
      actionBtnHtml = `
        <button class="btn btn-primary" style="margin-top: 20px; align-self: flex-end;" onclick="window.gkQuizController.advanceNext()">
          ${btnText} <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      `;
    }
    
    let explanationHtml = '';
    if (this.isAnswered) {
      explanationHtml = `
        <div class="review-explanation" style="margin-top: 30px; animation: fadeInUp 0.4s ease;">
          <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;"><i class="fa-solid fa-lightbulb"></i> व्याख्या / Explanation:</div>
          <div>${q.explanation}</div>
        </div>
      `;
    }
    
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 750px; padding: 40px; border-radius: var(--border-radius-md);">
        <!-- Progress track -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid var(--card-border); padding-bottom: 16px; margin-bottom: 24px;">
          <span style="font-size: 0.95rem; font-weight: 700; color: var(--accent);">Daily Challenge: Q. ${this.currentIndex + 1} of ${this.questions.length}</span>
          <span style="font-size: 0.85rem; color: var(--text-sub); font-weight: 600;">Score: ${this.score} / ${this.questions.length}</span>
        </div>
        
        <div class="question-text-area">
          <h2 style="font-size: 1.4rem; line-height: 1.5; font-weight: 600;">${q.question}</h2>
        </div>
        
        <div class="options-list" style="margin-top: 30px;">
          ${choicesHtml}
        </div>
        
        ${explanationHtml}
        
        <div style="display: flex; justify-content: flex-end;">
          ${actionBtnHtml}
        </div>
      </div>
    `;
  },
  
  selectChoice(optIdx) {
    if (this.isAnswered) return; // Prevent double select
    
    this.isAnswered = true;
    this.userSelections.push(optIdx);
    
    const q = this.questions[this.currentIndex];
    if (optIdx === q.correct) {
      this.score++;
      window.showToastAlert("बहुत बढ़िया! सही उत्तर (+1 Point)", "success");
    } else {
      window.showToastAlert("गलत उत्तर! सही हल नीचे देखें।", "danger");
    }
    
    this.renderQuestion();
  },
  
  advanceNext() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.isAnswered = false;
      this.renderQuestion();
    } else {
      this.finishQuiz();
    }
  },
  
  finishQuiz() {
    const container = document.getElementById('app-viewport-container');
    const accuracy = Math.round((this.score / this.questions.length) * 100);
    
    let message = 'तैयारी जारी रखें! सफलता अवश्य मिलेगी।';
    let iconClass = 'fa-medal';
    if (this.score === this.questions.length) {
      message = 'अद्भुत! आपने सभी प्रश्नों का सही उत्तर दिया। आप एक बेहतरीन मार्ग पर हैं!';
      iconClass = 'fa-trophy';
    } else if (this.score >= 2) {
      message = 'शानदार प्रयास! आपका सामान्य ज्ञान काफी मजबूत है।';
    }
    
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 650px; padding: 50px; border-radius: var(--border-radius-md); text-align: center;">
        <div style="width: 90px; height: 90px; border-radius: 50%; background: var(--accent-bg); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 20px;">
          <i class="fa-solid ${iconClass}"></i>
        </div>
        
        <h2 style="font-size: 2.2rem; margin-bottom: 8px;">GK Booster Result</h2>
        <p style="color: var(--accent); font-weight: 700; font-size: 1.1rem; margin-bottom: 20px;">${message}</p>
        
        <div class="metrics-flex-row" style="grid-template-columns: 1fr 1fr; margin-bottom: 40px;">
          <div class="glass-card metric-card" style="border-left: 4px solid var(--accent); padding: 16px;">
            <h4 style="font-size: 0.75rem;">Correct Answers</h4>
            <p style="font-size: 1.8rem;">${this.score} <span style="font-size: 0.9rem; color: var(--text-sub);">/ ${this.questions.length}</span></p>
          </div>
          <div class="glass-card metric-card" style="border-left: 4px solid var(--success); padding: 16px;">
            <h4 style="font-size: 0.75rem;">Accuracy</h4>
            <p style="font-size: 1.8rem;">${accuracy}%</p>
          </div>
        </div>
        
        <div style="display: flex; gap: 16px; justify-content: center;">
          <button class="btn btn-primary" onclick="window.gkQuizController.startQuiz()"><i class="fa-solid fa-rotate-left"></i> Re-Play Quiz</button>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('home')">Back to Dashboard <i class="fa-solid fa-house"></i></button>
        </div>
      </div>
    `;
    
    window.showToastAlert(`Quiz finished! Score: ${this.score}/${this.questions.length}`, 'success');
  }
};

// Initialize
gkQuizController.init();
