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
      title: "RAS Complete Foundation Batch 2026",
      instructor: "Dr. Vikram Singh & Team",
      rating: 4.9,
      students: "12,450+",
      progress: 35, // Progress percentage for active student
      totalLectures: 350,
      image: "assets/images/course-ras.jpg",
      description: "Pre-cum-Mains integrated target batch covering dynamic Rajasthan GK, History, Geography, Polity, Science and Answer Writing Practice.",
      chapters: [
        {
          title: "Rajasthan History & Heritage (राजस्थान का इतिहास व कला-संस्कृति)",
          lectures: [
            { id: "ras-l1", title: "Lec 01: कालीबंगा और आहड़ सभ्यताएं (Archaeological Sites)", duration: "45 mins", completed: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "ras-l2", title: "Lec 02: मेवाड़ राजवंश का इतिहास - भाग 1 (History of Mewar)", duration: "50 mins", completed: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "ras-l3", title: "Lec 03: महाराणा प्रताप और हल्दीघाटी युद्ध (Maharana Pratap)", duration: "60 mins", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
          ]
        },
        {
          title: "Rajasthan Geography (राजस्थान का भूगोल)",
          lectures: [
            { id: "ras-l4", title: "Lec 04: राजस्थान के भौतिक प्रदेश (Physical Divisions of Rajasthan)", duration: "55 mins", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "ras-l5", title: "Lec 05: अरावली पर्वतमाला की विशेषताएं (Aravali Ranges)", duration: "48 mins", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
          ]
        }
      ]
    },
    {
      id: "reet-l2-target",
      categoryId: "reet",
      title: "REET Level 2 Master Selection Batch 2026",
      instructor: "Princy Madam & Specialists",
      rating: 4.8,
      students: "18,900+",
      progress: 60,
      totalLectures: 240,
      image: "assets/images/course-reet.jpg",
      description: "Dedicated course for REET Level 2 containing complete Child Psychology, Hindi, Sanskrit/English, and Subject Specialization (Social Studies / Maths-Science).",
      chapters: [
        {
          title: "Child Development & Pedagogy (बाल विकास व शिक्षाशास्त्र)",
          lectures: [
            { id: "reet-l1", title: "Lec 01: विकास की अवधारणा और अधिगम से संबंध (Concept of Development)", duration: "40 mins", completed: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "reet-l2", title: "Lec 02: पियाजे, वायगोत्स्की और कोहलबर्ग सिद्धांत (Piaget & Vygotsky)", duration: "55 mins", completed: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "reet-l3", title: "Lec 03: समावेशी शिक्षा की अवधारणा (Inclusive Education)", duration: "42 mins", completed: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
          ]
        },
        {
          title: "Hindi Grammar for REET (सामान्य हिंदी व्याकरण)",
          lectures: [
            { id: "reet-l4", title: "Lec 01: संधि, समास और उनके भेद (Sandhi & Samas)", duration: "45 mins", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
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

// Export to window object for absolute ease of SPA access without ES6 module imports issues locally
window.EXAMS_DATABASE = EXAMS_DATABASE;
