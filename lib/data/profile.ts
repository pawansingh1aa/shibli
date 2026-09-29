// ---------------------------------------------------------------------------
// CENTRAL CONTENT FILE — Devanagari + Hinglish
// ---------------------------------------------------------------------------

export const VERIFICATION_STATUS = {
  VERIFIED: "verified",
  PENDING: "pending",
} as const;

export type VerificationStatus =
  (typeof VERIFICATION_STATUS)[keyof typeof VERIFICATION_STATUS];

export interface Source {
  id: string;
  claim: string;
  publication: string;
  date: string | null;
  url: string | null;
  category:
    | "election-commission"
    | "government"
    | "news"
    | "party-statement"
    | "other";
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: VerificationStatus;
  sourceIds: string[];
}

export interface ElectionRecord {
  id: string;
  year: string;
  election: string;
  constituency: string;
  party: string;
  status: string;
  votes: string | null;
  sourceIds: string[];
  status_type: VerificationStatus;
}

export interface NewsItem {
  id: string;
  publication: string;
  date: string | null;
  headline: string;
  summary: string;
  url: string | null;
  status: VerificationStatus;
}

export const profile = {
  name: "जशवंत सिंह",
  alternateName: "शिब्ली सिंह",
  region: "आज़मगढ़ ज़िला, उत्तर प्रदेश, भारत",
  shortBio:
    "जशवंत सिंह उर्फ शिब्ली सिंह उत्तर प्रदेश के आज़मगढ़ ज़िले के एक अनुभवी राजनीतिक व्यक्तित्व हैं। वे असवनियां ग्राम पंचायत से 3 बार ग्राम प्रधान रह चुके हैं और सरायमोहन जिला पंचायत क्षेत्र से जिला पंचायत सदस्य भी रह चुके हैं। वर्ष 2018 से वे सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़े हुए हैं। वर्तमान में वे सुभासपा के प्रदेश सलाहकार के पद पर कार्यरत हैं।",
  images: {
    profilePhotoAvailable: true,
    profilePhotoPath: "/profile.jpg",
    profilePhotoAlt: "जशवंत सिंह (शिब्ली सिंह) — profile photograph",
  },
  socialLinks: [] as { platform: string; url: string; status: VerificationStatus }[],
};

// ---------------------------------------------------------------------------
// SOURCES DIRECTORY
// ---------------------------------------------------------------------------

export const sources: Source[] = [
  {
    id: "src-gram-pradhan-aswaniya",
    claim:
      "यशवंत सिंह उर्फ शिब्ली सिंह 2005–2010, 2010–2015 और 2020–2025 — तीन बार असवनियां ग्राम पंचायत के ग्राम प्रधान रहे।",
    publication: "व्यक्तिगत जानकारी (जशवंत सिंह द्वारा प्रदत्त)",
    date: null,
    url: null,
    category: "government",
  },
  {
    id: "src-zila-panchayat",
    claim:
      "जशवंत सिंह उर्फ शिब्ली सिंह का जिला पंचायत — सरायमोहन, आज़मगढ़ से जुड़ाव।",
    publication: "व्यक्तिगत जानकारी (जशवंत सिंह द्वारा प्रदत्त)",
    date: null,
    url: null,
    category: "government",
  },
  {
    id: "src-didarganj-2017",
    claim:
      "2017 दीदारगंज विधानसभा चुनाव — महाक्रांति दल से 2,227 मत (लगभग 1.19%) प्राप्त।",
    publication: "व्यक्तिगत जानकारी (जशवंत सिंह द्वारा प्रदत्त)",
    date: "2017-03-11",
    url: "https://en.wikipedia.org/wiki/Didarganj_Assembly_constituency",
    category: "election-commission",
  },
  {
    id: "src-azamgarh-2019-sbsp",
    claim:
      "2019 आज़मगढ़ लोकसभा चुनाव — सुभासपा ने जशवंत सिंह उर्फ शिब्ली सिंह को प्रत्याशी घोषित किया; स्वास्थ्य कारणों से चुनाव नहीं लड़ सके; बाद में अभिमन्यु सिंह को प्रत्याशी बनाया गया।",
    publication: "व्यक्तिगत जानकारी (जशवंत सिंह द्वारा प्रदत्त)",
    date: "2019-04",
    url: null,
    category: "party-statement",
  },
  {
    id: "src-wiki-azamgarh-ls-2019",
    claim:
      "2019 आज़मगढ़ Lok Sabha result: अखिलेश यादव (Samajwadi Party) ने जीत हासिल की; दिनेश लाल यादव 'निरहुआ' (BJP) runner-up रहे।",
    publication: "Public election-results reference (Wikipedia, ECI data के आधार पर)",
    date: "2019-05-23",
    url: "https://en.wikipedia.org/wiki/Azamgarh_Lok_Sabha_constituency",
    category: "election-commission",
  },
];

