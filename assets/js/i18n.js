/**
 * i18n.js - Internationalization Engine & Translations (ID & EN)
 * Portofolio Neubrutalist - Neli Agustina, A.Md.Ak.
 */

const I18N_DATA = {
  id: {
    // Meta & Document
    pageTitle: "Neli Agustina, A.Md.Ak. - Administrasi & Akuntansi",
    pageDesc: "Portfolio Neli Agustina, A.Md.Ak. - Lulusan D3 Akuntansi Politeknik Negeri Samarinda (POLNES) dengan latar belakang Administrasi Perkantoran SMKN 20 Samarinda. Berpengalaman di Divisi Pengelolaan Aset Tetap PT BPD Kaltim Kaltara dan Pelayanan Masyarakat. Samarinda, Kalimantan Timur.",

    // Navbar & Mobile Menu
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navExperience: "Pengalaman",
    navCertificates: "Sertifikat",
    navContact: "Kontak",
    navCta: "Hubungi Saya →",
    mobileCta: "Hubungi Saya",

    // Hero Section
    heroBadge: "Terbuka untuk Peluang Karier",
    heroGreeting: "Halo, Saya",
    heroRole: "Administrasi & Akuntansi",
    heroBio: "<strong style=\"color:#001D39;\">Ahli Madya Akuntansi (A.Md.Ak.)</strong> lulusan <strong style=\"color:#001D39;\">Politeknik Negeri Samarinda</strong> berpengalaman di bidang administrasi aset perbankan, pengolahan data, serta pengelolaan dokumen terstruktur.",
    heroContactBtn: "Hubungi Saya",
    heroJobstreetBtn: "WhatsApp: 085822118725",
    heroStatGpaLabel: "IPK POLNES",
    heroStatProjectsLabel: "Pengalaman Kerja & PKL",
    heroLocation: "📍 Samarinda, Kalimantan Timur",

    // Stats Banner
    bannerDegreeDesc: "Ahli Madya Akuntansi · D3",
    bannerPolnesDesc: "Politeknik Negeri Samarinda · 2023-2026",
    bannerStatusDesc: "Siap Bekerja · 2026",

    // About Section
    aboutSectionMark: "★ Tentang Saya",
    aboutHeading: "Dedikasi & Ketelitian <span class=\"neo-highlight-navy\">Administrasi</span> & <span class=\"neo-highlight\">Akuntansi</span>",
    aboutP1: "Lulusan D3 Akuntansi <strong style=\"color:#001D39;\">Politeknik Negeri Samarinda (POLNES)</strong> (IPK 3.47) dengan latar belakang Otomatisasi & Tata Kelola Perkantoran SMKN 20 Samarinda. Berpengalaman magang di PT BPD Kaltim Kaltara (Pusat) pada Divisi Pengelolaan Aset Tetap, serta pelayanan administrasi kependudukan di Kantor Kecamatan Sambutan.",
    aboutP2: "Terampil dalam pengolahan data spreadsheet (Excel), pembukuan akuntansi, penataan arsip dokumen fisik maupun digital, serta korespondensi perkantoran. Memiliki ketelitian tinggi, rasa tanggung jawab, dan kemampuan adaptasi cepat dalam bekerja mandiri maupun kolaborasi tim.",
    aboutCareerGoalTitle: "🎯 Tujuan Karier",
    aboutCareerGoalDesc: "Mengembangkan karier profesional dan siap berkontribusi pada posisi <strong style=\"color:#001D39;\">Staf Administrasi, Akuntansi, Finance</strong>, maupun posisi operasional terkait lainnya.",
    aboutGpaLabel: "IPK (POLNES)",
    aboutProjectsLabel: "Pengalaman",
    aboutInterestsTitle: "Bidang Minat & Spesialisasi",
    aboutTagAccountingStaff: "Staf Administrasi & Akuntansi",

    // Skills Section
    skillsSectionMark: "⚡ Keahlian",
    skillsHeading: "Skills & <span class=\"neo-highlight\">Kompetensi</span>",
    skillCatAcc: "Akuntansi & Keuangan",
    skillAcc1: "Pembukuan & Siklus Akuntansi",
    skillAcc2: "Pengolahan & Penginputan Data",
    skillAcc3: "Pengelolaan Dokumen & Verifikasi",
    skillAcc4: "Rekonsiliasi Transaksi Keuangan",
    skillAcc5: "Penyusunan Laporan Keuangan",
    skillCatAdmin: "Administrasi & Perkantoran",
    skillExcel1: "Microsoft Excel (Formula & Tabel Data)",
    skillExcel2: "Microsoft Word (Naskah Dinas & Surat Resmi)",
    skillExcel3: "Pengarsipan Dokumen Fisik & Digital",
    skillExcel4: "Korespondensi / Surat-Menyurat",
    skillCatTools: "Tools & Desain",
    skillCatSoft: "Soft Skills & Etika Kerja",
    softSkill1: "Ketelitian & Akurasi Tinggi",
    softSkill2: "Komunikasi Efektif",
    softSkill3: "Tanggung Jawab & Disiplin",
    softSkill4: "Etika Kerja & Kerahasiaan Dokumen",
    softSkill5: "Pelayanan Prima (Service Excellence)",
    softSkill6: "Manajemen Waktu",
    softSkill7: "Kerja Sama Tim",

    // Experience Section
    expSectionMark: "💼 Pengalaman",
    expHeading: "Pendidikan & <span class=\"neo-highlight\">Pengalaman</span>",
    expWorkTitle: "🏦 Pengalaman Kerja & Magang",
    expInternRole: "Magang - Divisi Pengelolaan Aset Tetap",
    expInternCompany: "PT Bank Pembangunan Daerah Kalimantan Timur dan Kalimantan Utara (Pusat) · Samarinda",
    expInternPeriod: "01 Juli 2025 - 01 Agustus 2025",
    expInternB1: "Melaksanakan magang di Kantor Pusat Bankaltimtara pada Divisi Pengelolaan Aset Tetap, menangani administrasi pengelolaan data aset, pengarsipan berkas dokumen inventaris perbankan secara terstruktur dan teratur.",
    expInternB2: "Meningkatkan ketelitian dalam pengelolaan data dan dokumen, beradaptasi dengan alur kerja dan prosedur perbankan, serta berkomunikasi aktif dengan staf divisi dalam mendukung operasional divisi.",
    expInternStat1Label: "Pengelolaan Aset",
    expInternStat2Label: "Surat Keputusan",
    expInternTagRecon: "Pengelolaan Aset Tetap",
    expInternTagSyariah: "Administrasi Perbankan",
    expInternViewCert: "Lihat Sertifikat Magang →",
    expInternDownloadPdf: "Unduh PDF",
    expInternGalleryTitle: "📸 Dokumentasi Magang",

    // Education Card
    eduTitle: "🎓 Pendidikan Tinggi",
    eduDegree: "D3 Akuntansi - A.Md.Ak.",
    eduCampus: "Politeknik Negeri Samarinda (POLNES)",
    eduDate: "2023 - 2026 · IPK 3.47",
    eduThesis: "<strong style=\"color:#001D39;\">Bidang Keahlian:</strong> Akuntansi Keuangan, Pembukuan, Pengolahan Data Transaksi, Pengendalian Dokumen Keuangan, dan Administrasi Perkantoran.",
    eduTagGpa: "IPK 3.47",
    eduTagAkreditasi: "Akreditasi Baik Sekali",
    eduIjazahBadge: "📜 Ijazah Resmi",
    eduWisudaBadge: "🎓 Foto Wisuda",
    eduDownloadIjazah: "📄 Unduh Ijazah (PDF)",
    eduGradPhotoTitle: "🎓 Prosesi Wisuda POLNES",
    eduGradPhotoZoom: "Perbesar ↗",

    // Pelatihan & Sertifikasi BPVP Samarinda Card
    freeTitle: "📜 Pelatihan & Sertifikasi",
    freeRole: "Digital Marketing Dasar",
    freeCompany: "BPVP SAMARINDA (KEMNAKER RI)",
    freePeriod: "Agu - Sep 2026 · 40 Jam Pelajaran (JP)",
    freeDesc: "<strong style=\"color:#001D39;\">Fokus Pelatihan:</strong> Riset pasar & kata kunci, pembuatan konten promosi digital, optimalisasi media sosial bisnis, dan pengelolaan pemasaran online.",
    freeCertBadge: "📜 Sertifikat Resmi",
    freePhotoBadge: "📸 Foto Kegiatan",
    freeDownloadCert: "📄 Unduh Sertifikat (PDF)",
    freeTagHours: "40 Jam Pelajaran",
    freeTagKemnaker: "Kemnaker RI",
    freeTagTopic: "Digital Marketing",

    // Certificates Section
    certSectionMark: "🏆 Sertifikat",
    certHeading: "Penghargaan & <span class=\"neo-highlight\">Sertifikasi</span>",
    certSubheading: "Klik gambar untuk memperbesar sertifikat",
    certTagIjazah: "Ijazah Resmi D3",
    certTitleIjazah: "Ijazah D3 Akuntansi - Ahli Madya Akuntansi (A.Md.Ak.)",
    certDescIjazah: "Politeknik Negeri Samarinda · Akreditasi Baik Sekali",
    certTagBankaltimtara: "Magang Perbankan",
    certTitleBankaltimtara: "Sertifikat Magang - Divisi Pengelolaan Aset Tetap",
    certDescBankaltimtara: "PT Bank Pembangunan Daerah Kalimantan Timur dan Kalimantan Utara · 2025",
    certTagBpvp: "Pelatihan 40 Jam",
    certTitleBpvp: "Sertifikat Pelatihan Digital Marketing Dasar",
    certDescBpvp: "BPVP Samarinda (Kemnaker RI) · No. 260915434CD1F5",
    certTagToefl: "Skor 403",
    certTitleToefl: "Certificate of Achievement - TOEFL Prediction Test",
    certDescToefl: "UPA Bahasa Politeknik Negeri Samarinda · 8 Agu 2026",
    certTagPrakerin: "Sangat Baik",
    certTitlePrakerin: "Sertifikat Praktik Kerja Industri (PRAKERIN PSG)",
    certDescPrakerin: "Kantor Kecamatan Sambutan & SMKN 20 Samarinda · 6 Bulan (2022)",
    certTagKunjungan: "Kunjungan Industri",
    certTitleKunjungan: "Sertifikat Kunjungan Industri Akuntansi POLNES",
    certDescKunjungan: "Balikpapan (Bea Cukai, DJP, Pegadaian) · Juni 2025",

    // Contact Section
    contactSectionMark: "✉️ Kontak",
    contactHeading: "Mari <span style=\"background:#7BBDE8; color:#001D39; padding:0 8px; border-radius:8px; border:2px solid #001D39; box-shadow:3px 3px 0 #0A4174; display:inline-block; transform:rotate(-1deg);\">Terhubung</span>",
    contactSubheading: "Apakah Anda seorang HRD, instansi, atau perusahaan? Kirimkan pesan atau hubungi langsung.",
    contactFormTitle: "Kirim Pesan",
    contactLabelName: "Nama Lengkap",
    contactPlaceholderName: "Nama Anda",
    contactLabelEmail: "Email",
    contactPlaceholderEmail: "email@perusahaan.com",
    contactLabelSubject: "Subjek",
    contactPlaceholderSubject: "Peluang Kerja / Rekrutmen / Pertanyaan",
    contactLabelMessage: "Pesan",
    contactPlaceholderMessage: "Tuliskan pesan Anda di sini...",
    contactSubmitBtn: "Kirim via Email →",
    contactSuccessMsg: "✓ Berhasil! Anda diarahkan ke aplikasi email.",
    contactInfoTitle: "Informasi Kontak",
    contactJobstreetView: "Kirim Pesan WhatsApp",
    contactOpenTitle: "🟢 Terbuka untuk Peluang Karier",
    contactOpenDesc: "Sedang mencari posisi <strong style=\"color:#7BBDE8;\">Staf Administrasi, Akuntansi, Finance, atau Pengadaan</strong>. Fresh graduate A.Md.Ak. POLNES dengan dedikasi tinggi dan siap bekerja!",

    // Footer
    footerCopyright: "© 2026 Neli Agustina, A.Md.Ak. · D3 Akuntansi POLNES · Samarinda, Kalimantan Timur",

    // UI Helpers
    photoUnit: "foto",
    addPrefix: "Tambahkan:",
    coverProjectPrefix: "Sampul:"
  },

  en: {
    // Meta & Document
    pageTitle: "Neli Agustina, A.Md.Ak. - Administration & Accounting Specialist",
    pageDesc: "Portfolio of Neli Agustina, A.Md.Ak. - D3 Accounting Graduate from State Polytechnic of Samarinda (POLNES) with vocational foundation in Office Automation from SMKN 20 Samarinda. Experienced in Fixed Assets Management Division at PT BPD Kaltim Kaltara and public administration. Samarinda, East Kalimantan.",

    // Navbar & Mobile Menu
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navCertificates: "Certificates",
    navContact: "Contact",
    navCta: "Contact Me →",
    mobileCta: "Contact Me",

    // Hero Section
    heroBadge: "Open to Career Opportunities",
    heroGreeting: "Hello, I am",
    heroRole: "Administration & Accounting Specialist",
    heroBio: "<strong style=\"color:#001D39;\">Associate in Accounting (A.Md.Ak.)</strong> graduate from <strong style=\"color:#001D39;\">State Polytechnic of Samarinda</strong> experienced in banking administration, data processing, and structured office document management.",
    heroContactBtn: "Get in Touch",
    heroJobstreetBtn: "WhatsApp: 085822118725",
    heroStatGpaLabel: "POLNES GPA",
    heroStatProjectsLabel: "Work Experience & Fieldwork",
    heroLocation: "📍 Samarinda, East Kalimantan",

    // Stats Banner
    bannerDegreeDesc: "Associate in Accounting · Diploma III",
    bannerPolnesDesc: "State Polytechnic of Samarinda · 2023-2026",
    bannerStatusDesc: "Ready to Work · Class of 2026",

    // About Section
    aboutSectionMark: "★ About Me",
    aboutHeading: "Dedication & Accuracy in <span class=\"neo-highlight-navy\">Administration</span> & <span class=\"neo-highlight\">Accounting</span>",
    aboutP1: "Accounting Diploma graduate from <strong style=\"color:#001D39;\">State Polytechnic of Samarinda (POLNES)</strong> (A.Md.Ak., GPA 3.47) with a vocational foundation in Office Automation from SMKN 20 Samarinda. Experienced in banking fixed assets administration at PT BPD Kaltim Kaltara (Head Office) and public services at Sambutan District Office.",
    aboutP2: "Skilled in spreadsheet data processing (Excel & Word), financial bookkeeping, physical and digital document archiving, and official correspondence. Brings high accuracy, responsibility, and quick adaptability to both independent work and team collaboration.",
    aboutCareerGoalTitle: "🎯 Career Objective",
    aboutCareerGoalDesc: "Eager to contribute professionally as an <strong style=\"color:#001D39;\">Administrative Staff, Accounting Staff, or Finance Staff</strong>, supporting smooth organizational workflows.",
    aboutGpaLabel: "GPA",
    aboutProjectsLabel: "Experience",
    aboutInterestsTitle: "Competencies & Interests",
    aboutTagAccountingStaff: "Admin & Accounting Staff",

    // Skills Section
    skillsSectionMark: "⚡ Core Skills",
    skillsHeading: "Skills & <span class=\"neo-highlight\">Competencies</span>",
    skillCatAcc: "Accounting & Finance",
    skillAcc1: "Bookkeeping & Accounting Cycles",
    skillAcc2: "Data Processing & Entry",
    skillAcc3: "Document Governance & Verification",
    skillAcc4: "Financial Reconciliation",
    skillAcc5: "Financial Reporting Preparation",
    skillCatAdmin: "Office Administration & Data",
    skillExcel1: "Microsoft Excel (Formulas & Tables)",
    skillExcel2: "Microsoft Word (Official Correspondence)",
    skillExcel3: "Physical & Digital Document Archiving",
    skillExcel4: "Business Correspondence",
    skillCatTools: "Tools & Design",
    skillCatSoft: "Soft Skills & Professional Values",
    softSkill1: "High Accuracy & Precision",
    softSkill2: "Effective Communication",
    softSkill3: "Task Responsibility & Discipline",
    softSkill4: "Work Ethics & Confidentiality",
    softSkill5: "Service Excellence",
    softSkill6: "Time Management",
    softSkill7: "Teamwork & Collaboration",

    // Experience Section
    expSectionMark: "💼 Experience",
    expHeading: "Education & <span class=\"neo-highlight\">Experience</span>",
    expWorkTitle: "🏦 Work Experience & Internships",
    expInternRole: "Intern Staff - Fixed Assets Management Division",
    expInternCompany: "PT BPD Kaltim Kaltara (Head Office) · Samarinda",
    expInternPeriod: "Jul 01, 2025 - Aug 01, 2025",
    expInternB1: "Carried out internship duties at Bankaltimtara Head Office within the Fixed Assets Management Division, managing administrative asset records, document filing, and systematic inventory archives.",
    expInternB2: "Strengthened accuracy in handling banking documentation, adhered to strict organizational procedures, and collaborated closely with division officers to support daily workflow.",
    expInternStat1Label: "Fixed Assets",
    expInternStat2Label: "Official Decree",
    expInternTagRecon: "Fixed Assets Management",
    expInternTagSyariah: "Banking Administration",
    expInternViewCert: "View Internship Certificate →",
    expInternDownloadPdf: "Certificate Available",
    expInternGalleryTitle: "📸 Internship Documentation",

    // Education Card
    eduTitle: "🎓 Higher Education",
    eduDegree: "Diploma III in Accounting - A.Md.Ak.",
    eduCampus: "State Polytechnic of Samarinda (POLNES)",
    eduDate: "2023 - 2026 · GPA 3.47",
    eduThesis: "<strong style=\"color:#001D39;\">Study Focus:</strong> Financial Accounting, Bookkeeping Practices, Accounting Cycles, Data Processing, and Financial Document Governance.",
    eduTagGpa: "GPA 3.47",
    eduTagAkreditasi: "Accredited: Very Good",
    eduIjazahBadge: "📜 Official Diploma",
    eduWisudaBadge: "🎓 Graduation Ceremony",
    eduDownloadIjazah: "📄 Download Diploma (PDF)",
    eduGradPhotoTitle: "🎓 POLNES Commencement Ceremony",
    eduGradPhotoZoom: "Enlarge ↗",

    // Training & Certification BPVP Samarinda Card
    freeTitle: "📜 Training & Certification",
    freeRole: "Basic Digital Marketing",
    freeCompany: "BPVP SAMARINDA (MINISTRY OF MANPOWER RI)",
    freePeriod: "Aug - Sep 2026 · 40 Hours Training (JP)",
    freeDesc: "<strong style=\"color:#001D39;\">Training Focus:</strong> Market & keyword research, digital promotional content creation, business social media optimization, and online marketing management.",
    freeCertBadge: "📜 Official Certificate",
    freePhotoBadge: "📸 Training Photo",
    freeDownloadCert: "📄 Download Certificate (PDF)",
    freeTagHours: "40-Hour Training",
    freeTagKemnaker: "Kemnaker RI",
    freeTagTopic: "Digital Marketing",

    // Certificates Section
    certSectionMark: "🏆 Certifications",
    certHeading: "Credentials & <span class=\"neo-highlight\">Certifications</span>",
    certSubheading: "Click on any certificate to expand",
    certTagIjazah: "Official Diploma",
    certTitleIjazah: "Associate of Accounting Degree Diploma (A.Md.Ak.)",
    certDescIjazah: "State Polytechnic of Samarinda (POLNES) · Accreditation: Very Good",
    certTagBankaltimtara: "Banking Internship",
    certTitleBankaltimtara: "Internship Certificate - Fixed Assets Management Division",
    certDescBankaltimtara: "PT BPD Kaltim Kaltara (Bankaltimtara) · Ref: 1650/E-2/BPD-PST/HC/VIII/2025",
    certTagBpvp: "40-Hour Training",
    certTitleBpvp: "Basic Digital Marketing Certificate",
    certDescBpvp: "BPVP Samarinda (Ministry of Manpower RI) · No. 260915434CD1F5",
    certTagToefl: "Score 403",
    certTitleToefl: "Certificate of Achievement - TOEFL Prediction Test",
    certDescToefl: "Language Center UPA POLNES · Aug 08, 2026",
    certTagPrakerin: "Grade: Excellent",
    certTitlePrakerin: "Vocational Industrial Fieldwork (PRAKERIN) Certificate",
    certDescPrakerin: "Sambutan District Office & SMKN 20 Samarinda · 6 Months (2022)",
    certTagKunjungan: "Industry Visit",
    certTitleKunjungan: "POLNES Accounting Industrial Study Visit Certificate",
    certDescKunjungan: "Balikpapan (Customs, Tax Office, Pegadaian) · June 2025",

    // Contact Section
    contactSectionMark: "✉️ Contact",
    contactHeading: "Let's <span style=\"background:#7BBDE8; color:#001D39; padding:0 8px; border-radius:8px; border:2px solid #001D39; box-shadow:3px 3px 0 #0A4174; display:inline-block; transform:rotate(-1deg);\">Connect</span>",
    contactSubheading: "Are you a recruiter, HR manager, or prospective employer? Send a message.",
    contactFormTitle: "Send a Message",
    contactLabelName: "Full Name",
    contactPlaceholderName: "Your Name",
    contactLabelEmail: "Email",
    contactPlaceholderEmail: "name@company.com",
    contactLabelSubject: "Subject",
    contactPlaceholderSubject: "Career Opportunity / Inquiry",
    contactLabelMessage: "Message",
    contactPlaceholderMessage: "Write your message here...",
    contactSubmitBtn: "Send via Email →",
    contactSuccessMsg: "✓ Success! You are being redirected to your email client.",
    contactInfoTitle: "Contact Information",
    contactJobstreetView: "Open WhatsApp",
    contactOpenTitle: "🟢 Open to Career Opportunities",
    contactOpenDesc: "Seeking positions as <strong style=\"color:#7BBDE8;\">Administration Staff, Accounting Staff, or Finance Staff</strong>. Dedicated A.Md.Ak. fresh graduate from POLNES ready to contribute!",

    // Footer
    footerCopyright: "© 2026 Neli Agustina, A.Md.Ak. · D3 Accounting POLNES · Samarinda, East Kalimantan",

    // UI Helpers
    photoUnit: "photos",
    addPrefix: "Add:",
    coverProjectPrefix: "Cover:"
  }
};

