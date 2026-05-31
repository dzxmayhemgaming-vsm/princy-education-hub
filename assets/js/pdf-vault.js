/* 
 * PDF REPOSITORY & READER CONTROLLER - PRINCY EDUCATION HUB
 * Subject filters, search engine, file downloader simulations, and integrated mockup PDF reader
 */

const pdfVaultController = {
  currentSubjectFilter: 'all',
  activePdf: null,
  activePage: 1,
  
  // Mockup pages text content bank to make the reading experience feel 100% REAL
  pdfMockupPages: {
    'pdf-1': [
      `<h2>राजस्थान का भूगोल - भाग 1: सामान्य परिचय</h2>
       <div class="study-section">
         <h3>1. राजस्थान की स्थिति एवं विस्तार (Location & Area)</h3>
         <p>राजस्थान क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य है (1 नवंबर 2000 को मध्य प्रदेश से छत्तीसगढ़ के अलग होने के बाद)।</p>
         <ul class="study-bullets">
           <li><b>कुल क्षेत्रफल:</b> 3,42,239 वर्ग किलोमीटर (देश का 10.41% हिस्सा)</li>
           <li><b>आकृति:</b> विषमकोणीय चतुर्भुज या पतंगाकार (Rhombus)</li>
           <li><b>अक्षांशीय विस्तार:</b> 23°3' उत्तरी अक्षांश से 30°12' उत्तरी अक्षांश तक</li>
           <li><b>देशान्तरीय विस्तार:</b> 69°30' पूर्वी देशान्तर से 78°17' पूर्वी देशान्तर तक</li>
         </ul>
       </div>
       <div class="study-section">
         <h3>2. राजस्थान के सीमावर्ती बिंदु</h3>
         <p>उत्तरी छोर पर 'कोणा' गाँव (गंगानगर) तथा दक्षिणी छोर पर 'बोरकुंडा' गाँव (बांसवाड़ा) स्थित है। पश्चिमी छोर पर 'कटरा' गाँव (जैसलमेर) तथा पूर्वी छोर पर 'सिलाना' गाँव (धौलपुर) स्थित है।</p>
       </div>`,
      `<h2>राजस्थान का भूगोल - भाग 1: भौतिक प्रदेश</h2>
       <div class="study-section">
         <h3>3. अरावली पर्वतीय प्रदेश (Aravali Region)</h3>
         <p>अरावली पर्वतमाला विश्व की सबसे प्राचीनतम वलित पर्वत श्रृंखलाओं में से एक है। यह प्री-कैम्ब्रियन काल की मानी जाती है।</p>
         <ul class="study-bullets">
           <li><b>कुल लम्बाई:</b> 692 किमी (गुजरात के पालनपुर से दिल्ली तक)</li>
           <li><b>राजस्थान में लम्बाई:</b> 550 किमी (खेडब्रह्मा से खेतड़ी तक - कुल लंबाई का 80%)</li>
           <li><b>सर्वोच्च चोटी:</b> गुरुशिखर (1722 मीटर), सिरोही जिले में माउंट आबू में स्थित है।</li>
         </ul>
       </div>
       <div class="study-section">
         <h3>4. थार का मरुस्थल (Thar Desert)</h3>
         <p>यह विश्व का सर्वाधिक आबादी और जैव विविधता वाला मरुस्थल है। इसे 'रूक्ष क्षेत्र' भी कहा जाता है।</p>
       </div>`
    ],
    'pdf-3': [
      `<h2>REET बाल मनोविज्ञान व शिक्षाशास्त्र नोट्स</h2>
       <div class="study-section">
         <h3>1. जीन पियाजे का संज्ञानात्मक विकास सिद्धांत (Piaget Cognitive Theory)</h3>
         <p>जीन पियाजे स्विट्जरलैंड के मनोवैज्ञानिक थे। उन्होंने बच्चों को 'नन्हें वैज्ञानिक' कहा है जो दुनिया के बारे में अपने सिद्धांतों की रचना स्वयं करते हैं।</p>
         <ul class="study-bullets">
           <li><b>स्कीमा (Schema):</b> सूचनाओं का संगठित पैकेट या मानसिक ढांचा।</li>
           <li><b>अनुकूलन (Adaptation):</b> वातावरण के साथ सामंजस्य बैठाना। इसके दो हिस्से हैं: आत्मसातीकरण (Assimilation) तथा समविष्टीकरण/समायोजन (Accommodation)।</li>
         </ul>
       </div>`,
      `<h2>REET बाल मनोविज्ञान - विकास की अवस्थाएं</h2>
       <div class="study-section">
         <h3>2. पियाजे की संज्ञानात्मक विकास की 4 अवस्थाएं</h3>
         <ul class="study-bullets">
           <li><b>संवेदी-पेशीय अवस्था (Sensory-Motor Stage: 0-2 वर्ष):</b> बच्चा ज्ञानेंद्रियों के माध्यम से सीखता है। वस्तु स्थायित्व (Object Permanence) का गुण आता है।</li>
           <li><b>पूर्व-संक्रियात्मक अवस्था (Pre-Operational Stage: 2-7 वर्ष):</b> प्रतीकात्मक विचार आते हैं, अहंकेन्द्रित चिंतन (Egocentrism) और जीववाद (Animism) का विकास।</li>
         </ul>
       </div>`
    ],
    'pdf-7': [
      `<h2>सामान्य हिंदी व्याकरण: संधि विचार</h2>
       <div class="study-section">
         <h3>1. संधि की परिभाषा एवं भेद</h3>
         <p>दो निकटवर्ती वर्णों के परस्पर मेल से जो विकार (परिवर्तन) उत्पन्न होता है, उसे संधि कहते हैं। मुख्य रूप से इसके 3 भेद हैं:</p>
         <ul class="study-bullets">
           <li><b>स्वर संधि:</b> स्वरों के मेल से होने वाला परिवर्तन।</li>
           <li><b>व्यंजन संधि:</b> व्यंजन के साथ स्वर या व्यंजन के मेल से होने वाला परिवर्तन।</li>
           <li><b>विसर्ग संधि:</b> विसर्ग के साथ स्वर या व्यंजन के मेल से होने वाला परिवर्तन।</li>
         </ul>
       </div>`,
      `<h2>सामान्य हिंदी: स्वर संधि के भेद</h2>
       <div class="study-section">
         <h3>2. स्वर संधि के 5 उपभेद</h3>
         <ul class="study-bullets">
           <li><b>दीर्घ संधि:</b> समान स्वर मिलकर दीर्घ हो जाते हैं (अ/आ + अ/आ = आ)। उदाहरण: देव + आलय = देवालय।</li>
           <li><b>गुण संधि:</b> अ/आ का मेल इ/ई से होने पर 'ए', उ/ऊ से होने पर 'ओ', ऋ से होने पर 'अर' बनता है। उदाहरण: सुर + ईश = सुरेश।</li>
           <li><b>वृद्धि संधि:</b> अ/आ का मेल ए/ऐ से होने पर 'ऐ' और ओ/औ से होने पर 'औ' बनता है। उदाहरण: सदा + एव = सदैव।</li>
         </ul>
       </div>`
    ]
  },
  
  init() {
    window.pdfVaultController = this;
    this.bindViewerEvents();
  },
  
  renderIndex(container) {
    const subjects = ["All", "Rajasthan GK", "Previous Papers", "Psychology", "Hindi", "Current Affairs"];
    
    let filtersHtml = subjects.map(s => {
      const activeClass = s.toLowerCase() === this.currentSubjectFilter.toLowerCase() ? 'active' : '';
      const subjectParam = s === 'All' ? 'all' : s;
      return `
        <li>
          <button class="filter-btn ${activeClass}" onclick="window.pdfVaultController.filterFiles('${subjectParam}')">
            <i class="fa-solid fa-angle-right"></i> ${s}
          </button>
        </li>
      `;
    }).join('');
    
    container.innerHTML = `
      <div class="fade-in-section">
        <div class="section-header">
          <div>
            <span class="section-subtitle">Study Material Vault</span>
            <h2 class="section-title">फ्री शार्ट <span>पीडीएफ नोट्स (PDF Library)</span></h2>
          </div>
        </div>
        
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 30px; max-width: 800px;">
          विशेषज्ञ अध्यापकों द्वारा तैयार की गई परीक्षा उपयोगी अध्ययन सामग्री। आप इन पीडीएफ को ऑनलाइन पढ़ सकते हैं या ऑफ़लाइन डाउनलोड कर सकते हैं।
        </p>
        
        <div class="pdf-vault-container">
          <!-- Left side filters -->
          <div class="vault-sidebar">
            <div class="glass-card" style="padding: 24px; border-radius: var(--border-radius-md);">
              <h3 class="filter-group-title"><i class="fa-solid fa-filter"></i> विषय सूची / Subjects</h3>
              <ul class="filter-list">
                ${filtersHtml}
              </ul>
            </div>
          </div>
          
          <!-- Right side file listing -->
          <div class="pdf-grid-container">
            <div class="glass-card" style="padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; border-radius: var(--border-radius-sm);">
              <span style="font-size: 0.85rem; color: var(--text-sub); font-weight: 600;" id="pdf-counter-tracker">Showing all PDF files</span>
              <input type="text" placeholder="सर्च नोट्स..." style="padding: 6px 14px; border-radius: 6px; background: var(--card-border); border: 1px solid var(--card-border); color: var(--text-main); font-size: 0.85rem;" id="pdf-vault-search">
            </div>
            
            <div class="pdf-files-grid" id="pdf-cards-render-grid">
              <!-- Render cards dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.renderFilesGrid();
    
    // Bind search field
    const search = document.getElementById('pdf-vault-search');
    search.addEventListener('input', (e) => {
      this.renderFilesGrid(e.target.value.toLowerCase().trim());
    });
  },
  
  filterFiles(subject) {
    this.currentSubjectFilter = subject;
    
    // Reset filters visual state
    const filters = document.querySelectorAll('.vault-sidebar .filter-btn');
    filters.forEach(btn => {
      if (btn.innerText.trim().toLowerCase() === (subject === 'all' ? 'all' : subject).toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    this.renderFilesGrid();
  },
  
  renderFilesGrid(searchQuery = '') {
    const grid = document.getElementById('pdf-cards-render-grid');
    if (!grid) return;
    
    let filtered = window.EXAMS_DATABASE.pdfs;
    
    // Subject Filter
    if (this.currentSubjectFilter !== 'all') {
      filtered = filtered.filter(p => p.subject.toLowerCase() === this.currentSubjectFilter.toLowerCase());
    }
    
    // Text query search
    if (searchQuery) {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(searchQuery) || p.subject.toLowerCase().includes(searchQuery));
    }
    
    document.getElementById('pdf-counter-tracker').innerText = `कुल ${filtered.length} पीडीएफ फाइलें मिलीं`;
    
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-sub);">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 12px; color: var(--card-border);"></i>
          <h3>कोई अध्ययन सामग्री नहीं मिली!</h3>
          <p style="font-size: 0.9rem;">कृपया किसी अन्य विषय को फ़िल्टर करें या नया कीवर्ड सर्च करें।</p>
        </div>
      `;
      return;
    }
    
    grid.innerHTML = filtered.map(p => `
      <div class="glass-card pdf-card" style="border-radius: var(--border-radius-md);">
        <div class="pdf-card-top">
          <div class="pdf-icon-box"><i class="fa-regular fa-file-pdf"></i></div>
          <div class="pdf-card-info">
            <span class="pdf-subject-badge">${p.subject}</span>
            <h3 style="margin-top: 6px;">${p.title}</h3>
          </div>
        </div>
        
        <div class="pdf-card-bottom">
          <div class="pdf-meta-size">
            Size: ${p.size}
            <span><i class="fa-solid fa-download"></i> ${p.downloadCount} DLs</span>
          </div>
          
          <div class="pdf-action-group">
            <button class="pdf-action-btn" title="View Notes in Browser" onclick="window.pdfVaultController.openPdfViewer('${p.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button class="pdf-action-btn" title="Download PDF Notes" onclick="window.pdfVaultController.downloadFile('${p.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },
  
  downloadFile(pdfId) {
    const pdf = window.EXAMS_DATABASE.pdfs.find(p => p.id === pdfId);
    if (!pdf) return;
    
    window.showToastAlert(`Downloading ${pdf.title}... Please wait.`, 'warning');
    
    setTimeout(() => {
      window.showToastAlert(`Downloaded successfully: ${pdf.title} (${pdf.size}) saved.`, 'success');
    }, 2000);
  },
  
  openPdfViewer(pdfId) {
    const pdf = window.EXAMS_DATABASE.pdfs.find(p => p.id === pdfId);
    if (!pdf) return;
    
    this.activePdf = pdf;
    this.activePage = 1;
    
    const modal = document.getElementById('viewer-modal');
    document.getElementById('pdf-viewer-title').innerText = pdf.title;
    
    modal.classList.add('active');
    this.renderMockPageText();
  },
  
  renderMockPageText() {
    const area = document.getElementById('pdf-viewer-content-area');
    const pageTxtBank = this.pdfMockupPages[this.activePdf.id] || [
      `<h2>${this.activePdf.title}</h2>
       <div class="study-section">
         <h3>सामान्य अध्ययन गाइड / Detailed Syllabus Reference</h3>
         <p>यह राजस्थान भर्ती परीक्षाओं के लिए शार्ट रिवीज़न गाइड का पृष्ठ 1 है। परीक्षा के दृष्टिकोण से महत्वपूर्ण अवधारणाओं का संग्रह।</p>
         <ul class="study-bullets">
           <li><b>विषय:</b> ${this.activePdf.subject}</li>
           <li><b>कुल फाइल आकार:</b> ${this.activePdf.size}</li>
           <li><b>अनुशंसित परीक्षा:</b> RAS, REET, SI, Patwari, VDO</li>
         </ul>
       </div>
       <p>शार्ट रिवीज़न नोट्स छात्रों को अंतिम समय में त्वरित दोहराव में अत्यंत सहायता प्रदान करते हैं। महत्वपूर्ण आंकड़ों को अलग से रेखांकित किया गया है।</p>`
    ];
    
    const totalPages = pageTxtBank.length;
    document.getElementById('pdf-viewer-pages').innerText = `Page ${this.activePage} of ${totalPages}`;
    
    area.innerHTML = `
      <div class="reader-study-page">
        ${pageTxtBank[this.activePage - 1]}
      </div>
    `;
    
    // Toggle next/prev button states
    document.getElementById('pdf-prev-page-btn').disabled = this.activePage === 1;
    document.getElementById('pdf-next-page-btn').disabled = this.activePage === totalPages;
  },
  
  bindViewerEvents() {
    const closeBtn = document.getElementById('pdf-viewer-close-btn');
    const prevBtn = document.getElementById('pdf-prev-page-btn');
    const nextBtn = document.getElementById('pdf-next-page-btn');
    
    closeBtn.addEventListener('click', () => {
      document.getElementById('viewer-modal').classList.remove('active');
    });
    
    prevBtn.addEventListener('click', () => {
      if (this.activePage > 1) {
        this.activePage--;
        this.renderMockPageText();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      const pageTxtBank = this.pdfMockupPages[this.activePdf.id] || [1];
      if (this.activePage < pageTxtBank.length) {
        this.activePage++;
        this.renderMockPageText();
      }
    });
  }
};

// Initialize
pdfVaultController.init();
