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
         <p>अरावली पर्वतमाला विश्व की सबसे प्राचीनतम वलित पर्वत श्रृंखलाओं में से एक है। यह प्री-कैम्振ियन काल की मानी जाती है।</p>
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
    'pdf-2': [
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 1)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q1. हाल ही में राजस्थान के डेगाना (नागौर) क्षेत्र में किस धातु के विशाल भंडार खोजे गए हैं, जो भारत की आयात निर्भरता को कम कर सकते हैं?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Recently, massive reserves of which metal have been discovered in the Degana (Nagaur) area of Rajasthan, which can reduce India's import dependency?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. तांबा (Copper)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. लिथियम (Lithium)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. कोबाल्ट (Cobalt)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. टंगस्टन (Tungsten)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           GSI (भारतीय भूवैज्ञानिक सर्वेक्षण) ने नागौर जिले के डेगाना की रेवंत पहाड़ी में देश के दूसरे और सबसे बड़े लिथियम भंडार की खोज की है। यह भारत की इलेक्ट्रॉनिक एवं बैटरी उद्योग की मांग को पूरा करने में महत्वपूर्ण योगदान देगा।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q2. राजस्थान का प्रसिद्ध 'चन्द्रभागा कार्तिक मेला' प्रतिवर्ष किस स्थान पर आयोजित किया जाता है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Where is the famous 'Chandrabhaga Kartik Fair' of Rajasthan organized every year?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>A. झालरापाटन, झालावाड़</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. पुष्कर, अजमेर</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. डीग, भरतपुर</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. कोलायत, बीकानेर</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           चन्द्रभागा मेला प्रतिवर्ष कार्तिक पूर्णिमा (अक्टूबर-नवंबर) को झालावाड़ के झालरापाटन में चन्द्रभागा नदी के तट पर लगता है। यह मेला विशेष रूप से मालवी नस्ल के पशु व्यापार के लिए विख्यात है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q3. अरावली पर्वतमाला की निम्नलिखित पर्वत चोटियों को उनकी ऊँचाई के अनुसार घटते क्रम में व्यवस्थित करने पर तीसरी सबसे ऊँची चोटी कौन सी होगी?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Arranging the following peaks of Aravali range in descending order of their height, which is the third highest peak?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. शेर (Sher)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. जरगा (Jarga)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. देलवाड़ा (Delwara)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. अचलगढ़ (Achalgarh)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           अरावली की चोटियों का घटता क्रम है: गुरुशिखर (1722 मीटर), शेर (1597 मीटर), देलवाड़ा (1442 मीटर), जरगा (1431 मीटर), और अचलगढ़ (1380 मीटर)। इस क्रम में देलवाड़ा (सिरोही) तीसरी सबसे ऊँची चोटी है।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 2)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q4. रणथंभौर के चौहान राजवंश का संस्थापक कौन था जिसने 1194 ई. में शासन की नींव रखी?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Who was the founder of the Chauhan dynasty of Ranthambore who laid the foundation of the rule in 1194 AD?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. हम्मीरदेव चौहान (Hammirdev)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. गोविंदराज चौहान (Govindraj)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. पृथ्वीराज चौहान तृतीय (Prithviraj III)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. वीरनारायण चौहान (Veernarayan)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           पृथ्वीराज चौहान तृतीय के पुत्र गोविंदराज चौहान ने कुतुबुद्दीन ऐबक की सहायता से रणथंभौर में चौहान राजवंश की स्थापना की थी।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q5. फेनिलकीटोनूरिया (Phenylketonuria - PKU) रोग के संदर्भ में कौन सा कथन सत्य है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Which statement is true regarding Phenylketonuria (PKU) disease?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>A. यह एक जन्मजात उपापचयी त्रुटि है</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. यह संक्रामक रोग है</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. यह जीवाणु जनित रोग है</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. यह केवल वयस्कों में होता है</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           फेनिलकीटोनूरिया एक आनुवंशिक विकार (Autosomal Recessive disorder) है, जिसमें शरीर फेनिलएलनिन नामक अमीनो एसिड का उपापचय करने वाले एंजाइम (PAH) का उत्पादन नहीं कर पाता।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q6. राजस्थान के किस जिले के 'बगदरी' गाँव में भारत के प्रथम प्रधानमंत्री जवाहरलाल नेहरू ने पंचायती राज व्यवस्था का औपचारिक उद्घाटन किया था?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">In which district's 'Bagdari' village did India's first PM Jawaharlal Nehru formally inaugurate the Panchayati Raj system?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>A. नागौर (Nagaur)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. जयपुर (Jaipur)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. अजमेर (Ajmer)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. सीकर (Sikar)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           2 अक्टूबर 1959 को तत्कालीन प्रधानमंत्री जवाहरलाल नेहरू ने नागौर जिले के बगदरी गाँव से बलवंत राय मेहता समिति की सिफारिशों के आधार पर त्रिस्तरीय पंचायती राज व्यवस्था की शुरुआत की थी।
         </div>
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
    'pdf-5': [
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 1)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q1. राजस्थान की वास्तुकला की बेजोड़ मिसाल 'पटवों की हवेली' (Patwon ki Haveli) कहाँ स्थित है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Where is the unique specimen of Rajasthan's architecture 'Patwon ki Haveli' situated?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. जोधपुर</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. बीकानेर</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. जैसलमेर</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. जयपुर</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           पटवों की हवेली जैसलमेर में स्थित है। यह पाँच हवेलियों का समूह है, जिसका निर्माण व्यवसायी गुमान चन्द पटवा ने 1805 में अपने पाँच पुत्रों के लिए करवाया था। यह अपनी बारीक नक्काशी और पीले बलुआ पत्थर के लिए प्रसिद्ध है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q2. हल्दीघाटी के ऐतिहासिक युद्ध (1576 ई.) में महाराणा प्रताप की सेना के 'हरावल' (अग्रिम पंक्ति) दस्ते का नेतृत्व किसने किया था?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Who led the 'Harawal' (frontline) squad of Maharana Pratap's army in the historic Battle of Haldighati (1576 AD)?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. झाला बीदा (Jhala Beeda)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. हकीम खां सूरी (Hakim Khan Suri)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. मानसिंह सोलंकी (Man Singh)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. भामाशाह (Bhama Shah)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           महाराणा प्रताप की सेना के हरावल (अग्रगामी दस्ता) का नेतृत्व एकमात्र मुस्लिम सेनापति हकीम खां सूरी ने किया था, जो मुगलों के खिलाफ दृढ़ता से लड़े थे।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q3. राजस्थान पंचायती राज अधिनियम के तहत एक पंचायत समिति का प्रधान (Pradhan) अपना इस्तीफा किसे सौंपता है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Under the Rajasthan Panchayati Raj Act, to whom does a Pradhan of a Panchayat Samiti submit his resignation?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>A. जिला प्रमुख (Zila Pramukh)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. विकास अधिकारी (BDO)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. जिला कलेक्टर (District Collector)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. संभागीय आयुक्त (Divisional Commissioner)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           पंचायत समिति का प्रधान अपना इस्तीफा लिखित में संबंधित 'जिला प्रमुख' को सौंपता है, जबकि उप-प्रधान और सदस्य अपना इस्तीफा 'प्रधान' को सौंपते हैं।
         </div>
       </div>`,
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 2)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q4. राजस्थान के एकीकरण के प्रथम चरण में गठित 'मत्स्य संघ' (Matsya Union) में कौन-सी रियासतें शामिल की गई थीं?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Which princely states were included in the 'Matsya Union' formed during the first stage of the integration of Rajasthan?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. जयपुर, जोधपुर, बीकानेर, जैसलमेर</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. कोटा, बूंदी, झालावाड़, टोंक</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. अलवर, भरतपुर, धौलपुर, करौली</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. उदयपुर, डूंगरपुर, बांसवाड़ा</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           18 मार्च 1948 को राजस्थान एकीकरण के प्रथम चरण में अलवर, भरतपुर, धौलपुर और करौली रियासत तथा नीमराणा ठिकाने को मिलाकर मत्स्य संघ का गठन किया गया था।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q5. लूनी नदी घाटी प्रदेश को किस अन्य भौगोलिक उपनाम से भी जाना जाता है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">By what other geographical nickname is the Luni River Basin region also known?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. शेखावाटी प्रदेश</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. गोडवाड़ प्रदेश (Godwar Region)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. छप्पन का मैदान</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. वागड़ प्रदेश</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           लूनी नदी और उसकी सहायक नदियों द्वारा सिंचित अर्द्ध-शुष्क मरुस्थलीय मैदानी भाग (जालौर, बाड़मेर, पाली, जोधपुर का दक्षिणी भाग) को 'गोडवाड़ प्रदेश' कहा जाता है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q6. राजस्थान के हाड़ौती पठार क्षेत्र (कोटा, बूंदी, बारां, झालावाड़) में मुख्य रूप से किस प्रकार की मिट्टी पाई जाती है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Which type of soil is predominantly found in the Hadoti Plateau region of Rajasthan?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. रेतीली बलुई मिट्टी (Aridisols)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. काली मटियार मिट्टी (Vertisols)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. लाल लोमी मिट्टी (Alfisols)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. जलोढ़ मिट्टी (Inceptisols)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           हाड़ौती पठार में दक्कन लावा निर्मित मध्यम काली मिट्टी पायी जाती है, जिसे वैज्ञानिक वर्गीकरण में 'वर्टीसोल्स' (Vertisols) कहा जाता है। यह कपास, सोयाबीन और मसालों की खेती के लिए सर्वोत्तम होती है।
         </div>
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
    ],
    'pdf-8': [
      `<h2>REET Level-2 2022 Solved Paper (Page 1)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q1. बालक की बुद्धि लब्धि (IQ) मापने का सही और प्रामाणिक सूत्र सर्वप्रथम किसने संशोधित कर पूर्ण रूप दिया?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Who first revised and perfected the correct formula for measuring a child's Intelligence Quotient (IQ)?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. अल्फ्रेड बिने (Alfred Binet)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. विलियम स्टर्न (William Stern)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. लेविस टर्मन (Lewis Terman)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. डेविड वेचस्लर (David Wechsler)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           बुद्धि लब्धि (IQ) की अवधारणा विलियम स्टर्न ने 1912 में दी थी (MA/CA), जिसे 1916 में लेविस टर्मन (स्टैनफोर्ड यूनिवर्सिटी) ने संशोधित कर 100 से गुणा करके पूर्ण रूप दिया: IQ = (Mental Age / Chronological Age) * 100.
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q2. अधिगम के प्रसिद्ध 'प्रयास और भूल' (Trial and Error Theory) सिद्धांत के प्रतिपादक कौन थे जिन्होंने बिल्ली पर प्रयोग किया था?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Who was the proponent of the famous 'Trial and Error Theory' of learning, who experimented on a cat?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. बी.एफ. स्किनर</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. इवान पावलव</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. एडवर्ड एल. थार्नडाइक</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. वोल्फगैंग कोहलर</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           अमेरिकी मनोवैज्ञानिक एडवर्ड एल. थार्नडाइक ने सीखने का 'प्रयास एवं त्रुटि' का सिद्धांत दिया। उन्होंने बिल्ली पर प्रयोग कर उद्दीपक-अनुक्रिया (S-R Bond) संबंध स्थापित किया।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q3. शिक्षा का अधिकार अधिनियम (RTE Act, 2009) के अनुसार, प्राथमिक एवं उच्च प्राथमिक स्तर पर शिक्षकों के लिए प्रति सप्ताह तैयारी सहित कार्य के न्यूनतम घंटे कितने निर्धारित हैं?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">According to the Right to Education Act (RTE Act, 2009), what are the minimum hours of work per week, including preparation, prescribed for teachers?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. 40 घंटे</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. 42 घंटे</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. 45 घंटे</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. 48 घंटे</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           RTE Act 2009 की अनुसूची के अनुसार, एक शिक्षक के लिए प्रति सप्ताह न्यूनतम 45 कार्य घंटे (तैयारी के घंटों सहित) निर्धारित किए गए हैं।
         </div>
       </div>`,
      `<h2>REET Level-2 2022 Solved Paper (Page 2)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q4. जीन पियाजे के संज्ञानात्मक विकास सिद्धांत के अनुसार, किस अवस्था में बालक में 'वस्तु स्थायित्व' (Object Permanence) का गुण विकसित होता है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">According to Jean Piaget's theory of cognitive development, in which stage does a child develop 'Object Permanence'?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>A. संवेदी-पेशीय अवस्था (Sensory-Motor Stage)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. पूर्व-संक्रियात्मक अवस्था (Pre-Operational Stage)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. मूर्त-संक्रियात्मक अवस्था (Concrete Operational Stage)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. औपचारिक-संक्रियात्मक अवस्था (Formal Operational Stage)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           पियाजे की प्रथम अवस्था संवेदी-पेशीय (0 से 2 वर्ष) के अंत (लगभग 18-24 महीने) में बच्चे में वस्तु स्थायित्व का गुण विकसित हो जाता है, जहाँ वह जानता है कि वस्तुएं दिखाई न देने पर भी मौजूद रहती हैं।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q5. लेव वायगोत्स्की के सामाजिक-सांस्कृतिक सिद्धांत के अनुसार, एक वयस्क द्वारा बच्चे की सीखने में दी जाने वाली अस्थायी सहायता (Temporary Support) को क्या कहा जाता है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">According to Lev Vygotsky's socio-cultural theory, what is the temporary support given by an adult in a child's learning called?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. आत्मसातीकरण (Assimilation)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. पाड़ या ढांचा (Scaffolding / मचान)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. समीपस्थ विकास का क्षेत्र (ZPD)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. अनुबंधन (Conditioning)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           वायगोत्स्की के अनुसार, बच्चे को उसकी क्षमता से अधिक जटिल कार्यों में दी जाने वाली अस्थायी सामाजिक सहायता या इशारों को 'पाड़' या 'ढांचा' (Scaffolding) कहा जाता है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q6. सृजनात्मकता (Creativity) की पहचान के लिए मुख्य रूप से किस प्रकार के चिंतन (Thinking) की आवश्यकता होती है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Which type of thinking is primarily required for identifying Creativity?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. अभिसारी चिंतन (Convergent Thinking)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. अपसारी चिंतन (Divergent Thinking)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. तर्कपूर्ण चिंतन (Logical Thinking)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. आत्मकेंद्रित चिंतन (Egocentric Thinking)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           सृजनात्मकता का सीधा संबंध जे.पी. गिलफोर्ड द्वारा प्रतिपादित 'अपसारी चिंतन' (Divergent Thinking) से है, जिसमें एक ही समस्या के कई नए, मौलिक एवं लीक से हटकर समाधान सोचे जाते हैं।
         </div>
       </div>`
    ],
    'pdf-9': [
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 1)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q1. व्याकरण की दृष्टि से 'वागीश' शब्द का सही संधि-विच्छेद और संधि का नाम क्या होगा?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">From the grammar perspective, what is the correct sandhi-split and sandhi-type of the word 'Vageesh'?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. वाग + ईश (दीर्घ संधि)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. वाक् + ईश (व्यंजन संधि)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. वाक् + ईश (स्वर संधि)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. वाच + ईश (विसर्ग संधि)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           वागीश = वाक् + ईश। यहाँ व्यंजन संधि का नियम लागू होता है, जिसके अनुसार वर्ग के प्रथम वर्ण (क) के बाद यदि कोई स्वर आए, तो वह अपने ही वर्ग के तीसरे वर्ण (ग) में बदल जाता है (क -> ग)।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q2. किस शब्द में 'उप' उपसर्ग का प्रयोग उसके व्याकरणिक नियमों के अनुसार नहीं हुआ है या मूल शब्द का हिस्सा है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">In which word, the prefix 'Up' has not been used according to its grammatical rules or is a part of the root word?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. उपकार (Upkar)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. उपदेश (Updesh)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. उपन्यास (Upanyas)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>D. उचित (Uchit)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           'उचित' एक स्वतंत्र मूल शब्द है, इसमें 'उप' उपसर्ग नहीं है। जबकि उपकार (उप + कार), उपदेश (उप + देश) और उपन्यास (उप + नि + आस) में 'उप' उपसर्ग जुड़ा हुआ है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q3. निम्नलिखित विकल्पों में से 'गुण स्वर संधि' का सही उदाहरण कौन सा है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Which is the correct example of 'Guna Swar Sandhi' from the following options?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. सदैव (Sadaiv)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">B. गिरीश (Gireesh)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>C. महेंद्र (Mahendra)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. यद्यपि (Yadyapi)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           महेंद्र = महा + इंद्र (आ + इ = ए)। यह गुण संधि का नियम है। सदैव (सदा + एव - वृद्धि संधि), गिरीश (गिरि + ईश - दीर्घ संधि) तथा यद्यपि (यदि + अपि - यण संधि) हैं।
         </div>
       </div>`,
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 2)</h2>
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q4. 'पेड़ से पत्ता गिरा' अथवा 'गंगा हिमालय से निकलती है' वाक्यों में रेखांकित शब्द 'से' में कौन सा कारक प्रयुक्त हुआ है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">Which case (Karak) is used in the word 'se' in sentences 'Tree sheds leaf' or 'Ganges originates from Himalayas'?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. करण कारक (Karan Karak)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. अपादान कारक (Apadan Karak)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. सम्प्रदान कारक (Sampradan Karak)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. अधिकरण कारक (Adhikaran Karak)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           अपादान कारक का विभक्ति चिह्न 'से' होता है, जो किसी वस्तु के दूसरी वस्तु से अलग होने (Separation), दूरी, डर या तुलना का बोध कराता है। यहाँ अलग होने का भाव स्पष्ट है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q5. निम्नलिखित में से किस विकल्प में शब्द की वर्तनी पूर्णतः शुद्ध लिखी गई है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">In which of the following options is the spelling of the word completely correct?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. उज्वल (Ujjwal - incorrect)</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. उज्ज्वल (Ujjwal - correct)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. कवित्री (Kavitri - incorrect)</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. श्रंगार (Shringar - incorrect)</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           'उज्ज्वल' की शुद्ध वर्तनी में दोनों 'ज' अर्ध (आधे) होते हैं (उत् + ज्वल = उज्ज्वल)। 'कवयित्री' शुद्ध रूप है (न कि कवित्री/कविइत्री)। 'शृंगार' शुद्ध रूप होता है।
         </div>
       </div>
       
       <div class="solved-question-card" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 22px; background-color: #f8fafc; text-align: left;">
         <div class="question-header" style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 12px; line-height: 1.5;">
           Q6. श्रुतिसम भिन्नार्थक शब्द युग्म 'अनिल' और 'अनल' का क्रमशः सही अर्थ भेद क्या है?<br><span style="color: #475569; font-weight: 500; font-size: 0.9rem;">What is the correct meaning difference of the word pair 'Anil' and 'Anal' respectively?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">A. आग और हवा</div>
           <div class="review-option-correct" style="padding: 8px 12px; border: 1.5px solid #10b981; border-radius: 6px; background-color: #ecfdf5; font-size: 0.88rem; color: #065f46; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
             <span>B. हवा और आग (Wind and Fire)</span>
             <span style="background-color: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Correct</span>
           </div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">C. पानी और आग</div>
           <div style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background-color: #fff; font-size: 0.88rem; color: #334155;">D. हवा और पानी</div>
         </div>
         <div class="review-explanation" style="border-left: 3.5px solid #3b82f6; padding-left: 12px; margin-top: 10px; font-size: 0.85rem; color: #475569; line-height: 1.6;">
           <strong style="color: #1e3a8a; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</strong>
           'अनिल' का अर्थ पवन/हवा होता है और 'अनल' का अर्थ पावक/आग होता है। अतः सही विकल्प (हवा और आग) है।
         </div>
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