// Gallery Captions Dictionary per Folder
const GALLERY_CAPTIONS = {
  id: {
    "assets/dokumentasi/magang-bankaltimtara": [
      "Aktivitas Kerja Harian & Pengolahan Data Dokumen di Meja Kerja",
      "Pemeriksaan dan Verifikasi Berkas Bersama Pembimbing Lapangan",
      "Pelepasan Magang & Kenang-Kenangan Bersama Tim Divisi Pengelolaan Aset Tetap",
      "Foto Bersama Jajaran Staf Divisi Pengelolaan Aset Tetap Bankaltimtara"
    ],
    "assets/dokumentasi/pendidikan-polnes": [
      "Prosesi Wisuda POLNES - Penyerahan Ijazah Ahli Madya Akuntansi (A.Md.Ak.) Neli Agustina"
    ]
  },
  en: {
    "assets/dokumentasi/magang-bankaltimtara": [
      "Daily Work Activities & Document Data Processing at Workstation",
      "Document Review and Verification with Field Supervisor",
      "Internship Farewell & Commemorative Photo with Fixed Assets Management Team",
      "Group Photo with Bankaltimtara Fixed Assets Management Division Staff"
    ],
    "assets/dokumentasi/pendidikan-polnes": [
      "POLNES Commencement Ceremony & Diploma Conferral (A.Md.Ak. Degree) - Neli Agustina"
    ]
  }
};

