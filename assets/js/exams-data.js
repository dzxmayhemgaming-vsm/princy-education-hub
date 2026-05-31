const EXAMS_DATABASE = {
  categories: [
    {
      id: "ras",
      title: "RAS / RTS Exam",
      fullName: "Rajasthan Administrative Services",
      icon: "fa-crown",
      color: "hsl(35, 92%, 52%)",
      description: "Prepare for Rajasthan's premier civil services exam conducted by RPSC.",
      testsCount: 5,
      coursesCount: 2,
      pdfsCount: 12
    },
    {
      id: "reet",
      title: "REET Exam",
      fullName: "Rajasthan Eligibility Examination for Teachers",
      icon: "fa-user-graduate",
      color: "hsl(145, 63%, 42%)",
      description: "Exams for Level 1 & Level 2 primary and upper primary teacher recruitment.",
      testsCount: 8,
      coursesCount: 3,
      pdfsCount: 18
    },
    {
      id: "police-si",
      title: "Rajasthan Police SI",
      fullName: "Sub Inspector & Constable Exam",
      icon: "fa-shield-halved",
      color: "hsl(210, 80%, 45%)",
      description: "Start preparation for physical and written exams for Rajasthan Police.",
      testsCount: 6,
      coursesCount: 2,
      pdfsCount: 10
    },
    {
      id: "patwari",
      title: "RSMSSB Patwari",
      fullName: "Patwari & VDO (Gram Sevak) Exam",
      icon: "fa-file-invoice",
      color: "hsl(280, 65%, 50%)",
      description: "Target revenue and rural development officer posts under RSMSSB.",
      testsCount: 10,
      coursesCount: 1,
      pdfsCount: 15
    },
    {
      id: "cet",
      title: "Rajasthan CET",
      fullName: "Common Eligibility Test (Graduate/12th)",
      icon: "fa-layer-group",
      color: "hsl(330, 70%, 45%)",
      description: "Crack the essential gateway test for all secondary and graduate posts.",
      testsCount: 12,
      coursesCount: 4,
      pdfsCount: 20
    }
  ],

  mockTests: [
    {
      id: "ras-pre-gk",
      categoryId: "ras",
      title: "RAS Pre Paper-I: General Knowledge & Science",
      duration: 10, // 10 minutes for demo
      totalMarks: 200,
      positiveMark: 1.33,
      negativeMark: 0.44,
      questions: [
        {
          id: 1,
          question: "राजस्थान के किस जिले में 'आकल वुड फॉसिल पार्क' (Akal Wood Fossil Park) स्थित है?",
          englishQuestion: "In which district of Rajasthan is the 'Akal Wood Fossil Park' situated?",
          options: ["बाड़मेर (Barmer)", "जैसलमेर (Jaisalmer)", "जोधपुर (Jodhpur)", "बीकानेर (Bikaner)"],
          correct: 1,
          explanation: "आकल वुड फॉसिल पार्क जैसलमेर में राष्ट्रीय मरु उद्यान के पास स्थित है। यहाँ लगभग 18 करोड़ वर्ष पुराने काष्ठ जीवाश्म (Wood Fossils) मौजूद हैं।"
        },
        {
          id: 2,
          question: "विख्यात इतिहासकार कर्नल जेम्स टॉड (Colonel James Tod) ने किस पर्वत चोटी को 'संतों का शिखर' कहा है?",
          englishQuestion: "Which mountain peak was named 'Summit of the Saints' by renowned historian Colonel James Tod?",
          options: ["शेर (Sher)", "अचलगढ़ (Achalgarh)", "गुरुशिखर (Guru Shikhar)", "तारागढ़ (Taragarh)"],
          correct: 2,
          explanation: "माउंट आबू में स्थित अरावली पर्वतमाला की सबसे ऊंची चोटी 'गुरुशिखर' (1722 मीटर) को कर्नल जेम्स टॉड ने 'संतों का शिखर' कहा है।"
        },
        {
          id: 3,
          question: "रणथंभौर के चौहान वंश का संस्थापक कौन था?",
          englishQuestion: "Who was the founder of the Chauhan dynasty of Ranthambore?",
          options: ["गोविंदराज (Govindraj)", "हम्मीरदेव (Hammirdev)", "पृथ्वीराज तृतीय (Prithviraj III)", "वीरनारायण (Veernarayan)"],
          correct: 0,
          explanation: "पृथ्वीराज चौहान तृतीय के पुत्र गोविंदराज ने 1194 ई. में रणथंभौर में चौहान राजवंश की स्थापना की थी।"
        },
        {
          id: 4,
          question: "राजस्थान का राज्य नृत्य (State Dance) कौन सा है?",
          englishQuestion: "Which is the State Dance of Rajasthan?",
          options: ["कालबेलिया (Kalbelia)", "घूमर (Ghoomar)", "तेरहताली (Terah Taali)", "गैर (Gair)"],
          correct: 1,
          explanation: "घूमर राजस्थान का राज्य नृत्य है। इसे 'नृत्यों का सिरमौर' तथा 'राजस्थान की आत्मा' कहा जाता है।"
        },
        {
          id: 5,
          question: "राजस्थान में पंचायती राज व्यवस्था का उद्घाटन 2 अक्टूबर 1959 को किस जिले में किया गया था?",
          englishQuestion: "In which district of Rajasthan was the Panchayati Raj system inaugurated on 2nd October 1959?",
          options: ["जयपुर (Jaipur)", "नागौर (Nagaur)", "अजमेर (Ajmer)", "उदयपुर (Udaypur)"],
          correct: 1,
          explanation: "भारत के प्रथम प्रधानमंत्री पं. जवाहरलाल नेहरू ने 2 अक्टूबर 1959 को नागौर जिले के 'बगदरी' गाँव से देश में त्रिस्तरीय पंचायती राज व्यवस्था का शुभारंभ किया था।"
        }
      ]
    },
    {
      id: "police-si-hindi",
      categoryId: "police-si",
      title: "Rajasthan SI: सामान्य हिंदी (General Hindi) Mock Test",
      duration: 10,
      totalMarks: 200,
      positiveMark: 2.0,
      negativeMark: 0.66,
      questions: [
        {
          id: 1,
          question: "निम्नलिखित में से 'गुण संधि' का उदाहरण कौन सा है?",
          englishQuestion: "Which of the following is an example of 'Guna Sandhi'?",
          options: ["महेंद्र (Mahendra)", "सदैव (Sadaiv)", "यद्यपि (Yadyapi)", "गिरीश (Gireesh)"],
          correct: 0,
          explanation: "महेंद्र = महा + इंद्र (आ + इ = ए), यह गुण संधि का नियम है। सदैव (वृद्धि संधि), यद्यपि (यण संधि) और गिरीश (दीर्घ संधि) के उदाहरण हैं।"
        },
        {
          id: 2,
          question: "'जो सब कुछ जानता हो' वाक्यांश के लिए एक उपयुक्त शब्द क्या होगा?",
          englishQuestion: "What is the single word for the phrase 'One who knows everything'?",
          options: ["अल्पज्ञ (Alpagya)", "सर्वज्ञ (Sarvagya)", "विद्वान (Vidwaan)", "बहुज्ञ (Bahugya)"],
          correct: 1,
          explanation: "'सर्वज्ञ' का अर्थ होता है सब कुछ जानने वाला। कम जानने वाले को 'अल्पज्ञ' कहते हैं।"
        },
        {
          id: 3,
          question: "किस शब्द में 'उप' उपसर्ग का प्रयोग नहीं हुआ है?",
          englishQuestion: "In which word the prefix 'Up' has NOT been used?",
          options: ["उपकार (Upkar)", "उपदेश (Updesh)", "उचित (Uchit)", "उपन्यास (Upanyas)"],
          correct: 2,
          explanation: "'उचित' शब्द मूल शब्द है, इसमें 'उप' उपसर्ग का प्रयोग नहीं हुआ है। उपकार (उप + कार), उपदेश (उप + देश) तथा उपन्यास (उप + न्यास) में उप का प्रयोग हुआ है।"
        },
        {
          id: 4,
          question: "'अनिल' और 'अनल' शब्द युग्म का सही अर्थ भेद क्या है?",
          englishQuestion: "What is the correct meaning difference of the word pair 'Anil' and 'Anal'?",
          options: ["हवा और आग (Wind and Fire)", "आग और हवा (Fire and Wind)", "जल और थल (Water and Land)", "हवा और पानी (Wind and Water)"],
          correct: 0,
          explanation: "'अनिल' का अर्थ हवा (समीर) होता है और 'अनल' का अर्थ आग (पावक) होता है।"
        },
        {
          id: 5,
          question: "शुद्ध वर्तनी वाले शब्द का चयन कीजिए:",
          englishQuestion: "Select the word with correct spelling:",
          options: ["उज्वल (Ujjwal - incorrect)", "उज्ज्वल (Ujjwal - correct)", "कवयित्री (Kaviyitri - incorrect)", "कविइत्री (Kaviitri - incorrect)"],
          correct: 1,
          explanation: "'उज्ज्वल' में दोनों 'ज' आधे होते हैं (उत् + ज्वल = उज्ज्वल)। विकल्प 3 में 'कवयित्री' भी शुद्ध रूप है लेकिन यहाँ विकल्प 2 सबसे प्रामाणिक रूप से लिखा गया है।"
        }
      ]
    },
    {
      id: "reet-psychology",
      categoryId: "reet",
      title: "REET Level-1/2: Child Development & Pedagogy (CDP)",
      duration: 10,
      totalMarks: 30,
      positiveMark: 1.0,
      negativeMark: 0.0, // No negative marking in REET
      questions: [
        {
          id: 1,
          question: "बाल विकास में 'जीन पियाजे' ने संज्ञानात्मक विकास की कितनी अवस्थाएं बताई हैं?",
          englishQuestion: "How many stages of cognitive development did Jean Piaget define in child development?",
          options: ["3 अवस्थाएं", "4 अवस्थाएं", "5 अवस्थाएं", "6 अवस्थाएं"],
          correct: 1,
          explanation: "जीन पियाजे ने 4 अवस्थाएं बताई हैं: 1. संवेदी-पेशीय (0-2 वर्ष) 2. पूर्व-संक्रियात्मक (2-7 वर्ष) 3. मूर्त-संक्रियात्मक (7-11 वर्ष) 4. अमूर्त/औपचारिक-संक्रियात्मक (11 वर्ष से अधिक)।"
        },
        {
          id: 2,
          question: "क्रियाप्रसूत अनुबंधन सिद्धांत (Operant Conditioning Theory) का प्रतिपादन किसने किया था?",
          englishQuestion: "Who formulated the Operant Conditioning Theory?",
          options: ["इवान पावलव (Ivan Pavlov)", "बी.एफ. स्किनर (B.F. Skinner)", "एडवर्ड थार्नडाइक (E.L. Thorndike)", "अल्बर्ट बांडुरा (Albert Bandura)"],
          correct: 1,
          explanation: "बी.एफ. स्किनर ने चूहों और कबूतरों पर प्रयोग कर क्रियाप्रसूत अनुबंधन सिद्धांत का प्रतिपादन किया था, जिसमें पुनर्बलन (Reinforcement) को मुख्य बल दिया गया।"
        },
        {
          id: 3,
          question: "बुद्धि का 'द्विकारक सिद्धांत' (Two-Factor Theory of Intelligence) किसके द्वारा दिया गया था?",
          englishQuestion: "Who proposed the Two-Factor Theory of Intelligence?",
          options: ["हौवर्ड गार्डनर (Howard Gardner)", "अल्फ्रेड बिने (Alfred Binet)", "चार्ल्स स्पीयरमैन (Charles Spearman)", "थर्स्टन (Thurstone)"],
          correct: 2,
          explanation: "चार्ल्स स्पीयरमैन ने 1904 में बुद्धि का द्विकारक सिद्धांत दिया, जिसमें 'G-Factor' (सामान्य योग्यता) और 'S-Factor' (विशिष्ट योग्यता) शामिल हैं।"
        }
      ]
    }
  ],

  courses: [
    {
      id: "ras-foundation",
      categoryId: "ras",
      title: "RAS Complete Foundation Study Course 2026",
      instructor: "Dr. Vikram Singh & Team",
      rating: 4.9,
      students: "12,450+",
      progress: 35, // Progress percentage for active student
      totalLectures: 5, // Repurposed as Topics
      image: "assets/images/course-ras.jpg",
      description: "Complete chapter-wise structured syllabus guide with detailed handwritten notes reference, point-wise quick explanations, and revision capsules.",
      chapters: [
        {
          title: "Rajasthan History & Heritage (राजस्थान का इतिहास व कला-संस्कृति)",
          topics: [
            { 
              id: "ras-t1", 
              title: "कालीबंगा और आहड़ सभ्यताएं (Archaeological Sites of Rajasthan)", 
              duration: "15 mins read", 
              completed: true, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">1. कालीबंगा सभ्यता (Hanumangarh)</h3>
                <p style="margin-bottom: 14px;">कालीबंगा राजस्थान के हनुमानगढ़ जिले में <b>घग्गर (प्राचीन सरस्वती) नदी</b> के किनारे स्थित है। इसकी खोज सर्वप्रथम वर्ष 1952 में <b>अमलानन्द घोष</b> ने की थी।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 20px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>उत्खननकर्ता:</b> बी.बी. लाल एवं बी.के. थापर द्वारा 1961 से 1969 के मध्य किया गया।</li>
                  <li style="margin-bottom: 8px;"><b>शाब्दिक अर्थ:</b> 'काली चूड़ियाँ' (Black Bangles)।</li>
                  <li style="margin-bottom: 8px;"><b>मुख्य साक्ष्य:</b> जूते हुए खेत के साक्ष्य (विश्व में प्राचीनतम), भूकंप के प्राचीनतम प्रमाण, सात हवन कुंड (अग्निकुंड), अलंकृत ईंटें, तथा काष्ठ (लकड़ी) की बनी नाली।</li>
                </ul>

                <h3 style="color: var(--accent); margin-bottom: 12px;">2. आहड़ सभ्यता (Udaipur)</h3>
                <p style="margin-bottom: 14px;">उदयपुर में <b>आयड़ (बेड़च) नदी</b> के किनारे फली-फूली ताम्रयुगीन सभ्यता। इसे स्थानीय भाषा में <b>'धूलकोट'</b> (रेत का टीला) या 'अघाटपुर' भी कहा जाता है।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 10px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>खोज:</b> 1953 में अक्षय कीर्ति व्यास ने की। उत्खनन आर.सी. अग्रवाल और एच.डी. सांकलिया ने किया।</li>
                  <li style="margin-bottom: 8px;"><b>प्रमुख अवशेष:</b> तांबा गलाने की भट्टी (ताम्रनगरी), लाल व काले मिट्टी के बर्तन (मृदभांड), जिन्हें 'गोरे व कोठे' कहा जाता था। संयुक्त परिवार प्रथा के सूचक 6 चूल्हे मिले हैं।</li>
                </ul>
              `
            },
            { 
              id: "ras-t2", 
              title: "मेवाड़ राजवंश का इतिहास - भाग 1 (History of Mewar)", 
              duration: "20 mins read", 
              completed: true, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">मेवाड़ के गुहिल वंश का इतिहास</h3>
                <p style="margin-bottom: 14px;">मेवाड़ रियासत दुनिया के सबसे लंबे समय तक चलने वाले राजवंशों में से एक है। इसकी स्थापना 566 ई. में <b>गुहादित्य</b> ने की थी।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 20px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>बप्पा रावल (कालभोज):</b> इन्होंने 734 ई. में मौर्य शासक मानमोरी को हराकर चित्तौड़गढ़ पर अधिकार किया और नागदा को अपनी राजधानी बनाया। एकलिंगजी शिव मंदिर (कैलाशपुरी) का निर्माण करवाया।</li>
                  <li style="margin-bottom: 8px;"><b>जैत्र सिंह:</b> भूताला के युद्ध (1227 ई.) में दिल्ली के सुल्तान इल्तुतमिश को बुरी तरह पराजित किया। राजधानी को नागदा से चित्तौड़ स्थानांतरित किया।</li>
                  <li style="margin-bottom: 8px;"><b>रावल रतन सिंह:</b> वर्ष 1303 में अलाउद्दीन खिलजी ने चित्तौड़ पर आक्रमण किया। रतन सिंह के नेतृत्व में केसरिया हुआ तथा रानी पद्मिनी के नेतृत्व में 1600 वीरांगनाओं ने चित्तौड़गढ़ दुर्ग का प्रथम साका (जौहर) किया।</li>
                </ul>
              `
            },
            { 
              id: "ras-t3", 
              title: "महाराणा प्रताप और हल्दीघाटी युद्ध (Maharana Pratap)", 
              duration: "25 mins read", 
              completed: false, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">वीर शिरोमणि महाराणा प्रताप</h3>
                <p style="margin-bottom: 14px;">महाराणा प्रताप का जन्म <b>9 मई 1540</b> को कुंभलगढ़ दुर्ग के बादल महल में हुआ था। उनके बचपन का नाम 'कीका' था। राज्याभिषेक 28 फरवरी 1572 को गोगुंदा में हुआ।</p>
                
                <h3 style="color: var(--accent); margin-bottom: 8px;">हल्दीघाटी का ऐतिहासिक युद्ध (18 जून 1576)</h3>
                <p style="margin-bottom: 14px;">प्रताप और मुगल सम्राट अकबर की सेना (नेतृत्वकर्ता मानसिंह) के बीच युद्ध लड़ा गया।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 20px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>प्रताप का प्रिय घोड़ा:</b> चेतक, जिसने नाले को पार करते समय वीरगति प्राप्त की। बलीचा गाँव में चेतक की छतरी बनी हुई है।</li>
                  <li style="margin-bottom: 8px;"><b>सेनापति:</b> प्रताप के सेनापति हकीम खां सूरी थे (एकमात्र मुस्लिम सेनापति)।</li>
                  <li style="margin-bottom: 8px;"><b>ऐतिहासिक उपनाम:</b> अबुल फजल ने इसे 'खमनोर का युद्ध', बदायूँनी ने 'गोगुंदा का युद्ध' तथा कर्नल टॉड ने 'मेवाड़ की थर्मोपोली' कहा है।</li>
                </ul>
              `
            }
          ]
        },
        {
          title: "Rajasthan Geography (राजस्थान का भूगोल)",
          topics: [
            { 
              id: "ras-t4", 
              title: "राजस्थान के भौतिक प्रदेश (Physical Divisions of Rajasthan)", 
              duration: "18 mins read", 
              completed: false, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">राजस्थान का भू-आकृतिक विभाजन</h3>
                <p style="margin-bottom: 14px;">राजस्थान को मुख्य रूप से 4 विशिष्ट भौतिक प्रदेशों में बांटा गया है:</p>
                <ol style="margin-left: 20px; margin-bottom: 20px; line-height: 1.8;">
                  <li><b>पश्चिमी रेतीला मरुस्थल (थार मरुस्थल):</b> राज्य के 61.11% क्षेत्रफल पर विस्तृत, जिसमें 40% जनसंख्या निवास करती है।</li>
                  <li><b>अरावली पर्वतीय प्रदेश:</b> राज्य के 9% क्षेत्रफल पर विस्तृत। यह प्राचीनतम वलित पर्वत श्रृंखला है।</li>
                  <li><b>पूर्वी मैदानी भाग:</b> 23% क्षेत्रफल पर विस्तृत, सर्वाधिक उपजाऊ और सघन बसावट वाला क्षेत्र (39% आबादी)।</li>
                  <li><b>दक्षिणी-पूर्वी पठारी भाग (हाड़ौती का पठार):</b> 6.89% क्षेत्रफल पर विस्तृत, काली मिट्टी की अधिकता (कपासी मृदा)।</li>
                </ol>
              `
            },
            { 
              id: "ras-t5", 
              title: "अरावली पर्वतमाला की विशेषताएं (Aravali Ranges)", 
              duration: "15 mins read", 
              completed: false, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">अरावली पर्वतमाला: तथ्य और विशेषताएं</h3>
                <p style="margin-bottom: 14px;">अरावली श्रृंखला राजस्थान को उत्तर-पश्चिम से दक्षिण-पूर्व तक दो असमान भागों में विभाजित करती है।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 10px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>कुल लम्बाई:</b> 692 किमी (गुजरात के पालनपुर से दिल्ली की रायसीना पहाड़ी तक)।</li>
                  <li style="margin-bottom: 8px;"><b>राजस्थान में लम्बाई:</b> 550 किमी (कुल लंबाई का लगभग 80%)।</li>
                  <li style="margin-bottom: 8px;"><b>प्रमुख चोटियाँ:</b> गुरुशिखर (1722 मीटर, सिरोही), शेर (1597 मीटर, सिरोही), देलवाड़ा (1442 मीटर, सिरोही), जरगा (1431 मीटर, उदयपुर), अचलगढ़ (1380 मीटर, सिरोही)।</li>
                </ul>
              `
            }
          ]
        }
      ]
    },
    {
      id: "reet-l2-target",
      categoryId: "reet",
      title: "REET Level 2 Master Study Course 2026",
      instructor: "Princy Madam & Specialists",
      rating: 4.8,
      students: "18,900+",
      progress: 60,
      totalLectures: 4, // Topics
      image: "assets/images/course-reet.jpg",
      description: "Comprehensive written study modules for REET Level 2 containing complete Child Psychology, Hindi and Subject Specialization.",
      chapters: [
        {
          title: "Child Development & Pedagogy (बाल विकास व शिक्षाशास्त्र)",
          topics: [
            { 
              id: "reet-t1", 
              title: "विकास की अवधारणा और अधिगम से संबंध (Concept of Development)", 
              duration: "15 mins read", 
              completed: true, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">बाल विकास की अवधारणा</h3>
                <p style="margin-bottom: 14px;"><b>विकास (Development)</b> एक सतत और बहुआयामी प्रक्रिया है जो गर्भाधान से लेकर जीवनपर्यंत (Womb to Tomb) चलती रहती है।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 10px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>विकास बनाम वृद्धि:</b> वृद्धि (Growth) केवल शारीरिक और मात्रात्मक होती है (जैसे लंबाई, वजन), जबकि विकास गुणात्मक व मात्रात्मक दोनों होता है (जैसे परिपक्वता, सामाजिक समझ)।</li>
                  <li style="margin-bottom: 8px;"><b>विकास के आयाम:</b> शारीरिक, मानसिक (संज्ञानात्मक), सामाजिक, संवेगात्मक और नैतिक विकास।</li>
                  <li style="margin-bottom: 8px;"><b>अधिगम से संबंध:</b> विकास और अधिगम (Learning) एक दूसरे से घनिष्ठ रूप से जुड़े हैं। जैसे-जैसे बच्चे का शारीरिक व मानसिक विकास होता है, उसकी सीखने की क्षमता बढ़ती जाती है।</li>
                </ul>
              `
            },
            { 
              id: "reet-t2", 
              title: "पियाजे, वायगोत्स्की और कोहलबर्ग सिद्धांत (Piaget & Vygotsky)", 
              duration: "20 mins read", 
              completed: true, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">1. जीन पियाजे (Jean Piaget)</h3>
                <p style="margin-bottom: 14px;">संज्ञानात्मक विकास के जनक। इन्होंने बच्चों को <b>सक्रिय अन्वेषक</b> माना है और विकास की 4 अवस्थाएं बताई हैं (संवेदी-पेशीय, पूर्व-संक्रियात्मक, मूर्त-संक्रियात्मक, और औपचारिक-संक्रियात्मक)।</p>
                
                <h3 style="color: var(--accent); margin-bottom: 12px;">2. लेव वायगोत्स्की (Lev Vygotsky)</h3>
                <p style="margin-bottom: 14px;">सामाजिक-सांस्कृतिक सिद्धांत के प्रतिपादक। इनका मानना है कि बच्चे का संज्ञानात्मक विकास सामाजिक अंतःक्रिया (Social Interaction) के द्वारा होता है।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 10px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>ZPD (समीपस्थ विकास का क्षेत्र):</b> बालक के वास्तविक विकास और संभावित विकास के बीच का अंतर।</li>
                  <li style="margin-bottom: 8px;"><b>पाड़ / ढांचा (Scaffolding):</b> सीखने में बड़ों द्वारा दी जाने वाली अस्थायी सहायता (Temporary Support)।</li>
                </ul>
              `
            },
            { 
              id: "reet-t3", 
              title: "समावेशी शिक्षा की अवधारणा (Inclusive Education)", 
              duration: "15 mins read", 
              completed: true, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">समावेशी शिक्षा (Inclusive Education) क्या है?</h3>
                <p style="margin-bottom: 14px;">समावेशी शिक्षा का तात्पर्य एक ऐसी शिक्षा प्रणाली से है जिसमें बिना किसी भेदभाव के सभी बच्चों (सामान्य और विशिष्ट, जैसे दिव्यांग, पिछड़े, या प्रतिभावान) को एक ही छत के नीचे एक साथ नियमित स्कूल में शिक्षा दी जाती है।</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 10px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>मूल सिद्धांत:</b> विविधता का उत्सव मनाना, समानता का अधिकार, तथा व्यक्तिगत विभिन्नताओं के अनुसार शिक्षण व्यवस्था।</li>
                  <li style="margin-bottom: 8px;"><b>अधिगम अक्षमताएं:</b> डिस्लेक्सिया (पठन विकार), डिस्ग्राफिया (लेखन विकार), डिस्कैलकुलिया (गणितीय विकार)।</li>
                </ul>
              `
            }
          ]
        },
        {
          title: "Hindi Grammar for REET (सामान्य हिंदी व्याकरण)",
          topics: [
            { 
              id: "reet-t4", 
              title: "संधि, समास और उनके भेद (Sandhi & Samas)", 
              duration: "25 mins read", 
              completed: false, 
              content: `
                <h3 style="color: var(--accent); margin-bottom: 12px;">1. संधि विचार</h3>
                <p style="margin-bottom: 14px;">दो निकटवर्ती वर्णों के परस्पर मेल से होने वाले विकार या परिवर्तन को <b>संधि</b> कहते हैं। संधि के तीन मुख्य प्रकार हैं:</p>
                <ul class="study-bullets" style="margin-left: 20px; margin-bottom: 20px; list-style-type: square;">
                  <li style="margin-bottom: 8px;"><b>स्वर संधि:</b> दो स्वरों के मेल से (जैसे: हिम + आलय = हिमालय)। इसके 5 भेद हैं: दीर्घ, गुण, वृद्धि, यण, और अयादि।</li>
                  <li style="margin-bottom: 8px;"><b>व्यंजन संधि:</b> व्यंजन का स्वर या व्यंजन से मेल होने पर (जैसे: वाक् + ईश = वागीश)।</li>
                  <li style="margin-bottom: 8px;"><b>विसर्ग संधि:</b> विसर्ग का स्वर या व्यंजन से मेल होने पर (जैसे: मनः + हर = मनोहर)।</li>
                </ul>
                
                <h3 style="color: var(--accent); margin-bottom: 12px;">2. समास विचार</h3>
                <p style="margin-bottom: 14px;">दो या दो से अधिक शब्दों के सार्थक मेल से नए संक्षिप्त शब्द बनाने की प्रक्रिया को <b>समास</b> कहते हैं। समास के 6 मुख्य भेद हैं: अव्ययीभाव, तत्पुरुष, द्विगु, द्वंद्व, कर्मधारय, और बहुव्रीहि।</p>
              `
            }
          ]
        }
      ]
    }
  ],

  pdfs: [
    { id: "pdf-1", title: "राजस्थान का भूगोल: हस्तलिखित नोट्स (Handwritten Geography Notes)", subject: "Rajasthan GK", size: "4.5 MB", category: "notes", downloadCount: "1.2k" },
    { id: "pdf-2", title: "RPSC RAS Pre 2023 Solved Paper with Explanations", subject: "Previous Papers", size: "2.1 MB", category: "papers", downloadCount: "850+" },
    { id: "pdf-3", title: "REET Level-1 Child Psychology Complete Formula Book", subject: "Psychology", size: "3.8 MB", category: "notes", downloadCount: "2.4k" },
    { id: "pdf-4", title: "राजस्थान की कला एवं संस्कृति (Art & Culture Notes)", subject: "Rajasthan GK", size: "6.2 MB", category: "notes", downloadCount: "3.1k" },
    { id: "pdf-5", title: "RSMSSB Patwari 2021 Previous Year Paper PDF", subject: "Previous Papers", size: "1.8 MB", category: "papers", downloadCount: "920" },
    { id: "pdf-6", title: "राजस्थान आर्थिक समीक्षा 2025-26 (Rajasthan Economic Review)", subject: "Current Affairs", size: "8.5 MB", category: "current", downloadCount: "4.5k" },
    { id: "pdf-7", title: "General Hindi Grammar Guide for SI and LDC", subject: "Hindi", size: "5.1 MB", category: "notes", downloadCount: "1.7k" }
  ],

  dailyGK: [
    {
      question: "राजस्थान की थार मरुस्थल की जीवन रेखा (Lifeline of Thar) किस नहर को कहा जाता है?",
      options: ["गंगनहर (Gang Canal)", "इन्दिरा गाँधी नहर (Indira Gandhi Canal)", "भरतपुर नहर (Bharatpur Canal)", "यमुना लिंक नहर (Yamuna Link)"],
      correct: 1,
      explanation: "इन्दिरा गाँधी नहर परियोजना (IGNP) को थार मरुस्थल की जीवन रेखा या मरुगंगा कहा जाता है। यह पश्चिमी राजस्थान को पेयजल और सिंचाई सुविधा प्रदान करती है।"
    },
    {
      question: "राजस्थान का प्रसिद्ध लोक मेला 'पुष्कर मेला' (Pushkar Mela) किस माह में आयोजित होता है?",
      options: ["कार्तिक (Kartik)", "फाल्गुन (Phalgun)", "श्रावण (Shravan)", "चैत्र (Chaitra)"],
      correct: 0,
      explanation: "पुष्कर मेला अजमेर जिले में प्रत्येक वर्ष कार्तिक पूर्णिमा (अक्टूबर-नवंबर) को समाप्त होने वाला एक प्रसिद्ध ऊँट और धार्मिक मेला है।"
    },
    {
      question: "मत्स्य संघ (Matsya Union) का राजस्थान में विलय कब किया गया था?",
      options: ["18 मार्च 1948", "30 मार्च 1949", "15 मई 1949", "1 नवंबर 1956"],
      correct: 2,
      explanation: "मत्स्य संघ को राजस्थान के एकीकरण के पांचवें चरण (15 मई 1949) में 'संयुक्त वृहद् राजस्थान' में मिलाया गया था।"
    }
  ]
};

// Export to window object
window.EXAMS_DATABASE = EXAMS_DATABASE;
