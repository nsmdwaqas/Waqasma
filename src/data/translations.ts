export type Language = 'en' | 'ur' | 'ta';

export interface TranslationData {
  bismillah: string;
  quranicVerseArabic: string;
  quranicVerseTranslation: string;
  quranicReference: string;
  invitationTitle: string;
  invitationSubtitle: string;
  togetherWithFamilies: string;
  groomTitle: string;
  groomName: string;
  groomSonOf: string;
  groomFatherName: string;
  brideTitle: string;
  brideName: string;
  brideDaughterOf: string;
  brideFatherName: string;
  celebrateWithUs: string;
  weddingDateHeader: string;
  weddingDateFormatted: string;
  nikkahTitle: string;
  nikkahTime: string;
  nikkahDesc: string;
  valimaTitle: string;
  valimaTime: string;
  valimaDesc: string;
  countdownDaysLeft: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  getDirections: string;
  addToCalendar: string;
  shareInvite: string;
  openEnvelope: string;
  tapToOpen: string;
  viewQrCode: string;
  sendDua: string;
  duaTitle: string;
  duaSubtitle: string;
  yourNamePlaceholder: string;
  yourDuaPlaceholder: string;
  sendBlessingBtn: string;
  blessingSentSuccess: string;
  predefinedDua: string;
  whatsappMessage: string;
  close: string;
  copied: string;
  copyLink: string;
  venueNikkahNote: string;
  venueValimaNote: string;
  replayOpening: string;
  audioOn: string;
  audioOff: string;
  flipToItinerary: string;
  flipToCouple: string;
  cardCouple: string;
  cardItinerary: string;
  shareBtnLabel: string;
  fathersCombinedNames: string;
  solicitBlessings: string;
  sameDayCelebrations: string;
  shareModalDesc: string;
  scanQrInstruction: string;
  shareOnWhatsappBtn: string;
}

