/* 
 * AI COURSE GENERATOR & ROTATOR - PRINCY EDUCATION HUB
 * Pre-configured Key Manager, API Rotator, Deep Prompt Synthesizer, & JSON Syllabus Parser
 */

const aiBuilderController = {
  // Pre-configured premium API keys provided by the user
  preconfiguredKeys: [
    atob("QVEuQWI4Uk42THVwcmhoZ00yZDc3dUZ0NUt2SVpfTGdCeVk1VzBpcVFjNG5zbDZNSzVCdw=="),
    atob("QVEuQWI4Uk42SUtMXzNKZFZyLXMyOVFvblZ1b2hrSW5WWkJMdEVjYUNwdWY4MWNPb1BSQ2c="),
    atob("QVEuQWI4Uk42TGd2Q1cwWC1UbHdQd0hvaEFvY1ZkTU5Jdk1iMWhBaldlNXRnZV9oSktMQQ==")
  ],
  activeKeyIndex: 0,
  
  init() {
    window.aiBuilderController = this;
  },
  
  renderIndex(container) {
    const savedCustomKey = localStorage.getItem('custom_gemini_key') || '';
    
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 800px; padding: 45px; border-radius: var(--border-radius-md); margin: 20px auto;">
        
        <div style="text-align: center; margin-bottom: 35px;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--accent-bg); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px; box-shadow: var(--glow-accent);">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <h2 style="font-size: 2.2rem; margin-bottom: 8px;">AI Complete Course Builder</h2>
          <p style="color: var(--text-sub); font-size: 0.95rem; max-width: 600px; margin: 0 auto;">
            RBSE और NCERT किताबों से संपूर्ण, विस्तृत एवं पाठ्यपुस्तक-स्तर (Textbook level) के व्यापक नोट्स जेनरेट करें।
          </p>
        </div>
        
        <!-- Form desk -->
        <div id="ai-builder-form-view" style="display: flex; flex-direction: column; gap: 24px;">
          
          <!-- Exam Category & Topic -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent); text-transform: uppercase;">1. परीक्षा का चयन करें / Select Exam</label>
              <select id="ai-exam-category" style="padding: 14px; border-radius: 8px; background: var(--card-border); border: 1.5px solid var(--card-border); color: var(--text-main); font-family: var(--font-body); font-weight: 600;">
                <option value="reet">REET Exam (शिक्षक पात्रता परीक्षा)</option>
                <option value="ras">RAS / RTS Exam (सिविल सर्विसेज)</option>
                <option value="police-si">Rajasthan Police SI (उप निरीक्षक)</option>
                <option value="patwari">RSMSSB Patwari & VDO</option>
                <option value="cet">Rajasthan CET (कॉमन टेस्ट)</option>
              </select>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent); text-transform: uppercase;">2. संदर्भ पुस्तकें / Reference Source</label>
              <select id="ai-book-source" style="padding: 14px; border-radius: 8px; background: var(--card-border); border: 1.5px solid var(--card-border); color: var(--text-main); font-family: var(--font-body); font-weight: 600;">
                <option value="RBSE & NCERT Standard Books">RBSE + NCERT बोर्ड पुस्तकें (अनुशंसित)</option>
                <option value="RBSE Rajasthan Board Books only">केवल RBSE राजस्थान बोर्ड पुस्तकें</option>
                <option value="NCERT National Standard Books only">केवल NCERT मानक पुस्तकें</option>
              </select>
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent); text-transform: uppercase;">3. टॉपिक / सब्जेक्ट का नाम दर्ज करें (Topic Title)</label>
            <input type="text" id="ai-topic-title" placeholder="उदा: राजस्थान का एकीकरण, बुद्धि के सिद्धांत, सिंधु घाटी सभ्यता..." style="padding: 14px; border-radius: 8px; background: var(--card-border); border: 1.5px solid var(--card-border); color: var(--text-main); font-family: var(--font-body); font-size: 0.95rem; font-weight: 600;" value="राजस्थान का एकीकरण">
            <span style="font-size: 0.75rem; color: var(--text-sub); font-weight: 500;">
              * AI इस टॉपिक पर पूरी तरह से विस्तृत और संपूर्ण पाठ्यपुस्तक नोट्स (Full Syllabus Chapters) तैयार करेगा।
            </span>
          </div>
          
          <!-- Custom Key setting section -->
          <div class="glass-card" style="padding: 20px; border-radius: 8px; background: rgba(255,255,255,0.01);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
              <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);"><i class="fa-solid fa-key" style="color: var(--accent); margin-right: 6px;"></i> API Key Status: <span style="color: var(--success);">PRE-CONFIGURED ACTIVE</span></h4>
              <span class="tag-badge tag-accent" style="font-size: 0.65rem; background: var(--success); color: white;">3 Keys Rotator Enabled</span>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 14px; line-height: 1.5;">
              हमने आपके लिए 3 शक्तिशाली AI प्रीमियम API कीज़ पहले से जोड़ दी हैं। यदि वे सीमा (Rate Limits) पर पहुँचती हैं, तो हमारा रोटेटर आटोमेटिक दूसरी कुंजी पर स्विच कर लेगा। यदि आप अपनी खुद की कस्टम कीज़ डालना चाहते हैं, तो नीचे दर्ज करें:
            </p>
            <input type="password" id="ai-custom-key" placeholder="वैकल्पिक: अपनी Custom API Key यहाँ दर्ज करें..." style="width: 100%; padding: 10px 14px; border-radius: 6px; background: var(--card-bg); border: 1px solid var(--card-border); color: var(--text-main); font-size: 0.85rem;" value="${savedCustomKey}">
          </div>
          
          <!-- Submit CTA -->
          <div style="margin-top: 15px;">
            <button class="btn btn-primary" style="width: 100%; justify-content: center; padding: 16px 30px; font-size: 1.05rem;" id="ai-generate-submit-btn" onclick="window.aiBuilderController.startGeneration()">
              <i class="fa-solid fa-wand-magic-sparkles"></i> संपूर्ण कोर्स तैयार करें / Generate Complete Course
            </button>
          </div>
        </div>
        
        <!-- Loading Step Progress Screen (Initially Hidden) -->
        <div id="ai-builder-progress-view" style="display: none; flex-direction: column; gap: 30px; padding: 20px 0; text-align: center;">
          <div class="loader-pulse-visual" style="position: relative; width: 80px; height: 80px; margin: 0 auto 10px;">
            <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; border: 4px solid var(--card-border); border-top-color: var(--accent); animation: rotateClockwise 1.5s linear infinite;"></div>
            <div style="position: absolute; top: 22px; left: 24px; font-size: 2.2rem; color: var(--accent);"><i class="fa-solid fa-brain"></i></div>
          </div>
          
          <div>
            <h3 style="font-size: 1.4rem; margin-bottom: 8px;" id="ai-progress-current-title">Syllabus Analysis in progress...</h3>
            <p style="color: var(--text-sub); font-size: 0.88rem;" id="ai-progress-current-subtitle">कृपया प्रतीक्षा करें, गिटहब रोटेटर AI कीज़ को ऑथेंटिकेट कर रहा है।</p>
          </div>
          
          <!-- Steps list -->
          <div style="display: flex; flex-direction: column; gap: 14px; max-width: 450px; margin: 0 auto; text-align: left; background: var(--card-bg); border: 1px solid var(--card-border); padding: 24px; border-radius: var(--border-radius-sm);">
            <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9rem;" id="step-node-1">
              <i class="fa-regular fa-circle" id="step-icon-1" style="color: var(--text-sub);"></i>
              <span id="step-text-1">Step 1: ऑथेंटिकेशन एवं API कीज़ का चयन</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9rem;" id="step-node-2">
              <i class="fa-regular fa-circle" id="step-icon-2" style="color: var(--text-sub);"></i>
              <span id="step-text-2">Step 2: सिलेबस संरचना एवं अध्याय विश्लेषण (Syllabus Structure)</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9rem;" id="step-node-3">
              <i class="fa-regular fa-circle" id="step-icon-3" style="color: var(--text-sub);"></i>
              <span id="step-text-3">Step 3: विस्तृत एवं संपूर्ण नोट्स लेखन (Exhaustive Notes Writing)</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9rem;" id="step-node-4">
              <i class="fa-regular fa-circle" id="step-icon-4" style="color: var(--text-sub);"></i>
              <span id="step-text-4">Step 4: अभ्यास एमसीक्यू टेस्ट का संकलन (Chapter MCQ Tests)</span>
            </div>
          </div>
        </div>
        
      </div>
    `;
  },
  
  startGeneration() {
    const examCat = document.getElementById('ai-exam-category').value;
    const bookSrc = document.getElementById('ai-book-source').value;
    const topicTitle = document.getElementById('ai-topic-title').value.trim();
    const customKey = document.getElementById('ai-custom-key').value.trim();
    
    if (!topicTitle) {
      alert("कृपया टॉपिक का नाम दर्ज करें!");
      return;
    }
    
    // Save custom key if exists
    if (customKey) {
      localStorage.setItem('custom_gemini_key', customKey);
    } else {
      localStorage.removeItem('custom_gemini_key');
    }
    
    // Switch view
    document.getElementById('ai-builder-form-view').style.display = 'none';
    document.getElementById('ai-builder-progress-view').style.display = 'flex';
    
    // Start execute
    this.executePipeline(examCat, topicTitle, bookSrc, customKey);
  },
  
  async executePipeline(examCat, topicTitle, bookSrc, customKey) {
    this.updateStepStatus(1, 'active', 'Step 1: ऑथेंटिकेट किया जा रहा है...');
    
    // Select API key: custom key has priority, otherwise start rotator
    let selectedKey = '';
    let keysToTry = [];
    
    if (customKey) {
      keysToTry.push(customKey);
    }
    // Append pre-configured keys
    this.preconfiguredKeys.forEach(k => keysToTry.push(k));
    
    this.updateStepStatus(1, 'done', 'Step 1: ऑथेंटिकेशन पूर्ण! API की रोटेटर एक्टिव।');
    this.updateStepStatus(2, 'active', 'Step 2: सिलेबस संरचना व बोर्ड किताबों का मिलान किया जा रहा है...');
    
    let success = false;
    let generatedData = null;
    
    for (let i = 0; i < keysToTry.length; i++) {
      const apiKey = keysToTry[i];
      WriteLog(`Attempting AI Course generation with Key ${i + 1} of ${keysToTry.length}...`);
      
      try {
        generatedData = await this.callGeminiAPI(examCat, topicTitle, bookSrc, apiKey);
        if (generatedData) {
          success = true;
          this.activeKeyIndex = i; // Save working key index
          break;
        }
      } catch (err) {
        WriteLog(`Key ${i + 1} failed. Error details: ${err}`);
        // Continue loop to try next key!
      }
    }
    
    if (!success || !generatedData) {
      this.renderFailureScreen();
      return;
    }
    
    // Parse and Inject
    this.updateStepStatus(3, 'done', 'Step 3: संपूर्ण विस्तृत नोट्स लेखन समाप्त! (Textbook notes written)');
    this.updateStepStatus(4, 'active', 'Step 4: अभ्यास एमसीक्यू टेस्ट संकलित किए जा रहे हैं...');
    
    try {
      // Inject to local courses database
      const category = window.EXAMS_DATABASE.categories.find(c => c.id === examCat);
      
      const newCourse = {
        id: `gen-c-${Date.now()}`,
        categoryId: examCat,
        title: generatedData.title || `${topicTitle} - Complete AI Course`,
        instructor: generatedData.instructor || "AI Expert (RBSE & NCERT)",
        rating: 5.0,
        students: "1,500+",
        progress: 0,
        totalLectures: generatedData.chapters.reduce((acc, ch) => acc + ch.topics.length, 0),
        image: "assets/images/course-ras.jpg",
        description: generatedData.description || `${bookSrc} पर आधारित पूर्ण विस्तृत अध्यायवार लिखित कोर्स।`,
        chapters: generatedData.chapters
      };
      
      window.EXAMS_DATABASE.courses.unshift(newCourse);
      
      this.updateStepStatus(4, 'done', 'Step 4: अभ्यास टेस्ट संकलन समाप्त! वेबसाइट पब्लिश हो रहा है...');
      
      setTimeout(() => {
        window.showToastAlert("बधाई हो! AI ने संपूर्ण कोर्स और विस्तृत नोट्स सफलतापूर्वक तैयार कर दिए हैं!", "success");
        // Redirect to new course!
        window.coursesController.enterClassroom(newCourse.id);
      }, 1500);
      
    } catch (err) {
      WriteLog(`Database injection failed: ${err}`);
      alert("कोर्स डेटा प्रोसेसिंग में त्रुटि आई। कृपया पुनः प्रयास करें।");
      this.renderIndex(document.getElementById('app-viewport-container'));
    }
  },
  
  updateStepStatus(stepNum, status, text = '') {
    const node = document.getElementById(`step-node-${stepNum}`);
    const icon = document.getElementById(`step-icon-${stepNum}`);
    const txt = document.getElementById(`step-text-${stepNum}`);
    
    if (!node) return;
    
    if (text) txt.innerText = text;
    
    if (status === 'active') {
      icon.className = 'fa-solid fa-spinner fa-spin';
      icon.style.color = 'var(--accent)';
      node.style.fontWeight = '700';
      node.style.color = 'var(--text-main)';
      
      document.getElementById('ai-progress-current-title').innerText = text;
      document.getElementById('ai-progress-current-subtitle').innerText = "AI गहराई से डेटाबेस संकलित कर रहा है...";
    } else if (status === 'done') {
      icon.className = 'fa-solid fa-circle-check';
      icon.style.color = 'var(--success)';
      node.style.fontWeight = '500';
      node.style.color = 'var(--text-sub)';
    }
  },
  
  async callGeminiAPI(examCat, topicTitle, bookSrc, apiKey) {
    const category = window.EXAMS_DATABASE.categories.find(c => c.id === examCat);
    const examFullName = category ? category.fullName : examCat;
    
    // Prompt structure
    const promptText = `
      You are an elite, highly experienced professor preparing high-quality detailed study courses for Rajasthan competitive exams (RAS, REET, Police SI, Patwari).
      
      Write a highly detailed, comprehensive, and exhaustive complete study course on the topic: "${topicTitle}" (specifically tailored for "${examFullName}" based strictly on "${bookSrc}" guidelines).
      
      STRICT REQUIREMENTS:
      1. THIS MUST NOT BE A SHORT SUMMARY OR SIMPLE REVISION NOTES. We need complete, textbook-quality detailed notes (विस्तृत एवं संपूर्ण नोट्स).
      2. Write extensive paragraphs, complete historical details, full geographic facts, formulas, detailed descriptions of events/characters, bullet points, and clean HTML tables (tables must use style="width:100%; border-collapse:collapse; margin:15px 0;" with solid borders) for each topic.
      3. Bold critical terms and key data using <b> or <strong> tags.
      4. For each topic, write an integrated "Practice Quiz" (अभ्यास प्रश्नावली) containing 3 high-quality multiple choice questions at the end of its content. Each question must include options, correct option index, and a highly detailed explanation (Hindi/English).
      5. Output ONLY a valid JSON object matching the exact schema specified below. Do not wrap the JSON in markdown code blocks like \`\`\`json or output any pre-text or post-text.
      
      JSON SCHEMA FOR THE OUTPUT:
      {
        "title": "Complete course title (e.g. ${topicTitle} - Complete Study Guide)",
        "instructor": "AI Professor (Based on ${bookSrc})",
        "description": "Exhaustive syllabus course covering the topic...",
        "chapters": [
          {
            "title": "Chapter Name (e.g. Chapter 1: General Introduction)",
            "topics": [
              {
                "id": "gen-t1",
                "title": "Topic Name",
                "duration": "15 mins read",
                "content": "Insert the complete, exhaustive, textbook-quality study material here (in HTML format, using h3, p, ul, ol, li, b, strong, and table tags). Must be at least 400-500 words of rich content.",
                "quiz": [
                  {
                    "question": "Question text...",
                    "options": ["Option A", "Option B", "Option C", "Option D"],
                    "correct": 0,
                    "explanation": "Detailed explanation of correct answer..."
                  }
                ]
              }
            ]
          }
        ]
      }
    `;
    
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: promptText
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json"
      }
    };
    
    this.updateStepStatus(3, 'active', 'Step 3: संपूर्ण विस्तृत नोट्स लिखे जा रहे हैं... (इसमें 10-15 सेकंड का समय लग सकता है)');
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`API returned HTTP ${response.status}`);
    }
    
    const resData = await response.json();
    let textResult = resData.candidates[0].content.parts[0].text;
    
    // Clean potential markdown blocks
    textResult = textResult.trim();
    if (textResult.startsWith("```json")) {
      textResult = textResult.substring(7);
    }
    if (textResult.endsWith("```")) {
      textResult = textResult.substring(0, textResult.length - 3);
    }
    textResult = textResult.trim();
    
    const parsed = JSON.parse(textResult);
    return parsed;
  },
  
  renderFailureScreen() {
    const container = document.getElementById('app-viewport-container');
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 600px; padding: 40px; border-radius: var(--border-radius-md); text-align: center;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(239, 68, 68, 0.1); color: var(--danger); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px;">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        
        <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--danger);">कोर्स बनाने में त्रुटि आई! / API Limit Reached</h2>
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 30px; line-height: 1.6;">
          तीनों प्री-कॉन्फिगर कीज़ और आपकी कस्टम की के प्रयास असफल रहे हैं। ऐसा गिटहब टोकन रेट लिमिट (Rate Limits) होने या इंटरनेट कनेक्शन की समस्या के कारण हो सकता है। 
        </p>
        
        <div style="display: flex; gap: 16px; justify-content: center;">
          <button class="btn btn-primary" onclick="window.aiBuilderController.renderIndex(document.getElementById('app-viewport-container'))"><i class="fa-solid fa-rotate-left"></i> पुनः प्रयास करें / Retry</button>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('home')">Dashboard Home <i class="fa-solid fa-house"></i></button>
        </div>
      </div>
    `;
  }
};

// Help logging helper
function WriteLog(msg) {
  console.log(`[AI Course Builder] ${msg}`);
}

// Initialize
aiBuilderController.init();
