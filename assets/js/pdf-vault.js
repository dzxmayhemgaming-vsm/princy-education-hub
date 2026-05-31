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
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section A: Rajasthan Geography (राजस्थान का भूगोल)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q1. हाल ही में राजस्थान के डेगाना (नागौर) क्षेत्र में किस धातु के विशाल भंडार खोजे गए हैं, जो भारत की आयात निर्भरता को कम कर सकते हैं?
           <span>Recently, massive reserves of which metal have been discovered in the Degana (Nagaur) area of Rajasthan?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. तांबा (Copper)</div>
           <div class="question-option correct">
             <span>B. लिथियम (Lithium)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. कोबाल्ट (Cobalt)</div>
           <div class="question-option">D. टंगस्टन (Tungsten)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           GSI (भारतीय भूवैज्ञानिक सर्वेक्षण) ने नागौर जिले के डेगाना की रेवंत पहाड़ी में देश के सबसे बड़े लिथियम भंडार की खोज की है। यह बैटरी उद्योग की मांग को पूरा करने में महत्वपूर्ण योगदान देगा।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q2. राजस्थान का प्रसिद्ध 'चन्द्रभागा कार्तिक मेला' प्रतिवर्ष किस स्थान पर आयोजित किया जाता है?
           <span>Where is the famous 'Chandrabhaga Kartik Fair' of Rajasthan organized every year?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. झालरापाटन, झालावाड़</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. पुष्कर, अजमेर</div>
           <div class="question-option">C. डीग, भरतपुर</div>
           <div class="question-option">D. कोलायत, बीकानेर</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           चन्द्रभागा मेला प्रतिवर्ष कार्तिक पूर्णिमा (अक्टूबर-नवंबर) को झालावाड़ के झालरापाटन में चन्द्रभागा नदी के तट पर लगता है। यह मालवी नस्ल के पशु व्यापार के लिए प्रसिद्ध है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q3. अरावली पर्वतमाला की निम्नलिखित पर्वत चोटियों को उनकी ऊँचाई के अनुसार घटते क्रम में व्यवस्थित करने पर तीसरी सबसे ऊँची चोटी कौन सी होगी?
           <span>Arranging the following peaks of Aravali range in descending order of height, which is the third highest?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. शेर (Sher - 1597m)</div>
           <div class="question-option">B. जरगा (Jarga - 1431m)</div>
           <div class="question-option correct">
             <span>C. देलवाड़ा (Delwara - 1442m)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. अचलगढ़ (Achalgarh - 1380m)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           अरावली की चोटियों का घटता क्रम है: गुरुशिखर (1722 मीटर), शेर (1597 मीटर), देलवाड़ा (1442 मीटर), जरगा (1431 मीटर), और अचलगढ़ (1380 मीटर)। इस क्रम में देलवाड़ा (सिरोही) तीसरी सबसे ऊँची चोटी है।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 2)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section B: Rivers & Lakes (नदियां व जल परियोजनाएं)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q4. अनास, सोम तथा एरू निम्नलिखित में से किस मुख्य नदी की सहायक नदियां हैं?
           <span>Anas, Som and Eru are tributaries of which of the following main rivers?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. माही नदी (Mahi)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. बनास नदी (Banas)</div>
           <div class="question-option">C. चम्बल नदी (Chambal)</div>
           <div class="question-option">D. लूनी नदी (Luni)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           सोम, जाखम, अनास, हरण, चाप, मोरेन तथा एरू माही नदी की सहायक नदियां हैं। माही नदी मध्य प्रदेश से निकलकर राजस्थान में 'यू' (U) आकार में बहती हुई खंभात की खाड़ी में गिरती है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q5. पश्चिमी राजस्थान में पेयजल आपूर्ति और सिंचाई के लिए निर्मित प्रसिद्ध 'जवाई बाँध' (Jawai Dam) किस जिले में स्थित है?
           <span>In which district is the famous 'Jawai Dam' constructed for drinking water and irrigation in Western Rajasthan?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. जोधपुर (Jodhpur)</div>
           <div class="question-option correct">
             <span>B. पाली (Pali)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. बाड़मेर (Barmer)</div>
           <div class="question-option">D. जालोर (Jalore)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           जवाई बाँध पाली जिले के सुमेरपुर कस्बे के पास जवाई नदी पर बना है। इसे 'मारवाड़ का अमृत सरोवर' भी कहा जाता है। यह जोधपुर और पाली का मुख्य पेयजल स्रोत है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q6. राजस्थान की कौन सी प्रसिद्ध खारे पानी की झील यूनेस्को की 'रामसर आर्द्रभूमि' (Ramsar Convention) सूची में शामिल है?
           <span>Which famous saltwater lake of Rajasthan is included in the UNESCO Ramsar Wetland list?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. डीडवाना (Didwana)</div>
           <div class="question-option correct">
             <span>B. सांभर झील (Sambhar Lake)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. पचपदरा (Pachpadra)</div>
           <div class="question-option">D. लूणकरणसर (Lunkaransar)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           सांभर झील को 1990 में रामसर स्थल घोषित किया गया था। यह भारत की सबसे बड़ी अंतःस्थलीय खारे पानी की झील है जो देश के कुल नमक उत्पादन का लगभग 8.7% हिस्सा बनाती है।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 3)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section C: Rajasthan History (इतिहास एवं प्राचीन सभ्यताएं)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q7. रणथंभौर के चौहान राजवंश का संस्थापक कौन था जिसने 1194 ई. में शासन की नींव रखी?
           <span>Who was the founder of the Chauhan dynasty of Ranthambore who laid the foundation in 1194 AD?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. हम्मीरदेव चौहान (Hammirdev)</div>
           <div class="question-option correct">
             <span>B. गोविंदराज चौहान (Govindraj)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. पृथ्वीराज चौहान तृतीय (Prithviraj III)</div>
           <div class="question-option">D. वीरनारायण चौहान (Veernarayan)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           पृथ्वीराज चौहान तृतीय के पुत्र गोविंदराज चौहान ने कुतुबुद्दीन ऐबक की सहायता से रणथंभौर में चौहान राजवंश की स्थापना की थी।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q8. राजस्थान के उदयपुर जिले में स्थित ताम्रयुगीन सभ्यता स्थल 'धूलकोट' (Dhoolkot) किस पुरातात्विक स्थल का स्थानीय नाम है?
           <span>The copper-age civilization site 'Dhoolkot' in Udaipur district is the local name of which archaeological site?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. आहड़ सभ्यता (Ahar)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. कालीबंगा (Kalibangan)</div>
           <div class="question-option">C. बैराठ (Bairath)</div>
           <div class="question-option">D. गणेश्वर (Ganeshwar)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           आहड़ सभ्यता बेड़च (आयड़) नदी के तट पर स्थित है। इसे स्थानीय लोग 'धूलकोट' या 'अघाटपुर' के नाम से जानते हैं। यह एक प्रमुख ताम्रयुगीन औद्योगिक केंद्र था।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q9. शेरशाह सूरी और राव मालदेव के मध्य प्रसिद्ध 'गिरि-सुमेल का युद्ध' (Battle of Giri-Sumel) किस वर्ष लड़ा गया था?
           <span>In which year was the famous 'Battle of Giri-Sumel' fought between Sher Shah Suri and Rao Maldeo?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. 1544 ई. (1544 AD)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. 1576 ई. (1576 AD)</div>
           <div class="question-option">C. 1568 ई. (1568 AD)</div>
           <div class="question-option">D. 1582 ई. (1582 AD)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           जनवरी 1544 में जैतारण (पाली) के पास गिरि और सुमेल गाँव के बीच शेरशाह सूरी तथा मारवाड़ के राव मालदेव की सेनाओं (नेतृत्वकर्ता जैता व कूंपा) के बीच युद्ध हुआ। सूरी मुश्किल से जीता और कहा "मैं मुट्ठी भर बाजरे के लिए हिंदुस्तान की बादशहत खो देता।"
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 4)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section D: Art, Culture & Heritage (कला, संस्कृति व साहित्य)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q10. राजस्थानी साहित्य की विख्यात वीररस प्रधान रचना 'पीथल और पाथल' (Pithal and Pathal) के रचयिता कौन हैं?
           <span>Who is the author of the famous Rajasthani literature work 'Pithal and Pathal'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. सूर्यमल्ल मिश्रण (Suryamall Misran)</div>
           <div class="question-option correct">
             <span>B. कन्हैयालाल सेठिया (Kanhaiyalal Sethia)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. विजयदान देथा (Vijaydan Detha)</div>
           <div class="question-option">D. चंद्रसिंह बिरकाली (Chandrasingh)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           महान कवि कन्हैयालाल सेठिया (सुजानगढ़, चूरू) ने इस कविता में 'पीथल' कवि पृथ्वीराज राठौड़ (बीकानेर) को तथा 'पाथल' वीर महाराणा प्रताप को दर्शाते हुए राजस्थानी स्वाभिमान का जीवंत चित्रण किया है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q11. राजस्थान का प्रसिद्ध लोकनृत्य 'चरी नृत्य' (Chari Dance) मुख्य रूप से किस जाति/समुदाय की महिलाओं द्वारा किया जाता है?
           <span>The famous 'Chari Dance' of Rajasthan is primarily performed by women of which community?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. भील जनजाति (Bhils)</div>
           <div class="question-option">B. कालबेलिया (Kalbelias)</div>
           <div class="question-option correct">
             <span>C. गुर्जर समुदाय (Gujjars)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. गरासिया जनजाति (Garasias)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           चरी नृत्य किशनगढ़ (अजमेर) क्षेत्र का प्रसिद्ध लोकनृत्य है जो गुर्जर जाति की महिलाओं द्वारा मांगलिक अवसरों पर सिर पर पीतल की चरी (जिसमें जलते काकड़े होते हैं) रखकर किया जाता है। प्रसिद्ध नृत्यांगना फलकू बाई हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q12. जैसलमेर का किला जिसे पीले बलुआ पत्थरों से निर्मित किया गया है, किस अन्य ऐतिहासिक नाम से प्रसिद्ध है?
           <span>The Jaisalmer Fort, constructed with yellow sandstones, is famous by which other historical name?</span>
         </div>
         <div class="question-options" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 14px;">
           <div class="question-option correct">
             <span>A. सोनारगढ़ (Sonargarh)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. मेहरानगढ़ (Mehrangarh)</div>
           <div class="question-option">C. सुवर्णगिरि (Suvarnagiri)</div>
           <div class="question-option">D. भटनेर का किला (Bhatner)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           जैसलमेर दुर्ग त्रिकूट पहाड़ी पर स्थित है। पीले पत्थरों से बने होने के कारण सूर्य की धूप में यह सोने की तरह चमकता है, इसलिए इसे 'सोनारगढ़' या 'गोल्डन फोर्ट' कहा जाता है। (मेहरानगढ़ जोधपुर में तथा सुवर्णगिरि जालोर में है)।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 5)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section E: Polity & Administration (राजव्यवस्था व प्रशासनिक ढांचा)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q13. राजस्थान के किस जिले के 'बगदरी' गाँव में भारत के प्रथम प्रधानमंत्री जवाहरलाल नेहरू ने पंचायती राज व्यवस्था का औपचारिक उद्घाटन किया था?
           <span>In which district's 'Bagdari' village did PM Nehru formally inaugurate the Panchayati Raj system?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. नागौर (Nagaur)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. जयपुर (Jaipur)</div>
           <div class="question-option">C. अजमेर (Ajmer)</div>
           <div class="question-option">D. सीकर (Sikar)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           2 अक्टूबर 1959 को तत्कालीन प्रधानमंत्री जवाहरलाल नेहरू ने नागौर के बगदरी गाँव से बलवंत राय मेहता समिति की सिफारिशों पर देश की पहली त्रिस्तरीय पंचायती राज व्यवस्था का शुभारंभ किया था।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q14. राजस्थान के प्रथम राज्यपाल (Governor) कौन थे, जिन्होंने 1 नवंबर 1956 को पदभार ग्रहण किया था?
           <span>Who was the first Governor of Rajasthan, who took office on 1st November 1956?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. महाराज मानसिंह द्वितीय (Man Singh II)</div>
           <div class="question-option correct">
             <span>B. सरदार गुरुमुख निहाल सिंह (Gurmukh Nihal Singh)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. डॉ. सम्पूर्णानन्द (Sampurnanand)</div>
           <div class="question-option">D. सरदार हुकम सिंह (Hukam Singh)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           1 नवंबर 1956 को राज्य पुनर्गठन के तहत 'राजप्रमुख' पद को समाप्त कर 'राज्यपाल' का सृजन किया गया तथा सरदार गुरुमुख निहाल सिंह राज्य के पहले राज्यपाल बने।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q15. भारतीय संसद के निचले सदन 'लोक सभा' (Lok Sabha) के लिए राजस्थान राज्य से कुल कितने सदस्य निर्वाचित होते हैं?
           <span>How many members are elected from the State of Rajasthan to the 'Lok Sabha'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 10 सदस्य (10 members)</div>
           <div class="question-option">B. 200 सदस्य (200 members)</div>
           <div class="question-option correct">
             <span>C. 25 सदस्य (25 members)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. 30 सदस्य (30 members)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           संसद में राजस्थान का प्रतिनिधित्व 35 सांसद करते हैं, जिसमें 25 लोक सभा सदस्य तथा 10 राज्य सभा सदस्य शामिल हैं। विधान सभा में 200 विधायक सीटें हैं।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 6)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section F: Rajasthan Economy (राजस्थान की अर्थव्यवस्था व बजट)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q16. राजस्थान में उद्योगों के तीव्र विकास हेतु कार्यरत शीर्ष संस्था 'रीको' (RIICO) की स्थापना किस वर्ष की गई थी?
           <span>In which year was RIICO established as the apex body for industrial development in Rajasthan?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 1969 ई.</div>
           <div class="question-option correct">
             <span>B. 1980 ई.</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 1975 ई.</div>
           <div class="question-option">D. 1985 ई.</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           RIICO (राजस्थान राज्य औद्योगिक विकास एवं निवेश निगम) की स्थापना स्वतंत्र रूप से जनवरी 1980 में की गई थी (इससे पूर्व 1969 में खनिज विकास निगम के साथ संयुक्त रूप से स्थापित था)।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q17. राजस्थान सरकार द्वारा प्रत्येक परिवार को प्रतिवर्ष ₹25 लाख तक का कैशलेस इलाज देने वाली देश की पहली योजना कौन सी है?
           <span>Which is the first scheme in India to provide cashless health insurance up to 25 Lakhs per family in Rajasthan?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. भामाशाह स्वास्थ्य बीमा योजना</div>
           <div class="question-option correct">
             <span>B. मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. जन आरोग्य योजना (PMJAY)</div>
           <div class="question-option">D. मुख्यमंत्री निःशुल्क दवा योजना</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना 1 मई 2021 को शुरू की गई थी। इसके अंतर्गत प्रदेश के प्रत्येक परिवार को 25 लाख रुपये तक का कैशलेस स्वास्थ्य बीमा कवच प्रदान किया जाता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q18. राजस्थान में विद्युत उत्पादन का मुख्य स्रोत निम्नलिखित में से कौन सा प्रकार माना जाता है?
           <span>Which of the following is considered the primary source of power generation in Rajasthan?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. तापीय ऊर्जा (Thermal Power)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. पवन ऊर्जा (Wind Power)</div>
           <div class="question-option">C. सौर ऊर्जा (Solar Power)</div>
           <div class="question-option">D. जल विद्युत ऊर्जा (Hydro Power)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           राजस्थान में स्थापित विद्युत क्षमता का सर्वाधिक भाग तापीय (कोयला आधारित - थर्मल) संयंत्रों जैसे सूरतगढ़ सुपर क्रिटिकल थर्मल पावर और छाबड़ा थर्मल पावर प्लांट से प्राप्त होता है।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 7)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section G: General Science & Tech (सामान्य विज्ञान व तकनीकी)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q19. फेनिलकीटोनूरिया (Phenylketonuria - PKU) रोग के संदर्भ में कौन सा कथन पूर्णतः सत्य है?
           <span>Which statement is completely true regarding Phenylketonuria (PKU) disease?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. यह एक जन्मजात उपापचयी त्रुटि (Inborn error of metabolism) है</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. यह एक संक्रामक वायरल रोग है</div>
           <div class="question-option">C. यह दूषित जल पीने से फैलता है</div>
           <div class="question-option">D. यह एक हार्मोनल विकार है जो केवल वयस्कों में होता है</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           फेनिलकीटोनूरिया एक आनुवंशिक स्वायत्त अप्रभावी (Autosomal Recessive) विकार है, जिसमें फेनिलएलनिन नामक अमीनो अम्ल को तोड़ने वाला यकृत एंजाइम (PAH) अनुपस्थित होता है, जिससे मानसिक मंदता आ सकती है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q20. वायुमंडल में ग्रीन हाउस प्रभाव (Greenhouse Effect) और ग्लोबल वार्मिंग के लिए मुख्य रूप से जिम्मेदार गैस कौन सी है?
           <span>Which gas is primarily responsible for the Greenhouse Effect and Global Warming in the atmosphere?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. ऑक्सीजन (Oxygen)</div>
           <div class="question-option correct">
             <span>B. कार्बन डाइऑक्साइड (Carbon Dioxide - CO2)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. नाइट्रोजन (Nitrogen)</div>
           <div class="question-option">D. हाइड्रोजन (Hydrogen)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           कार्बन डाइऑक्साइड (CO2) मुख्य ग्रीनहाउस गैस है, जो सूर्य की अवरक्त विकिरणों (Infrared) को अवशोषित कर वायुमंडल के तापमान में वृद्धि करती है। जल वाष्प और मीथेन भी सहायक गैसें हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q21. मानव शरीर में स्कर्वी (Scurvy) मसूड़ों के रोग से बचाव के लिए आवश्यक विटामिन 'विटामिन-सी' का रासायनिक नाम क्या है?
           <span>What is the chemical name of 'Vitamin C' required for preventing Scurvy in the human body?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. रेटिनॉल (Retinol)</div>
           <div class="question-option">B. थायमिन (Thiamine)</div>
           <div class="question-option correct">
             <span>C. एस्कॉर्बिक एसिड (Ascorbic Acid)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. कैल्सिफेरॉल (Calciferol)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           विटामिन-सी का रासायनिक नाम एस्कॉर्बिक एसिड है। यह ताजे खट्टे फलों (आंवला, नींबू, संतरा) में पाया जाता है। इसकी कमी से मसूड़ों से खून आना (स्कर्वी) नामक रोग होता है।
         </div>
       </div>`,
      `<h2>RPSC RAS Pre 2023 Solved Paper (Page 8)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section H: Aptitude & Reasoning (तार्किक व मानसिक योग्यता)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q22. यदि किसी सांकेतिक कूट भाषा में 'A' को 2, 'B' को 4, तथा 'C' को 6 लिखा जाता है, तो उसी कूट भाषा में शब्द 'CAB' का कुल मान कितना होगा?
           <span>If in a code language 'A' is 2, 'B' is 4, and 'C' is 6, what will be the value of 'CAB'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 10</div>
           <div class="question-option correct">
             <span>B. 12</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 14</div>
           <div class="question-option">D. 16</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           यहाँ वर्णों के वास्तविक क्रमांक का दुगुना किया गया है: A=1*2=2, B=2*2=4, C=3*2=6। शब्द 'CAB' का मान: C(6) + A(2) + B(4) = 12।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q23. 72 किमी/घंटा की गति से चल रही एक रेलगाड़ी पटरी के किनारे खड़े एक खंभे को 15 सेकंड में पार करती है। रेलगाड़ी की लंबाई (मीटर में) कितनी होगी?
           <span>A train running at 72 km/h crosses a pole in 15 seconds. What is the length of the train in meters?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 250 मीटर</div>
           <div class="question-option correct">
             <span>B. 300 मीटर</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 350 मीटर</div>
           <div class="question-option">D. 400 मीटर</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           गति (स्पीड) = 72 * (5/18) = 20 मीटर/सेकंड। खंभे को पार करते समय तय दूरी रेलगाड़ी की लंबाई के बराबर होती है: दूरी = स्पीड * समय = 20 * 15 = 300 मीटर।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q24. अपराह्न 3 बजकर 30 मिनट (3:30) पर घड़ी की घंटे वाली सुई तथा मिनट वाली सुई के मध्य बनने वाला कोण कितने डिग्री का होगा?
           <span>What will be the angle in degrees between the hour hand and minute hand of a clock at 3:30?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 70 डिग्री</div>
           <div class="question-option correct">
             <span>B. 75 डिग्री</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 80 डिग्री</div>
           <div class="question-option">D. 85 डिग्री</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           कोण का सूत्र = |30 * H - (11/2) * M| = |30 * 3 - (11/2) * 30| = |90 - 165| = 75 डिग्री।
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
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section A: General Science & Central Polity (विज्ञान व राजव्यवस्था)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q1. मानव शरीर का सामान्य तापमान सेल्सियस (Celsius) स्केल पर लगभग कितना माना जाता है?
           <span>What is the average normal temperature of the human body on the Celsius scale?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 32°C</div>
           <div class="question-option correct">
             <span>B. 37°C</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 98.6°C</div>
           <div class="question-option">D. 40°C</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           मानव शरीर का सामान्य तापमान 37°C (सटीक रूप से 36.9°C) होता है, जो फॉरेनहाइट स्केल पर 98.6°F के बराबर होता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q2. मानव शरीर में रक्त शर्करा (ब्लड शुगर) को नियंत्रित करने वाले महत्वपूर्ण हार्मोन 'इंसुलिन' (Insulin) का उत्पादन किस अंग द्वारा किया जाता है?
           <span>Which organ produces the hormone 'Insulin' that controls blood sugar in the human body?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. यकृत (Liver)</div>
           <div class="question-option correct">
             <span>B. अग्न्याशय (Pancreas)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. गुर्दा (Kidney)</div>
           <div class="question-option">D. तिल्ली (Spleen)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           इंसुलिन अग्न्याशय (Pancreas) की लैंगरहैंस द्वीपिकाओं (Islets of Langerhans) की बीटा कोशिकाओं (Beta-cells) द्वारा स्रावित होता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q3. भारतीय संविधान के अनुसार, भारत के सर्वोच्च न्यायालय के मुख्य न्यायाधीश (CJI) की नियुक्ति किसके द्वारा की जाती है?
           <span>According to the Constitution, who appoints the Chief Justice of India (CJI)?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. भारत के प्रधानमंत्री (Prime Minister)</div>
           <div class="question-option correct">
             <span>B. भारत के राष्ट्रपति (President of India)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. केंद्रीय कानून मंत्री (Law Minister)</div>
           <div class="question-option">D. लोक सभा अध्यक्ष (Speaker)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           अनुच्छेद 124(2) के तहत राष्ट्रपति सर्वोच्च न्यायालय के न्यायाधीशों और मुख्य न्यायाधीश की नियुक्ति कोलेजियम की सिफारिशों पर करते हैं।
         </div>
       </div>`,
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 2)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section B: Rajasthan GK & Administration (राजस्थान सामान्य ज्ञान)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q4. राजस्थान की वास्तुकला की बेजोड़ मिसाल 'पटवों की हवेली' (Patwon ki Haveli) कहाँ स्थित है?
           <span>Where is the unique specimen of Rajasthan's architecture 'Patwon ki Haveli' situated?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. जोधपुर</div>
           <div class="question-option">B. बीकानेर</div>
           <div class="question-option correct">
             <span>C. जैसलमेर</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. जयपुर</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           पटवों की हवेली जैसलमेर में स्थित है। यह पाँच हवेलियों का समूह है, जिसका निर्माण व्यवसायी गुमान चन्द पटवा ने 1805 में अपने पाँच पुत्रों के लिए करवाया था।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q5. हल्दीघाटी के ऐतिहासिक युद्ध (1576 ई.) में महाराणा प्रताप की सेना के 'हरावल' (अग्रिम पंक्ति) दस्ते का नेतृत्व किसने किया था?
           <span>Who led the 'Harawal' (frontline) squad of Maharana Pratap's army in the historic Battle of Haldighati (1576 AD)?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. झाला बीदा (Jhala Beeda)</div>
           <div class="question-option correct">
             <span>B. हकीम खां सूरी (Hakim Khan Suri)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. मानसिंह सोलंकी (Man Singh)</div>
           <div class="question-option">D. भामाशाह (Bhama Shah)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           महाराणा प्रताप की सेना के हरावल (अग्रगामी दस्ता) का नेतृत्व एकमात्र मुस्लिम सेनापति हकीम खां सूरी ने किया था।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q6. राजस्थान पंचायती Raj अधिनियम के तहत एक पंचायत समिति का प्रधान (Pradhan) अपना इस्तीफा किसे सौंपता है?
           <span>Under the Rajasthan Panchayati Raj Act, to whom does a Pradhan of a Panchayat Samiti submit his resignation?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. जिला प्रमुख (Zila Pramukh)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. विकास अधिकारी (BDO)</div>
           <div class="question-option">C. जिला कलेक्टर (District Collector)</div>
           <div class="question-option">D. संभागीय आयुक्त (Divisional Commissioner)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           पंचायत समिति का प्रधान अपना इस्तीफा लिखित में संबंधित 'जिला प्रमुख' को सौंपता है, जबकि उप-प्रधान और सदस्य अपना इस्तीफा 'प्रधान' को सौंपते हैं।
         </div>
       </div>`,
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 3)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section C: English Language (सामान्य अंग्रेजी)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q7. What is the most appropriate Synonym of the word 'Abolish' from the following options?
           <span>निम्नलिखित में से 'Abolish' का सबसे उपयुक्त पर्यायवाची शब्द कौन सा है?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. Establish (स्थापित करना)</div>
           <div class="question-option correct">
             <span>B. Cancel / Eliminate (समाप्त करना)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. Support (समर्थन करना)</div>
           <div class="question-option">D. Continue (जारी रखना)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'Abolish' means to formally put an end to a system or practice. Therefore, 'Cancel', 'Eliminate' or 'Nullify' is its closest synonym.
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q8. Fill in the blank with correct preposition: "He has been sleeping in his room _____ five hours."
           <span>सही प्रीपोजीशन चुनें: "He has been sleeping in his room _____ five hours."</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. since</div>
           <div class="question-option correct">
             <span>B. for</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. during</div>
           <div class="question-option">D. from</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'Five hours' is a duration/period of time (अनिश्चित समय), hence 'for' is used. For specific points of time (e.g. 5 o'clock), 'since' is used.
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q9. Select the grammatically correct sentence from the following options:
           <span>व्याकरण की दृष्टि से शुद्ध वाक्य का चयन कीजिए:</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. Each of the students have completed the test.</div>
           <div class="question-option correct">
             <span>B. Each of the students has completed the test.</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. Each of the student has completed the test.</div>
           <div class="question-option">D. Each students have completed the test.</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'Each of' is followed by a plural noun ('students') but takes a singular verb ('has') because 'each' refers to individuals singularly.
         </div>
       </div>`,
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 4)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section D: General Hindi (सामान्य हिंदी व्याकरण)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q10. व्याकरण की दृष्टि से 'वागीश' शब्द का सही संधि-विच्छेद और संधि का नाम क्या होगा?
           <span>What is the correct sandhi-split and sandhi-type of the word 'Vageesh'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. वाग + ईश (दीर्घ संधि)</div>
           <div class="question-option correct">
             <span>B. वाक् + ईश (व्यंजन संधि)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. वाक् + ईश (स्वर संधि)</div>
           <div class="question-option">D. वाच + ईश (विसर्ग संधि)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           वागीश = वाक् + ईश (क + ई = गी)। यहाँ व्यंजन संधि का प्रथम नियम लागू होता है, जिसके अनुसार वर्ग का प्रथम वर्ण अपने ही वर्ग के तीसरे वर्ण (क का ग) में परिवर्तित हो जाता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q12. निम्नलिखित विकल्पों में से 'गुण स्वर संधि' का सही उदाहरण कौन सा है?
           <span>Which is the correct example of 'Guna Swar Sandhi' from the following options?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. सदैव (Sadaiv)</div>
           <div class="question-option">B. गिरीश (Gireesh)</div>
           <div class="question-option correct">
             <span>C. महेंद्र (Mahendra)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. यद्यपि (Yadyapi)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           महेंद्र = महा + इंद्र (आ + इ = ए), यह गुण स्वर संधि का नियम है। सदैव (वृद्धि संधि - सदा + एव), गिरीश (दीर्घ संधि - गिरि + ईश) तथा यद्यपि (यण संधि - यदि + अपि) के उदाहरण हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q11. किस शब्द में 'उप' उपसर्ग का प्रयोग नहीं हुआ है?
           <span>In which word the prefix 'Up' has NOT been used?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. उपकार (Upkar)</div>
           <div class="question-option">B. उपदेश (Updesh)</div>
           <div class="question-option correct">
             <span>C. उचित (Uchit)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. उपन्यास (Upanyas)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'उचित' शब्द मूल शब्द है, इसमें 'उप' उपसर्ग का प्रयोग नहीं हुआ है। उपकार (उप+कार), उपदेश (उप+देश) तथा उपन्यास (उप+नि+आस) में उप का प्रयोग हुआ है।
         </div>
       </div>`,
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 5)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section E: Mental Ability & Maths (तार्किक क्षमता व गणित)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q13. प्रथम पाँच अभाज्य संख्याओं (First five prime numbers) का औसत मान ज्ञात कीजिए।
           <span>Find the average of the first five prime numbers.</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 5.0</div>
           <div class="question-option correct">
             <span>B. 5.6</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 6.2</div>
           <div class="question-option">D. 4.8</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           प्रथम पांच अभाज्य संख्याएं हैं: 2, 3, 5, 7, और 11। कुल योग = 2+3+5+7+11 = 28। औसत = योग / संख्या = 28 / 5 = 5.6।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q14. एक दुकानदार किसी वस्तु को 20% लाभ पर बेचता है। यदि वस्तु का क्रय मूल्य (Cost Price) ₹500 है, तो उसका विक्रय मूल्य (Selling Price) क्या होगा?
           <span>A shopkeeper sells an article at 20% profit. If the cost price is ₹500, what is the selling price?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. ₹550</div>
           <div class="question-option correct">
             <span>B. ₹600</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. ₹650</div>
           <div class="question-option">D. ₹700</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           विक्रय मूल्य = क्रय मूल्य * (100 + लाभ%) / 100 = 500 * (120/100) = ₹600।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q15. दी गई संख्या श्रृंखला को पूरा करें: 2, 6, 12, 20, 30, ?
           <span>Complete the given number series: 2, 6, 12, 20, 30, ?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 38</div>
           <div class="question-option">B. 40</div>
           <div class="question-option correct">
             <span>C. 42</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. 44</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           श्रृंखला का अंतर लगातार बढ़ रहा है: 2 + 4 = 6; 6 + 6 = 12; 12 + 8 = 20; 20 + 10 = 30; अगला अंतर +12 होगा। अतः 30 + 12 = 42।
         </div>
       </div>`,
      `<h2>RSMSSB Patwari 2021 Solved Paper (Page 6)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section F: Basic Computer Awareness (कंप्यूटर ज्ञान)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q16. कंप्यूटर में एमएस वर्ड (MS Word) में चयनित टेक्स्ट को कॉपी (Copy) करने के लिए किस शॉर्टकट कुंजी का उपयोग किया जाता है?
           <span>Which shortcut key is used to copy selected text in MS Word?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. Ctrl + X</div>
           <div class="question-option correct">
             <span>B. Ctrl + C</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. Ctrl + V</div>
           <div class="question-option">D. Ctrl + Z</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           Ctrl+C का उपयोग कॉपी के लिए, Ctrl+X का कट के लिए, Ctrl+V का पेस्ट के लिए और Ctrl+Z का अनडू (Undo) के लिए किया जाता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q17. निम्नलिखित में से किसे कंप्यूटर प्रणाली का 'मस्तिष्क' (Brain of Computer) कहा जाता है?
           <span>Which of the following is considered the 'Brain' of a computer system?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. मॉनिटर (Monitor)</div>
           <div class="question-option correct">
             <span>B. सीपीयू (CPU)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. रैम (RAM)</div>
           <div class="question-option">D. कीबोर्ड (Keyboard)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           CPU (Central Processing Unit) कंप्यूटर की सभी प्रोसेसिंग और तार्किक गणनाओं को निष्पादित करता है, इसलिए इसे कंप्यूटर का दिमाग कहा जाता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q18. कंप्यूटर की प्राथमिक अस्थाई मेमोरी 'रैम' (RAM) का सही पूर्ण रूप क्या है?
           <span>What is the correct full form of the computer's primary volatile memory 'RAM'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. Read Access Memory</div>
           <div class="question-option correct">
             <span>B. Random Access Memory</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. Rapid Active Memory</div>
           <div class="question-option">D. Read Active Module</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           RAM का पूर्ण रूप Random Access Memory है। यह एक वोलाटाइल (अस्थाई) मेमोरी होती है, जिसका अर्थ है कि बिजली बंद होने पर इसमें संग्रहीत डेटा नष्ट हो जाता है।
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
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section A: Child Pedagogy & IQ (शिक्षाशास्त्र व बुद्धि)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q1. बालक की बुद्धि लब्धि (IQ) मापने का सही और प्रामाणिक सूत्र सर्वप्रथम किसने संशोधित कर पूर्ण रूप दिया?
           <span>Who first revised and perfected the correct formula for measuring a child's IQ?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. अल्फ्रेड बिने (Alfred Binet)</div>
           <div class="question-option">B. विलियम स्टर्न (William Stern)</div>
           <div class="question-option correct">
             <span>C. लेविस टर्मन (Lewis Terman)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. डेविड वेचस्लर (David Wechsler)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           बुद्धि लब्धि (IQ) की अवधारणा विलियम स्टर्न ने 1912 में दी थी (Mental Age / Chronological Age)। 1916 में लेविस टर्मन ने इसे संशोधित कर 100 से गुणा करके पूर्ण सूत्र बनाया: IQ = (MA/CA) * 100.
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q2. अधिगम के प्रसिद्ध 'प्रयास और भूल' (Trial and Error Theory) सिद्धांत के प्रतिपादक कौन थे जिन्होंने बिल्ली पर प्रयोग किया था?
           <span>Who was the proponent of the famous 'Trial and Error Theory' of learning, who experimented on a cat?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. बी.एफ. स्किनर</div>
           <div class="question-option">B. इवान पावलव</div>
           <div class="question-option correct">
             <span>C. एडवर्ड एल. थार्नडाइक</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. वोल्फगैंग कोहलर</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           अमेरिकी मनोवैज्ञानिक थार्नडाइक ने बिल्ली पर प्रयोग कर उद्दीपक-अनुक्रिया (S-R Bond) संबंध स्थापित किया और सीखने के मुख्य तीन नियम दिए।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q3. शिक्षा का अधिकार अधिनियम (RTE Act, 2009) के अनुसार, प्राथमिक स्तर पर शिक्षकों के लिए प्रति सप्ताह तैयारी सहित कार्य के न्यूनतम घंटे कितने निर्धारित हैं?
           <span>According to the RTE Act 2009, what are the minimum work hours per week for teachers?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 40 घंटे</div>
           <div class="question-option">B. 42 घंटे</div>
           <div class="question-option correct">
             <span>C. 45 घंटे</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. 48 घंटे</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           RTE 2009 की अनुसूची के अनुसार, एक शिक्षक के लिए प्रति सप्ताह शिक्षण और तैयारी के घंटों को मिलाकर न्यूनतम 45 कार्य घंटे अनिवार्य हैं।
         </div>
       </div>`,
      `<h2>REET Level-2 2022 Solved Paper (Page 2)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section B: Child Development Theories (बाल विकास सिद्धांत)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q4. जीन पियाजे के संज्ञानात्मक विकास सिद्धांत के अनुसार, किस अवस्था में बालक में 'वस्तु स्थायित्व' (Object Permanence) का गुण विकसित होता है?
           <span>According to Jean Piaget, in which stage does a child develop 'Object Permanence'?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. संवेदी-पेशीय अवस्था (Sensory-Motor Stage: 0-2 yrs)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. पूर्व-संक्रियात्मक अवस्था (Pre-Operational: 2-7 yrs)</div>
           <div class="question-option">C. मूर्त-संक्रियात्मक अवस्था (Concrete: 7-11 yrs)</div>
           <div class="question-option">D. औपचारिक-संक्रियात्मक अवस्था (Formal: 11+ yrs)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           संवेदी-पेशीय (0-2 वर्ष) अवस्था के अंत तक बच्चे में यह समझ आ जाती है कि कोई वस्तु उसकी आँखों के सामने न होने पर भी अस्तित्व में रहती है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q5. लेव वायगोत्स्की के सामाजिक-सांस्कृतिक सिद्धांत के अनुसार, वयस्क द्वारा बच्चे के सीखने में दी जाने वाली अस्थायी सहायता (Temporary Support) को क्या कहते हैं?
           <span>According to Lev Vygotsky, what is the temporary support given by an adult called?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. आत्मसातीकरण (Assimilation)</div>
           <div class="question-option correct">
             <span>B. पाड़ या ढांचा (Scaffolding)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. समीपस्थ विकास का क्षेत्र (ZPD)</div>
           <div class="question-option">D. अनुबंधन (Conditioning)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           वायगोत्स्की के अनुसार, बच्चे को दिए जाने वाले अस्थाई इशारे, हिंट या सहायता को 'पाड़' या 'ढांचा' (Scaffolding) कहा जाता है जो उसे ZPD क्षेत्र को पार करने में मदद करता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q6. बाल विकास में गिलफोर्ड के अनुसार, सृजनात्मकता (Creativity) की पहचान के लिए किस प्रकार के चिंतन की आवश्यकता होती है?
           <span>According to Guilford, which type of thinking is required for identifying Creativity?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. अभिसारी चिंतन (Convergent Thinking)</div>
           <div class="question-option correct">
             <span>B. अपसारी चिंतन (Divergent Thinking)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. तार्किक चिंतन (Logical Thinking)</div>
           <div class="question-option">D. रूढ़िवादी चिंतन</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           गिलफोर्ड ने स्पष्ट किया कि सृजनात्मकता का सीधा संबंध अपसारी चिंतन (Divergent/Out-of-the-box thinking) से है, जहाँ किसी समस्या के कई लीक से हटकर नए समाधान खोजे जाते हैं।
         </div>
       </div>`,
      `<h2>REET Level-2 2022 Solved Paper (Page 3)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section C: Language I - Hindi Pedagogy (भाषा I - हिंदी शिक्षणशास्त्र)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q7. "बच्चों में भाषा अर्जन (Language Acquisition) की क्षमता जन्मजात होती है", यह प्रसिद्ध कथन किसका है?
           <span>"Children have an innate capacity for Language Acquisition", whose famous statement is this?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. बी.एफ. स्किनर (B.F. Skinner)</div>
           <div class="question-option correct">
             <span>B. नोआम चोमस्की (Noam Chomsky)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. जीन पियाजे (Jean Piaget)</div>
           <div class="question-option">D. एल. एस. वायगोत्स्की</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           नोआम चोमस्की का मानना है कि मानव मस्तिष्क में एक जन्मजात भाषा अर्जन यंत्र (LAD - Language Acquisition Device) होता है, जिसके माध्यम से बच्चे आसानी से व्याकरण सीख जाते हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q8. गद्य शिक्षण (Prose Teaching) के दौरान शब्दों के अर्थ स्पष्ट करने की सबसे उत्तम विधि कौन सी मानी जाती है?
           <span>Which is considered the best method for clarifying word meanings during prose teaching?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. प्रवचन विधि (Lecture Method)</div>
           <div class="question-option">B. अनुवाद विधि (Translation Method)</div>
           <div class="question-option correct">
             <span>C. वाक्य प्रयोग विधि (Sentence Usage Method)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. कोश विधि (Dictionary Method)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           कठिन शब्दों का वाक्य में प्रयोग करके अर्थ स्पष्ट करने से छात्र संदर्भ के अनुसार शब्द का व्यावहारिक अर्थ आसानी से समझ पाते हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q9. स्कूलों में लागू 'सतत एवं व्यापक मूल्यांकन' (CCE) प्रणाली में 'व्यापक' (Comprehensive) शब्द का मुख्य अर्थ क्या है?
           <span>In the CCE system, what does the word 'Comprehensive' primarily signify?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. केवल शैक्षिक क्षेत्रों का मूल्यांकन</div>
           <div class="question-option correct">
             <span>B. शैक्षिक एवं सह-शैक्षिक दोनों क्षेत्रों का मूल्यांकन</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. वर्ष के अंत में होने वाली परीक्षा</div>
           <div class="question-option">D. मासिक जांच परीक्षण</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'व्यापक' से तात्पर्य छात्र के सर्वांगीण विकास के मूल्यांकन से है, जिसमें पढ़ाई-लिखाई (Scholastic) के साथ-साथ खेलकूद, कला, आचरण और रुचियों (Co-scholastic) का भी सतत मूल्यांकन किया जाता है।
         </div>
       </div>`,
      `<h2>REET Level-2 2022 Solved Paper (Page 4)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section D: Language II - English Pedagogy (English Pedagogy)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q10. In English language teaching methodology, what is the full form of the traditional term 'GTM'?
           <span>अंग्रेजी भाषा शिक्षण पद्धति में पारंपरिक शब्द 'GTM' का पूर्ण रूप क्या है?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. Grammar Translation Method</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. Group Teaching Method</div>
           <div class="question-option">C. General Textual Management</div>
           <div class="question-option">D. Global Tongue Mastery</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           Grammar Translation Method is the oldest classical method of teaching a foreign language, where target language grammar is explained in the mother tongue with word-for-word translation.
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q11. The smallest unit of speech sound in a language that can distinguish one word from another is known as a:
           <span>किसी भाषा में उच्चारण ध्वनि की वह सबसे छोटी इकाई जो एक शब्द को दूसरे से अलग करती है, कहलाती है:</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. Morpheme (रूपिम)</div>
           <div class="question-option correct">
             <span>B. Phoneme (स्वनिम)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. Syntax (वाक्य विन्यास)</div>
           <div class="question-option">D. Semantics (अर्थ विज्ञान)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           A 'Phoneme' is the smallest structural unit of sound in a language (e.g. /c/, /b/, /t/). A 'Morpheme' is the smallest unit of meaning.
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q12. Remedial Teaching (उपचारात्मक शिक्षण) in a classroom is specially organized for which category of students?
           <span>कक्षा में उपचारात्मक शिक्षण (Remedial Teaching) विशेष रूप से किस श्रेणी के छात्रों के लिए आयोजित किया जाता है?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. Gifted students (प्रतिभाशाली छात्र)</div>
           <div class="question-option correct">
             <span>B. Slow learners with learning gaps (अधिगम अंतराल वाले पिछड़े छात्र)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. Hyperactive students</div>
           <div class="question-option">D. All students equally</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           Remedial teaching is designed to identify learning gaps and errors in slow learners or lagging students and rectify them using custom pedagogical techniques.
         </div>
       </div>`,
      `<h2>REET Level-2 2022 Solved Paper (Page 5)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section E: Social Studies (सामाजिक अध्ययन)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q13. बम्बई में स्वामी दयानन्द सरस्वती द्वारा प्रसिद्ध सामाजिक-धार्मिक सुधार संगठन 'आर्य समाज' की स्थापना किस वर्ष की गई थी?
           <span>In which year was the famous social reform organization 'Arya Samaj' established by Swami Dayanand Saraswati?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. 1828 ई.</div>
           <div class="question-option correct">
             <span>B. 1875 ई.</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. 1867 ई.</div>
           <div class="question-option">D. 1897 ई.</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           स्वामी दयानन्द सरस्वती ने 10 अप्रैल 1875 को बम्बई में 'आर्य समाज' की स्थापना की थी। उन्होंने "वेदों की ओर लौटो" का नारा दिया और 'सत्यार्थ प्रकाश' पुस्तक लिखी।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q14. भारत का मानक समय निर्धारित करने वाली 'भारतीय मानक समय रेखा' (IST - 82°30' पूर्वी देशान्तर) उत्तर प्रदेश के किस जिले से होकर गुजरती है?
           <span>The Indian Standard Time meridian (82.5° E longitude) passes through which district of Uttar Pradesh?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. लखनऊ (Lucknow)</div>
           <div class="question-option correct">
             <span>B. मिर्जापुर / प्रयागराज (Mirzapur / Prayagraj)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. वाराणसी (Varanasi)</div>
           <div class="question-option">D. कानपुर (Kanpur)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           82°30' पूर्वी देशान्तर रेखा प्रयागराज के निकट नैनी या मिर्जापुर से होकर गुजरती है। यह जीएमटी (GMT) से 5 घंटा 30 मिनट आगे है। यह भारत के 5 राज्यों से होकर गुजरती है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q15. वर्ष 1859-60 में बंगाल में हुए ऐतिहासिक किसान विद्रोह 'नील विद्रोह' (Indigo Revolt) के प्रमुख नेतृत्वकर्ता कौन थे?
           <span>Who were the prominent leaders of the historic 'Indigo Revolt' in Bengal during 1859-60?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. दिगंबर बिस्वास एवं बिष्णु बिस्वास</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. सिद्धू और कान्हू</div>
           <div class="question-option">C. बिरसा मुंडा</div>
           <div class="question-option">D. बख्शी जगबंधु</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           नील विद्रोह नदिया जिले के गोविंदपुर गाँव से दिगंबर और बिष्णु बिस्वास के नेतृत्व में शुरू हुआ था। इस आंदोलन का वर्णन दीनबंधु मित्र ने अपने नाटक 'नील दर्पण' में किया था।
         </div>
       </div>`,
      `<h2>REET Level-2 2022 Solved Paper (Page 6)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section F: Teaching Methods & Evaluative Philosophy (शिक्षण विधियां)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q16. शिक्षक प्रशिक्षण के लिए अत्यंत उपयोगी तकनीक 'सूक्ष्म शिक्षण' (Micro-teaching) का प्रतिपादन स्टैनफोर्ड विश्वविद्यालय में किसके द्वारा किया गया था?
           <span>Who pioneered the technique of 'Micro-teaching' at Stanford University?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. बी.एफ. स्किनर</div>
           <div class="question-option correct">
             <span>B. ड्वाइट डब्ल्यू. एलन (Dwight W. Allen)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. जॉन डीवी (John Dewey)</div>
           <div class="question-option">D. हरबर्ट स्पेंसर (Herbert Spencer)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           ड्वाइट एलन ने 1963 में सूक्ष्म शिक्षण की खोज की थी। यह एक नियंत्रित अभ्यास चक्र है, जिसमें शिक्षण कौशल के विकास के लिए 36 मिनट का भारतीय सूक्ष्म शिक्षण चक्र लागू होता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q17. विद्यालय स्तर पर छात्रों की अधिगम प्रक्रिया में निरंतर सुधार लाने और कमियों को जानने के लिए 'रचनात्मक मूल्यांकन' (Formative Evaluation) का मूल उद्देश्य क्या है?
           <span>What is the core objective of Formative Evaluation in school education?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. छात्रों को ग्रेड या अंक देना</div>
           <div class="question-option correct">
             <span>B. अधिगम प्रगति की निरंतर निगरानी करना और सुधार हेतु फीडबैक देना</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. वार्षिक परीक्षा का संचालन करना</div>
           <div class="question-option">D. छात्रों का अंतिम वर्गीकरण करना</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           रचनात्मक मूल्यांकन शिक्षण प्रक्रिया के साथ-साथ चलता है, जिसका मुख्य उद्देश्य यह जानना है कि छात्र कहाँ गलती कर रहे हैं और उनके सुधार के लिए तुरंत आवश्यक शिक्षण कदम उठाना।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q18. प्रगतिशील शिक्षा के सिद्धांतों के तहत शिक्षण की 'परियोजना विधि' (Project Method) मुख्य रूप से किस दार्शनिक की विचारधारा पर आधारित है?
           <span>The 'Project Method' of teaching is primarily based on the philosophy of which educational philosopher?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. जॉन डीवी (John Dewey)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. रूसो (Rousseau)</div>
           <div class="question-option">C. प्लेटो (Plato)</div>
           <div class="question-option">D. फ्रोबेल (Froebel)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           परियोजना विधि जॉन डीवी के 'प्रयोजनवाद' (Pragmatism) और 'करके सीखने' (Learning by doing) के सिद्धांत पर आधारित है। इसे पूर्ण रूप से विकसित उनके शिष्य विलियम किलपैट्रिक ने किया था।
         </div>
       </div>`
    ],
    'pdf-9': [
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 1)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section A: शब्द रचना - संधि व समास (Word Structure)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q1. व्याकरण की दृष्टि से 'वागीश' शब्द का सही संधि-विच्छेद और संधि का नाम क्या होगा?
           <span>What is the correct sandhi-split and sandhi-type of the word 'Vageesh'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. वाग + ईश (दीर्घ संधि)</div>
           <div class="question-option correct">
             <span>B. वाक् + ईश (व्यंजन संधि)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. वाक् + ईश (स्वर संधि)</div>
           <div class="question-option">D. वाच + ईश (विसर्ग संधि)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           वागीश = वाक् + ईश। यहाँ व्यंजन संधि का नियम लागू होता है, जिसके अनुसार वर्ग के प्रथम वर्ण (क) के बाद यदि कोई स्वर आए, तो वह अपने ही वर्ग के तीसरे वर्ण (ग) में बदल जाता है (क -> ग)।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q2. निम्नलिखित विकल्पों में से 'गुण स्वर संधि' का सही उदाहरण कौन सा है?
           <span>Which is the correct example of 'Guna Swar Sandhi' from the following options?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. सदैव (Sadaiv)</div>
           <div class="question-option">B. गिरीश (Gireesh)</div>
           <div class="question-option correct">
             <span>C. महेंद्र (Mahendra)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. यद्यपि (Yadyapi)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           महेंद्र = महा + इंद्र (आ + इ = ए)। यह गुण संधि का नियम है। सदैव (सदा + एव - वृद्धि संधि), गिरीश (गिरि + ईश - दीर्घ संधि) तथा यद्यपि (यदि + अपि - यण संधि) हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q3. किस सामासिक पद में 'द्वंद्व समास' (Dwandwa Samas) प्रयुक्त हुआ है जिसमें दोनों पद प्रधान होते हैं?
           <span>In which compound word is 'Dwandwa Samas' used where both terms are important?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. माता-पिता (Mata-Pita)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. यथाशक्ति (Yathashakti)</div>
           <div class="question-option">C. चौराहा (Chauraha)</div>
           <div class="question-option">D. नीलकमल (Neelkamal)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           माता-पिता = माता और पिता (द्वंद्व समास)। यथाशक्ति (अव्ययीभाव), चौराहा (द्विगु), नीलकमल (कर्मधारय समास) के उदाहरण हैं।
         </div>
       </div>`,
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 2)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section B: शब्द प्रकार - तत्सम व तद्भव (Word Origins)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q4. निम्नलिखित विकल्पों में से संस्कृत के मूल शब्द 'तत्सम शब्द' (Tatsam) का चयन कीजिए:
           <span>Select the Sanskrit-origin 'Tatsam' word from the options:</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. मयूर (Mayur)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. मोर (Mor)</div>
           <div class="question-option">C. सूरज (Suraj)</div>
           <div class="question-option">D. हाथ (Haath)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'मयूर' संस्कृत का मूल शब्द है (तत्सम), जिसका तद्भव (परिवर्तित रूप) 'मोर' होता है। सूरज (तद्भव - तत्सम: सूर्य) और हाथ (तद्भव - तत्सम: हस्त) हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q5. निम्नलिखित में से कौन सा शब्द तद्भव (Tadbhav - परिवर्तित रूप) श्रेणी में आता है?
           <span>Which of the following words belongs to the Tadbhav category?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. हाथ (Haath)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. हस्त (Hast)</div>
           <div class="question-option">C. अग्नि (Agni)</div>
           <div class="question-option">D. क्षीर (Ksheer)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'हाथ' तद्भव शब्द है जिसका तत्सम 'हस्त' होता है। अग्नि (तत्सम - तद्भव: आग) और क्षीर (तत्सम - तद्भव: खीर) हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q6. स्थानीय बोलियों और प्रभाव के कारण विकसित हुए देशी शब्द 'देशज शब्द' का उदाहरण कौन सा है?
           <span>Which is an example of a local-origin indigenous 'Deshaj' word?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. लोटा (Lota) / पगड़ी</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. स्कूल (School)</div>
           <div class="question-option">C. पुस्तक (Pustak)</div>
           <div class="question-option">D. आम (Aam)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'लोटा', 'पगड़ी', 'खिड़की', 'चिड़िया' देशज शब्द हैं जिनका कोई स्पष्ट संस्कृत स्रोत नहीं है, ये देश में ही विकसित हुए हैं। स्कूल विदेशी (अंग्रेजी) और पुस्तक तत्सम है।
         </div>
       </div>`,
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 3)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section C: शब्द ज्ञान - पर्यायवाची व विलोम (Vocabulary)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q7. किस विकल्प में सभी शब्द परस्पर 'जंगल / वन' के पर्यायवाची शब्द लिखे गए हैं?
           <span>In which option are all words mutual synonyms for forest?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. अरण्य, कानन, विपिन</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. वन, उपवन, वाटिका</div>
           <div class="question-option">C. पावक, अनल, समीर</div>
           <div class="question-option">D. नद, सरिता, तटिनी</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           अरण्य, कानन, विपिन, कांतार, और अटवी सभी जंगल के पर्यायवाची हैं। वाटिका (बगीचा), अनल (आग), समीर (हवा) तथा सरिता (नदी) के पर्यायवाची हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q8. व्याकरण के नियमानुसार 'अनुराग' (Anuraag) शब्द का सही विलोम (Antonym) शब्द क्या होगा?
           <span>What is the correct antonym of the word 'Anuraag'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. प्रेम (Prem)</div>
           <div class="question-option correct">
             <span>B. विराग (Virag)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. घृणा (Ghrina)</div>
           <div class="question-option">D. राग (Raag)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'अनुराग' का अर्थ गहरा लगाव या प्रेम होता है, और इसका सही विलोम 'विराग' (उदासीनता/वैराग्य) होता है। राग का विलोम द्वेष होता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q9. श्रुतिसम भिन्नार्थक शब्द युग्म 'अनिल' और 'अनल' का क्रमशः सही अर्थ क्या है?
           <span>What is the correct meaning of the word pair 'Anil' and 'Anal' respectively?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. आग और हवा</div>
           <div class="question-option correct">
             <span>B. हवा और आग (Wind and Fire)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. जल और थल</div>
           <div class="question-option">D. हवा और पानी</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'अनिल' का अर्थ पवन/हवा होता है और 'अनल' का अर्थ पावक/आग होता है। अतः सही विकल्प (हवा और आग) है।
         </div>
       </div>`,
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 4)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section D: व्याकरणिक कोटियां - कारक व काल (Grammar Rules)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q10. 'पेड़ से पत्ता गिरा' अथवा 'गंगा हिमालय से निकलती है' वाक्यों में रेखांकित शब्द 'से' में कौन सा कारक प्रयुक्त हुआ है?
           <span>Which case (Karak) is used in the word 'se' in these sentences?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. करण कारक (Karan Karak)</div>
           <div class="question-option correct">
             <span>B. अपादान कारक (Apadan Karak)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. सम्प्रदान कारक (Sampradan Karak)</div>
           <div class="question-option">D. अधिकरण कारक (Adhikaran Karak)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           अपादान कारक का विभक्ति चिह्न 'से' होता है, जो किसी वस्तु के दूसरी वस्तु से अलग होने (Separation), दूरी, डर या तुलना का बोध कराता है। यहाँ अलग होने का भाव स्पष्ट है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q11. निम्नलिखित संज्ञा शब्दों में से स्त्रीलिंग (Feminine) शब्द का चयन कीजिए:
           <span>Select the feminine noun word from the options:</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. नदी (Nadi) / बुद्धि</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. वृक्ष (Vriksh)</div>
           <div class="question-option">C. समुद्र (Samudra)</div>
           <div class="question-option">D. पानी (Paani)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'नदी' और 'बुद्धि' स्त्रीलिंग संज्ञा शब्द हैं (जैसे: नदी बहती है)। जबकि वृक्ष, समुद्र और पानी पुलिंग शब्द हैं (जैसे: पानी बहता है)।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q12. "वह कल रात जयपुर गया होगा" - इस वाक्य में भूतकाल (Past Tense) का कौन सा उपभेद प्रयुक्त हुआ है?
           <span>Which past tense subtype is used in "He must have gone to Jaipur last night"?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. सामान्य भूतकाल</div>
           <div class="question-option">B. आसन्न भूतकाल</div>
           <div class="question-option correct">
             <span>C. संदिग्ध भूतकाल (Doubtful Past)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. पूर्ण भूतकाल</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           वाक्य में भूतकाल में क्रिया होने के प्रति संदेह प्रकट हो रहा है ("गया होगा"), इसलिए यह 'संदिग्ध भूतकाल' का उदाहरण है।
         </div>
       </div>`,
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 5)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section E: वाक्य एवं शब्द शुद्धि (Spelling & Sentences)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q13. निम्नलिखित में से किस विकल्प में शब्द की वर्तनी पूर्णतः शुद्ध लिखी गई है?
           <span>In which option is the spelling of the word completely correct?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. उज्वल (Ujjwal - incorrect)</div>
           <div class="question-option correct">
             <span>B. उज्ज्वल (Ujjwal - correct)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. कवित्री (Kavitri - incorrect)</div>
           <div class="question-option">D. श्रंगार (Shringar - incorrect)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'उज्ज्वल' की शुद्ध वर्तनी में दोनों 'ज' आधे होते हैं (उत् + ज्वल = उज्ज्वल)। कवयित्री (कवि की स्त्री) और शृंगार (श्रृंगार नहीं) शुद्ध रूप होते हैं।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q14. व्याकरणिक नियमों के अनुसार निम्नलिखित में से शुद्ध वाक्य का चयन कीजिए:
           <span>Select the grammatically correct sentence from the options:</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. यहाँ शुद्ध गाय का दूध मिलता है।</div>
           <div class="question-option correct">
             <span>B. यहाँ गाय का शुद्ध दूध मिलता है।</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. खरगोश को काटकर गाजर खिलाओ।</div>
           <div class="question-option">D. केवल मात्र दस रुपये चाहिए।</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           विकल्प A में विशेषण का क्रम गलत है (गाय शुद्ध नहीं, दूध शुद्ध होता है)। विकल्प C का शुद्ध रूप "गाजर काटकर खरगोश को खिलाओ" तथा D में "केवल दस रुपये चाहिए" (केवल व मात्र एक साथ नहीं आते) होगा।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q15. हिंदी साहित्य की विख्यात कवियों के संदर्भ में प्रयुक्त होने वाले शब्द 'कवयित्री' का शुद्ध वर्तनी रूप कौन सा है?
           <span>Which is the correct spelling of 'Kavayitri'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. कवित्री</div>
           <div class="question-option">B. कवीइत्री</div>
           <div class="question-option correct">
             <span>C. कवयित्री</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">D. कव्यित्री</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'कवयित्री' संस्कृत व्याकरण के अनुसार शुद्ध शब्द रूप है, जिसमें 'क' और 'व' में कोई मात्रा नहीं होती तथा 'य' पर छोटी 'इ' और 'त्र' पर बड़ी 'ई' की मात्रा लगती है।
         </div>
       </div>`,
      `<h2>Rajasthan Police SI 2021 Hindi Solved Paper (Page 6)</h2>
       <p style="color: #475569; font-weight: 600; margin-bottom: 20px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">Section F: मुहावरे व पारिभाषिक शब्दावली (Idioms & Tech Terms)</p>
       <div class="solved-question-card">
         <div class="question-header">
           Q16. लोक बोली में बहुचर्चित मुहावरे 'अंगूठा दिखाना' का सही व्यावहारिक अर्थ क्या है?
           <span>What is the correct practical meaning of the popular idiom 'Angutha Dikhana'?</span>
         </div>
         <div class="question-options">
           <div class="question-option correct">
             <span>A. ऐन वक्त पर मदद करने से इनकार करना (Refusing at the last moment)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">B. अंगूठे पर चोट लगना</div>
           <div class="question-option">C. अंगूठा चूसना</div>
           <div class="question-option">D. अंगूठे से इशारा करना</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'अंगूठा दिखाना' का अर्थ होता है जब किसी को मदद की जरूरत हो और ऐन वक्त पर वह साफ़ मना कर दे (उपेक्षापूर्ण मना करना)।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q17. लोक कहावत 'अधजल गगरी छलकत जाये' (Adhjal Gagri Chalkat Jaye) का सही अर्थ स्पष्ट कीजिए:
           <span>Clarify the correct meaning of the proverb 'Adhjal Gagri Chalkat Jaye':</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. घड़े में पानी आधा होना</div>
           <div class="question-option correct">
             <span>B. कम ज्ञान या योग्यता होने पर अधिक दिखावा करना (Shallow knowledge makes high show)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. पानी को बचा-बचा कर चलना</div>
           <div class="question-option">D. मटके से पानी बाहर निकलना</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           यह कहावत ओछे या कम ज्ञानी व्यक्ति पर लागू होती है, जो थोड़ा सा ज्ञान या धन होने पर बहुत अधिक डींगें मारता है या इतराता है।
         </div>
       </div>
       
       <div class="solved-question-card">
         <div class="question-header">
           Q18. सरकारी एवं प्रशासनिक कामकाज में प्रयुक्त होने वाले अंग्रेजी प्रशासनिक शब्द 'Affidavit' का सही हिंदी रूप क्या है?
           <span>What is the correct Hindi term for the administrative word 'Affidavit'?</span>
         </div>
         <div class="question-options">
           <div class="question-option">A. सूचना-पत्र (Notification)</div>
           <div class="question-option correct">
             <span>B. शपथ-पत्र (Affidavit)</span>
             <span class="correct-badge">Correct</span>
           </div>
           <div class="question-option">C. ज्ञापन (Memorandum)</div>
           <div class="question-option">D. परिपत्र (Circular)</div>
         </div>
         <div class="review-explanation">
           <span class="explanation-title"><i class="fa-solid fa-circle-info"></i> विस्तृत हल / Explanation:</span>
           'Affidavit' का सही हिंदी प्रशासनिक शब्द 'शपथ-पत्र' या 'हलफनामा' होता है। 'Notification' को अधिसूचना, 'Memorandum' को ज्ञापन तथा 'Circular' को परिपत्र कहा जाता है।
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
