/**
 * i18n.js - Internationalization Engine & Translations (ID & EN)
 * Portofolio Neubrutalist - Neli Agustina, A.Md.Ak.
 */

const I18N_DATA = {
  id: {
    // Meta & Document
    pageTitle: "Neli Agustina, A.Md.Ak. - Administrasi & Akuntansi",
    pageDesc: "Portfolio Neli Agustina, A.Md.Ak. - Lulusan D3 Akuntansi Politeknik Negeri Samarinda (POLNES) dengan latar belakang Administrasi Perkantoran SMKN 20 Samarinda. Berpengalaman di Divisi Pengadaan Barang & Jasa PT BPD Kaltim Kaltara dan Pelayanan Masyarakat. Samarinda, Kalimantan Timur.",

    // Navbar & Mobile Menu
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navExperience: "Pengalaman",
    navCertificates: "Sertifikat",
    navContact: "Kontak",
    navCta: "Hubungi Saya →",
    mobileCta: "Hubungi Saya",

    // Hero Section
    heroBadge: "Terbuka untuk Peluang Karier",
    heroGreeting: "Halo, Saya",
    heroRole: "Administrasi & Akuntansi",
    heroBio: "<strong style=\"color:#0F1E3A;\">Ahli Madya Akuntansi (A.Md.Ak.)</strong> lulusan <strong style=\"color:#0F1E3A;\">Politeknik Negeri Samarinda</strong> berpengalaman di bidang administrasi pengadaan perbankan, pengolahan data, pengarsipan, serta pengelolaan dokumen terstruktur.",
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
    aboutP1: "Lulusan D3 Akuntansi <strong style=\"color:#0F1E3A;\">Politeknik Negeri Samarinda (POLNES)</strong> bergelar Ahli Madya Akuntansi (A.Md.Ak.) dengan IPK 3.47, serta berlatar belakang pendidikan kejuruan Otomatisasi & Tata Kelola Perkantoran di SMKN 20 Samarinda (Nilai 83.43). Memiliki pengalaman magang di PT Bank Pembangunan Daerah Kalimantan Timur dan Kalimantan Utara (Pusat) pada Divisi Pengadaan Barang dan Jasa, serta pengalaman PKL pada Pelayanan Masyarakat di Kantor Kecamatan Sambutan.",
    aboutP2: "Memiliki kompetensi solid dalam administrasi perkantoran, pengolahan data menggunakan Microsoft Excel & Word, penataan dan pengelolaan dokumen pengadaan, pembukuan/akuntansi, serta korespondensi surat-menyurat. Dikenal memiliki ketelitian tinggi, rasa tanggung jawab, kemampuan beradaptasi yang cepat, serta mampu bekerja secara individu maupun berkolaborasi efektif dalam tim.",
    aboutCareerGoalTitle: "🎯 Tujuan Karier",
    aboutCareerGoalDesc: "Mengembangkan karier profesional dan siap berkontribusi pada posisi <strong style=\"color:#0F1E3A;\">Staf Administrasi, Akuntansi, Finance, Procurement/Pengadaan</strong>, maupun posisi operasional terkait lainnya.",
    aboutGpaLabel: "IPK (POLNES)",
    aboutProjectsLabel: "Pengalaman",
    aboutInterestsTitle: "Bidang Minat & Spesialisasi",
    aboutTagAccountingStaff: "Staf Administrasi & Akuntansi",

    // Skills Section
    skillsSectionMark: "⚡ Keahlian",
    skillsHeading: "Skills & <span class=\"neo-highlight\">Kompetensi</span>",
    skillAcc1: "Administrasi Perkantoran & Pengarsipan",
    skillAcc2: "Pengolahan & Penginputan Data",
    skillAcc3: "Pengelolaan Dokumen Pengadaan",
    skillAcc4: "Pembukuan & Dasar Akuntansi",
    skillAcc5: "Pelayanan Publik & Administrasi Warga",
    skillExcel1: "Microsoft Excel (Formula & Tabel Data)",
    skillExcel2: "Microsoft Word & Pembuatan Laporan",
    skillExcel3: "Pengarsipan Dokumen Fisik & Digital",
    skillExcel4: "Korespondensi / Surat-Menyurat",
    skillWeb1: "Kerja Sama Tim & Koordinasi",
    skillWeb2: "Manajemen Waktu & Kedisiplinan",
    skillWeb3: "Kemampuan Beradaptasi Cepat",
    skillWeb4: "Ketelitian & Rasa Tanggung Jawab",
    softSkill1: "Ketelitian & Akurasi Tinggi",
    softSkill2: "Komunikasi Efektif",
    softSkill3: "Tanggung Jawab & Disiplin",
    softSkill4: "Etika Kerja & Kerahasiaan Dokumen",
    softSkill5: "Pelayanan Prima (Service Excellence)",
    softSkill6: "Manajemen Waktu",
    softSkill7: "Kerja Sama Tim",

    // Projects Section
    projectsSectionMark: "📁 Pengalaman Kerja",
    projectsHeading: "Pengalaman Kerja & <span class=\"neo-highlight\">Implementasi</span>",
    projectsSubheading: "Pengalaman profesional di lingkungan perbankan dan pelayanan masyarakat pemerintahan.",
    docGalleryLabel: "📸 Dokumentasi",
    screenshotPending: "Dokumentasi Menyusul",

    // Project HKI
    projHkiBadge: "Magang Perbankan",
    projHkiYear: "Juli - Agustus 2025",
    projHkiTitle: "PT BPD Kaltim Kaltara (Pusat)",
    projHkiDesc: "Magang pada Divisi Pengadaan Barang dan Jasa di Bankaltimtara Pusat, Kota Samarinda. Bertanggung jawab dalam administrasi pengadaan barang dan jasa, penginputan dan pengolahan data, pengarsipan, serta penataan dokumen pengadaan sesuai SOP perbankan.",
    projHkiTag1: "Pengadaan Barang & Jasa",
    projHkiTag2: "Perbankan",
    projHkiTag3: "Pengolahan Data",
    projHkiViewCert: "Lihat Sertifikat Magang →",
    projHkiDownloadPdf: "Unduh Sertifikat",
    projHkiCoverTitle: "Magang Bankaltimtara",
    projHkiCoverSub: "Divisi Pengadaan Barang & Jasa",

    // Project 1 - PKL Kecamatan
    proj1Badge: "Praktek Kerja Industri (PKL)",
    proj1Title: "Kantor Kecamatan Sambutan",
    proj1Subtitle: "Bagian Pelayanan Masyarakat · Samarinda",
    proj1Desc: "Melaksanakan pelayanan administrasi kepada masyarakat untuk pengurusan dokumen kependudukan (KTP dan Kartu Keluarga), pemeriksaan dan penyiapan berkas, pengelolaan arsip, serta pemberian informasi kebutuhan administrasi warga.",
    proj1Role: "Praktikan PKL - Pelayanan Masyarakat",

    // Project 2 - Kompetensi
    proj2Badge: "Uji Kompetensi",
    proj2Title: "Sertifikasi Kompetensi LSP POLNES",
    proj2Subtitle: "Ahli Madya Akuntansi · 2026 - 2028",
    proj2Desc: "Pengakuan kompetensi profesi teknisi akuntansi madya yang diselenggarakan oleh Lembaga Sertifikasi Profesi (LSP) Politeknik Negeri Samarinda.",
    proj2Role: "Pemegang Sertifikasi Kompetensi",

    // Project 3 - Pelatihan BPVP
    proj3Badge: "Pelatihan Resmi",
    proj3Title: "Pelatihan Digital Marketing",
    proj3Subtitle: "BPVP Samarinda · Sep 2026 - Sep 2028",
    proj3Desc: "Pengembangan wawasan dan keterampilan pemasaran digital, pengelolaan platform online, dan strategi komunikasi produk di Balai Pelatihan Vokasi dan Produktivitas (BPVP) Samarinda.",
    proj3Role: "Peserta Pelatihan Terakreditasi",
    proj3LiveDemo: "Kunjungi BPVP Samarinda →",

    // Project 4 - TOEFL
    proj4Badge: "Bahasa Inggris",
    proj4Year: "2026 - 2028",
    proj4Title: "Sertifikat TOEFL Prediction",
    proj4Subtitle: "UPA Bahasa - Politeknik Negeri Samarinda",
    proj4Desc: "Sertifikasi kemampuan pemahaman bahasa Inggris yang diterbitkan oleh Unit Penunjang Akademik (UPA) Bahasa Politeknik Negeri Samarinda.",
    proj4TagOffline: "Kemampuan Bahasa",
    proj4TagAverage: "Listening & Reading",
    proj4TagCashFlow: "Komunikasi",
    proj4Role: "Peserta Tes Terverifikasi",

    // Experience Section
    expSectionMark: "💼 Pengalaman",
    expHeading: "Pendidikan & <span class=\"neo-highlight\">Pengalaman</span>",
    expWorkTitle: "🏦 Pengalaman Kerja & Magang",
    expInternRole: "Magang - Divisi Pengadaan Barang dan Jasa",
    expInternCompany: "PT Bank Pembangunan Daerah Kalimantan Timur dan Kalimantan Utara (Pusat) · Samarinda",
    expInternPeriod: "Juli 2025 - Agustus 2025",
    expInternB1: "Membantu pekerjaan administrasi berkaitan dengan proses pengadaan barang dan jasa, melakukan penginputan dan pengolahan data, pengarsipan dokumen, serta membantu penataan dan pengelolaan dokumen pengadaan.",
    expInternB2: "Memahami proses administrasi di lingkungan perbankan, meningkatkan ketelitian dalam mengelola data dan dokumen, bekerja terstruktur, bertanggung jawab, mematuhi SOP, serta berkomunikasi aktif dengan staf divisi.",
    expInternStat1Label: "Divisi Pengadaan",
    expInternStat2Label: "Perbankan Daerah",
    expInternTagRecon: "Pengadaan Barang & Jasa",
    expInternTagSyariah: "Administrasi Perbankan",
    expInternViewCert: "Lihat Sertifikat Magang →",
    expInternDownloadPdf: "Unduh PDF",
    expInternGalleryTitle: "📸 Dokumentasi Magang",

    // Education Card
    eduTitle: "🎓 Pendidikan Tinggi",
    eduDegree: "D3 Akuntansi - A.Md.Ak.",
    eduCampus: "Politeknik Negeri Samarinda (POLNES)",
    eduDate: "2023 - 2026 · IPK 3.47",
    eduThesis: "<strong style=\"color:#0F1E3A;\">Bidang Keahlian:</strong> Akuntansi Keuangan, Pembukuan, Pengolahan Data Transaksi, Pengendalian Dokumen Keuangan, dan Administrasi Perkantoran.",
    eduTagGpa: "IPK 3.47",
    eduTagLsp: "Kompeten LSP",

    // Freelance Experience Card -> Pendidikan SMK
    freeTitle: "🏫 Pendidikan Kejuruan",
    freeRole: "Otomatisasi & Tata Kelola Perkantoran",
    freeCompany: "SMKN 20 SAMARINDA",
    freePeriod: "2020 - 2023 · Nilai Akhir: 83.43",
    freeB1: "Pengelolaan administrasi perkantoran, tata naskah dinas, dan surat-menyurat.",
    freeB2: "Tata kelola kearsipan dan penataan dokumen fisik maupun digital.",
    freeB3: "Komunikasi pelayanan masyarakat, etika profesi, dan disiplin kerja tinggi.",

    // Certificates Section
    certSectionMark: "🏆 Sertifikat",
    certHeading: "Penghargaan & <span class=\"neo-highlight\">Sertifikasi</span>",
    certSubheading: "Klik gambar untuk memperbesar",
    certTagDegree: "Ijazah",
    certTitleDegree: "Ahli Madya Akuntansi (A.Md.Ak.)",
    certDescDegree: "Politeknik Negeri Samarinda · 2026",
    certTagCompetent: "Kompeten",
    certTitleLsp: "Sertifikasi Kompetensi Ahli Madya Akuntansi",
    certDescLsp: "LSP Politeknik Negeri Samarinda · Okt 2026 - Okt 2028",
    certTagHki: "Pelatihan",
    certTitleHki: "Sertifikasi Digital Marketing",
    certDescHki: "BPVP Samarinda · Sep 2026 - Sep 2028",
    certTagIntern: "Magang",
    certTitleIntern: "Sertifikat Magang - Divisi Pengadaan",
    certDescIntern: "PT BPD Kaltim Kaltara · 2025",
    certTagToefl: "TOEFL",
    certTitleToefl: "Sertifikat TOEFL Prediction",
    certDescToefl: "UPA Bahasa POLNES · Agu 2026 - Agu 2028",
    certTagMarket: "PKL",
    certTitleMarket: "Praktik Kerja Industri - Pelayanan Publik",
    certDescMarket: "Kantor Kecamatan Sambutan · 2022",
    certTagSeminar: "SMK",
    certTitleSeminar: "Kompetensi Otomatisasi Perkantoran",
    certDescSeminar: "SMKN 20 Samarinda · 2023",

    // Contact Section
    contactSectionMark: "✉️ Kontak",
    contactHeading: "Mari <span style=\"background:#D4FF4F; color:#0D0D0D; padding:0 8px; border-radius:8px; border:2px solid #0D0D0D; box-shadow:3px 3px 0 #0D0D0D; display:inline-block; transform:rotate(-1deg);\">Terhubung</span>",
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
    contactOpenDesc: "Sedang mencari posisi <strong style=\"color:#D4FF4F;\">Staf Administrasi, Akuntansi, Finance, atau Pengadaan</strong>. Fresh graduate A.Md.Ak. POLNES dengan dedikasi tinggi dan siap bekerja!",

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
    pageDesc: "Portfolio of Neli Agustina, A.Md.Ak. - D3 Accounting Graduate from State Polytechnic of Samarinda (POLNES) with vocational foundation in Office Automation from SMKN 20 Samarinda. Experienced in banking procurement division and public administration. Samarinda, East Kalimantan.",

    // Navbar & Mobile Menu
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navCertificates: "Certificates",
    navContact: "Contact",
    navCta: "Contact Me →",
    mobileCta: "Contact Me",

    // Hero Section
    heroBadge: "Open to Career Opportunities",
    heroGreeting: "Hello, I am",
    heroRole: "Administration & Accounting Specialist",
    heroBio: "<strong style=\"color:#0F1E3A;\">Associate in Accounting (A.Md.Ak.)</strong> graduate from <strong style=\"color:#0F1E3A;\">State Polytechnic of Samarinda</strong> experienced in banking procurement administration, data processing, filing, and structured office document management.",
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
    aboutP1: "Accounting Diploma graduate from <strong style=\"color:#0F1E3A;\">State Polytechnic of Samarinda (POLNES)</strong> with an Associate Degree in Accounting (A.Md.Ak., GPA 3.47), built upon solid vocational education in Office Automation & Governance at SMKN 20 Samarinda (Score 83.43). Experienced through an internship at PT Bank Pembangunan Daerah Kaltim Kaltara (Procurement Division) and public service fieldwork at Sambutan District Office.",
    aboutP2: "Proficient in office administration, data entry and processing using Microsoft Excel & Word, procurement document filing and organization, bookkeeping, and professional correspondence. Known for high attention to detail, reliability, rapid adaptability, and effective communication in both independent and team environments.",
    aboutCareerGoalTitle: "🎯 Career Objective",
    aboutCareerGoalDesc: "Eager to contribute professionally as an <strong style=\"color:#0F1E3A;\">Administrative Staff, Accounting Staff, Finance Staff, or Procurement Support</strong>, supporting smooth organizational workflows.",
    aboutGpaLabel: "GPA",
    aboutProjectsLabel: "Experience",
    aboutInterestsTitle: "Competencies & Interests",
    aboutTagAccountingStaff: "Admin & Accounting Staff",

    // Skills Section
    skillsSectionMark: "⚡ Core Skills",
    skillsHeading: "Skills & <span class=\"neo-highlight\">Competencies</span>",
    skillAcc1: "Office Administration & Filing",
    skillAcc2: "Data Processing & Entry",
    skillAcc3: "Procurement Documentation",
    skillAcc4: "Basic Bookkeeping & Accounting",
    skillAcc5: "Public Service & Communication",
    skillExcel1: "Microsoft Excel (Formulas & Tables)",
    skillExcel2: "Microsoft Word & Formatting",
    skillExcel3: "Document Archiving & Filing",
    skillExcel4: "Business Correspondence",
    skillWeb1: "Teamwork & Collaboration",
    skillWeb2: "Time Management & Discipline",
    skillWeb3: "Fast Adaptability",
    skillWeb4: "Attention to Detail",
    softSkill1: "High Accuracy & Precision",
    softSkill2: "Effective Communication",
    softSkill3: "Task Responsibility",
    softSkill4: "Work Ethics & Confidentiality",
    softSkill5: "Service Excellence",
    softSkill6: "Time Management",
    softSkill7: "Team Collaboration",

    // Projects Section
    projectsSectionMark: "📁 Work Experience",
    projectsHeading: "Work Experience & <span class=\"neo-highlight\">Implementation</span>",
    projectsSubheading: "Professional exposure in regional banking operations and public administration services.",
    docGalleryLabel: "📸 Documentation",
    screenshotPending: "Documentation Pending",

    // Project HKI
    projHkiBadge: "Banking Internship",
    projHkiYear: "Jul - Aug 2025",
    projHkiTitle: "PT BPD Kaltim Kaltara (Head Office)",
    projHkiDesc: "Internship at the Procurement of Goods & Services Division at Bankaltimtara Head Office, Samarinda. Assisted procurement administration, data entry and management, physical and digital filing, adhering strictly to banking standard operating procedures.",
    projHkiTag1: "Procurement",
    projHkiTag2: "Banking",
    projHkiTag3: "Data Processing",
    projHkiViewCert: "View Internship Certificate →",
    projHkiDownloadPdf: "Download Certificate",
    projHkiCoverTitle: "Bankaltimtara Internship",
    projHkiCoverSub: "Procurement of Goods & Services",

    // Project 1 - Kecamatan
    proj1Badge: "Industrial Fieldwork (PKL)",
    proj1Title: "Sambutan District Office",
    proj1Subtitle: "Public Service Section · Samarinda",
    proj1Desc: "Delivered administrative support to citizens for identification and civil registry documents (KTP & KK), reviewed and prepared application files, managed archive records, and guided community members on administrative requirements.",
    proj1Role: "Fieldwork Trainee - Public Service",

    // Project 2 - LSP
    proj2Badge: "Competency Assessment",
    proj2Title: "LSP POLNES Competency Certification",
    proj2Subtitle: "Associate Accounting Technician · 2026 - 2028",
    proj2Desc: "Official professional competency credential awarded by the Professional Certification Body (LSP) of State Polytechnic of Samarinda.",
    proj2Role: "Certified Accounting Technician",

    // Project 3 - BPVP
    proj3Badge: "Vocational Training",
    proj3Title: "Digital Marketing Training",
    proj3Subtitle: "BPVP Samarinda · Sep 2026 - Sep 2028",
    proj3Desc: "Vocational training program covering digital marketing strategies, online content handling, and brand communication at BPVP Samarinda.",
    proj3Role: "Accredited Trainee",
    proj3LiveDemo: "Visit BPVP Samarinda →",

    // Project 4 - TOEFL
    proj4Badge: "English Proficiency",
    proj4Year: "2026 - 2028",
    proj4Title: "TOEFL Prediction Certificate",
    proj4Subtitle: "Language Center (UPA) POLNES",
    proj4Desc: "English language proficiency assessment certificate issued by the Language Center (UPA Bahasa) of State Polytechnic of Samarinda.",
    proj4TagOffline: "English Proficiency",
    proj4TagAverage: "Listening & Reading",
    proj4TagCashFlow: "Communication",
    proj4Role: "Verified Test Taker",

    // Experience Section
    expSectionMark: "💼 Experience",
    expHeading: "Education & <span class=\"neo-highlight\">Experience</span>",
    expWorkTitle: "🏦 Work Experience & Internships",
    expInternRole: "Intern Staff - Procurement of Goods & Services Division",
    expInternCompany: "PT BPD Kaltim Kaltara (Head Office) · Samarinda",
    expInternPeriod: "Jul 2025 - Aug 2025",
    expInternB1: "Assisted administrative tasks relating to procurement of goods and services, inputted and managed data, archived files, and structured procurement documentation.",
    expInternB2: "Enhanced precision in handling data and documentation within a banking environment, strictly adhering to procedural guidelines while collaborating with department staff to support operational workflow.",
    expInternStat1Label: "Procurement Division",
    expInternStat2Label: "Regional Bank",
    expInternTagRecon: "Procurement of Goods & Services",
    expInternTagSyariah: "Banking Administration",
    expInternViewCert: "View Internship Info →",
    expInternDownloadPdf: "Certificate Pending",
    expInternGalleryTitle: "📸 Internship Documentation",

    // Education Card
    eduTitle: "🎓 Higher Education",
    eduDegree: "Diploma III in Accounting - A.Md.Ak.",
    eduCampus: "State Polytechnic of Samarinda (POLNES)",
    eduDate: "2023 - 2026 · GPA 3.47",
    eduThesis: "<strong style=\"color:#0F1E3A;\">Study Focus:</strong> Financial Accounting, Bookkeeping Practices, Accounting Cycles, Data Processing, and Financial Document Governance.",
    eduTagGpa: "GPA 3.47",
    eduTagLsp: "Certified LSP POLNES",

    // Freelance Experience Card -> Vocational Education Card
    freeTitle: "🏫 Vocational Education",
    freeRole: "Office Automation & Governance",
    freeCompany: "SMKN 20 Samarinda",
    freePeriod: "2020 - 2023 · Final Score: 83.43",
    freeB1: "Office administration management, official business correspondence, and office protocols.",
    freeB2: "Document archiving, record keeping systems, and office data processing.",
    freeB3: "Customer service excellence, effective workplace communication, and office ethics.",

    // Certificates Section
    certSectionMark: "🏆 Certifications",
    certHeading: "Credentials & <span class=\"neo-highlight\">Certifications</span>",
    certSubheading: "Click on any image to expand",
    certTagDegree: "Diploma",
    certTitleDegree: "Associate Degree in Accounting (A.Md.Ak.)",
    certDescDegree: "State Polytechnic of Samarinda · 2026",
    certTagCompetent: "Competent",
    certTitleLsp: "Competency Certification - Associate Accountant",
    certDescLsp: "LSP State Polytechnic of Samarinda · Oct 2026 - Oct 2028",
    certTagHki: "Marketing",
    certTitleHki: "Digital Marketing Certification",
    certDescHki: "BPVP Samarinda · Sep 2026 - Sep 2028",
    certTagIntern: "Internship",
    certTitleIntern: "Internship Certificate - Procurement Division",
    certDescIntern: "PT BPD Kaltim Kaltara · 2025",
    certTagToefl: "TOEFL",
    certTitleToefl: "TOEFL Certification",
    certDescToefl: "Language Center UPA POLNES · Aug 2026 - Aug 2028",
    certTagMarket: "Public Service",
    certTitleMarket: "Industrial Fieldwork (PKL)",
    certDescMarket: "Sambutan District Office · Jan - Jul 2022",
    certTagSeminar: "SMK",
    certTitleSeminar: "Vocational Competency in Office Automation",
    certDescSeminar: "SMKN 20 Samarinda · 2023",

    // Contact Section
    contactSectionMark: "✉️ Contact",
    contactHeading: "Let's <span style=\"background:#D4FF4F; color:#0D0D0D; padding:0 8px; border-radius:8px; border:2px solid #0D0D0D; box-shadow:3px 3px 0 #0D0D0D; display:inline-block; transform:rotate(-1deg);\">Connect</span>",
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
    contactOpenDesc: "Seeking positions as <strong style=\"color:#D4FF4F;\">Administration Staff, Accounting Staff, Finance Staff, or Procurement Support</strong>. Dedicated A.Md.Ak. fresh graduate from POLNES ready to contribute!",

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
    "assets/dokumentasi/proyek-hki-polnes-loa-lepu": [
      "Sosialisasi & Demo Aplikasi PO-lne-S Mikro di Desa Loa Lepu",
      "Foto Bersama Pengabdian Masyarakat POLNES & Pelaku UMKM",
      "Implementasi di Koperasi Merah Putih Desa Loa Lepu"
    ],
    "assets/dokumentasi/proyek-sia-vba-sosis-azizah": [
      "Database Akun & Siklus Akuntansi",
      "Form Transaksi Penjualan (Kasir VBA)",
      "Dashboard Keuangan & Grafik Tren Penjualan"
    ],
    "assets/dokumentasi/proyek-pos-android": [
      "Buka Shift Kasir & Modal Kas Awal di Laci",
      "Operasional Tablet Kasir & Tren Penjualan",
      "Implementasi Sistem POS di Meja Kasir",
      "Uji Coba Lapangan & Kepuasan Pengguna"
    ],
    "assets/dokumentasi/proyek-sia-yayasan-pkm": [
      "Tampilan Beranda Website Resmi Yayasan di Smart TV",
      "Sosialisasi & Pemaparan Sistem oleh Neli Agustina",
      "Foto Bersama Tim PKM POLNES & Keluarga Besar Yayasan"
    ],
    "assets/dokumentasi/proyek-sistem-informasi-logistik": [
      "Dashboard Desktop: Input Barang Masuk & Keluar",
      "Modul Pengaturan: Sinkronisasi Multi-Device & Impor CSV",
      "Tampilan Smartphone: Dashboard Mutasi Barang Risgold",
      "Tampilan Smartphone: Pengaturan Sistem & Backup JSON"
    ],
    "assets/dokumentasi/magang-bankaltimtara": [
      "Verifikasi & Rekonsiliasi Dokumen Transaksi Harian",
      "Rapat Koordinasi & Evaluasi di Ruang Meeting",
      "Pelepasan Magang Bersama Pembimbing & Rekan Kerja Unit Syariah",
      "Foto Bersama Jajaran Staf & Karyawan Bankaltimtara Syariah"
    ],
    "assets/dokumentasi/pendidikan-polnes": [
      "Kebersamaan Mahasiswa D3 Akuntansi POLNES",
      "Yudisium Jurusan Akuntansi POLNES (20 Agustus 2026)",
      "Prosesi Wisuda & Penyerahan Ijazah Ahli Madya Akuntansi (A.Md.Ak.)"
    ]
  },
  en: {
    "assets/dokumentasi/proyek-hki-polnes-loa-lepu": [
      "Socialization & Live Demo of PO-lne-S Micro App in Loa Lepu Village",
      "Group Photo: POLNES Community Service Team & MSME Entrepreneurs",
      "Field Implementation at Merah Putih Cooperative, Loa Lepu Village"
    ],
    "assets/dokumentasi/proyek-sia-vba-sosis-azizah": [
      "Chart of Accounts Database & Complete Accounting Cycle",
      "Sales Transaction Entry Form (VBA POS Cashier)",
      "Financial Dashboard & Sales Revenue Trend Charts"
    ],
    "assets/dokumentasi/proyek-pos-android": [
      "Cashier Shift Opening & Drawer Starting Cash Setup",
      "Tablet Cashier Operations & Sales Trend Analytics",
      "On-Site POS System Implementation at Cashier Counter",
      "Live Field Testing & End-User Operational Satisfaction"
    ],
    "assets/dokumentasi/proyek-sia-yayasan-pkm": [
      "Foundation Official Website Homepage Displayed on Smart TV",
      "System Walkthrough & Presentation Delivered by Neli Agustina",
      "Commemorative Group Photo: POLNES PKM Team & Foundation Board"
    ],
    "assets/dokumentasi/proyek-sistem-informasi-logistik": [
      "Desktop Dashboard: Real-time Inbound & Outbound Goods Entry",
      "Settings Module: Multi-Device Sync & Bulk CSV Data Import",
      "Smartphone View: Risgold Inventory Movement & Mutasi Dashboard",
      "Smartphone View: System Configurations & JSON Database Backup"
    ],
    "assets/dokumentasi/magang-bankaltimtara": [
      "Daily Physical Transaction Voucher Verification & Reconciliation",
      "Coordination & Performance Evaluation Meeting in Boardroom",
      "Internship Farewell Ceremony with Mentors & Sharia Division Colleagues",
      "Group Commemorative Photo: Bankaltimtara Sharia Officers & Staff"
    ],
    "assets/dokumentasi/pendidikan-polnes": [
      "Classroom Camraderie: POLNES Diploma in Accounting Students",
      "Accounting Department Graduation Judiciary Ceremony (Aug 20, 2026)",
      "Commencement Ceremony & Diploma Conferral (A.Md.Ak. Degree)"
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
