export interface TranslationType {
  navTitle: string;
  navSubtitle: string;
  langEn: string;
  langMl: string;
  langAr: string;
  tabSalah: string;
  tabWudu: string;
  tabDress: string;
  tabDuas: string;
  tabTasbih: string;
  tabQibla: string;
  tabTimes: string;
  tabSupport: string;

  // Wudu Section
  wuduTitle: string;
  wuduSubtitle: string;
  wuduStep: string;
  wuduStepsData: {
    title: string;
    desc: string;
    arabic?: string;
  }[];

  // Salah Section
  salahTitle: string;
  salahSubtitle: string;
  salahTableTitle: string;
  salahTableSub: string;
  salahFard: string;
  salahSunnah: string;
  salahStepsTitle: string;
  salahStepsSub: string;
  salahStepName: string;
  salahRecitation: string;
  salahTransliteration: string;
  salahTranslation: string;
  salahStepsData: {
    title: string;
    position: string;
    desc: string;
    arabic: string;
    translit: string;
    translation: string;
  }[];

  // Dress Code Section
  dressTitle: string;
  dressSubtitle: string;
  dressMale: string;
  dressFemale: string;
  dressMaleRules: string[];
  dressFemaleRules: string[];
  dressNoteTitle: string;
  dressNoteDesc: string;

  // Duas Section
  duasTitle: string;
  duasSubtitle: string;
  duaSearchPlaceholder: string;
  duaCategories: { all: string; wudu: string; salah: string; daily: string };
  duasData: {
    id: string;
    category: string;
    title: string;
    desc: string;
    arabic: string;
    translit: string;
    translation: string;
  }[];

  // Tasbih Section
  tasbihTitle: string;
  tasbihSubtitle: string;
  tasbihCount: string;
  tasbihTarget: string;
  tasbihReset: string;
  tasbihSave: string;
  tasbihCustomDhikr: string;
  tasbihPhrases: { text: string; translation: string }[];

  // Qibla Section
  qiblaTitle: string;
  qiblaSubtitle: string;
  qiblaDesc: string;
  qiblaCompassAlign: string;
  qiblaFound: string;

  // Prayer Times Section
  timesTitle: string;
  timesSubtitle: string;
  timesCalcMethod: string;
  timesLatitude: string;
  timesLongitude: string;
  timesNextPrayer: string;
  timesTimeLeft: string;
  methods: { [key: string]: string };

  // Support Section
  supportTitle: string;
  supportSubtitle: string;
  supportDonateTitle: string;
  supportDonateDesc: string;
  supportFormTitle: string;
  supportFormName: string;
  supportFormEmail: string;
  supportFormMsg: string;
  supportFormSubmit: string;
  supportFormSuccess: string;
  supportDevTitle: string;
  supportDevDesc: string;
}