// ---------------------------------------------------------------------------
// POLITICAL JOURNEY / TIMELINE
// ---------------------------------------------------------------------------

export const timeline: TimelineEvent[] = [
  {
    id: "tl-gram-pradhan-1",
    date: "2005 – 2010",
    title: "प्रथम बार ग्राम प्रधान — असवनियां ग्राम पंचायत",
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह पहली बार असवनियां ग्राम पंचायत (आज़मगढ़) के ग्राम प्रधान चुने गए और 2005 से 2010 तक इस पद पर कार्यरत रहे।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-gram-pradhan-aswaniya"],
  },
  {
    id: "tl-gram-pradhan-2",
    date: "2010 – 2015",
    title: "द्वितीय बार ग्राम प्रधान — असवनियां ग्राम पंचायत",
    description:
      "2010 में पुनः निर्वाचित होकर दूसरी बार असवनियां ग्राम पंचायत के ग्राम प्रधान बने और 2015 तक इस पद पर रहे।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-gram-pradhan-aswaniya"],
  },
  {
    id: "tl-gram-pradhan-2015",
    date: "2015 – 2020",
    title: "ग्राम प्रधान चुनाव — सामान्य सीट न आने के कारण नहीं लड़े",
    description:
      "2015–2020 कार्यकाल में असवनियां ग्राम पंचायत की सीट सामान्य श्रेणी से बाहर आरक्षित हो जाने के कारण जशवंत सिंह ग्राम प्रधान का चुनाव नहीं लड़ सके।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-gram-pradhan-aswaniya"],
  },
  {
    id: "tl-zila-panchayat",
    date: "तिथि उपलब्ध नहीं",
    title: "जिला पंचायत सदस्य — सरायमोहन, आज़मगढ़",
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह का सरायमोहन, आज़मगढ़ से जिला पंचायत से जुड़ाव रहा है।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-zila-panchayat"],
  },
  {
    id: "tl-sbsp-join",
    date: "2018",
    title: "सुभासपा से जुड़ाव",
    description:
      "वर्ष 2018 में जशवंत सिंह उर्फ शिब्ली सिंह सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़े। 2026 तक वे लगभग 8 वर्षों से पार्टी के सक्रिय सदस्य हैं। वर्तमान में वे सुभासपा के प्रदेश सलाहकार के पद पर कार्यरत हैं।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-azamgarh-2019-sbsp"],
  },
  {
    id: "tl-didarganj-2017",
    date: "2017",
    title: "2017 दीदारगंज विधानसभा चुनाव — महाक्रांति दल",
    description:
      "2017 उत्तर प्रदेश विधानसभा चुनाव में जशवंत सिंह उर्फ शिब्ली सिंह ने दीदारगंज विधानसभा क्षेत्र से महाक्रांति दल के प्रत्याशी के रूप में चुनाव लड़ा। उन्हें 2,227 मत (लगभग 1.19% मत प्रतिशत) प्राप्त हुए।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-didarganj-2017"],
  },
  {
    id: "tl-azamgarh-2019-announcement",
    date: "2019",
    title: "2019 आज़मगढ़ लोकसभा — सुभासपा प्रत्याशी घोषित",
    description:
      "2019 लोकसभा चुनाव में सुहेलदेव भारतीय समाज पार्टी (सुभासपा) ने जशवंत सिंह उर्फ शिब्ली सिंह को आज़मगढ़ लोकसभा सीट से अपना प्रत्याशी घोषित किया। परंतु स्वास्थ्य कारणों से वे चुनाव नहीं लड़ सके। बाद में उनकी जगह सुभासपा ने अभिमन्यु सिंह को प्रत्याशी बनाया।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-azamgarh-2019-sbsp", "src-wiki-azamgarh-ls-2019"],
  },
  {
    id: "tl-gram-pradhan-4",
    date: "2020 – 2025",
    title: "तृतीय बार ग्राम प्रधान — असवनियां ग्राम पंचायत",
    description:
      "2020 में एक बार फिर असवनियां ग्राम पंचायत के ग्राम प्रधान निर्वाचित हुए और 2025 तक इस पद पर कार्यरत रहे। इस प्रकार वे कुल तीन बार ग्राम प्रधान रह चुके हैं।",
    status: VERIFICATION_STATUS.VERIFIED,
    sourceIds: ["src-gram-pradhan-aswaniya"],
  },
];

