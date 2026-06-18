document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // TRANSLATIONS DATA
    // ==========================================
    const translations = {
        EN: {
            nav_home: "Home",
            nav_about: "About",
            nav_journey: "Journey",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_hello: "HELLO, I AM",
            hero_roles: "Junior Web Developer & Tech Enthusiast",
            hero_desc: "Developing web solutions and supporting technology needs through a practical, adaptive, and problem-oriented approach.",
            hero_overlay_role: "Web Developer",
            hero_status_online: "Online",
            hero_download_cv: "Download CV",
            hero_contact_me: "Contact Me",
            about_title: "About Me",
            about_p1: "I am a <strong> Fresh Graduate of Informatics Engineering </strong> with a focus on web application development and information technology support. Has developed several projects based on PHP, Laravel, JavaScript, PostgreSQL, and MySQL, including a restaurant management system, a financial application with OCR features for transaction recording automation, and customer segmentation research using the DBSCAN algorithm. Accustomed to implementing learned technologies into real projects to develop technical, analytical, and problem-solving skills. Currently committed to continuously developing competencies through professional experience and continuous learning.",
            about_p2: "Through academic projects and independent learning, I have developed a strong habit of exploring new technologies and applying them to real-world challenges. I believe that consistent practice, adaptability, and curiosity are essential for building reliable technical solutions and growing as an IT professional.",
            journey_title: "The Journey",
            journey_education: "Education",
            journey_thesis: "<strong>Thesis:</strong> IMPLEMENTATION OF DBSCAN ALGORITHM FOR VEHICLE INSURANCE PRODUCT SALES SEGMENTATION BASED ON PURCHASE PATTERNS AND PREMIUM PRICES.",
            journey_graduated: "Graduated 2021",
            journey_diploma: "High School Diploma",
            journey_experience: "Experience & Leadership",
            exp1_role: "UI Designer (KKL)",
            exp1_org: "PT. Grocee Teknologi Indonesia",
            exp1_bp1: " Participate in designing the user interface (UI) and user experience (UX) for the Course application.",
            exp1_bp2: " Create intuitive, user-centric wireframes, user flows, and high-fidelity prototypes.",
            // exp2_role: "Vice Chairman",
            // exp2_org: "Sanggar Seni Sipakario",
            // exp2_bp1: "Coordinated artistic performances and managed guild activities.",
            portfolio_title: "Showcase",
            tab_projects: "Projects",
            tab_certificates: "Certificates",
            tab_tech: "Tech Stack",
            tech_prof: "PROFICIENCY",
            projects_view_detail: "View Detail",
            project1_desc: "An advanced Laravel 12 restaurant application featuring QR Code ordering and real-time transaction management.Integrated with Midtrans Payment Gateway for automated QRIS payments, the system utilizes secure role-based authentication for Admins, Cashiers, and Chefs, complete with interactive sales analytics.",
            proj1_f1: "Midtrans Payment Gateway (QRIS & Tunai)",
            proj1_f2: "QR Code Menu & Dynamic Analytics Dashboard",
            proj1_f3: "Multi-role Authentication (Admin, Kasir, Chef)",
            project2_desc: "An intelligent personal finance tracker powered by OCR technology that automatically scans and extracts transaction data from receipts & invoices. Features smart expense categorization, monthly budget planning, visual spending analytics, and exportable financial reports.",
            proj2_f1: "OCR receipt scanning & auto-extraction",
            proj2_f2: "Smart expense categorization & budgeting",
            proj2_f3: "Visual spending analytics & reports",
            project3_desc: "A data science research project implementing the DBSCAN (Density-Based Spatial Clustering) algorithm for vehicle insurance product sales segmentation. Analyzes real-world purchase patterns and premium price distributions to identify distinct customer segments, enabling data-driven marketing strategies.",
            proj3_f1: "DBSCAN density-based clustering engine",
            proj3_f2: "Interactive data visualization & cluster mapping",
            proj3_f3: "Customer segmentation & pattern analysis",
            cert_prof: "A certificate of completion for the Learn JavaScript Basics class that validates your fundamental understanding of JavaScript programming.",
            cert_view: "View Credential",
            cert_prof2: "Certificate of competency in building Backend architecture and REST API for social media applications using Laravel 11.",
            cert_view2: "View Credential",
            cert_prof3: "Professional Certificate detailing competency in modern application workflows.",
            cert_view3: "View Credential",
            cert_prof4: "Participate for one month in designing the user interface (UI) and user experience (UX) for the Course application. Focus on creating wireframes, user flows, and high-fidelity, imaginative prototypes.",
            cert_view4: "View Project Showcase",
            contact_title: "Let's work together.",
            contact_desc: "Whether you have an idea for a business or a sophisticated web application, feel free to reach out.",
            contact_name_ph: "Your Name",
            contact_email_ph: "Your Email",
            contact_msg_ph: "Your Message",
            contact_send: "Send Message",
            contact_connect: "Connect",
            contact_rights: "© 2026 Patrik Tangdilintin. All rights reserved."
        },
        ID: {
            nav_home: "Beranda",
            nav_about: "Tentang",
            nav_journey: "Perjalanan",
            nav_projects: "Proyek",
            nav_contact: "Kontak",
            hero_hello: "HALO, SAYA",
            hero_roles: "Pengembang Web Junior & Antusias Teknologi",
            hero_desc: "Mengembangkan solusi web dan mendukung kebutuhan teknologi melalui pendekatan yang praktis, adaptif, dan berorientasi pada pemecahan masalah.",
            hero_overlay_role: "Pengembang Web",
            hero_status_online: "Online",
            hero_download_cv: "Unduh CV",
            hero_contact_me: "Hubungi Saya",
            about_title: "Tentang Saya",
            about_p1: "Saya adalah seorang <strong>Fresh Graduate Teknik Informatika</strong> dengan fokus pada pengembangan aplikasi web dan dukungan teknologi informasi. Telah mengembangkan beberapa proyek berbasis PHP, Laravel, JavaScript, PostgreSQL, dan MySQL, termasuk sistem manajemen restoran, aplikasi keuangan dengan fitur OCR untuk otomatisasi pencatatan transaksi, serta penelitian segmentasi pelanggan menggunakan algoritma DBSCAN. Terbiasa mengimplementasikan teknologi yang dipelajari ke dalam proyek nyata untuk mengembangkan kemampuan teknis, analisis, dan pemecahan masalah. Saat ini berkomitmen untuk terus mengembangkan kompetensi melalui pengalaman profesional dan pembelajaran berkelanjutan.",
            about_p2: "Melalui proyek-proyek akademis dan pembelajaran mandiri, saya telah mengembangkan kebiasaan yang kuat untuk mengeksplorasi teknologi baru dan menerapkannya pada tantangan dunia nyata. Saya percaya bahwa praktik yang konsisten, kemampuan beradaptasi, dan rasa ingin tahu sangat penting untuk membangun solusi teknis yang andal dan berkembang sebagai seorang profesional IT.",
            journey_title: "Perjalanan",
            journey_education: "Pendidikan",
            journey_thesis: "<strong>Skripsi:</strong> IMPLEMENTASI ALGORITMA DBSCAN UNTUK SEGMENTASI PENJUALAN PRODUK ASURANSI KENDARAAN BERDASARKAN POLA PEMBELIAN DAN HARGA PREMI.",
            journey_graduated: "Lulus 2021",
            journey_diploma: "Ijazah Sekolah Menengah Atas",
            journey_experience: "Pengalaman & Kepemimpinan",
            exp1_role: "UI Designer (KKL)",
            exp1_org: "PT. Grocee Teknologi Indonesia",
            exp1_bp1: "Berpartisipasi dalam mendesain antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk aplikasi Kursus.",
            exp1_bp2: "Membuat wireframe, user flow, dan high-fidelity prototype yang intuitif serta berpusat pada pengguna.",
            // exp2_role: "Wakil Ketua",
            // exp2_org: "Sanggar Seni Sipakario",
            // exp2_bp1: "Mengkoordinasikan pertunjukan artistik dan mengelola kegiatan perkumpulan.",
            portfolio_title: "Pameran",
            tab_projects: "Proyek",
            tab_certificates: "Sertifikat",
            tab_tech: "Teknologi",
            tech_prof: "KEMAHIRAN",
            projects_view_detail: "Lihat Detail",
            project1_desc: "Sistem manajemen restoran komprehensif yang dibangun dengan Laravel 12, dilengkapi pelacakan pesanan real-time, manajemen menu dinamis dengan filter kategori, sistem reservasi meja, dan dashboard admin intuitif dengan analitik penjualan & laporan pendapatan.",
            proj1_f1: "Midtrans Payment Gateway (QRIS & Tunai)",
            proj1_f2: "QR Code Menu & Dynamic Analytics Dashboard",
            proj1_f3: "Multi-role Authentication (Admin, Kasir, Chef)",
            project2_desc: "Pelacak keuangan pribadi cerdas berbasis teknologi OCR yang secara otomatis memindai dan mengekstrak data transaksi dari struk & faktur. Dilengkapi kategorisasi pengeluaran otomatis, perencanaan anggaran bulanan, analitik pengeluaran visual, dan laporan keuangan yang dapat diekspor.",
            proj2_f1: "Pemindaian struk OCR & ekstraksi otomatis",
            proj2_f2: "Kategorisasi pengeluaran & anggaran cerdas",
            proj2_f3: "Analitik pengeluaran visual & laporan",
            project3_desc: "Proyek riset data science yang mengimplementasikan algoritma DBSCAN (Density-Based Spatial Clustering) untuk segmentasi penjualan produk asuransi kendaraan. Menganalisis pola pembelian nyata dan distribusi harga premi untuk mengidentifikasi segmen pelanggan yang berbeda, mendukung strategi pemasaran berbasis data.",
            proj3_f1: "Mesin clustering berbasis kepadatan DBSCAN",
            proj3_f2: "Visualisasi data interaktif & pemetaan cluster",
            proj3_f3: "Segmentasi pelanggan & analisis pola",
            cert_prof: "Sertifikat kelulusan kelas Belajar JavaScript Dasar yang memvalidasi pemahaman fundamental pemrograman JavaScript.",
            cert_view: "Lihat Kredensial",
            cert_prof2: "Sertifikat kompetensi dalam membangun arsitektur Backend dan REST API untuk aplikasi media sosial menggunakan Laravel 11.",
            cert_view2: "Lihat Kredensial",
            cert_prof3: "Sertifikat profesional yang merinci kompetensi dalam alur kerja aplikasi modern.",
            cert_view3: "Lihat Kredensial",
            cert_prof4: "Berpartisipasi selama satu bulan dalam merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk aplikasi Course. Fokus pada pembuatan wireframe, user flow, dan high-fidelity prototype yang intuitif.",
            cert_view4: "Lihat Pameran Proyek",
            contact_title: "Mari bekerja sama.",
            contact_desc: "Jika Anda memiliki ide untuk bisnis atau aplikasi web yang kompleks, jangan ragu untuk menghubungi.",
            contact_name_ph: "Nama Anda",
            contact_email_ph: "Email Anda",
            contact_msg_ph: "Pesan Anda",
            contact_send: "Kirim Pesan",
            contact_connect: "Terhubung",
            contact_rights: "© 2026 Patrik Tangdilintin. Hak cipta dilindungi undang-undang."
        }
    };

    // ==========================================
    // LANGUAGE TOGGLE
    // ==========================================
    const langToggleDesktop = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('mobile-lang-toggle');
    const currentLangTextDesktop = document.getElementById('current-lang-text');
    const currentLangTextMobile = document.getElementById('mobile-current-lang-text');
    
    let currentLang = localStorage.getItem('lang') || 'EN';

    const updateLanguage = (lang) => {
        if(currentLangTextDesktop) currentLangTextDesktop.textContent = lang;
        if(currentLangTextMobile) currentLangTextMobile.textContent = lang;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });

        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        localStorage.setItem('lang', lang);
    };

    updateLanguage(currentLang);

    const toggleLanguage = () => {
        currentLang = currentLang === 'EN' ? 'ID' : 'EN';
        updateLanguage(currentLang);
    };

    if(langToggleDesktop) langToggleDesktop.addEventListener('click', toggleLanguage);
    if(langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);


    // ==========================================
    // DARK MODE TOGGLE
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const updateIcon = (isDark) => {
        if (themeIcon) {
            themeIcon.setAttribute('name', isDark ? 'sunny-outline' : 'moon-outline');
        }
        if (mobileThemeIcon) {
            mobileThemeIcon.setAttribute('name', isDark ? 'sunny-outline' : 'moon-outline');
        }
    };

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        updateIcon(true);
    }

    const handleThemeToggle = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        
        updateIcon(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', handleThemeToggle);
    }
    if (mobileThemeToggleBtn) {
        mobileThemeToggleBtn.addEventListener('click', handleThemeToggle);
    }

    // ==========================================
    // PORTFOLIO TABS
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Remove active state from all buttons
            tabBtns.forEach(b => {
                b.classList.remove('bg-gray-900', 'text-white', 'dark:bg-white', 'dark:text-gray-900', 'shadow-md', 'border-transparent');
                b.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-50', 'dark:bg-slate-800', 'dark:text-gray-300', 'dark:hover:bg-slate-700', 'border-gray-200', 'dark:border-gray-700');
            });

            // 2. Add active state to clicked button
            btn.classList.add('bg-gray-900', 'text-white', 'dark:bg-white', 'dark:text-gray-900', 'shadow-md', 'border-transparent');
            btn.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-50', 'dark:bg-slate-800', 'dark:text-gray-300', 'dark:hover:bg-slate-700', 'border-gray-200', 'dark:border-gray-700');

            // 3. Hide all tab panes completely
            tabPanes.forEach(pane => {
                pane.classList.remove('block', 'opacity-100');
                pane.classList.add('hidden', 'opacity-0');
            });

            // 4. Show the target tab pane
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if(targetPane) {
                targetPane.classList.remove('hidden', 'opacity-0');
                targetPane.classList.add('block', 'opacity-100');

                if (targetId === 'tab-tech') {
                    // Animate progress bars
                    setTimeout(() => {
                        document.querySelectorAll('#tab-tech .progress-bar').forEach(bar => {
                            bar.style.width = bar.getAttribute('data-target');
                        });
                    }, 50); 
                } else {
                    // Reset progress bars when leaving tab-tech
                    document.querySelectorAll('#tab-tech .progress-bar').forEach(bar => {
                        bar.style.width = '0';
                    });
                }
            }
        });
    });

    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMobileMenu = () => {
        const isOpen = !mobileMenu.classList.contains('opacity-0');
        
        if (isOpen) {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            mobileMenuIcon.setAttribute('name', 'menu-outline');
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
            mobileMenuIcon.setAttribute('name', 'close-outline');
            document.body.style.overflow = 'hidden';
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.classList.contains('mobile-nav-link') || anchor.classList.contains('nav-link') || anchor.getAttribute('href') === '#contact') {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });

    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