export const translations: Record<string, TranslationType> = {
  en: {
    navTitle: "TasbeehLife",
    navSubtitle: "Islamic Prayer & Learning Guide",
    langEn: "English",
    langMl: "മലയാളം",
    langAr: "العربية",
    tabSalah: "Prayer (Salah)",
    tabWudu: "Ablution (Wudu)",
    tabDress: "Dress Code",
    tabDuas: "Duas & Adhkar",
    tabTasbih: "Tasbih Counter",
    tabQibla: "Qibla Finder",
    tabTimes: "Prayer Times",
    tabSupport: "Support & Feedback",

    wuduTitle: "Step-by-Step Ablution (Wudu)",
    wuduSubtitle: "Purification of body and soul before standing in prayer",
    wuduStep: "Step",
    wuduStepsData: [
      {
        title: "Intention (Niyyah) & Basmalah",
        desc: "Make the silent intention in your heart to purify yourself for prayer. Say: 'Bismillah' (In the name of Allah).",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      },
      {
        title: "Washing the Hands",
        desc: "Wash your hands up to the wrists three times, ensuring water gets between your fingers.",
      },
      {
        title: "Rinsing the Mouth",
        desc: "Take water into your mouth with your right hand, swirl it around, and spit it out. Do this three times.",
      },
      {
        title: "Inhaling Water in Nose",
        desc: "Sniff water into your nose with your right hand, then blow it out using your left hand. Do this three times.",
      },
      {
        title: "Washing the Face",
        desc: "Wash your entire face three times, from the top of the forehead to the bottom of the chin, and from ear to ear.",
      },
      {
        title: "Washing the Arms",
        desc: "Wash your right arm first, then left arm, from the fingertips up to and including the elbows, three times.",
      },
      {
        title: "Wiping the Head (Masah)",
        desc: "Moisten your hands and wipe your head once, starting from the forehead to the back of the neck, and back to the front.",
      },
      {
        title: "Wiping the Ears",
        desc: "Using the same wet hands, use index fingers to clean the inside of the ears and thumbs for the back of the ears, once.",
      },
      {
        title: "Washing the Feet",
        desc: "Wash your feet up to the ankles three times, starting with the right foot, ensuring water washes between the toes.",
      },
      {
        title: "Dua After Wudu",
        desc: "Look towards the heavens and recite the Shahada and the following supplication to complete your purification.",
        arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
      },
    ],

    salahTitle: "The Structure and Practice of Salah",
    salahSubtitle: "Learn how to establish prayer with physical postures and spiritual recitations",
    salahTableTitle: "The 5 Daily Prayers (Fard & Sunnah Rak'ahs)",
    salahTableSub: "Understanding the number of mandatory and recommended cycles",
    salahFard: "Fard (Obligent)",
    salahSunnah: "Sunnah (Recommended)",
    salahStepsTitle: "Interactive Step-by-Step Prayer Guide",
    salahStepsSub: "Click through the slides to learn postures, Arabic pronunciations, transliterations, and meanings",
    salahStepName: "Step",
    salahRecitation: "Recitation (Arabic)",
    salahTransliteration: "Transliteration",
    salahTranslation: "Translation",
    salahStepsData: [
      {
        title: "Intention & Takbiratul Ihram",
        position: "Standing (Qiyam)",
        desc: "Formulate your intention (Niyyah) in your heart. Raise your hands to your ears (men) or chest (women) with palms facing forward and say the Takbir to start the prayer.",
        arabic: "اللهُ أَكْبَرُ",
        translit: "Allahu Akbar",
        translation: "Allah is the Greatest.",
      },
      {
        title: "Standing (Qiyam) & Recitation",
        position: "Standing (Qiyam)",
        desc: "Place your right hand over your left hand on your chest/navel. Look down at the place of prostration. Recite Al-Fatihah followed by another short Surah of the Quran.",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ... آمِينَ",
        translit: "Bismillaahir-Rahmaanir-Raheem. Alhamdu lillaahi Rabbil-'Aalameen... Ameen",
        translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful. Praise be to Allah, Lord of the worlds... Ameen.",
      },
      {
        title: "Bowing (Ruku)",
        position: "Bowing (Ruku)",
        desc: "Say 'Allahu Akbar' and bend down, placing hands on knees, back straight, and eyes looking at the feet. Recite this three times.",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translit: "Subhaana Rabbiyal-'Adheem (3 times)",
        translation: "Glory be to my Lord, the Almighty.",
      },
      {
        title: "Rising from Bowing (I'tidal)",
        position: "Standing (I'tidal)",
        desc: "Rise back up to standing while raising your hands. Recite the first part while rising, and the second part when fully erect.",
        arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ",
        translit: "Sami'a Allaahu liman hamidah. Rabbana wa lakal-hamd",
        translation: "Allah listens to those who praise Him. Our Lord, all praise is due to You.",
      },
      {
        title: "Prostration (Sujud)",
        position: "Prostrate (Sujud)",
        desc: "Say 'Allahu Akbar' and prostrate. Forehead, nose, palms, knees, and toes must touch the ground. Recite this three times.",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "Subhaana Rabbiyal-A'laa (3 times)",
        translation: "Glory be to my Lord, the Most High.",
      },
      {
        title: "Sitting Between Prostrations (Julus)",
        position: "Sitting (Julus)",
        desc: "Say 'Allahu Akbar', rise to a sitting position, resting on your left thigh with feet folded. Keep hands on thighs. Recite this supplication.",
        arabic: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي",
        translit: "Rabbigh-fir lee, war-hamnee, waj-burnee, war-fa'nee, war-zuqnee, wah-dinee",
        translation: "O my Lord! Forgive me, have mercy on me, mend my shortcomings, elevate my status, provide sustenance for me, and guide me.",
      },
      {
        title: "Second Prostration",
        position: "Prostrate (Sujud)",
        desc: "Say 'Allahu Akbar' and perform the second prostration exactly like the first, reciting the praise three times.",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "Subhaana Rabbiyal-A'laa (3 times)",
        translation: "Glory be to my Lord, the Most High.",
      },
      {
        title: "Tashahhud (Sitting & Testimony)",
        position: "Sitting (Tashahhud)",
        desc: "Perform this in the second and last Rak'ah. Sit, raise the index finger of the right hand when reciting the testimony of faith.",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.",
        translit: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat... Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa Rasooluh.",
        translation: "All compliments, prayers, and pure things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings... I bear witness that there is no deity except Allah, and I bear witness that Muhammad is His servant and Messenger.",
      },
      {
        title: "Ending with Peace (Taslim)",
        position: "Sitting (Taslim)",
        desc: "Turn your face to the right shoulder reciting the Taslim, then turn to the left shoulder reciting the same.",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        translit: "As-Salaamu 'alaykum wa rahmatullaah",
        translation: "May peace and mercy of Allah be upon you.",
      },
    ],

    dressTitle: "Dress Guidelines (Awrah) for Prayer",
    dressSubtitle: "Understanding modesty requirements and recommended attire to show respect in front of the Creator",
    dressMale: "Male Attire Guidelines",
    dressFemale: "Female Attire Guidelines",
    dressMaleRules: [
      "The minimum area to be covered is from the navel to the knees (inclusive).",
      "Shoulders must also be covered during the prayer; wearing a simple vest is discouraged.",
      "Clothing should be clean, pure (free from impurities like urine or alcohol), and loose.",
      "It is recommended to wear white or tidy traditional clothes (like a clean Thobe or Kurta).",
    ],
    dressFemaleRules: [
      "The entire body must be covered except for the face and the hands up to the wrists.",
      "Hair, neck, ears, and chest must be completely concealed with a proper hijab/head covering.",
      "Garments must be loose-fitting, opaque (not see-through), and not highlight bodily contours.",
      "Feet should ideally be covered either by a long dress/abaya or by wearing clean socks.",
    ],
    dressNoteTitle: "Note on Purity (Taharah)",
    dressNoteDesc: "Before worrying about the styling of the clothes, one must ensure they are 100% clean and free of Najasah (impurities). Salah is invalid if garments or the ground of prayer contain najas.",

    duasTitle: "Duas & Supplications (Adhkar)",
    duasSubtitle: "Essential prayers recited before, during, and after Salah for daily life benefits",
    duaSearchPlaceholder: "Search Duas by title, category, or meaning...",
    duaCategories: { all: "All", wudu: "Wudu", salah: "Salah", daily: "Daily/General" },
    duasData: [
      {
        id: "dua-wudu-end",
        category: "wudu",
        title: "Upon Completing Wudu",
        desc: "Recited after concluding the ablution. Opens the eight gates of Paradise.",
        arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        translit: "Ashhadu an la ilaha illallah wahdahu la sharika lah, wa ashhadu anna Muhammadan 'abduhu wa rasuluh. Allahumma-j'alni minat-tawwabina wa-j'alni minal-mutatahhirin.",
        translation: "I bear witness that there is no god but Allah alone without partner, and I bear witness that Muhammad is His servant and Messenger. O Allah, make me of those who repent and make me of those who purify themselves.",
      },
      {
        id: "dua-qunut",
        category: "salah",
        title: "Dua Al-Qunut (Fajr/Witr)",
        desc: "Supplication of obedience and seeking guidance, typically recited in Witr or Fajr prayer.",
        arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ.",
        translit: "Allahumma-hdinee feeman hadayt, wa 'aafinee feeman 'aafayt, wa tawallanee feeman tawallayt, wa baarik lee feemaa a'tayt, wa qinee sharra maa qadayt, fa innaka taqdee walaa yuqdaa 'alayk, wa innahu laa yadillu man waalayt, walaa ya'izzu man 'aadayt, tabaarakta Rabbanaa wa ta'aalayt.",
        translation: "O Allah, guide me among those whom You have guided, grant me health among those whom You have granted health, take me into Your charge among those whom You have taken into Your charge, bless me in what You have given, and guard me against the evil of what You have decreed. For indeed, You decree and none can decree over You. Verily, he whom You take as a friend is not humiliated, and he whom You take as an enemy is not honored. Blessed are You, our Lord, and Exalted.",
      },
      {
        id: "dua-salah-end",
        category: "salah",
        title: "Seeking Forgiveness After Salah",
        desc: "Sunnah of the Prophet (PBUH) immediately upon finishing the prayer.",
        arabic: "أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        translit: "Astaghfirullaah (3 times). Allahumma Antas-Salaam wa minkas-salaam, tabaarakta yaa dhal-jalaali wal-ikraam.",
        translation: "I seek the forgiveness of Allah (3 times). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.",
      },
      {
        id: "dua-parents",
        category: "daily",
        title: "Dua for Parents",
        desc: "A beautiful Quranic prayer for one's parents (Surah Al-Isra 17:24).",
        arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        translit: "Rabbi-rhamhuma kama rabbayanee sagheera.",
        translation: "My Lord! Bestow on them Your mercy even as they cherished and reared me in childhood.",
      },
    ],

    tasbihTitle: "Interactive Digital Tasbih Beads",
    tasbihSubtitle: "Keep track of your dhikr and daily remembrance of Allah with responsive feedback",
    tasbihCount: "Total Count",
    tasbihTarget: "Target Goal",
    tasbihReset: "Reset",
    tasbihSave: "Log Count",
    tasbihCustomDhikr: "Enter Custom Dhikr Phrase",
    tasbihPhrases: [
      { text: "سُبْحَانَ اللهِ", translation: "SubhanAllah (Glory be to Allah)" },
      { text: "الْحَمْدُ للهِ", translation: "Alhamdulillah (Praise be to Allah)" },
      { text: "اللهُ أَكْبَرُ", translation: "Allahu Akbar (Allah is the Greatest)" },
      { text: "أَسْتَغْفِرُ اللهَ", translation: "Astaghfirullah (I seek Allah's forgiveness)" },
      { text: "لَا إِلٰهَ إِلَّا اللهُ", translation: "La ilaha illallah (There is no god but Allah)" },
    ],

    qiblaTitle: "Qibla Compass Direction Simulator",
    qiblaSubtitle: "Locate the exact direction of the Kaaba (Makkah) from your position",
    qiblaDesc: "This simulator uses coordinate calculation to pinpoint the Kaaba. In a live mobile browser with compass access, it aligns dynamically. Rotate the compass to align the green needle with the Kaaba marker at 0°.",
    qiblaCompassAlign: "Align Compass (Rotate or Sim)",
    qiblaFound: "ALIGNED WITH QIBLA!",

    timesTitle: "Prayer Times & Countdown",
    timesSubtitle: "Calculate accurate prayer times for your location and track time left for the next prayer",
    timesCalcMethod: "Calculation Method",
    timesLatitude: "Latitude",
    timesLongitude: "Longitude",
    timesNextPrayer: "Next Prayer",
    timesTimeLeft: "Time Remaining",
    methods: {
      MWL: "Muslim World League (MWL)",
      ISNA: "Islamic Society of North America (ISNA)",
      Egypt: "Egyptian General Authority of Survey",
      Makkah: "Umm Al-Qura University, Makkah",
      Karachi: "University of Islamic Sciences, Karachi",
    },

    supportTitle: "Development & Support",
    supportSubtitle: "Support the ongoing development of educational Islamic tools and share your valuable feedback",
    supportDonateTitle: "Support the Project",
    supportDonateDesc: "This is an open-source, non-profit educational platform built to facilitate prayer learning. Your support helps cover hosting costs and add features like multi-voice audio recitations and offline apps.",
    supportFormTitle: "Send Your Feedback / Support Requests",
    supportFormName: "Your Name",
    supportFormEmail: "Your Email Address",
    supportFormMsg: "Message or Feature Request",
    supportFormSubmit: "Submit Message",
    supportFormSuccess: "Thank you! Your feedback has been simulated and saved successfully to the system.",
    supportDevTitle: "Developer Resources",
    supportDevDesc: "Designed with Next.js, Tailwind CSS, and TypeScript. Interested in contributing or running the code locally? Check out the GitHub Repository or contact our support team.",
  },
  ml: {
    navTitle: "TasbeehLife",
    navSubtitle: "ഇസ്‌ലാമിക നമസ്കാര പഠന സഹായി",
    langEn: "English",
    langMl: "മലയാളം",
    langAr: "العربية",
    tabSalah: "നമസ്കാരം (Salah)",
    tabWudu: "വുദു (വുളൂഅ്)",
    tabDress: "വസ്ത്രധാരണ രീതി",
    tabDuas: "ദുആകളും ദിക്റുകളും",
    tabTasbih: "തസ്ബീഹ് കൗണ്ടർ",
    tabQibla: "ഖിബ്‌ല കണ്ടെത്തുക",
    tabTimes: "നമസ്കാര സമയങ്ങൾ",
    tabSupport: "പിന്തുണയും അഭിപ്രായങ്ങളും",

    wuduTitle: "വുദു ചെയ്യേണ്ട ക്രമം (ഘട്ടം ഘട്ടമായി)",
    wuduSubtitle: "നമസ്കാരത്തിലേക്ക് പ്രവേശിക്കുന്നതിന് മുമ്പ് ശരീരവും മനസ്സും ശുദ്ധീകരിക്കുന്നു",
    wuduStep: "ഘട്ടം",
    wuduStepsData: [
      {
        title: "നിയ്യത്തും ബിസ്മിയും",
        desc: "വുദുവിനായി മനസ്സിൽ നിയ്യത്ത് ചെയ്യുക. തുടർന്ന് 'ബിസ്മില്ലാഹിർ റഹ്മാനിർ റഹീം' എന്ന് പറയുക.",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      },
      {
        title: "രണ്ട് കൈകളും കഴുകുക",
        desc: "രണ്ട് മുൻകൈകളും മണിബന്ധം (wrist) വരെ മൂന്ന് തവണ വൃത്തിയായി കഴുകുക, വിരലുകൾക്കിടയിലും വെള്ളമെത്തിക്കുക.",
      },
      {
        title: "വായ കൊപ്ലിക്കുക",
        desc: "വലതുകൈ കൊണ്ട് വായയിൽ വെള്ളമൊഴിച്ച്, നന്നായി കുലുക്കി തുപ്പിക്കളയുക. ഇത് മൂന്ന് തവണ ചെയ്യുക.",
      },
      {
        title: "മൂക്കിൽ വെള്ളം കയറ്റി ചീറ്റുക",
        desc: "വലതുകൈ കൊണ്ട് മൂക്കിൽ വെള്ളം കയറ്റുകയും ഇടതുകൈ കൊണ്ട് അത് ചീറ്റി കളയുകയും ചെയ്യുക. മൂന്ന് തവണ ചെയ്യുക.",
      },
      {
        title: "മുഖം കഴുകുക",
        desc: "നെറ്റിയുടെ മുകൾഭാഗം മുതൽ താടിയുടെ താഴെ വരെയും, ഒരറ്റത്തെ ചെവി മുതൽ മറ്റേ അറ്റത്തെ ചെവി വരെയും മുഖം മുഴുവനായി മൂന്ന് തവണ കഴുകുക.",
      },
      {
        title: "ഇരു കൈകളും കഴുകുക",
        desc: "വിരൽത്തുമ്പ് മുതൽ കൈമുട്ടുകൾ ഉൾപ്പെടെ ഇരു കൈകളും (ആദ്യം വലത്, ശേഷം ഇടത്) മൂന്ന് തവണ കഴുകുക.",
      },
      {
        title: "തല തടവുക (മസ്ഹ്)",
        desc: "കൈകൾ നനച്ച ശേഷം നെറ്റിയുടെ മുൻഭാഗത്ത് നിന്ന് തുടങ്ങി കഴുത്തിന്റെ പിന്നിലേക്ക് കൊണ്ടുപോയി തിരികെ മുന്നിലേക്ക് തടവുക (ഒരു തവണ).",
      },
      {
        title: "ചെവികൾ തടവുക",
        desc: "നനഞ്ഞ ചൂണ്ടുവിരലുകൾ കൊണ്ട് ചെവിയുടെ ഉൾഭാഗവും തള്ളവിരലുകൾ കൊണ്ട് ചെവിയുടെ പുറകുവശവും തടവുക (ഒരു തവണ).",
      },
      {
        title: "രണ്ട് കാലുകളും കഴുകുക",
        desc: "കണങ്കാലുകൾ (ankle) ഉൾപ്പെടെ ഇരു കാലുകളും (ആദ്യം വലത് കാല്, ശേഷം ഇടത് കാല്) വിരലുകൾക്കിടയിൽ വെള്ളം എത്തിച്ചുകൊണ്ട് മൂന്ന് തവണ കഴുകുക.",
      },
      {
        title: "വുദുവിന് ശേഷമുള്ള ദുആ",
        desc: "ആകാശത്തേക്ക് നോക്കി ശഹാദത്ത് കലിമയും ഈ ദുആയും ചൊല്ലി വുദു പൂർത്തിയാക്കുക.",
        arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
      },
    ],

    salahTitle: "നമസ്കാരത്തിന്റെ ഘടനയും രീതിയും",
    salahSubtitle: "ശാരീരിക ചലനങ്ങളിലൂടെയും ആത്മീയ പ്രാർത്ഥനകളിലൂടെയും നമസ്കാരം എങ്ങനെ നിർവഹിക്കാമെന്ന് പഠിക്കുക",
    salahTableTitle: "5 സമയ നമസ്കാരങ്ങൾ (ഫർളും സുന്നത്തും റക്അത്തുകൾ)",
    salahTableSub: "നിർബന്ധിതവും പ്രോത്സാഹിപ്പിക്കപ്പെട്ടതുമായ റക്അത്തുകളുടെ എണ്ണം മനസ്സിലാക്കുക",
    salahFard: "ഫർള് (നിർബന്ധം)",
    salahSunnah: "സുന്നത്ത് (പ്രതിഫലാർഹമായവ)",
    salahStepsTitle: "ഇന്ററാക്ടീവ് നമസ്കാര ഗൈഡ്",
    salahStepsSub: "ഓരോ ഘട്ടങ്ങളും ചിത്രങ്ങളിലൂടെയും അറബി ഉച്ചാരണം, മലയാളം ലിപി, അർത്ഥം എന്നിവയിലൂടെയും പഠിക്കുക",
    salahStepName: "ഘട്ടം",
    salahRecitation: "ചൊല്ലേണ്ട രൂപം (അറബിയിൽ)",
    salahTransliteration: "മലയാളം ലിപി (ഉച്ചാരണം)",
    salahTranslation: "അർത്ഥം (മലയാളത്തിൽ)",
    salahStepsData: [
      {
        title: "നിയ്യത്തും തക്ബീറത്തുൽ ഇഹ്റാമും",
        position: "നിൽപ്പ് (ഖിയാം)",
        desc: "മനസ്സിൽ നമസ്കാരത്തിനായി നിയ്യത്ത് (ഉദ്ദേശ്യം) വെക്കുക. കൈപ്പത്തികൾ മുന്നോട്ട് പിടിച്ചു കൊണ്ട് കൈകൾ ചെവിയോളം (പുരുഷന്മാർ) അല്ലെങ്കിൽ നെഞ്ചോളം (സ്ത്രീകൾ) ഉയർത്തി തക്ബീർ ചൊല്ലി നമസ്കാരത്തിൽ പ്രവേശിക്കുക.",
        arabic: "اللهُ أَكْبَرُ",
        translit: "അല്ലാഹു അക്ബർ",
        translation: "അല്ലാഹു ഏറ്റവും മഹാനാകുന്നു.",
      },
      {
        title: "ഖിയാമും ഖുർആൻ പാരായണവും",
        position: "നിൽപ്പ് (ഖിയാം)",
        desc: "വലതുകൈ ഇടതുകൈക്ക് മുകളിലായി നെഞ്ചിനോ വയറിനോ മുകളിൽ വെക്കുക. സുജൂദ് ചെയ്യുന്ന സ്ഥലത്തേക്ക് നോക്കുക. സൂറത്തുൽ ഫാത്തിഹയും തുടർന്ന് മറ്റൊരു ചെറിയ സൂറത്തും ഓതുക.",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ... آمِينَ",
        translit: "ബിസ്മില്ലാഹിർ റഹ്മാനിർ റഹീം. അൽഹംദുലില്ലാഹി റബ്ബിൽ ആലമീൻ... ആമീൻ",
        translation: "പരമകാരുണികനും കരുണാനിധിയുമായ അല്ലാഹുവിന്റെ നാമത്തിൽ. സർവ്വലോക രക്ഷിതാവായ അല്ലാഹുവിനാണ് സർവ്വ സ്തുതിയും... ആമീൻ.",
      },
      {
        title: "റുകൂഅ് (കുനിയൽ)",
        position: "റുകൂഅ്",
        desc: "'അല്ലാഹു അക്ബർ' എന്ന് പറഞ്ഞു കൊണ്ട് കുനിയുക. കൈകൾ മുട്ടുകളിൽ വെക്കുക, പുറം നേരെയാക്കുക, കണ്ണുകൾ കാൽവിരലുകളിലേക്ക് നോക്കുക. ഈ പ്രാർത്ഥന മൂന്ന് തവണ ചൊല്ലുക.",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translit: "സുബ്ഹാന റബ്ബിയൽ അളീം (3 തവണ)",
        translation: "മഹാനായ എന്റെ രക്ഷിതാവ് എത്ര പരിശുദ്ധൻ.",
      },
      {
        title: "ഇഅ്തിദാൽ (റുകൂഇൽ നിന്ന് നിവർന്നു നിൽക്കൽ)",
        position: "നിവർന്നു നിൽപ്പ്",
        desc: "കൈകൾ ഉയർത്തിക്കൊണ്ട് റുകൂഇൽ നിന്ന് നിവർന്നു നിൽക്കുക. നിവരുമ്പോൾ ആദ്യ ഭാഗവും, പൂർണ്ണമായി നിവർന്നു നിന്ന ശേഷം രണ്ടാം ഭാഗവും ചൊല്ലുക.",
        arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ",
        translit: "സമിഅല്ലാഹു ലിമൻ ഹമിദഹ്. റബ്ബനാ വലകൽ ഹംദ്",
        translation: "തന്റെ സ്തുതി കീർത്തനം കേട്ടവന് അല്ലാഹു ഉത്തരം നൽകി. ഞങ്ങളുടെ രക്ഷിതാവേ, നിനക്കാണ് സർവ്വ സ്തുതിയും.",
      },
      {
        title: "സുജൂദ് (സാഷ്ടാംഗം പ്രണമിക്കൽ)",
        position: "സുജൂദ്",
        desc: "'അല്ലാഹു അക്ബർ' എന്ന് പറഞ്ഞു കൊണ്ട് നെറ്റി, മൂക്ക്, രണ്ട് കൈപ്പത്തികൾ, മുട്ടുകൾ, കാൽവിരലുകൾ എന്നിവ നിലത്ത് തൊടുവിച്ച് പ്രണമിക്കുക. ഈ പ്രാർത്ഥന മൂന്ന് തവണ ചൊല്ലുക.",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "സുബ്ഹാന റബ്ബിയൽ അഅ്ലാ (3 തവണ)",
        translation: "ഏറ്റവും ഉന്നതനായ എന്റെ രക്ഷിതാവ് എത്ര പരിശുദ്ധൻ.",
      },
      {
        title: "ഇരുത്തം (ഇഫ്തിറാശ്)",
        position: "ഇരുത്തം",
        desc: "'അല്ലാഹു അക്ബർ' എന്ന് ചൊല്ലി എഴുന്നേറ്റ് ഇരിക്കുക. ഇടതുകാൽ മടക്കി അതിന്മേൽ ഇരിക്കുക, വലതുകാൽ വിരലുകൾ ഖിബ്‌ലക്ക് അഭിമുഖമായി നിർത്തുക. കൈകൾ തുടയിൽ വെച്ച് ഈ ദുആ ഓതുക.",
        arabic: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي",
        translit: "റബ്ബിഗ്ഫിർ ലീ, വർഹംനീ, വജ്ബുർനീ, വർഫഅ്നീ, വർസുഖ്നീ, വഹ്ദിനീ",
        translation: "എന്റെ രക്ഷിതാവേ, എനിക്ക് പൊറുത്തു തരികയും കരുണ ചെയ്യുകയും ചെയ്യേണമേ. എന്റെ കുറവുകൾ പരിഹരിക്കുകയും പദവികൾ ഉയർത്തുകയും ചെയ്യേണമേ. എനിക്ക് ഉപജീവനം നൽകുകയും വഴിനടത്തുകയും ചെയ്യേണമേ.",
      },
      {
        title: "രണ്ടാം സുജൂദ്",
        position: "സുജൂദ്",
        desc: "'അല്ലാഹു അക്ബർ' എന്ന് ചൊല്ലി വീണ്ടും ആദ്യത്തെ സുജൂദ് പോലെ പ്രണമിക്കുക. മൂന്ന് തവണ സ്തുതി കീർത്തനം ആവർത്തിക്കുക.",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "സുബ്ഹാന റബ്ബിയൽ അഅ്ലാ (3 തവണ)",
        translation: "ഏറ്റവും ഉന്നതനായ എന്റെ രക്ഷിതാവ് എത്ര പരിശുദ്ധൻ.",
      },
      {
        title: "തശഹ്ഹുദ് (അത്തഹിയ്യാത്ത് ചൊല്ലി ഇരുത്തം)",
        position: "ഇരുത്തം (തശഹ്ഹുദ്)",
        desc: "രണ്ടാം റക്അത്തിലും അവസാന റക്അത്തിലും ഇപ്രകാരം ഇരിക്കുക. സാക്ഷ്യം ചൊല്ലുമ്പോൾ വലതുകൈയിലെ ചൂണ്ടുവിരൽ ഉയർത്തിപ്പിടിക്കുക.",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.",
        translit: "അത്തഹിയ്യാത്തു ലില്ലാഹി വസ്സലവാത്തു വത്വയ്യിബാത്... അശ്ഹദു അൻ ലാ ഇലാഹ ഇല്ലല്ലാഹു വഅശ്ഹദു അന്ന മുഹമ്മദൻ അബ്ദുഹു വ റസൂലുഹ്.",
        translation: "എല്ലാ അഭിവാദ്യങ്ങളും പ്രാർത്ഥനകളും പാവനമായ കാര്യങ്ങളും അല്ലാഹുവിനുള്ളതാണ്. ഓ നബിയേ, താങ്കളുടെ മേൽ അല്ലാഹുവിന്റെ ശാന്തിയും കാരുണ്യവും അനുഗ്രഹങ്ങളും ഉണ്ടാകട്ടെ... അല്ലാഹുവല്ലാതെ ഒരു ആരാധ്യനുമില്ലെന്നും മുഹമ്മദ് നബി അല്ലാഹുവിന്റെ ദാസനും റസൂലുമാണെന്നും ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു.",
      },
      {
        title: "സലാം വീട്ടൽ (തസ്‌ലീം)",
        position: "സലാം വീട്ടൽ",
        desc: "ആദ്യം വലതു തോളിലേക്ക് തിരിഞ്ഞ് സലാം വീട്ടുക, തുടർന്ന് ഇടതു തോളിലേക്ക് തിരിഞ്ഞും സലാം വീട്ടുക.",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        translit: "അസ്സലാമു അലൈക്കും വ റഹ്മത്തുല്ലാഹ്",
        translation: "നിങ്ങൾക്ക് അല്ലാഹുവിന്റെ രക്ഷയും കാരുണ്യവും ഉണ്ടാകട്ടെ.",
      },
    ],

    dressTitle: "നമസ്കാരത്തിലെ വസ്ത്രധാരണ രീതി (ഔറത്ത്)",
    dressSubtitle: "സ്രഷ്ടാവിന്റെ മുന്നിൽ നിൽക്കുമ്പോൾ പാലിക്കേണ്ട വസ്ത്രധാരണ മര്യാദകളും നിബന്ധനകളും",
    dressMale: "പുരുഷന്മാരുടെ ഔറത്തും വസ്ത്രധാരണവും",
    dressFemale: "സ്ത്രീകളുടെ ഔറത്തും വസ്ത്രധാരണവും",
    dressMaleRules: [
      "പൊക്കിൾ മുതൽ മുട്ടുവരെയാണ് നിർബന്ധമായും മറച്ചിരിക്കേണ്ട ഔറത്തിന്റെ പരിധി.",
      "നമസ്കരിക്കുമ്പോൾ തോളുകൾ വസ്ത്രം കൊണ്ട് മറച്ചിരിക്കണം. തോളുകൾ മറക്കാത്ത ബനിയൻ ധരിക്കുന്നത് ഒഴിവാക്കുക.",
      "വസ്ത്രങ്ങൾ വൃത്തിയുള്ളതും നജസുകളിൽ നിന്ന് (മൂത്രം, മദ്യം എന്നിവ) ശുദ്ധിയുള്ളതുമായിരിക്കണം.",
      "വൃത്തിയുള്ള വെള്ള വസ്ത്രങ്ങളോ മാന്യമായ പരമ്പരാഗത വസ്ത്രങ്ങളോ ധരിക്കുന്നത് ഉത്തമമാണ്.",
    ],
    dressFemaleRules: [
      "മുഖവും മുൻകൈയും ഒഴികെ ശരീരം മുഴുവൻ നിർബന്ധമായും മറച്ചിരിക്കേണ്ടതാണ്.",
      "മുടി, കഴുത്ത്, കാത്, നെഞ്ച് എന്നിവ പൂർണ്ണമായും ശിരോവസ്ത്രം കൊണ്ട് മറയണം.",
      "ശരീരവടിവ് കാണിക്കാത്ത അയഞ്ഞതും കട്ടിയുള്ളതുമായ (സുതാര്യമല്ലാത്ത) വസ്ത്രമായിരിക്കണം.",
      "നീളമുള്ള വസ്ത്രമോ അബായയോ ധരിച്ചും വൃത്തിയുള്ള സോക്സുകൾ ഉപയോഗിച്ചും പാദങ്ങൾ മറയ്ക്കുക.",
    ],
    dressNoteTitle: "ശുദ്ധിക്ക് നൽകേണ്ട പ്രാധാന്യം (തഹാറത്ത്)",
    dressNoteDesc: "വസ്ത്രത്തിന്റെ ഭംഗിയേക്കാൾ പ്രധാനമാണ് അത് 100% നജസുകളിൽ നിന്ന് ശുദ്ധിയുള്ളതാണെന്ന് ഉറപ്പാക്കൽ. ധരിച്ച വസ്ത്രത്തിലോ പ്രാർത്ഥിക്കുന്ന സ്ഥലത്തോ നജസ് ഉണ്ടായാൽ നമസ്കാരം അസാധുവാകും.",

    duasTitle: "പ്രധാന പ്രാർത്ഥനകളും ദിക്റുകളും",
    duasSubtitle: "അനുദിന ജീവിതത്തിലും നമസ്കാരത്തിന് ശേഷവും ചൊല്ലേണ്ട പ്രധാന ദുആകൾ",
    duaSearchPlaceholder: "തിരയുക (പേരോ ആശയമോ നൽകാം)...",
    duaCategories: { all: "എല്ലാം", wudu: "വുദു", salah: "നമസ്കാരം", daily: "പൊതുവായവ" },
    duasData: [
      {
        id: "dua-wudu-end",
        category: "wudu",
        title: "വുദുവിന് ശേഷം ചൊല്ലേണ്ടത്",
        desc: "വുദു പൂർത്തിയാക്കിയ ശേഷം ആകാശത്തേക്ക് നോക്കി ചൊല്ലേണ്ട ദുആ. സ്വർഗ്ഗത്തിന്റെ എട്ട് കവാടങ്ങൾ ഇതിലൂടെ തുറക്കപ്പെടുന്നു.",
        arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        translit: "അശ്ഹദു അൻ ലാ ഇലാഹ ഇല്ലല്ലാഹു വഹ്ദഹു ലാ ശരീക്ക ലഹു വ അശ്ഹദു അന്ന മുഹമ്മദൻ അബ്ദുഹു വ റസൂലുഹു. അല്ലാഹുമ്മ ജ്അൽനീ മിനത്തവ്വാബീന വജ്അൽനീ മിനൽ മുത്വത്വഹരീൻ.",
        translation: "ഏകനും പങ്കുകാരില്ലാത്തവനുമായ അല്ലാഹുവല്ലാതെ യാതൊരു ആരാധ്യനുമില്ലെന്നും മുഹമ്മദ് അല്ലാഹുവിന്റെ ദാസനും ദൂതനുമാണെന്നും ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു. അല്ലാഹുവേ, എന്നെ പശ്ചാത്തപിക്കുന്നവരുടെയും ശുദ്ധി കൈവരിക്കുന്നവരുടെയും കൂട്ടത്തിൽ ഉൾപ്പെടുത്തേണമേ.",
      },
      {
        id: "dua-qunut",
        category: "salah",
        title: "ഖുനൂത്ത് പ്രാർത്ഥന (സുബഹി/വിത്ർ)",
        desc: "അനുസരണത്തിന്റെ പ്രാർത്ഥന. സുബഹി നമസ്കാരത്തിന്റെ രണ്ടാം റക്അത്തിൽ ഇഅ്തിദാലിലും വിത്റിലും ചൊല്ലുന്നു.",
        arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ.",
        translit: "അല്ലാഹുമ്മ ഹ്ദിനീ ഫീമൻ ഹദൈത്, വ ആഫിനീ ഫീമൻ ആഫൈത്, വ തവല്ലനീ ഫീമൻ തവല്ലൈത്...",
        translation: "അല്ലാഹുവേ, നീ നേർവഴിയിലാക്കിയവരോടൊപ്പം എന്നെയും നേർവഴിയിലാക്കേണമേ. നീ സുഖം നൽകിയവരോടൊപ്പം എനിക്കും സുഖം നൽകേണമേ. നീ രക്ഷാധികാരം ഏറ്റെടുത്തവരോടൊപ്പം എന്റെയും രക്ഷാധികാരം ഏറ്റെടുക്കേണമേ...",
      },
      {
        id: "dua-salah-end",
        category: "salah",
        title: "നമസ്കാര ശേഷമുള്ള പാപമോചനം",
        desc: "നമസ്കാരം പൂർത്തിയാക്കിയ ഉടൻ മൂന്ന് തവണ ചൊല്ലേണ്ട പ്രവാചക ചര്യ.",
        arabic: "أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        translit: "അസ്തഗ്ഫിറുള്ളാഹ് (3 തവണ). അല്ലാഹുമ്മ അന്തസ്സലാം വ മിങ്കസ്സലാം തബാറക്ത യാ ദൽജലാലി വൽ ഇക്റാം.",
        translation: "ഞാൻ അല്ലാഹുവോട് പാപമോചനം തേടുന്നു (3 തവണ). അല്ലാഹുവേ, നീയാകുന്നു സമാധാനം. നിന്നിൽ നിന്നാകുന്നു സമാധാനം. മഹത്വവും ആദരവുമുള്ളവനേ, നീ അനുഗ്രഹപൂർണ്ണനായിരിക്കുന്നു.",
      },
    ],

    tasbihTitle: "ഇന്ററാക്ടീവ് ഡിജിറ്റൽ തസ്ബീഹ് കൗണ്ടർ",
    tasbihSubtitle: "അനുദിന സ്മരണകളും ദിക്റുകളും ലളിതമായി എണ്ണാൻ സഹായിക്കുന്നു",
    tasbihCount: "ആകെ എണ്ണം",
    tasbihTarget: "ലക്ഷ്യം (ടാർഗെറ്റ്)",
    tasbihReset: "പൂജ്യമാക്കുക",
    tasbihSave: "രേഖപ്പെടുത്തുക",
    tasbihCustomDhikr: "നിങ്ങളുടെ സ്വന്തം ദിക്ർ ഇവിടെ നൽകാം",
    tasbihPhrases: [
      { text: "سُبْحَانَ اللهِ", translation: "സുബ്ഹാനല്ലാഹ് (അല്ലാഹു എത്ര പരിശുദ്ധൻ)" },
      { text: "الْحَمْدُ للهِ", translation: "അൽഹംദുലില്ലാഹ് (അല്ലാഹുവിനാണ് സർവ്വ സ്തുതിയും)" },
      { text: "اللهُ أَكْبَرُ", translation: "അല്ലാഹു അക്ബർ (അല്ലാഹു ഏറ്റവും വലിയവനാകുന്നു)" },
      { text: "أَسْتَغْفِرُ اللهَ", translation: "അസ്തഗ്ഫിറുള്ളാഹ് (ഞാൻ അല്ലാഹുവോട് പാപമോചനം തേടുന്നു)" },
      { text: "لَا إِلٰهَ إِلَّا اللهُ", translation: "ലാ ഇലാഹ ഇല്ലല്ലാഹ് (അല്ലാഹുവല്ലാതെ മറ്റൊരു ആരാധ്യനില്ല)" },
    ],

    qiblaTitle: "ഖിബ്‌ല കോമ്പസ് സിമുലേറ്റർ",
    qiblaSubtitle: "കഅബയുടെ ദിശ കൃത്യമായി നിർണ്ണയിക്കുക",
    qiblaDesc: "ഈ സിമുലേറ്റർ കോർഡിനേറ്റ് അടിസ്ഥാനമാക്കി ഖിബ്‌ല ദിശ കാണിക്കുന്നു. മൊബൈലിൽ കോമ്പസ് സെൻസർ ഉള്ളപ്പോൾ ഇത് സ്വയം ക്രമീകരിക്കപ്പെടും. പച്ച സൂചി കഅബ അടയാളത്തിന് നേരെയാകുന്ന രീതിയിൽ തിരിയുക.",
    qiblaCompassAlign: "കോമ്പസ് ക്രമീകരിക്കുക",
    qiblaFound: "ഖിബ്‌ല ദിശ കൃത്യമാണ്!",

    timesTitle: "നമസ്കാര സമയപ്പട്ടിക",
    timesSubtitle: "നിങ്ങളുടെ പ്രദേശത്തെ കൃത്യമായ പ്രാർത്ഥനാ സമയങ്ങൾ കണ്ടെത്തുകയും അടുത്ത നമസ്കാരത്തിനായുള്ള സമയം കണക്കാക്കുകയും ചെയ്യുക",
    timesCalcMethod: "കണക്കുകൂട്ടൽ രീതി",
    timesLatitude: "അക്ഷാംശം (Lat)",
    timesLongitude: "രേഖാംശം (Lng)",
    timesNextPrayer: "അടുത്ത നമസ്കാരം",
    timesTimeLeft: "ബാക്കിയുള്ള സമയം",
    methods: {
      MWL: "മുസ്ലിം വേൾഡ് ലീഗ് (MWL)",
      ISNA: "ഇസ്ലാമിക് സൊസൈറ്റി ഓഫ് നോർത്ത് അമേരിക്ക (ISNA)",
      Egypt: "ഈജിപ്ഷ്യൻ സർവേ അതോറിറ്റി",
      Makkah: "ഉമ്മുൽ ഖുറാ സർവകലാശാല, മക്ക",
      Karachi: "യൂണിവേഴ്സിറ്റി ഓഫ് ഇസ്ലാമിക് സയൻസസ്, കറാച്ചി",
    },

    supportTitle: "വികസനവും പിന്തുണയും",
    supportSubtitle: "ഈ വെബ്സൈറ്റ് വികസിപ്പിക്കുന്നതിനുള്ള പിന്തുണയും നിങ്ങളുടെ വിലയേറിയ അഭിപ്രായങ്ങളും പങ്കുവെക്കുക",
    supportDonateTitle: "പദ്ധതിയെ പിന്തുണയ്ക്കുക",
    supportDonateDesc: "ഇതൊരു തികച്ചും സൌജന്യവും പരസ്യരഹിതവുമായ ഇസ്ലാമിക പഠന സഹായിയാണ്. വെബ്സൈറ്റ് മെച്ചപ്പെടുത്തുന്നതിനും ഹോസ്റ്റിങ് ചെലവുകൾക്കുമായി ചെറിയ സഹായങ്ങൾ നൽകാവുന്നതാണ്.",
    supportFormTitle: "നിങ്ങളുടെ അഭിപ്രായം അറിയിക്കുക",
    supportFormName: "നിങ്ങളുടെ പേര്",
    supportFormEmail: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം",
    supportFormMsg: "സന്ദേശം / പുതിയ ആശയങ്ങൾ",
    supportFormSubmit: "സന്ദേശം അയക്കുക",
    supportFormSuccess: "നന്ദി! നിങ്ങളുടെ സന്ദേശം സിസ്റ്റത്തിൽ വിജയകരമായി രേഖപ്പെടുത്തിയിട്ടുണ്ട്.",
    supportDevTitle: "ഡെവലപ്പർ വിവരങ്ങൾ",
    supportDevDesc: "Next.js, Tailwind CSS, TypeScript എന്നിവ ഉപയോഗിച്ചാണ് ഇത് രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്. ഇതിൽ പങ്കാളികളാകാനോ ലോക്കലായി കോഡ് റൺ ചെയ്യാനോ താല്പര്യമുണ്ടെങ്കിൽ ജിറ്റ്‌ഹബ് സന്ദർശിക്കുക.",
  },
  ar: {
    navTitle: "TasbeehLife",
    navSubtitle: "مرشد الصلاة والتعليم الإسلامي",
    langEn: "English",
    langMl: "മലയാളം",
    langAr: "العربية",
    tabSalah: "الصلاة",
    tabWudu: "الوضوء",
    tabDress: "لباس الصلاة",
    tabDuas: "الأدعية والأذكار",
    tabTasbih: "المسبحة الإلكترونية",
    tabQibla: "اتجاه القبلة",
    tabTimes: "مواقيت الصلاة",
    tabSupport: "الدعم والآراء",

    wuduTitle: "كيفية الوضوء خطوة بخطوة",
    wuduSubtitle: "طهارة البدن والروح قبل الوقوف بين يدي الله عز وجل",
    wuduStep: "الخطوة",
    wuduStepsData: [
      {
        title: "النية والتسمية",
        desc: "استحضر النية بقلبك للوضوء والصلاة، ثم قل: 'بسم الله الرحمن الرحيم'.",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      },
      {
        title: "غسل الكفين",
        desc: "اغسل كفيك ثلاث مرات، مع تخليل المياه بين الأصابع جيداً.",
      },
      {
        title: "المضمضة",
        desc: "أدخل الماء في فمك بيدك اليمنى، وأدره فيه ثم أخرجه ثلاث مرات.",
      },
      {
        title: "الاستنشاق والاستنثار",
        desc: "اجذب الماء بيمينك داخل أنفك ثم أخرجه بيدك اليسرى ثلاث مرات.",
      },
      {
        title: "غسل الوجه",
        desc: "اغسل وجهك كاملاً ثلاث مرات، من منابت شعر الرأس إلى أسفل الذقن، ومن الأذن إلى الأذن.",
      },
      {
        title: "غسل اليدين للمرفقين",
        desc: "اغسل يدك اليمنى ثم اليسرى من أطراف الأصابع إلى المرفقين، ثلاث مرات.",
      },
      {
        title: "مسح الرأس",
        desc: "بلل يديك وامسح رأسك مرة واحدة من المقدمة إلى المؤخرة ثم العودة للمقدمة.",
      },
      {
        title: "مسح الأذنين",
        desc: "امسح أذنيك مرة واحدة بالماء المتبقي، بإدخال السبابة بداخلها والإبهام من الخارج.",
      },
      {
        title: "غسل الرجلين للكعبين",
        desc: "اغسل رجليك إلى الكعبين ثلاث مرات، مبتدئاً باليمنى ومع تخليل الأصابع بالماء.",
      },
      {
        title: "الدعاء بعد الوضوء",
        desc: "انظر إلى السماء واشهد بالشهادتين ثم اقرأ هذا الدعاء لتكتمل طهارتك.",
        arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
      },
    ],

    salahTitle: "أركان الصلاة وكيفيتها",
    salahSubtitle: "تعلم أداء الصلاة بالوقوف والركوع والسجود والخشوع في تواصل روحي مع الخالق",
    salahTableTitle: "الصلوات الخمس المفروضة (عدد الركعات السنن والمفروضة)",
    salahTableSub: "معرفة ركعات الفروض والسنن الرواتب التابعة لها",
    salahFard: "الفرض (مفروضة)",
    salahSunnah: "السنة (رواتب)",
    salahStepsTitle: "مرشد الصلاة التفاعلي خطوة بخطوة",
    salahStepsSub: "تصفح الصور التفاعلية لتعلم الهيئة الصحيحة والقراءات باللغة العربية والترجمة",
    salahStepName: "الخطوة",
    salahRecitation: "القراءة (بالعربية)",
    salahTransliteration: "النطق الصوتي",
    salahTranslation: "المعنى والتفسير",
    salahStepsData: [
      {
        title: "النية وتكبيرة الإحرام",
        position: "القيام",
        desc: "استحضر النية في قلبك للصلاة التي تؤديها. ارفع يديك حذو منكبيك أو أذنيك متجهاً للقبلة وقل تكبيرة الإحرام للدخول في الصلاة.",
        arabic: "اللهُ أَكْبَرُ",
        translit: "Allahu Akbar",
        translation: "الله هو الأعظم والأكبر من كل شيء.",
      },
      {
        title: "القيام وقراءة الفاتحة وسورة",
        position: "القيام",
        desc: "ضع يدك اليمنى على اليسرى فوق صدرك. انظر إلى موضع سجودك. اقرأ سورة الفاتحة متبوعة بسورة قصيرة من كتاب الله.",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ... آمِينَ",
        translit: "Bismillaahir-Rahmaanir-Raheem. Alhamdu lillaahi Rabbil-'Aalameen... Ameen",
        translation: "بسم الله الرحمن الرحيم. الحمد لله رب العالمين... آمين.",
      },
      {
        title: "الركوع",
        position: "الركوع",
        desc: "قل 'الله أكبر' وانحنِ، واضعاً يديك على ركبتيك ومباعداً بين أصابعك، واجعل ظهرك مستوياً وعينيك تنظران لمحل قدميك. قل التسبيح ثلاث مرات.",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translit: "Subhaana Rabbiyal-'Adheem (3 times)",
        translation: "تنزيهاً لله العظيم ذي الجلال والإكرام عن كل نقص.",
      },
      {
        title: "الرفع من الركوع والاعتدال",
        position: "الاعتدال والوقوف",
        desc: "ارفع ظهرك قائماً رافعاً يديك حذو منكبيك. قل الجزء الأول أثناء الرفع، والجزء الثاني بعد الاستواء قائماً.",
        arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ",
        translit: "Sami'a Allaahu liman hamidah. Rabbana wa lakal-hamd",
        translation: "أجاب الله لمن أثنى عليه وحمده. ربنا ولك الحمد حمداً كثيراً طيباً.",
      },
      {
        title: "السجود",
        position: "السجود",
        desc: "خرّ ساجداً مكبراً 'الله أكبر'. يجب أن تمكن الجبهة والأنف والكفين والركبتين وأطراف القدمين من الأرض. قل التسبيح ثلاث مرات.",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "Subhaana Rabbiyal-A'laa (3 times)",
        translation: "تنزيهاً لربي الأعلى من كل شيء علواً يليق بجلاله.",
      },
      {
        title: "الجلسة بين السجدتين",
        position: "الجلوس",
        desc: "ارفع رأسك مكبراً واجلس مفترشاً قدمك اليسرى وناصباً اليمنى واضعاً يديك على فخذيك. اقرأ هذا الدعاء.",
        arabic: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي",
        translit: "Rabbigh-fir lee, war-hamnee, waj-burnee, war-fa'nee, war-zuqnee, wah-dinee",
        translation: "اللهم اغفر ذنوبي وارحمني برحمتك واجبر نقصي وارفع درجتي وارزقني واهدني للحق.",
      },
      {
        title: "السجدة الثانية",
        position: "السجود",
        desc: "اهبط للسجود ثانية مكبراً 'الله أكبر'، وافعل كما فعلت في السجدة الأولى تماماً وسبّح ثلاثاً.",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "Subhaana Rabbiyal-A'laa (3 times)",
        translation: "تنزيهاً لربي الأعلى من كل شيء علواً يليق بجلاله.",
      },
      {
        title: "التشهد والجلوس الأخير",
        position: "التشهد والجلوس",
        desc: "تجلس للتشهد في الركعة الثانية والأخيرة. ضع يديك على فخذيك وارفع سبابة اليد اليمنى عند النطق بالتوحيد.",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.",
        translit: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat...",
        translation: "كل التعظيم والصلوات والأقوال الطيبة لله تعالى. السلام والرحمة والبركة عليك أيها النبي الكريم...",
      },
      {
        title: "التسليم والخروج من الصلاة",
        position: "التسليم",
        desc: "التفت بوجهك جهة اليمين حتى يرى من خلفك بياض خدك الأيمن مسلماً، ثم التفت جهة اليسار مسلماً كذلك.",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        translit: "As-Salaamu 'alaykum wa rahmatullaah",
        translation: "السلام والأمان ورحمة الله وبركاته عليكم.",
      },
    ],

    dressTitle: "شروط وضوابط لباس الصلاة (العورة)",
    dressSubtitle: "أحكام ستر العورة والتزين للوقوف بوقار أمام الخالق عز وجل",
    dressMale: "لباس وعورة الرجل في الصلاة",
    dressFemale: "لباس وعورة المرأة في الصلاة",
    dressMaleRules: [
      "العورة الواجب سترها في الصلاة هي من السرة إلى الركبتين.",
      "يجب ستر العاتقين (الكتفين) في الصلاة؛ ويكره الصلاة بملابس تظهر الأكتاف بالكامل.",
      "يجب أن تكون الثياب طاهرة وخالية من أي نجاسات (كالبول أو الدم أو المسكرات).",
      "يستحب ارتداء الثياب البيضاء النظيفة أو الملابس التقليدية اللائقة.",
    ],
    dressFemaleRules: [
      "يجب على المرأة ستر جميع بدنها في الصلاة ما عدا الوجه والكفين.",
      "يجب ستر الشعر والرقبة والأذنين والصدر بالكامل بغطاء رأس ساتر.",
      "أن تكون الثياب فضفاضة واسعة لا تصف تفاصيل البدن، وصفيقة لا تشف عما تحتها.",
      "يستحب ستر القدمين إما بثوب طويل سابل أو بارتداء جوارب طاهرة.",
    ],
    dressNoteTitle: "أهمية طهارة الثياب والمكان",
    dressNoteDesc: "قبل التأنق بالملابس، يجب التأكد تماماً من خلو الثياب وموضع الصلاة من أي نجاسة عينية، فالصلاة تبطل بوجود النجاسة مع القدرة على إزالتها.",

    duasTitle: "الأدعية والأذكار المأثورة",
    duasSubtitle: "مجموعة من الأدعية المستحبة قبل الصلاة وأثناءها وبعدها وفي الحياة اليومية",
    duaSearchPlaceholder: "ابحث عن الأدعية بالعنوان أو الكلمات...",
    duaCategories: { all: "الكل", wudu: "الوضوء", salah: "الصلاة", daily: "أذكار عامة" },
    duasData: [
      {
        id: "dua-wudu-end",
        category: "wudu",
        title: "الدعاء بعد الفراغ من الوضوء",
        desc: "يقرأ بعد الانتهاء من الوضوء، وهو سبب لفتح أبواب الجنة الثمانية للمتوضئ.",
        arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        translit: "Ashhadu an la ilaha illallah...",
        translation: "أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمداً عبده ورسوله. اللهم اجعلني من التوابين واجعلني من المتطهرين.",
      },
      {
        id: "dua-qunut",
        category: "salah",
        title: "دعاء القنوت (الفجر/الوتر)",
        desc: "دعاء التضرع والالتجاء إلى الله، يشرع في صلاة الوتر وفي النوازل وفي الفجر عند بعض المذاهب.",
        arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ.",
        translit: "Allahumma-hdinee feeman hadayt...",
        translation: "اللهم اهدني فيمن هديت، وعافني فيمن عافيت، وتولني فيمن توليت، وبارك لي فيما أعطيت، وقني شر ما قضيت، فإنك تقضي ولا يقضى عليك، وإنه لا يذل من واليت، ولا يعز من عاديت، تباركت ربنا وتعاليت.",
      },
      {
        id: "dua-salah-end",
        category: "salah",
        title: "الاستغفار ودعاء الفراغ من الصلاة",
        desc: "من سنن المصطفى صلى الله عليه وسلم فور السلام والخروج من الصلاة المكتوبة.",
        arabic: "أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ، أَسْتَغْفِرُ اللهَ. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        translit: "Astaghfirullaah (3 times)...",
        translation: "أستغفر الله (ثلاث مرات). اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام.",
      },
    ],

    tasbihTitle: "المسبحة الإلكترونية التفاعلية",
    tasbihSubtitle: "ساعد نفسك على مداومة الذكر والاستغفار اليومي مع تتبع الأعداد بسهولة",
    tasbihCount: "العدد الحالي",
    tasbihTarget: "الهدف المحدد",
    tasbihReset: "إعادة ضبط",
    tasbihSave: "حفظ الذكر",
    tasbihCustomDhikr: "أدخل صيغة ذكر مخصصة",
    tasbihPhrases: [
      { text: "سُبْحَانَ اللهِ", translation: "سبحان الله (تنزيهاً وتقديساً لله)" },
      { text: "الْحَمْدُ للهِ", translation: "الحمد لله (شكر وثناء لله)" },
      { text: "اللهُ أَكْبَرُ", translation: "الله أكبر (إجلالاً وتعظيماً لله)" },
      { text: "أَسْتَغْفِرُ اللهَ", translation: "أستغفر الله (طلب المغفرة والرحمة)" },
      { text: "لَا إِلٰهَ إِلَّا اللهُ", translation: "لا إله إلا الله (كلمة التوحيد الخالدة)" },
    ],

    qiblaTitle: "محاكي تحديد اتجاه القبلة",
    qiblaSubtitle: "حدد اتجاه الكعبة المشرفة في مكة المكرمة من موقعك الجغرافي",
    qiblaDesc: "يستخدم هذا المحاكي إحداثيات الموقع لحساب اتجاه الكعبة. عند تشغيل التطبيق في هاتف يدعم حساس البوصلة، يتحرك المؤشر ديناميكياً. قم بتدوير البوصلة لتجعل الإبرة الخضراء تنطبق على رمز الكعبة عند الدرجة صفر.",
    qiblaCompassAlign: "ضبط البوصلة (تدوير يدوي)",
    qiblaFound: "تم تحديد اتجاه القبلة بنجاح!",

    timesTitle: "مواقيت الصلاة والعد التنازلي",
    timesSubtitle: "احسب مواقيت الصلاة بدقة لمنطقتك وتتبع الوقت المتبقي لأداء الفريضة القادمة",
    timesCalcMethod: "طريقة الحساب المعتمدة",
    timesLatitude: "خط العرض",
    timesLongitude: "خط الطول",
    timesNextPrayer: "الصلاة القادمة",
    timesTimeLeft: "الوقت المتبقي",
    methods: {
      MWL: "رابطة العالم الإسلامي (MWL)",
      ISNA: "الجمعية الإسلامية لأمريكا الشمالية (ISNA)",
      Egypt: "الهيئة المصرية العامة للمساحة",
      Makkah: "جامعة أم القرى، مكة المكرمة",
      Karachi: "جامعة العلوم الإسلامية بكراتشي",
    },

    supportTitle: "التطوير والدعم الفني",
    supportSubtitle: "ساهم في دعم تطوير هذا المرشد التعليمي وشاركنا ملاحظاتك القيمة",
    supportDonateTitle: "تبرع لدعم المشروع",
    supportDonateDesc: "هذه منصة تعليمية مجانية خالية من الإعلانات تماماً. تبرعك يساهم في تغطية تكاليف الاستضافة وإضافة ميزات مستقبلية كالتسجيلات الصوتية المتعددة.",
    supportFormTitle: "أرسل ملاحظاتك أو اقتراحاتك",
    supportFormName: "الاسم الكريم",
    supportFormEmail: "البريد الإلكتروني",
    supportFormMsg: "الرسالة أو الاقتراح",
    supportFormSubmit: "إرسال الرسالة",
    supportFormSuccess: "شكراً لك! تم محاكاة وحفظ رسالتك بنجاح في نظامنا الخاص.",
    supportDevTitle: "مصادر للمطورين",
    supportDevDesc: "تم تصميم هذا الموقع باستخدام Next.js و Tailwind CSS و TypeScript. إذا كنت ترغب في المساهمة في الكود المصدري أو تشغيله محلياً، تفضل بزيارة مستودع GitHub.",
  },
};