// ---------------------------------------------------------------------------
// ELECTION RECORD TABLE
// ---------------------------------------------------------------------------

export const elections: ElectionRecord[] = [
  {
    id: "el-2017-didarganj",
    year: "2017",
    election: "उत्तर प्रदेश विधानसभा",
    constituency: "दीदारगंज",
    party: "महाक्रांति दल",
    status: "चुनाव लड़ा — 2,227 मत (1.19%)",
    votes: "2,227",
    sourceIds: ["src-didarganj-2017"],
    status_type: VERIFICATION_STATUS.VERIFIED,
  },
  {
    id: "el-2019-azamgarh",
    year: "2019",
    election: "लोकसभा (General Election)",
    constituency: "आज़मगढ़",
    party: "सुभासपा (SBSP)",
    status: "प्रत्याशी घोषित; स्वास्थ्य कारणों से चुनाव नहीं लड़ सके",
    votes: null,
    sourceIds: ["src-azamgarh-2019-sbsp"],
    status_type: VERIFICATION_STATUS.VERIFIED,
  },
];

// ---------------------------------------------------------------------------
// NEWS / MEDIA
// ---------------------------------------------------------------------------

export const newsItems: NewsItem[] = [];

// ---------------------------------------------------------------------------
// BIOGRAPHY SECTIONS
// ---------------------------------------------------------------------------

