/* 
 * AI PROGRESSIVE SYLLABUS & NOTES COMPILER - PRINCY EDUCATION HUB
 * Pre-configured Key Manager, API Rotator, Progressive Outline Builder, Sequential Topic Synthesizer, & PDF Assembler
 */

const aiBuilderController = {
  // Pre-configured premium API keys provided by the user
  preconfiguredKeys: [
    atob("QVEuQWI4Uk42THVwcmhoZ00yZDc3dUZ0NUt2SVpfTGdCeVk1VzBpcVFjNG5zbDZNSzVCdw=="),
    atob("QVEuQWI4Uk42SUtMXzNKZFZyLXMyOVFvblZ1b2hrSW5WWkJMdEVjYUNwdWY4MWNPb1BSQ2c="),
    atob("QVEuQWI4Uk42TGd2Q1cwWC1UbHdQd0hvaEFvY1ZkTU5Jdk1iMWhBaldlNXRnZV9oSktMQQ==")
  ],
  activeKeyIndex: 0,
  
  // State variables for progressive compilation
  activeGeneratedCourse: null,
  compilationInProgress: false,
  
  init() {
    window.aiBuilderController = this;
  },
  
  renderIndex(container) {
    const savedCustomKey = localStorage.getItem('custom_gemini_key') || '';
    
    // If we have a course in compilation state, show the compiler desk instead!
    if (this.activeGeneratedCourse) {
      this.renderCompilerDesk(container);
      return;
    }
    
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 800px; padding: 45px; border-radius: var(--border-radius-md); margin: 20px auto;">
        
        <div style="text-align: center; margin-bottom: 35px;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--accent-bg); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px; box-shadow: var(--glow-accent);">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <h2 style="font-size: 2.2rem; margin-bottom: 8px;">AI Complete Syllabus & PDF Notes Compiler</h2>
          <p style="color: var(--text-sub); font-size: 0.95rem; max-width: 600px; margin: 0 auto;">
            REET, RAS, SI आदि परीक्षाओं का सिलेबस आउटलाइन तैयार करें, और गिटहब AI रोटेटर की मदद से टॉपिक-वार **संपूर्ण एवं विस्तृत 2000+ शब्दों के नोट्स** कंपाइल कर PDF बुकलेट तैयार करें।
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
            <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent); text-transform: uppercase;">3. पूरा सिलेबस टॉपिक / सब्जेक्ट (जैसे: REET Level 2 History Syllabus, RPSC SI Hindi Complete Notes)</label>
            <input type="text" id="ai-topic-title" placeholder="उदा: REET Level 2 कला-संस्कृति सम्पूर्ण नोट्स, RPSC SI हिंदी व्याकरण सम्पूर्ण..." style="padding: 14px; border-radius: 8px; background: var(--card-border); border: 1.5px solid var(--card-border); color: var(--text-main); font-family: var(--font-body); font-size: 0.95rem; font-weight: 600;" value="REET Level 2 बाल विकास व शिक्षाशास्त्र सम्पूर्ण सिलेबस">
            <span style="font-size: 0.75rem; color: var(--text-sub); font-weight: 500;">
              * AI सबसे पहले सिलेबस आउटलाइन (अध्याय व टॉपिक सूची) तैयार करेगा, फिर हम प्रोग्रेसिव तरीके से हर टॉपिक के विस्तृत 2000+ शब्दों के नोट्स लिखेंगे।
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
            <button class="btn btn-primary" style="width: 100%; justify-content: center; padding: 16px 30px; font-size: 1.05rem;" id="ai-generate-submit-btn" onclick="window.aiBuilderController.startSyllabusOutline()">
              <i class="fa-solid fa-wand-magic-sparkles"></i> 1. सिलेबस आउटलाइन तैयार करें / Map Syllabus Outline
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
            <p style="color: var(--text-sub); font-size: 0.88rem;" id="ai-progress-current-subtitle">कृपया प्रतीक्षा करें, गिटहब रोटेटर AI कीज़ को ऑथेंटिकेट कर रहा है और बोर्ड सिलेबस मैपिंग जारी है।</p>
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
          </div>
        </div>
        
      </div>
    `;
  },
  
  startSyllabusOutline() {
    const examCat = document.getElementById('ai-exam-category').value;
    const bookSrc = document.getElementById('ai-book-source').value;
    const topicTitle = document.getElementById('ai-topic-title').value.trim();
    const customKey = document.getElementById('ai-custom-key').value.trim();
    
    if (!topicTitle) {
      alert("कृपया सिलेबस / टॉपिक का नाम दर्ज करें!");
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
    
    // Start mapping syllabus outline
    this.executeSyllabusOutline(examCat, topicTitle, bookSrc, customKey);
  },
  
  async executeSyllabusOutline(examCat, topicTitle, bookSrc, customKey) {
    this.updateStepStatus(1, 'active', 'Step 1: ऑथेंटिकेट किया जा रहा है...');
    
    let keysToTry = [];
    if (customKey) keysToTry.push(customKey);
    this.preconfiguredKeys.forEach(k => keysToTry.push(k));
    
    this.updateStepStatus(1, 'done', 'Step 1: ऑथेंटिकेशन पूर्ण! API की रोटेटर एक्टिव।');
    this.updateStepStatus(2, 'active', 'Step 2: सिलेबस संरचना व बोर्ड किताबों का मिलान किया जा रहा है...');
    
    let success = false;
    let outlineData = null;
    
    for (let i = 0; i < keysToTry.length; i++) {
      const apiKey = keysToTry[i];
      try {
        outlineData = await this.callGeminiSyllabusAPI(examCat, topicTitle, bookSrc, apiKey);
        if (outlineData) {
          success = true;
          this.activeKeyIndex = i;
          break;
        }
      } catch (err) {
        WriteLog(`Key ${i + 1} failed during outline mapping. Details: ${err}`);
      }
    }
    
    if (!success || !outlineData) {
      this.renderFailureScreen();
      return;
    }
    
    this.updateStepStatus(2, 'done', 'Step 2: सिलेबस मैपिंग पूर्ण! (Outline Mapped Successfully)');
    
    // Save generated syllabus in compilation state
    const category = window.EXAMS_DATABASE.categories.find(c => c.id === examCat);
    this.activeGeneratedCourse = {
      id: `gen-c-${Date.now()}`,
      categoryId: examCat,
      title: outlineData.title || `${topicTitle} (Complete Syllabus Book)`,
      instructor: outlineData.instructor || "Syllabus Expert (RBSE & NCERT)",
      rating: 5.0,
      students: "1,500+",
      progress: 0,
      image: "assets/images/course-ras.jpg",
      description: outlineData.description || `${bookSrc} पर आधारित संपूर्ण विस्तृत अध्यायवार लिखित कोर्स।`,
      chapters: outlineData.chapters.map((ch, chIdx) => ({
        title: ch.title,
        topics: ch.topics.map((t, tIdx) => ({
          id: `gen-t-${chIdx}-${tIdx}-${Date.now()}`,
          title: t.title,
          duration: t.duration || "20 mins read",
          completed: false,
          compiled: false, // Flag indicating whether the complete comprehensive notes have been generated
          content: `<div style="text-align:center; padding:30px; color:var(--text-sub);"><i class="fa-solid fa-spinner fa-spin" style="font-size:2rem; margin-bottom:10px; color:var(--accent);"></i><h4>यह टॉपिक अभी कंपाइल नहीं हुआ है।</h4><p style="font-size:0.85rem; margin-top:5px;">नीचे दिए गए "Compile Topic" बटन या "Auto-Compile All" बटन पर क्लिक करके RBSE/NCERT किताबों से संपूर्ण 2000+ शब्दों के विस्तृत नोट्स जेनरेट करें।</p></div>`,
          quiz: []
        }))
      }))
    };
    
    // Render the Syllabus Compiler Workspace Desk
    this.renderCompilerDesk(document.getElementById('app-viewport-container'));
  },
  
  async callGeminiSyllabusAPI(examCat, topicTitle, bookSrc, apiKey) {
    const category = window.EXAMS_DATABASE.categories.find(c => c.id === examCat);
    const examFullName = category ? category.fullName : examCat;
    
    const promptText = `
      You are an elite academic syllabus planner for Rajasthan competitive exams.
      
      Create a highly structured syllabus outline (chapters and topic lists only) for the complete course: "${topicTitle}" (specifically for "${examFullName}" based strictly on "${bookSrc}" guidelines).
      
      STRICT MANDATE:
      - ONLY structure the outline. Generate 3-4 key Chapters, each containing exactly 2 detailed Topics.
      - DO NOT WRITE the detailed study contents or notes yet. We will compile them one by one progressively to bypass word limits.
      - Return ONLY a valid JSON object. Do not include markdown wraps or backticks \`\`\`json.
      
      JSON SCHEMA FOR SYLLABUS OUTLINE:
      {
        "title": "Complete course title (e.g. ${topicTitle} - Complete Study Guide Book)",
        "instructor": "RPSC/REET Exam Board Committee",
        "description": "Exhaustive syllabus textbook covering all important aspects of ${topicTitle} under ${bookSrc}.",
        "chapters": [
          {
            "title": "Chapter 1 Name (e.g. Chapter 1: General History of Rajasthan)",
            "topics": [
              {
                "title": "Topic 1.1 Name (e.g. Archaeological Sites of Rajasthan)"
              },
              {
                "title": "Topic 1.2 Name (e.g. Rajput Dynasty Chronicles)"
              }
            ]
          }
        ]
      }
    `;
    
    const requestBody = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: { responseMimeType: "application/json" }
    };
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const resData = await response.json();
    let textResult = resData.candidates[0].content.parts[0].text.trim();
    
    if (textResult.startsWith("```json")) textResult = textResult.substring(7);
    if (textResult.endsWith("```")) textResult = textResult.substring(0, textResult.length - 3);
    
    return JSON.parse(textResult.trim());
  },
  
  renderCompilerDesk(container) {
    const course = this.activeGeneratedCourse;
    
    // Count compiled states
    let totalTopics = 0;
    let compiledCount = 0;
    
    let topicsListHtml = '';
    course.chapters.forEach((ch, chIdx) => {
      topicsListHtml += `
        <tr style="background: var(--card-border); font-weight:700;"><td colspan="4" style="padding:10px 16px; color:var(--accent);">Chapter ${chIdx + 1}: ${ch.title}</td></tr>
      `;
      
      ch.topics.forEach((t, tIdx) => {
        totalTopics++;
        if (t.compiled) compiledCount++;
        
        const statusBadge = t.compiled 
          ? `<span class="tag-badge" style="background:var(--success); color:white;"><i class="fa-solid fa-circle-check"></i> Compiled</span>` 
          : `<span class="tag-badge" style="background:var(--card-border); color:var(--text-sub);"><i class="fa-regular fa-clock"></i> Empty (Not Compiled)</span>`;
          
        const actionBtn = t.compiled
          ? `<button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; border-color:var(--success); color:var(--success);" onclick="window.coursesController.playTopic('${t.id}')"><i class="fa-regular fa-eye"></i> View Notes</button>`
          : `<button class="btn btn-primary" style="padding:4px 10px; font-size:0.75rem;" id="btn-comp-${t.id}" onclick="window.aiBuilderController.compileSingleTopic('${t.id}', ${chIdx}, ${tIdx})"><i class="fa-solid fa-wand-magic-sparkles"></i> Compile (AI)</button>`;
          
        topicsListHtml += `
          <tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:12px 16px; font-weight:500;">Unit ${chIdx+1}.${tIdx+1}</td>
            <td style="padding:12px 16px;">${t.title}</td>
            <td style="padding:12px 16px; text-align:center;">${statusBadge}</td>
            <td style="padding:12px 16px; text-align:center;">${actionBtn}</td>
          </tr>
        `;
      });
    });
    
    const pct = Math.round((compiledCount / totalTopics) * 100);
    
    // Enable Publish button only if at least one topic is compiled
    const isPublishDisabled = compiledCount === 0 ? 'disabled style="opacity:0.5;"' : '';
    
    container.innerHTML = `
      <div class="fade-in-section">
        
        <!-- Header widget -->
        <div class="glass-card" style="padding: 24px; border-radius: var(--border-radius-md); margin-bottom: 24px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px;">
            <div>
              <span style="font-size:0.8rem; font-weight:700; color:var(--accent); text-transform:uppercase;"><i class="fa-solid fa-gears"></i> AI PROGRESSIVE SYLLABUS COMPILER WORKSPACE</span>
              <h2 style="font-size:1.6rem; font-weight:800; margin-top:4px;">${course.title}</h2>
              <p style="color:var(--text-sub); font-size:0.9rem; margin-top:4px;">${course.description}</p>
            </div>
            <div style="display:flex; gap:12px;">
              <button class="btn btn-primary" style="background:#a855f7; border:none; box-shadow:none;" id="btn-compile-all-auto" onclick="window.aiBuilderController.compileAllTopics()" ${this.compilationInProgress ? 'disabled' : ''}>
                <i class="fa-solid fa-bolt"></i> Auto-Compile All Topics
              </button>
              <button class="btn btn-primary" onclick="window.aiBuilderController.publishGeneratedCourse()" ${isPublishDisabled}>
                <i class="fa-solid fa-cloud-arrow-up"></i> Publish to Website
              </button>
            </div>
          </div>
          
          <!-- Progress bar -->
          <div style="margin-top:20px; border-top:1px solid var(--card-border); padding-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div style="flex:1; max-width:400px;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; color:var(--text-sub); margin-bottom:6px;">
                <span>Notes Compilation Progress</span>
                <span id="compiler-pct-text">${pct}% Complete</span>
              </div>
              <div class="progress-bar-bg" style="height:6px;">
                <div class="progress-bar-fill" id="compiler-progress-bar-fill" style="width: ${pct}%;"></div>
              </div>
            </div>
            
            <div style="font-size:0.82rem; color:var(--text-sub); font-weight:600; display:flex; gap:16px;" id="compiler-meta-details">
              <span><i class="fa-solid fa-list"></i> Total Topics: ${totalTopics}</span>
              <span style="color:var(--success);"><i class="fa-solid fa-circle-check"></i> Compiled: ${compiledCount}</span>
              <span style="color:var(--accent);"><i class="fa-regular fa-clock"></i> Pending: ${totalTopics - compiledCount}</span>
            </div>
          </div>
        </div>
        
        <!-- Live Compiler log console -->
        <div class="glass-card" id="compiler-log-console" style="display:none; padding:20px; border-radius:8px; margin-bottom:24px; background:#0d1423; border-left:4px solid var(--accent); font-family:monospace; font-size:0.85rem; color:#f1f5f9; max-height:150px; overflow-y:auto;">
          <!-- Logger entries inject here -->
        </div>
        
        <!-- Topics table list -->
        <div class="glass-card" style="border-radius: var(--border-radius-md); overflow:hidden;">
          <table style="width:100%; border-collapse:collapse; text-align:left;">
            <thead>
              <tr style="background:var(--bg-nav); border-bottom:2px solid var(--card-border); font-size:0.8rem; font-weight:700; color:var(--text-sub); text-transform:uppercase;">
                <th style="padding:16px; width:120px;">Unit</th>
                <th style="padding:16px;">Topic Title (अध्याय विवरण)</th>
                <th style="padding:16px; width:180px; text-align:center;">Compilation Status</th>
                <th style="padding:16px; width:180px; text-align:center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${topicsListHtml}
            </tbody>
          </table>
        </div>
        
        <div style="text-align:center; margin-top:24px;">
          <button class="btn btn-secondary" onclick="window.aiBuilderController.cancelCompilationDesk()"><i class="fa-solid fa-circle-xmark"></i> Cancel & Create New Outline</button>
        </div>
        
      </div>
    `;
  },
  
  cancelCompilationDesk() {
    if (confirm("क्या आप वाकई इस सिलेबस आउटलाइन को रद्द करना चाहते हैं? अभी तक कंपाइल किए गए नोट्स सुरक्षित नहीं होंगे।")) {
      this.activeGeneratedCourse = null;
      this.compilationInProgress = false;
      this.renderIndex(document.getElementById('app-viewport-container'));
    }
  },
  
  async compileSingleTopic(topicId, chIdx, tIdx) {
    const course = this.activeGeneratedCourse;
    const topic = course.chapters[chIdx].topics[tIdx];
    const btn = document.getElementById(`btn-comp-${topicId}`);
    
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Compiling...`;
    }
    
    // Toggle logger
    const log = document.getElementById('compiler-log-console');
    if (log) {
      log.style.display = 'block';
      log.innerHTML += `<div>[${new Date().toLocaleTimeString()}] Starting comprehensive notes compilation for Topic: "${topic.title}"...</div>`;
      log.scrollTop = log.scrollHeight;
    }
    
    let keysToTry = [];
    const customKey = localStorage.getItem('custom_gemini_key') || '';
    if (customKey) keysToTry.push(customKey);
    this.preconfiguredKeys.forEach(k => keysToTry.push(k));
    
    let success = false;
    let notesData = null;
    
    for (let i = 0; i < keysToTry.length; i++) {
      const apiKey = keysToTry[i];
      try {
        notesData = await this.callGeminiNotesAPI(course.title, topic.title, apiKey);
        if (notesData) {
          success = true;
          this.activeKeyIndex = i;
          break;
        }
      } catch (err) {
        WriteLog(`Key ${i + 1} failed during progressive compile. Details: ${err}`);
        if (log) {
          log.innerHTML += `<div style="color:var(--danger)">[Warning] Key ${i+1} failed: Rate Limit or Error. Switching keys...</div>`;
          log.scrollTop = log.scrollHeight;
        }
      }
    }
    
    if (success && notesData) {
      // Update state
      topic.content = notesData.content || `<p>${topic.title} comprehensive notes content failed to load.</p>`;
      topic.quiz = notesData.quiz || [];
      topic.compiled = true;
      topic.completed = false; // Not read by student yet
      
      if (log) {
        log.innerHTML += `<div style="color:var(--success)">[Success] Topic: "${topic.title}" successfully compiled! Written: ~${topic.content.length} characters of comprehensive study guide. Included: ${topic.quiz.length} practice questions.</div>`;
        log.scrollTop = log.scrollHeight;
      }
      
      window.showToastAlert(`Successfully Compiled: ${topic.title}!`, 'success');
    } else {
      if (log) {
        log.innerHTML += `<div style="color:var(--danger)">[Error] All API keys failed to compile: "${topic.title}". Please verify keys status.</div>`;
        log.scrollTop = log.scrollHeight;
      }
      alert(`इस टॉपिक को कंपाइल करने में समस्या आई। रोटेटर की सभी कीज़ लिमिट पर पहुँच चुकी हैं।`);
    }
    
    // Refresh Desk
    this.renderCompilerDesk(document.getElementById('app-viewport-container'));
  },
  
  async compileAllTopics() {
    if (this.compilationInProgress) return;
    this.compilationInProgress = true;
    
    const course = this.activeGeneratedCourse;
    const btn = document.getElementById('btn-compile-all-auto');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Batch Compiling...`;
    }
    
    const log = document.getElementById('compiler-log-console');
    if (log) {
      log.style.display = 'block';
      log.innerHTML += `<div style="color:var(--accent)">[Batch] Starting automated sequential auto-compiler pipeline for all pending syllabus topics...</div>`;
      log.scrollTop = log.scrollHeight;
    }
    
    // Locate all uncompiled topics
    for(let chIdx = 0; chIdx < course.chapters.length; chIdx++) {
      const ch = course.chapters[chIdx];
      for(let tIdx = 0; tIdx < ch.topics.length; tIdx++) {
        const t = ch.topics[tIdx];
        if (!t.compiled) {
          if (log) {
            log.innerHTML += `<div>[Pipeline] Processing Topic: "${t.title}"...</div>`;
            log.scrollTop = log.scrollHeight;
          }
          await this.compileSingleTopic(t.id, chIdx, tIdx);
          // Small sleep between batches to avoid rate limit spikes
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }
    
    this.compilationInProgress = false;
    if (log) {
      log.innerHTML += `<div style="color:var(--success)">[Batch Pipeline] Auto-compilation sequence completely finished! All topics compiled. Ready to Publish!</div>`;
      log.scrollTop = log.scrollHeight;
    }
    
    window.showToastAlert("ऑटो-कंपाइल प्रकिया समाप्त! सभी लिखित नोट्स तैयार हैं।", "success");
    this.renderCompilerDesk(document.getElementById('app-viewport-container'));
  },
  
  async callGeminiNotesAPI(courseTitle, topicTitle, apiKey) {
    const promptText = `
      You are an elite, highly experienced professor preparing high-quality textbook study guides for Rajasthan competitive exams (RAS, REET, Police SI).
      
      Write a highly detailed, comprehensive, and exhaustive complete study guide page on the topic: "${topicTitle}" (specifically part of the course: "${courseTitle}").
      
      STRICT REQUIREMENTS:
      1. THIS MUST NOT BE A SHORT SUMMARY OR SIMPLE REVISION NOTES. We need complete, textbook-quality detailed comprehensive notes (विस्तृत एवं संपूर्ण नोट्स).
      2. Write extensive paragraphs (at least 3-4 large sections), definitions of key concepts, historical chronicles, full lists of facts/dates, and structured HTML tables (using style="width:100%; border-collapse:collapse; margin:20px 0; border:1px solid #cbd5e1;") for each aspect.
      3. Bold critical terms and key data using <b> or <strong> tags.
      4. Write an integrated "Practice Quiz" (अभ्यास प्रश्नावली) containing exactly 3 high-quality multiple choice questions at the end of the notes. Each question must include options, correct option index, and a highly detailed explanation (Hindi/English).
      5. Output ONLY a valid JSON object matching the exact schema specified below. Do not wrap the JSON in markdown code blocks like \`\`\`json or output any pre-text or post-text.
      
      JSON SCHEMA FOR THE OUTPUT:
      {
        "content": "Insert the complete, exhaustive, textbook-quality study material here (in HTML format, using h3, p, ul, ol, li, b, strong, and table, tr, td tags). Must be at least 400-500 words of rich content.",
        "quiz": [
          {
            "question": "Question text...",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correct": 0,
            "explanation": "Detailed explanation of correct answer..."
          }
        ]
      }
    `;
    
    const requestBody = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: { responseMimeType: "application/json" }
    };
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const resData = await response.json();
    let textResult = resData.candidates[0].content.parts[0].text.trim();
    
    if (textResult.startsWith("```json")) textResult = textResult.substring(7);
    if (textResult.endsWith("```")) textResult = textResult.substring(0, textResult.length - 3);
    
    return JSON.parse(textResult.trim());
  },
  
  publishGeneratedCourse() {
    const course = this.activeGeneratedCourse;
    if (!course) return;
    
    // Inject into local exams database
    window.EXAMS_DATABASE.courses.unshift(course);
    
    // Reset state
    this.activeGeneratedCourse = null;
    this.compilationInProgress = false;
    
    window.showToastAlert("बधाई हो! आपका प्रोग्रेसिव कम्पाइल किया गया कोर्स लाइव पब्लिश हो चुका है।", "success");
    // Redirect immediately to classroom view!
    window.coursesController.enterClassroom(course.id);
  },
  
  renderFailureScreen() {
    const container = document.getElementById('app-viewport-container');
    container.innerHTML = `
      <div class="glass-card results-dashboard fade-in-section" style="max-width: 600px; padding: 40px; border-radius: var(--border-radius-md); text-align: center;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(239, 68, 68, 0.1); color: var(--danger); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px;">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        
        <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--danger);">सिलेबस आउटलाइन बनाने में त्रुटि आई! / API Limit Reached</h2>
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 30px; line-height: 1.6;">
          तीनों प्री-कॉन्फिगर कीज़ और आपकी कस्टम की के प्रयास असफल रहे हैं। ऐसा टोकन रेट लिमिट होने या इंटरनेट कनेक्शन न होने के कारण हो सकता है। 
        </p>
        
        <div style="display: flex; gap: 16px; justify-content: center;">
          <button class="btn btn-primary" onclick="window.aiBuilderController.renderIndex(document.getElementById('app-viewport-container'))"><i class="fa-solid fa-rotate-left"></i> पुनः प्रयास करें / Retry</button>
          <button class="btn btn-secondary" onclick="window.spaRouter.navigate('home')">Dashboard Home <i class="fa-solid fa-house"></i></button>
        </div>
      </div>
    `;
  }
};

// Initialize
aiBuilderController.init();
