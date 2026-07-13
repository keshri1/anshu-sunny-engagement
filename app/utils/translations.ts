// src/utils/translations.ts
// Complete translations for English and Hindi

export interface Translations {
  heroTitle: string;
  heroSubtitle: string;
  inviteTitle: string;
  anshuTitle: string;
  anshuSubtitle: string;
  heart: string;
  sunnyTitle: string;
  sunnySubtitle: string;
  tagline: string;
  days: string;
  hours: string;
  mins: string;
  secs: string;
  storyTitle: string;
  storyText: string;
  celebrateWithUs: string;
  date: string;
  dateValue: string;
  occasion: string;
  occasionValue: string;
  venue: string;
  venueName: string;
  venueAddress: string;
  openInMaps: string;
  thingsToKnow: string;
  dressTitle: string;
  dressText: string;
  activities: string[];
  withBlessings: string;
  ourBelovedFamilies: string;
  brideFamily: string;
  brideLocation: string;
  groomFamily: string;
  groomLocation: string;
  willYouJoinUs: string;
  rsvp: string;
  rsvpSubtext: string;
  attending: string;
  notAttending: string;
  closingMessage: string;
  signoff: string;
  finalDate: string;
}

export const translations: Record<'en' | 'hi', Translations> = {
  en: {
    // Hero Section
    heroTitle: "Anshu & Sunny",
    heroSubtitle: "Ring Ceremony · 20 August 2026",
    
    // Invitation Text
    inviteTitle: "We warmly invite you to join us to celebrate the engagement of",
    anshuTitle: "Anshu",
    anshuSubtitle: "Daughter of Shri. & Smt. Manoj  \nand Sushma Keshri",
    heart: "♡",
    sunnyTitle: "Sunny",
    sunnySubtitle: "Son of Shri. & Smt. Omkar  \nand Prabhawati Keshri",
    tagline: "Two souls. One beautiful beginning.",
    
    // Countdown
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    
    // Main Story Section
    storyTitle: "A Love Destined to Be",
    storyText: `"They say when the universe conspires, two hearts find their way to each other. For Anshu & Sunny, that moment has arrived — and we couldn't be more overjoyed to share it with the people who matter most.

With hearts full of joy and eyes full of starlight, two families invite you to witness the beautiful beginning of a lifelong love story. Come, celebrate, dance, laugh — because love is best when shared."`,
    
    // Event Details
    celebrateWithUs: "Celebrate With Us",
    date: "Date",
    dateValue: "Thursday  \n20th August 2026",
    occasion: "Occasion",
    occasionValue: "Ring Ceremony  \n& Engagement",
    venue: "Venue",
    venueName: "Emerald Garden Banquet Hall",
    venueAddress: "Opp. Trimurti Apartment, Near Majestic Janki City,  \nNear Digha Bridge Link Road (Pillar No. 242),  \nDanapur, Patna, Bihar — 801503",
    openInMaps: "Open in Maps ↗",
    
    // Things to Know
    thingsToKnow: "Things to Know",
    dressTitle: "Dress to Impress 💛",
    dressText: "Wear your finest ethnic wear — think royal, think vibrant, think gold. Come hungry, come happy, and come ready to dance!",
    
    activities: [
      "Wear your finest ethnic",
      "Live Music & DJ",
      "Grand Feast Awaits",
      "Photo Booth Fun",
      "Dance Like Nobody's Watching"
    ],
    
    // Blessings Section
    withBlessings: "With Blessings From",
    ourBelovedFamilies: "Our Beloved Families",
    brideFamily: "Bride's Family",
    brideLocation: "Keshri Family, Dhanbad",
    groomFamily: "Groom's Family",
    groomLocation: "Keshri Family, Siwan",
    
    // RSVP Section
    willYouJoinUs: "Will You Join Us?",
    rsvp: "RSVP",
    rsvpSubtext: "Your presence is our greatest gift",
    attending: "💛 Joyfully Attending",
    notAttending: "Will Miss You Both",
    
    // Closing
    closingMessage: `"Two hearts, one beautiful forever."
With love & a million blessings — see you soon! 🌸`,
    signoff: "Anshu ♡ Sunny",
    finalDate: "20 · August · 2026 · Patna, Bihar",
  },
  
  hi: {
    // Hero Section
    heroTitle: "अंशु और सन्नी",
    heroSubtitle: "रिंग सेरेमनी · 20 अगस्त 2026",
    
    // Invitation Text
    inviteTitle: "हम आपको अंशु और सनी की सगाई के समारोह में शामिल होने के लिए आमंत्रित करते हैं",
    anshuTitle: "अंशु",
    anshuSubtitle: "श्री. और श्रीमती. मनोज  \nऔर सुषमा केशरी की बेटी",
    heart: "♡",
    sunnyTitle: "सन्नी",
    sunnySubtitle: "श्री. और श्रीमती. ओमकार  \nऔर प्रभावती केशरी के बेटे",
    tagline: "दो आत्माएं। एक सुंदर शुरुआत।",
    
    // Countdown
    days: "दिन",
    hours: "घंटे",
    mins: "मिनट",
    secs: "सेकंड",
    
    // Main Story Section
    storyTitle: "एक निर्धारित प्रेम कहानी",
    storyText: `"वे कहते हैं कि जब ब्रह्मांड की साजिश होती है, तो दो दिल एक-दूसरे तक पहुँचते हैं। अंशु और सनी के लिए, वह पल आ गया है — और हम इसे उन लोगों के साथ साझा करने के लिए अत्यंत प्रसन्न हैं जो हमारे लिए सबसे महत्वपूर्ण हैं।

हृदय में खुशी और आँखों में तारों की चमक के साथ, दोनों परिवार आपको एक सुंदर जीवन भर की प्रेम कहानी की शुरुआत को देखने के लिए आमंत्रित करते हैं। आओ, मनाओ, नाचो, हँसो — क्योंकि प्रेम सबसे अच्छा है जब साझा किया जाए।"`,
    
    // Event Details
    celebrateWithUs: "हमारे साथ मनाएं",
    date: "तारीख",
    dateValue: "गुरुवार  \n२० · अगस्त · २०२६",
    occasion: "अवसर",
    occasionValue: "रिंग सेरेमनी  \nऔर सगाई",
    venue: "स्थान",
    venueName: "एमराल्ड गार्डन बैंक्वेट हॉल",
    venueAddress: "त्रिमूर्ति अपार्टमेंट के सामने, मेजेस्टिक जानकी सिटी के पास,  \nदिघा ब्रिज लिंक रोड के पास (पिलर नो. 242),  \nदनापुर, पटना, बिहार — 801503",
    openInMaps: "मानचित्र में खोलें ↗",
    
    // Things to Know
    thingsToKnow: "जानने योग्य बातें",
    dressTitle: "प्रभावशाली पोशाक 💛",
    dressText: "अपनी सबसे अच्छी जातीय पोशाक पहनें — शाही सोचें, जीवंत सोचें, सोना सोचें। भूखे आओ, खुश आओ, और नाचने के लिए तैयार आओ!",
    
    activities: [
      "अपनी सबसे अच्छी जातीय पोशाक पहनें",
      "संगीत और डीजे",
      "दावत का इंतजार है",
      "फोटो बूथ मजा",
      "नाचो ऐसे कि कोई नहीं देख रहा"
    ],
    
    // Blessings Section
    withBlessings: "हमारे प्रियजनों का आशीर्वाद",
    ourBelovedFamilies: "हमारे प्रिय परिवार",
    brideFamily: "दुल्हन का परिवार",
    brideLocation: "केशरी परिवार, धनबाद",
    groomFamily: "दूल्हे का परिवार",
    groomLocation: "केशरी परिवार, सीवान",
    
    // RSVP Section
    willYouJoinUs: "क्या आप हमारे साथ शामिल होंगे?",
    rsvp: "आरएसवीपी",
    rsvpSubtext: "आपकी उपस्थिति हमारे लिए सबसे बड़ा उपहार है",
    attending: "💛 खुशी से शामिल हो रहे हैं",
    notAttending: "आपकी कमी महसूस होगी",
    
    // Closing
    closingMessage: `"दो दिल, एक सुंदर हमेशा के लिए।"
प्यार और लाखों आशीर्वादों के साथ — जल्द मिलते हैं! 🌸`,
    signoff: "अंशु ♡ सन्नी",
    finalDate: "२० · अगस्त · २०२६ · पटना, बिहार",
  }
};