export const biographySections = [
  {
    id: "introduction",
    title: "परिचय",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह, उम्र 55 वर्ष, ग्राम असवनियां, पोस्ट असवनियां, थाना बरदह, जिला आज़मगढ़, उत्तर प्रदेश के निवासी हैं। वे ग्राम प्रधान एवं जिला पंचायत सदस्य भी रह चुके हैं। उनका संबंध लालगंज विधानसभा क्षेत्र से है, जबकि वे भविष्य में दीदारगंज विधानसभा क्षेत्र से चुनाव लड़ने की राजनीतिक इच्छा रखते हैं।",
  },
  {
    id: "farming",
    title: "कृषि",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह एक सक्रिय किसान हैं और अपने क्षेत्र में बड़े पैमाने पर खेती करते हैं। वे अपने इलाके के प्रमुख कृषक व्यक्तित्वों में से एक हैं।",
  },
  {
    id: "business",
    title: "व्यवसाय",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह का building materials (निर्माण सामग्री) का व्यवसाय है, जो गोदाहरा बाज़ार, आज़मगढ़ में स्थित है।",
  },
  {
    id: "school",
    title: "शिक्षण संस्था — विद्यालय",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह कक्षा 1 से 10 तक का एक विद्यालय (PDMS Public School) भी संचालित करते हैं, जो क्षेत्र के बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करता है।",
  },
  {
    id: "college",
    title: "शिक्षण संस्था — डिग्री कॉलेज",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह एक degree college का भी संचालन करते हैं, जो उच्च शिक्षा के क्षेत्र में उनके योगदान को दर्शाता है।",
  },
  {
    id: "gram-pradhan",
    title: "ग्राम प्रधान — असवनियां ग्राम पंचायत",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह ने असवनियां ग्राम पंचायत, आज़मगढ़ से तीन कार्यकालों में ग्राम प्रधान का पद संभाला: पहला कार्यकाल 2005 से 2010, दूसरा कार्यकाल 2010 से 2015 और तीसरा कार्यकाल 2020 से 2025। 2015–2020 के कार्यकाल में सीट के आरक्षण के कारण वे चुनाव नहीं लड़ सके।",
  },
  {
    id: "zila-panchayat",
    title: "जिला पंचायत",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह का सरायमोहन, आज़मगढ़ से जिला पंचायत से जुड़ाव रहा है।",
  },
  {
    id: "electoral-history",
    title: "चुनावी इतिहास",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "2017 के उत्तर प्रदेश विधानसभा चुनाव में इन्होंने दीदारगंज विधानसभा क्षेत्र से महाक्रांति दल के प्रत्याशी के रूप में चुनाव लड़ा और 2,227 मत (लगभग 1.19% मत प्रतिशत) प्राप्त किए। 2019 के लोकसभा चुनाव में सुभासपा ने इन्हें आज़मगढ़ सीट से प्रत्याशी घोषित किया था, किंतु स्वास्थ्य कारणों से ये चुनाव नहीं लड़ सके।",
  },
  {
    id: "elephant",
    title: "हाथी पालन — क्षेत्रीय पहचान",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह अपने ग्राम असवनियां और आसपास के क्षेत्र में इस कारण भी विशेष रूप से जाने जाते हैं क्योंकि उन्होंने हाथी पाल रखा है। यह उनकी अलग पहचान और क्षेत्र में उनके प्रभाव का प्रतीक है।",
  },
  {
    id: "organizational-roles",
    title: "सुभासपा से जुड़ाव एवं वर्तमान पद",
    status: VERIFICATION_STATUS.VERIFIED,
    body: "जशवंत सिंह उर्फ शिब्ली सिंह वर्ष 2018 से सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़े हुए हैं। 2026 तक वे लगभग 8 वर्षों से पार्टी के सक्रिय सदस्य हैं। वर्तमान में वे सुभासपा के प्रदेश सलाहकार के महत्वपूर्ण पद पर कार्यरत हैं।",
  },
];

export const siteMeta = {
  siteName: "जशवंत सिंह — Public Information Profile",
  baseUrl: "https://jashwantshiblisingh.netlify.app",
  description:
    "जशवंत सिंह उर्फ शिब्ली सिंह — आज़मगढ़, उत्तर प्रदेश के 3 बार ग्राम प्रधान, जिला पंचायत सदस्य और सुभासपा प्रदेश सलाहकार। Jashwant Singh Shibli Singh Azamgarh UP politician.",
};

// ---------------------------------------------------------------------------
// PARTY ACTIVITIES
// ---------------------------------------------------------------------------
// Har activity mein ek title, date, description aur optional photos array hai.
// Photos add karne ke liye public/activities/ folder mein image rakhein
// aur file name yahan likhein, jaise "rally-jan-2024.jpg"

export interface ActivityItem {
  id: string;
  date: string;
  title: string;
  description: string;
  photos: string[]; // filenames from public/activities/
  location?: string;
}

export const activities: ActivityItem[] = [
  {
    id: "act-1",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-1.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
  {
    id: "act-2",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-2.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
  {
    id: "act-3",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-3.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
  {
    id: "act-4",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-4.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
  {
    id: "act-5",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-5.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
  {
    id: "act-6",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-6.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
  {
    id: "act-7",
    date: "सितंबर 2026",
    title: "पार्टी गतिविधि — सुभासपा",
    description: "जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी गतिविधि।",
    photos: ["activity-7.jpg"],
    location: "आज़मगढ़, उत्तर प्रदेश",
  },
];