/**
 * Switch and apply selected language across entire DOM
 * @param {'id'|'en'} lang
 */
function setLanguage(lang) {
  if (!I18N_DATA[lang]) lang = 'id';
  const dict = I18N_DATA[lang];

  // 1. Update Document Meta
  document.documentElement.lang = lang;
  if (dict.pageTitle) document.title = dict.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.pageDesc) metaDesc.setAttribute('content', dict.pageDesc);

  // 2. Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 3. Update placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 4. Update titles/aria-labels with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // 5. Update Gallery Captions in DOM dataset
  const captionsDict = GALLERY_CAPTIONS[lang] || GALLERY_CAPTIONS.id;
  document.querySelectorAll('.doc-gallery').forEach(gal => {
    const folder = gal.dataset.folder;
    if (folder && captionsDict[folder]) {
      gal.dataset.captions = captionsDict[folder].join('|');
      // Update slots if already rendered
      const slots = gal.querySelectorAll('.doc-slot.filled');
      slots.forEach((slot, idx) => {
        const cap = captionsDict[folder][idx];
        if (cap) {
          slot.title = cap;
          const img = slot.querySelector('img');
          if (img) img.alt = cap;
        }
      });
      // Update count badge text
      const head = gal.parentElement?.querySelector('.doc-gallery-head .doc-count');
      if (head) {
        const total = gal.dataset.count || '3';
        const filledCount = gal.querySelectorAll('.doc-slot.filled').length;
        head.textContent = `${filledCount}/${total} ${dict.photoUnit || 'foto'}`;
      }
    }
  });

  // 6. Update Active State of Language Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 7. Save preference to localStorage
  try {
    localStorage.setItem('portfolio_language', lang);
  } catch (e) {
    /* storage quota or private mode fallback */
  }

  // Dispatch custom event for components
  window.dispatchEvent(new CustomEvent('portfolioLanguageChanged', { detail: { lang } }));
}

/**
 * Initialize language switcher on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Determine starting language: stored preference or 'id' default
  let initialLang = 'id';
  try {
    const saved = localStorage.getItem('portfolio_language');
    if (saved && (saved === 'id' || saved === 'en')) {
      initialLang = saved;
    }
  } catch (e) {}

  // Attach click listeners to all .lang-btn
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Apply initial language
  setLanguage(initialLang);
});