export const translations: Record<Language, TranslationData> = {
  en: {
    bismillah: "In the Name of Allah, the Most Gracious, the Most Merciful",
    quranicVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranicVerseTranslation: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has placed love and mercy between you.",
    quranicReference: "Surah Ar-Rum · 30:21",
    invitationTitle: "The Royal Wedding",
    invitationSubtitle: "Celebration of Holy Matrimony",
    togetherWithFamilies: "Together with their respected families, we cordially invite you to grace the auspicious wedding ceremony of",
    groomTitle: "Groom",
    groomName: "Mohammed Waqas",
    groomSonOf: "Son of",
    groomFatherName: "Janab Natamkar Saifullah",
    brideTitle: "Bride",
    brideName: "Asma Shajer",
    brideDaughterOf: "Daughter of",
    brideFatherName: "Janab Asger Ali",
    celebrateWithUs: "Cordially invite you and your family to join in our joy and blessings as we unite under the divine grace of Allah SWT.",
    weddingDateHeader: "Thursday, 31st December 2026",
    weddingDateFormatted: "31 · 12 · 2026",
    nikkahTitle: "Nikkah Ceremony",
    nikkahTime: "11:45 AM",
    nikkahDesc: "The sacred solemnization of marriage according to the Sunnah of Prophet Muhammad (ﷺ).",
    valimaTitle: "Valima Reception",
    valimaTime: "12:00 PM (After Zuhar Salah)",
    valimaDesc: "The wedding feast celebration with family, loved ones, and esteemed guests.",
    countdownDaysLeft: "Days to Go",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Mins",
    countdownSeconds: "Secs",
    getDirections: "Google Maps Route",
    addToCalendar: "Add to Calendar",
    shareInvite: "Share on WhatsApp",
    openEnvelope: "Open Royal Invitation",
    tapToOpen: "Tap wax seal to unbox invitation",
    viewQrCode: "Scan / QR Invite",
    sendDua: "Send Warm Dua & Blessings",
    duaTitle: "Leave a Sacred Dua",
    duaSubtitle: "Send your heartfelt blessings for Mohammed Waqas & Asma Shajer as they begin their sacred journey.",
    yourNamePlaceholder: "Your full name / family name",
    yourDuaPlaceholder: "Write your heartfelt blessings & prayer...",
    sendBlessingBtn: "Send Blessings",
    blessingSentSuccess: "Jazakallah Khair! Your blessed prayers have been received.",
    predefinedDua: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ\n(May Allah bless you and shower His blessings upon you and unite you in goodness)",
    whatsappMessage: "Assalamu Alaikum! You are cordially invited to celebrate the Nikkah & Valima of Mohammed Waqas & Asma Shajer on 31st December 2026. Please open our digital invitation for itinerary, live countdown, and venue maps:",
    close: "Close",
    copied: "Link Copied to Clipboard!",
    copyLink: "Copy Link",
    venueNikkahNote: "Click for direct turn-by-turn navigation on Google Maps",
    venueValimaNote: "Reception feast right after Zuhar Salah prayers",
    replayOpening: "Replay Envelope",
    audioOn: "Mute Music",
    audioOff: "Play Music",
    flipToItinerary: "Swipe / Tap for Itinerary & Venues",
    flipToCouple: "Swipe / Tap for Couple Details",
    cardCouple: "Couple",
    cardItinerary: "Itinerary & Venues",
    shareBtnLabel: "Share",
    fathersCombinedNames: "Janab Natamkar Saifullah · Janab Asger Ali",
    solicitBlessings: "Cordially solicit your gracious presence, blessings & prayers",
    sameDayCelebrations: "Same Day Ceremonies · 31 · 12 · 2026",
    shareModalDesc: "Circulate this sacred invitation to family and friends via WhatsApp or scan the QR code.",
    scanQrInstruction: "Scan with any camera or WhatsApp",
    shareOnWhatsappBtn: "Share directly on WhatsApp",
  },
  ur: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    quranicVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranicVerseTranslation: "اور اُس کی نشانیوں میں سے یہ ہے کہ اُس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم اُن کے پاس سکون حاصل کرو اور تمہارے درمیان محبت اور رحمت پیدا کر دی۔",
    quranicReference: "سورة الروم · ٣٠:٢١",
    invitationTitle: "دعوت نامہ نکاح و ولیمہ",
    invitationSubtitle: "تقریبِ مسرور و مبارک",
    togetherWithFamilies: "ہم اپنے معزز خاندانوں کے ہمراہ آپ کو اس مبارک تقریب میں شرکت کی دلی دعوت پیش کرتے ہیں",
    groomTitle: "دولہا",
    groomName: "محمد وقاص",
    groomSonOf: "فرزندِ ارجمند:",
    groomFatherName: "جناب ناتم کار سیف اللہ",
    brideTitle: "دلہن",
    brideName: "اسماء شجر",
    brideDaughterOf: "دخترِ نیک اختر:",
    brideFatherName: "جناب اصغر علی",
    celebrateWithUs: "اللہ تعالیٰ کے فضل و کرم سے دونوں خاندانوں کی جانب سے شرکت فرما کر نو بیاہتا جوڑے کو دعاؤں سے نوازیں۔",
    weddingDateHeader: "بروز جمعرات، ۳۱ دسمبر ۲۰۲۶",
    weddingDateFormatted: "۳۱ · ۱۲ · ۲۰۲۶",
    nikkahTitle: "مبارک تقریبِ نکاح",
    nikkahTime: "صبح ۱۱:۴۵ بجے",
    nikkahDesc: "سنتِ نبوی (ﷺ) کے مطابق تقریبِ نکاح کا پاکیزہ انعقاد۔",
    valimaTitle: "تقریبِ ولیمہ",
    valimaTime: "دوپہر ۱۲:۰۰ بجے (بعد نمازِ ظہر)",
    valimaDesc: "معزز مہمانوں کے ساتھ پرمسرت ضیافتِ ولیمہ۔",
    countdownDaysLeft: "دن باقی ہیں",
    countdownDays: "دن",
    countdownHours: "گھنٹے",
    countdownMinutes: "منٹ",
    countdownSeconds: "سیکنڈ",
    getDirections: "گوگل میپس پر لوکیشن",
    addToCalendar: "کیلنڈر میں محفوظ کریں",
    shareInvite: "واٹس ایپ پر شیئر کریں",
    openEnvelope: "دعوت نامہ کھولیں",
    tapToOpen: "دعوت نامہ کھولنے کے لیے مہر پر کلک کریں",
    viewQrCode: "کیو آر کوڈ دیکھیں",
    sendDua: "نیک تمنائیں اور دعا بھیجیں",
    duaTitle: "جوڑے کے لیے دعا",
    duaSubtitle: "محمد وقاص اور اسماء شجر کے لیے دلی دعائیں اور نیک تمنائیں تحریر فرمائیں۔",
    yourNamePlaceholder: "آپ کا نام / معزز خاندان",
    yourDuaPlaceholder: "اپنی دلی دعا اور مبارکباد تحریر فرمائیں...",
    sendBlessingBtn: "دعا ارسال کریں",
    blessingSentSuccess: "جزاک اللہ خیراً! آپ کی پرخلوص دعا موصول ہو گئی۔",
    predefinedDua: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ\n(اللہ آپ کو برکت دے اور دونوں کے درمیان خیر و بھلائی فرمائے)",
    whatsappMessage: "السلام علیکم! محمد وقاص اور اسماء شجر کی شادی و ولیمہ ۳۱ دسمبر ۲۰۲۶ کو منعقد ہو رہا ہے۔ براہ کرم ہمارا دعوت نامہ، لوکیشن اور الٹی گنتی دیکھنے کے لیے لنک پر کلک فرمائیں:",
    close: "بند کریں",
    copied: "لنک کاپی ہو گیا!",
    copyLink: "لنک کاپی کریں",
    venueNikkahNote: "گوگل میپس پر براہِ راست راستہ معلوم کریں",
    venueValimaNote: "بعد نمازِ ظہر ضیافتِ طعام",
    replayOpening: "دوبارہ کھولیں",
    audioOn: "آواز بند کریں",
    audioOff: "موسیقی چلائیں",
    flipToItinerary: "پروگرام اور مقامات دیکھیں",
    flipToCouple: "دولہا اور دلہن کی تفصیلات دیکھیں",
    cardCouple: "دولہا دلہن",
    cardItinerary: "پروگرام و لوکیشن",
    shareBtnLabel: "شیئر",
    fathersCombinedNames: "جناب ناتم کار سیف اللہ · جناب اصغر علی",
    solicitBlessings: "آپ کی معزز شرکت، دعاؤں اور نیک تمناؤں کے پرخلوص متمنی ہیں",
    sameDayCelebrations: "ایک ہی دن دونوں تقاریب · ۳۱ · ۱۲ · ۲۰۲۶",
    shareModalDesc: "یہ مبارک دعوت نامہ اپنے اہل خانہ اور دوستوں کو واٹس ایپ پر بھیجیں یا کیو آر کوڈ اسکین کریں۔",
    scanQrInstruction: "کسی بھی کیمرے یا واٹس ایپ سے اسکین کریں",
    shareOnWhatsappBtn: "واٹس ایپ پر شیئر کریں",
  },
  ta: {
    bismillah: "அளவற்ற அருளாளனும் நிகரற்ற அன்புடையோனுமாகிய அல்லாஹ்வின் திருப்பெயரால்",
    quranicVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranicVerseTranslation: "நீங்கள் அவர்களிடம் அமைதி பெறுவதற்காக உங்கள் இனத்திலிருந்தே உங்களுக்காக ஜோடிகளைப் படைத்து, உங்களிடையே அன்பையும் கருணையையும் உண்டாக்கியிருப்பதும் அவனது அத்தாட்சிகளில் உள்ளதாகும்.",
    quranicReference: "சூரா அர்-ரூம் · 30:21",
    invitationTitle: "நிக்காஹ் & வலீமா அழைப்பிதழ்",
    invitationSubtitle: "திருமண மங்கல அழைப்பிதழ்",
    togetherWithFamilies: "எங்கள் குடும்பத்தினர் யாவரும் இணைந்து உங்களை அன்போடு அழைக்கின்றோம்",
    groomTitle: "மணமகன்",
    groomName: "முஹம்மது வக்காஸ்",
    groomSonOf: "மகன்:",
    groomFatherName: "ஜனாப் நடம்கார் சைஃபுல்லாஹ்",
    brideTitle: "மணமகள்",
    brideName: "அஸ்மா ஷஜர்",
    brideDaughterOf: "மகள்:",
    brideFatherName: "ஜனாப் அஸ்கர் அலி",
    celebrateWithUs: "எல்லாம் வல்ல இறைவனின் பேரருளோடு நடைபெறும் எங்கள் இல்லத் திருமண விழாவிற்கு வருகை தந்து புதுமணத் தம்பதிகளை வாழ்த்தி சிறப்பிக்க அன்போடு வேண்டுகிறோம்.",
    weddingDateHeader: "வியாழக்கிழமை, 31 டிசம்பர் 2026",
    weddingDateFormatted: "31 · 12 · 2026",
    nikkahTitle: "புனித நிக்காஹ் வைபவம்",
    nikkahTime: "முற்பகல் 11:45 மணி",
    nikkahDesc: "நபிகள் நாயகம் (ஸல்) அவர்களின் புனித சுன்னத்தின்படி நிக்காஹ் வைபவம் நடைபெறும்.",
    valimaTitle: "வலீமா வரவேற்பு விருந்து",
    valimaTime: "நண்பகல் 12:00 மணி (ளுஹர் தொழுகைக்குப் பின்)",
    valimaDesc: "உற்றார், உறவினர்கள் மற்றும் நண்பர்களுக்கான திருமண விருந்து உபசரிப்பு.",
    countdownDaysLeft: "நாட்கள் மீதமுள்ளன",
    countdownDays: "நாட்கள்",
    countdownHours: "மணி",
    countdownMinutes: "நிமிடம்",
    countdownSeconds: "நொடி",
    getDirections: "கூகிள் மேப்ஸ் வழி",
    addToCalendar: "காலெண்டரில் சேர்க்க",
    shareInvite: "வாட்ஸ்அப்பில் பகிர",
    openEnvelope: "அழைப்பிதழைத் திறக்க",
    tapToOpen: "அழைப்பிதழைத் திறக்க முத்திரையைத் தொடவும்",
    viewQrCode: "QR குறியீடு",
    sendDua: "துஆ மற்றும் வாழ்த்துக்கள்",
    duaTitle: "மணமக்களுக்கான துஆ",
    duaSubtitle: "முஹம்மது வக்காஸ் & அஸ்மா ஷஜர் தம்பதியினரின் இல்வாழ்க்கை சிறக்க உங்களின் ஆசீர்வாதங்களைப் பகிருங்கள்.",
    yourNamePlaceholder: "உங்கள் பெயர் / குடும்பம்",
    yourDuaPlaceholder: "உங்கள் மனமார்ந்த துஆ மற்றும் வாழ்த்தை எழுதவும்...",
    sendBlessingBtn: "வாழ்த்தை அனுப்பவும்",
    blessingSentSuccess: "ஜஸாகல்லாஹ் கைர்! உங்களின் வாழ்த்து பதிவு செய்யப்பட்டது.",
    predefinedDua: "Barakallahu laka wa baraka alayka wa jama'a baynakuma fi khayr\n(அல்லாஹ் உங்களுக்கு பரக்கத் செய்து இருவரையும் நன்மையில் ஒன்று சேர்க்கட்டும்)",
    whatsappMessage: "அஸ்ஸலாமு அலைக்கும்! முஹம்மது வக்காஸ் & அஸ்மா ஷஜர் ஆகியோரின் நிக்காஹ் மற்றும் வலீமா வரவேற்பு 31 டிசம்பர் 2026 அன்று நடைபெறுகிறது. வழித்தடம் மற்றும் நேரடி தகவல்களுக்கு டிஜிட்டல் அழைப்பிதழைப் பார்க்கவும்:",
    close: "மூடு",
    copied: "இணைப்பு நகலெடுக்கப்பட்டது!",
    copyLink: "இணைப்பை நகலெடு",
    venueNikkahNote: "கூகிள் மேப்ஸ் மூலம் நிகழ்விடத்தை எளிதாக அடையலாம்",
    venueValimaNote: "ளுஹர் தொழுகைக்குப் பின் வலீமா விருந்து",
    replayOpening: "மீண்டும் திறக்க",
    audioOn: "ஒலி நிறுத்த",
    audioOff: "இசை ஒலிக்க",
    flipToItinerary: "நிகழ்வுகள் & இடங்கள் பார்க்க",
    flipToCouple: "மணமக்கள் விவரங்கள் பார்க்க",
    cardCouple: "மணமக்கள்",
    cardItinerary: "நிகழ்வுகள் & வழிகள்",
    shareBtnLabel: "பகிர்",
    fathersCombinedNames: "ஜனாப் நடம்கார் சைஃபுல்லாஹ் · ஜனாப் அஸ்கர் அலி",
    solicitBlessings: "தங்களின் நல்வருகையையும் வாழ்த்துக்களையும் அன்போடு வேண்டுகிறோம்",
    sameDayCelebrations: "ஒரே நாளில் இரு வைபவங்கள் · 31 · 12 · 2026",
    shareModalDesc: "இந்தத் திருமண அழைப்பிதழை வாட்ஸ்அப் அல்லது QR குறியீடு மூலம் சுற்றத்தாருடன் பகிருங்கள்.",
    scanQrInstruction: "கேமரா அல்லது வாட்ஸ்அப் மூலம் ஸ்கேன் செய்யவும்",
    shareOnWhatsappBtn: "வாட்ஸ்அப்பில் பகிரவும்",
  }
};
