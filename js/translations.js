// Translations object for all 4 languages
const translations = {
    kk: {
        // Navigation
        brandName: "STEM",
        navHome: "Басты бет",
        navAbout: "Біз туралы",
        navDirections: "Ғылыми бағыттар",
        navTeam: "Команда",
        navActivity: "Ғылыми қызмет",
        navBase: "Материалдық база",
        navServices: "Қызметтер",
        navSeminar: "Семинар",
        navContact: "Байланыс",

        // Hero Section
        heroTitle: "Ғылыми-зерттеу орталығы «STEM»",
        heroSubtitle: "Технология · Инженерия · Ғылым · Математика",
        btnLearnMore: "Толығырақ",
        btnContact: "Байланысу",
        
        // Stats
        statsTitle: "Біздің жетістіктеріміз",
        statsStudents: "Оқытылған студенттер",
        statsProjects: "Аяқталған жобалар",
        statsAwards: "Марапаттар мен гранттар",
        statsPartners: "Халықаралық серіктестер",

        // About Section
        aboutTitle: "Біз туралы",
        goalTitle: "Мақсат",
        goalText: "STEM білім беру саласында инновациялық зерттеулер жүргізу және ғылыми-техникалық әлеуетті дамыту.",
        missionTitle: "Миссия",
        missionText: "Білім мен инновацияны біріктіру арқылы келер ұрпақ үшін озық технологиялар мен ғылыми жетістіктерді қамтамасыз ету.",
        tasksTitle: "Міндеттер",
        tasksList: `
            <li>Ғылыми зерттеулер жүргізу</li>
            <li>Инновациялық жобаларды әзірлеу</li>
            <li>Халықаралық ынтымақтастық</li>
            <li>Жас ғалымдарды дайындау</li>
        `,

        // Directions Section
        directionsTitle: "Ғылыми бағыттар",
        techTitle: "Технология",
        techDesc: "Жаңа технологиялар мен инновациялық шешімдерді зерттеу және әзірлеу",
        engTitle: "Инженерия",
        engDesc: "Инженерлік жүйелер мен құрылымдарды жобалау және жетілдіру",
        scienceTitle: "Ғылым",
        scienceDesc: "Фундаменталдық және қолданбалы ғылыми зерттеулер",
        mathTitle: "Математика",
        mathDesc: "Математикалық модельдеу және алгоритмдерді әзірлеу",

        // Team Section
        teamTitle: "Біздің команда",
        teamSubtitle: "Кәсіби мамандар тобы",
        member1Name: "Әміров Әлібек Серікұлы",
        member1Position: "Орталық директоры, PhD",
        member2Name: "Нұрланова Айгүл Қанатқызы",
        member2Position: "Ғылыми қызметкер, PhD",
        member3Name: "Бекенов Нұрлан Асқарұлы",
        member3Position: "Жоба жетекшісі, MSc",
        member4Name: "Сейітова Дана Ермекқызы",
        member4Position: "Аға зерттеуші, PhD",

        // Activity Section
        activityTitle: "Ғылыми қызмет",
        tabMonographs: "Монографиялар",
        tabPatents: "Патенттер",
        tabManuals: "Оқу құралдары",
        tabPublications: "Жарияланымдар",
        mono1Title: "STEM білім берудің қазіргі заманғы әдістері",
        mono1Details: "Авторлар: Әміров Ә.С., Нұрланова А.Қ. | 2024 жыл | 245 бет",
        mono2Title: "Инновациялық технологиялар білім беруде",
        mono2Details: "Авторлар: Бекенов Н.А., Сейітова Д.Е. | 2023 жыл | 312 бет",
        patent1Title: "Интерактивті оқыту жүйесі",
        patent1Details: "Патент №12345 | 2024 жыл | ҚР ҰӘК",
        patent2Title: "STEM зертханасы үшін модульдік жүйе",
        patent2Details: "Патент №12346 | 2023 жыл | ҚР ҰӘК",
        manual1Title: "STEM педагогикасының негіздері",
        manual1Details: "Оқу құралы | 2024 жыл | ISBN 978-601-xxx-xxx-x",
        manual2Title: "Робототехника және бағдарламалау",
        manual2Details: "Оқу құралы | 2023 жыл | ISBN 978-601-xxx-xxx-x",
        statPublications: "Ғылыми жарияланымдар",
        statScopus: "Scopus/WoS мақалалар",
        statConferences: "Халықаралық конференциялар",

        // Base Section
        baseTitle: "Материалдық-техникалық база",
        lab1Title: "Робототехника зертханасы",
        lab1Desc: "Заманауи робототехникалық жүйелер мен жабдықтар",
        lab2Title: "3D модельдеу орталығы",
        lab2Desc: "3D принтерлер мен CAD жүйелері",
        lab3Title: "Компьютерлік зертхана",
        lab3Desc: "Жоғары өнімді компьютерлер мен бағдарламалық қамтамасыз ету",
        lab4Title: "Инженерлік зертхана",
        lab4Desc: "Өлшеу аспаптары мен зерттеу жабдықтары",

        // Services Section
        servicesTitle: "Көрсетілетін қызметтер",
        service1Title: "Оқыту және тренингтер",
        service1Desc: "STEM саласы бойынша оқытушылар мен студенттерге арналған кәсіби даму курстары",
        service2Title: "Ғылыми зерттеулер",
        service2Desc: "Тапсырыс бойынша ғылыми зерттеулер мен эксперименттік жұмыстар жүргізу",
        service3Title: "Жобалық консалтинг",
        service3Desc: "Инновациялық жобаларды әзірлеу және іске асыруда кеңес беру",
        service4Title: "Семинарлар және конференциялар",
        service4Desc: "Ғылыми-практикалық семинарлар мен конференциялар ұйымдастыру",
        service5Title: "Сертификаттау",
        service5Desc: "STEM құзыреттілігі бойынша сертификаттау және аккредитация",
        service6Title: "Техникалық қолдау",
        service6Desc: "STEM жабдықтары мен бағдарламалық қамтамасыз етуге техникалық қолдау",

        // Partners & FAQ (NEW)
        partnersTitle: "Біздің серіктестер",
        faqTitle: "Жиі қойылатын сұрақтар",
        faqQ1: "Орталыққа қалай жазылуға болады?",
        faqA1: "Сайттағы \"Байланыс\" бөлімі арқылы немесе телефон арқылы хабарласыңыз.",
        faqQ2: "Гранттық бағдарламалар бар ма?",
        faqA2: "Иә, біз жыл сайын жас ғалымдарға арналған байқаулар жариялаймыз.",

        // Seminar Section
        seminarTitle: "Семинар туралы",
        seminarInfoTitle: "Халықаралық ғылыми-практикалық семинар",
        seminarDate: "Күні:",
        seminarDateValue: "15-16 маусым, 2024",
        seminarLocation: "Орны:",
        seminarLocationValue: "STEM орталығы, Алматы қ.",
        seminarParticipants: "Қатысушылар:",
        seminarParticipantsValue: "200+ делегат",
        seminarTopicsTitle: "Негізгі тақырыптар:",
        seminarTopics: `
            <li>STEM білім берудің инновациялық әдістері</li>
            <li>Цифрлық трансформация және білім беру</li>
            <li>Робототехника және AI білім беруде</li>
            <li>Халықаралық тәжірибе алмасу</li>
        `,
        btnRegister: "Тіркелу",

        // Contact Section
        contactTitle: "Байланыс",
        contactAddress: "Мекенжай",
        contactAddressValue: "Алматы қ., Әл-Фараби даңғылы, 71",
        contactPhone: "Телефон",
        contactEmail: "Email",
        contactHours: "Жұмыс уақыты",
        contactHoursValue: "Дүйсенбі - Жұма: 9:00 - 18:00",
        formName: "Аты-жөніңіз",
        formEmail: "Email",
        formPhone: "Телефон",
        formMessage: "Хабарлама",
        btnSend: "Жіберу",

        // Footer
        footerAbout: "Орталық туралы",
        footerAboutText: "STEM ғылыми-зерттеу орталығы - білім беру саласындағы инновациялар мен технологияларды дамытуға бағытталған ғылыми ұйым.",
        footerLinks: "Пайдалы сілтемелер",
        footerLinkAbout: "Біз туралы",
        footerLinkDirections: "Ғылыми бағыттар",
        footerLinkTeam: "Команда",
        footerLinkServices: "Қызметтер",
        footerContact: "Байланыс",
        footerContactAddress: "Алматы қ., Әл-Фараби даңғылы, 71",
        footerCopyright: "Ғылыми-зерттеу орталығы. Барлық құқықтар қорғалған."
    },

    ru: {
        // Navigation
        brandName: "STEM",
        navHome: "Главная",
        navAbout: "О нас",
        navDirections: "Научные направления",
        navTeam: "Команда",
        navActivity: "Научная деятельность",
        navBase: "Материальная база",
        navServices: "Услуги",
        navSeminar: "Семинар",
        navContact: "Контакты",

        // Hero Section
        heroTitle: "Научно-исследовательский центр «STEM»",
        heroSubtitle: "Технология · Инженерия · Наука · Математика",
        btnLearnMore: "Подробнее",
        btnContact: "Связаться",
        
        // Stats
        statsTitle: "Наши достижения",
        statsStudents: "Обученных студентов",
        statsProjects: "Завершенных проектов",
        statsAwards: "Награды и гранты",
        statsPartners: "Международные партнеры",

        // About Section
        aboutTitle: "О нас",
        goalTitle: "Цель",
        goalText: "Проведение инновационных исследований в области STEM образования и развитие научно-технического потенциала.",
        missionTitle: "Миссия",
        missionText: "Обеспечение передовых технологий и научных достижений для будущего поколения через интеграцию образования и инноваций.",
        tasksTitle: "Задачи",
        tasksList: `
            <li>Проведение научных исследований</li>
            <li>Разработка инновационных проектов</li>
            <li>Международное сотрудничество</li>
            <li>Подготовка молодых ученых</li>
        `,

        // Directions Section
        directionsTitle: "Научные направления",
        techTitle: "Технология",
        techDesc: "Исследование и разработка новых технологий и инновационных решений",
        engTitle: "Инженерия",
        engDesc: "Проектирование и совершенствование инженерных систем и конструкций",
        scienceTitle: "Наука",
        scienceDesc: "Фундаментальные и прикладные научные исследования",
        mathTitle: "Математика",
        mathDesc: "Математическое моделирование и разработка алгоритмов",

        // Team Section
        teamTitle: "Наша команда",
        teamSubtitle: "Профессиональная команда специалистов",
        member1Name: "Амиров Алибек Серикович",
        member1Position: "Директор центра, PhD",
        member2Name: "Нурланова Айгуль Канатовна",
        member2Position: "Научный сотрудник, PhD",
        member3Name: "Бекенов Нурлан Аскарович",
        member3Position: "Руководитель проекта, MSc",
        member4Name: "Сеитова Дана Ермековна",
        member4Position: "Старший исследователь, PhD",

        // Activity Section
        activityTitle: "Научная деятельность",
        tabMonographs: "Монографии",
        tabPatents: "Патенты",
        tabManuals: "Учебные пособия",
        tabPublications: "Публикации",
        mono1Title: "Современные методы STEM образования",
        mono1Details: "Авторы: Амиров А.С., Нурланова А.К. | 2024 год | 245 стр.",
        mono2Title: "Инновационные технологии в образовании",
        mono2Details: "Авторы: Бекенов Н.А., Сеитова Д.Е. | 2023 год | 312 стр.",
        patent1Title: "Система интерактивного обучения",
        patent1Details: "Патент №12345 | 2024 год | Комитет по ИС РК",
        patent2Title: "Модульная система для STEM лаборатории",
        patent2Details: "Патент №12346 | 2023 год | Комитет по ИС РК",
        manual1Title: "Основы STEM педагогики",
        manual1Details: "Учебное пособие | 2024 год | ISBN 978-601-xxx-xxx-x",
        manual2Title: "Робототехника и программирование",
        manual2Details: "Учебное пособие | 2023 год | ISBN 978-601-xxx-xxx-x",
        statPublications: "Научные публикации",
        statScopus: "Статьи Scopus/WoS",
        statConferences: "Международные конференции",

        // Base Section
        baseTitle: "Материально-техническая база",
        lab1Title: "Лаборатория робототехники",
        lab1Desc: "Современные робототехнические системы и оборудование",
        lab2Title: "Центр 3D моделирования",
        lab2Desc: "3D принтеры и CAD системы",
        lab3Title: "Компьютерная лаборатория",
        lab3Desc: "Высокопроизводительные компьютеры и программное обеспечение",
        lab4Title: "Инженерная лаборатория",
        lab4Desc: "Измерительные приборы и исследовательское оборудование",

        // Services Section
        servicesTitle: "Перечень услуг",
        service1Title: "Обучение и тренинги",
        service1Desc: "Курсы профессионального развития для преподавателей и студентов в области STEM",
        service2Title: "Научные исследования",
        service2Desc: "Проведение научных исследований и экспериментальных работ по заказу",
        service3Title: "Проектный консалтинг",
        service3Desc: "Консультирование по разработке и реализации инновационных проектов",
        service4Title: "Семинары и конференции",
        service4Desc: "Организация научно-практических семинаров и конференций",
        service5Title: "Сертификация",
        service5Desc: "Сертификация и аккредитация по STEM компетенциям",
        service6Title: "Техническая поддержка",
        service6Desc: "Техническая поддержка STEM оборудования и программного обеспечения",

        // Partners & FAQ (NEW)
        partnersTitle: "Наши партнеры",
        faqTitle: "Часто задаваемые вопросы",
        faqQ1: "Как записаться в центр?",
        faqA1: "Свяжитесь с нами через раздел 'Контакты' на сайте или по телефону.",
        faqQ2: "Есть ли грантовые программы?",
        faqA2: "Да, мы ежегодно объявляем конкурсы для молодых ученых.",

        // Seminar Section
        seminarTitle: "О семинаре",
        seminarInfoTitle: "Международный научно-практический семинар",
        seminarDate: "Дата:",
        seminarDateValue: "15-16 июня, 2024",
        seminarLocation: "Место:",
        seminarLocationValue: "Центр STEM, г. Алматы",
        seminarParticipants: "Участники:",
        seminarParticipantsValue: "200+ делегатов",
        seminarTopicsTitle: "Основные темы:",
        seminarTopics: `
            <li>Инновационные методы STEM образования</li>
            <li>Цифровая трансформация и образование</li>
            <li>Робототехника и AI в образовании</li>
            <li>Международный обмен опытом</li>
        `,
        btnRegister: "Зарегистрироваться",

        // Contact Section
        contactTitle: "Контакты",
        contactAddress: "Адрес",
        contactAddressValue: "г. Алматы, пр. Аль-Фараби, 71",
        contactPhone: "Телефон",
        contactEmail: "Email",
        contactHours: "Часы работы",
        contactHoursValue: "Понедельник - Пятница: 9:00 - 18:00",
        formName: "Ваше имя",
        formEmail: "Email",
        formPhone: "Телефон",
        formMessage: "Сообщение",
        btnSend: "Отправить",

        // Footer
        footerAbout: "О центре",
        footerAboutText: "STEM научно-исследовательский центр - научная организация, направленная на развитие инноваций и технологий в сфере образования.",
        footerLinks: "Полезные ссылки",
        footerLinkAbout: "О нас",
        footerLinkDirections: "Научные направления",
        footerLinkTeam: "Команда",
        footerLinkServices: "Услуги",
        footerContact: "Контакты",
        footerContactAddress: "г. Алматы, пр. Аль-Фараби, 71",
        footerCopyright: "Научно-исследовательский центр. Все права защищены."
    },

    en: {
        // Navigation
        brandName: "STEM",
        navHome: "Home",
        navAbout: "About Us",
        navDirections: "Research Directions",
        navTeam: "Team",
        navActivity: "Research Activity",
        navBase: "Facilities",
        navServices: "Services",
        navSeminar: "Seminar",
        navContact: "Contact",

        // Hero Section
        heroTitle: "STEM Research Center",
        heroSubtitle: "Technology · Engineering · Science · Mathematics",
        btnLearnMore: "Learn More",
        btnContact: "Contact Us",

        // Stats
        statsTitle: "Our Achievements",
        statsStudents: "Students Trained",
        statsProjects: "Completed Projects",
        statsAwards: "Awards & Grants",
        statsPartners: "International Partners",

        // About Section
        aboutTitle: "About Us",
        goalTitle: "Goal",
        goalText: "Conducting innovative research in STEM education and developing scientific and technical potential.",
        missionTitle: "Mission",
        missionText: "Ensuring advanced technologies and scientific achievements for the future generation through the integration of education and innovation.",
        tasksTitle: "Tasks",
        tasksList: `
            <li>Conducting scientific research</li>
            <li>Developing innovative projects</li>
            <li>International cooperation</li>
            <li>Training young scientists</li>
        `,

        // Directions Section
        directionsTitle: "Research Directions",
        techTitle: "Technology",
        techDesc: "Research and development of new technologies and innovative solutions",
        engTitle: "Engineering",
        engDesc: "Design and improvement of engineering systems and structures",
        scienceTitle: "Science",
        scienceDesc: "Fundamental and applied scientific research",
        mathTitle: "Mathematics",
        mathDesc: "Mathematical modeling and algorithm development",

        // Team Section
        teamTitle: "Our Team",
        teamSubtitle: "Professional team of specialists",
        member1Name: "Amirov Alibek Serikovich",
        member1Position: "Director of the Center, PhD",
        member2Name: "Nurlanova Aigul Kanatovna",
        member2Position: "Research Fellow, PhD",
        member3Name: "Bekenov Nurlan Askarovich",
        member3Position: "Project Manager, MSc",
        member4Name: "Seitova Dana Ermekovna",
        member4Position: "Senior Researcher, PhD",

        // Activity Section
        activityTitle: "Research Activity",
        tabMonographs: "Monographs",
        tabPatents: "Patents",
        tabManuals: "Textbooks",
        tabPublications: "Publications",
        mono1Title: "Modern Methods of STEM Education",
        mono1Details: "Authors: Amirov A.S., Nurlanova A.K. | 2024 | 245 pages",
        mono2Title: "Innovative Technologies in Education",
        mono2Details: "Authors: Bekenov N.A., Seitova D.E. | 2023 | 312 pages",
        patent1Title: "Interactive Learning System",
        patent1Details: "Patent №12345 | 2024 | IP Committee of RK",
        patent2Title: "Modular System for STEM Laboratory",
        patent2Details: "Patent №12346 | 2023 | IP Committee of RK",
        manual1Title: "Fundamentals of STEM Pedagogy",
        manual1Details: "Textbook | 2024 | ISBN 978-601-xxx-xxx-x",
        manual2Title: "Robotics and Programming",
        manual2Details: "Textbook | 2023 | ISBN 978-601-xxx-xxx-x",
        statPublications: "Scientific Publications",
        statScopus: "Scopus/WoS Articles",
        statConferences: "International Conferences",

        // Base Section
        baseTitle: "Material and Technical Base",
        lab1Title: "Robotics Laboratory",
        lab1Desc: "Modern robotic systems and equipment",
        lab2Title: "3D Modeling Center",
        lab2Desc: "3D printers and CAD systems",
        lab3Title: "Computer Laboratory",
        lab3Desc: "High-performance computers and software",
        lab4Title: "Engineering Laboratory",
        lab4Desc: "Measuring instruments and research equipment",

        // Services Section
        servicesTitle: "Our Services",
        service1Title: "Training and Workshops",
        service1Desc: "Professional development courses for teachers and students in STEM",
        service2Title: "Scientific Research",
        service2Desc: "Conducting scientific research and experimental work on order",
        service3Title: "Project Consulting",
        service3Desc: "Consulting on the development and implementation of innovative projects",
        service4Title: "Seminars and Conferences",
        service4Desc: "Organization of scientific and practical seminars and conferences",
        service5Title: "Certification",
        service5Desc: "Certification and accreditation in STEM competencies",
        service6Title: "Technical Support",
        service6Desc: "Technical support for STEM equipment and software",

        // Partners & FAQ (NEW)
        partnersTitle: "Our Partners",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "How to register at the center?",
        faqA1: "Contact us via the 'Contact' section on the website or by phone.",
        faqQ2: "Are there grant programs?",
        faqA2: "Yes, we announce competitions for young scientists annually.",

        // Seminar Section
        seminarTitle: "About the Seminar",
        seminarInfoTitle: "International Scientific and Practical Seminar",
        seminarDate: "Date:",
        seminarDateValue: "June 15-16, 2024",
        seminarLocation: "Location:",
        seminarLocationValue: "STEM Center, Almaty",
        seminarParticipants: "Participants:",
        seminarParticipantsValue: "200+ delegates",
        seminarTopicsTitle: "Main Topics:",
        seminarTopics: `
            <li>Innovative methods of STEM education</li>
            <li>Digital transformation and education</li>
            <li>Robotics and AI in education</li>
            <li>International experience exchange</li>
        `,
        btnRegister: "Register",

        // Contact Section
        contactTitle: "Contact Us",
        contactAddress: "Address",
        contactAddressValue: "Almaty, Al-Farabi Ave., 71",
        contactPhone: "Phone",
        contactEmail: "Email",
        contactHours: "Working Hours",
        contactHoursValue: "Monday - Friday: 9:00 AM - 6:00 PM",
        formName: "Your Name",
        formEmail: "Email",
        formPhone: "Phone",
        formMessage: "Message",
        btnSend: "Send",

        // Footer
        footerAbout: "About the Center",
        footerAboutText: "STEM Research Center is a scientific organization focused on developing innovations and technologies in the field of education.",
        footerLinks: "Useful Links",
        footerLinkAbout: "About Us",
        footerLinkDirections: "Research Directions",
        footerLinkTeam: "Team",
        footerLinkServices: "Services",
        footerContact: "Contact",
        footerContactAddress: "Almaty, Al-Farabi Ave., 71",
        footerCopyright: "Research Center. All rights reserved."
    },

    tr: {
        // Navigation
        brandName: "STEM",
        navHome: "Ana Sayfa",
        navAbout: "Hakkımızda",
        navDirections: "Araştırma Yönleri",
        navTeam: "Ekip",
        navActivity: "Bilimsel Faaliyet",
        navBase: "Altyapı",
        navServices: "Hizmetler",
        navSeminar: "Seminer",
        navContact: "İletişim",

        // Hero Section
        heroTitle: "STEM Araştırma Merkezi",
        heroSubtitle: "Teknoloji · Mühendislik · Bilim · Matematik",
        btnLearnMore: "Daha Fazla Bilgi",
        btnContact: "İletişime Geç",

        // Stats
        statsTitle: "Başarılarımız",
        statsStudents: "Eğitilen Öğrenciler",
        statsProjects: "Tamamlanan Projeler",
        statsAwards: "Ödüller ve Hibeler",
        statsPartners: "Uluslararası Ortaklar",

        // About Section
        aboutTitle: "Hakkımızda",
        goalTitle: "Amaç",
        goalText: "STEM eğitimi alanında yenilikçi araştırmalar yürütmek ve bilimsel-teknik potansiyeli geliştirmek.",
        missionTitle: "Misyon",
        missionText: "Eğitim ve inovasyonun entegrasyonu yoluyla gelecek nesil için ileri teknolojiler ve bilimsel başarılar sağlamak.",
        tasksTitle: "Görevler",
        tasksList: `
            <li>Bilimsel araştırma yürütmek</li>
            <li>Yenilikçi projeler geliştirmek</li>
            <li>Uluslararası işbirliği</li>
            <li>Genç bilim insanlarını yetiştirmek</li>
        `,

        // Directions Section
        directionsTitle: "Araştırma Yönleri",
        techTitle: "Teknoloji",
        techDesc: "Yeni teknolojilerin ve yenilikçi çözümlerin araştırılması ve geliştirilmesi",
        engTitle: "Mühendislik",
        engDesc: "Mühendislik sistemlerinin ve yapıların tasarımı ve iyileştirilmesi",
        scienceTitle: "Bilim",
        scienceDesc: "Temel ve uygulamalı bilimsel araştırmalar",
        mathTitle: "Matematik",
        mathDesc: "Matematiksel modelleme ve algoritma geliştirme",

        // Team Section
        teamTitle: "Ekibimiz",
        teamSubtitle: "Profesyonel uzmanlar ekibi",
        member1Name: "Amirov Alibek Serikovich",
        member1Position: "Merkez Müdürü, PhD",
        member2Name: "Nurlanova Aigul Kanatovna",
        member2Position: "Araştırma Görevlisi, PhD",
        member3Name: "Bekenov Nurlan Askarovich",
        member3Position: "Proje Yöneticisi, MSc",
        member4Name: "Seitova Dana Ermekovna",
        member4Position: "Kıdemli Araştırmacı, PhD",

        // Activity Section
        activityTitle: "Bilimsel Faaliyet",
        tabMonographs: "Monografiler",
        tabPatents: "Patentler",
        tabManuals: "Ders Kitapları",
        tabPublications: "Yayınlar",
        mono1Title: "Modern STEM Eğitim Yöntemleri",
        mono1Details: "Yazarlar: Amirov A.S., Nurlanova A.K. | 2024 | 245 sayfa",
        mono2Title: "Eğitimde Yenilikçi Teknolojiler",
        mono2Details: "Yazarlar: Bekenov N.A., Seitova D.E. | 2023 | 312 sayfa",
        patent1Title: "İnteraktif Öğrenme Sistemi",
        patent1Details: "Patent №12345 | 2024 | Kazakistan FC Komitesi",
        patent2Title: "STEM Laboratuvarı için Modüler Sistem",
        patent2Details: "Patent №12346 | 2023 | Kazakistan FC Komitesi",
        manual1Title: "STEM Pedagojisinin Temelleri",
        manual1Details: "Ders Kitabı | 2024 | ISBN 978-601-xxx-xxx-x",
        manual2Title: "Robotik ve Programlama",
        manual2Details: "Ders Kitabı | 2023 | ISBN 978-601-xxx-xxx-x",
        statPublications: "Bilimsel Yayınlar",
        statScopus: "Scopus/WoS Makaleleri",
        statConferences: "Uluslararası Konferanslar",

        // Base Section
        baseTitle: "Maddi ve Teknik Altyapı",
        lab1Title: "Robotik Laboratuvarı",
        lab1Desc: "Modern robotik sistemler ve ekipmanlar",
        lab2Title: "3D Modelleme Merkezi",
        lab2Desc: "3D yazıcılar ve CAD sistemleri",
        lab3Title: "Bilgisayar Laboratuvarı",
        lab3Desc: "Yüksek performanslı bilgisayarlar ve yazılımlar",
        lab4Title: "Mühendislik Laboratuvarı",
        lab4Desc: "Ölçüm cihazları ve araştırma ekipmanları",

        // Services Section
        servicesTitle: "Hizmetlerimiz",
        service1Title: "Eğitim ve Atölyeler",
        service1Desc: "STEM alanında öğretmenler ve öğrenciler için mesleki gelişim kursları",
        service2Title: "Bilimsel Araştırma",
        service2Desc: "Sipariş üzerine bilimsel araştırma ve deneysel çalışmalar yürütme",
        service3Title: "Proje Danışmanlığı",
        service3Desc: "Yenilikçi projelerin geliştirilmesi ve uygulanması konusunda danışmanlık",
        service4Title: "Seminerler ve Konferanslar",
        service4Desc: "Bilimsel ve pratik seminerler ile konferansların organizasyonu",
        service5Title: "Sertifikasyon",
        service5Desc: "STEM yetkinliklerinde sertifikasyon ve akreditasyon",
        service6Title: "Teknik Destek",
        service6Desc: "STEM ekipmanları ve yazılımı için teknik destek",

        // Partners & FAQ (NEW)
        partnersTitle: "İş Ortaklarımız",
        faqTitle: "Sıkça Sorulan Sorular",
        faqQ1: "Merkeze nasıl kayıt olunur?",
        faqA1: "Web sitemizdeki 'İletişim' bölümünden veya telefonla bize ulaşın.",
        faqQ2: "Hibe programları var mı?",
        faqA2: "Evet, her yıl genç bilim insanları için yarışmalar düzenliyoruz.",

        // Seminar Section
        seminarTitle: "Seminer Hakkında",
        seminarInfoTitle: "Uluslararası Bilimsel ve Pratik Seminer",
        seminarDate: "Tarih:",
        seminarDateValue: "15-16 Haziran, 2024",
        seminarLocation: "Yer:",
        seminarLocationValue: "STEM Merkezi, Almatı",
        seminarParticipants: "Katılımcılar:",
        seminarParticipantsValue: "200+ delege",
        seminarTopicsTitle: "Ana Konular:",
        seminarTopics: `
            <li>STEM eğitiminin yenilikçi yöntemleri</li>
            <li>Dijital dönüşüm ve eğitim</li>
            <li>Eğitimde robotik ve yapay zeka</li>
            <li>Uluslararası deneyim paylaşımı</li>
        `,
        btnRegister: "Kayıt Ol",

        // Contact Section
        contactTitle: "İletişim",
        contactAddress: "Adres",
        contactAddressValue: "Almatı, Al-Farabi Cad., 71",
        contactPhone: "Telefon",
        contactEmail: "Email",
        contactHours: "Çalışma Saatleri",
        contactHoursValue: "Pazartesi - Cuma: 9:00 - 18:00",
        formName: "Adınız",
        formEmail: "Email",
        formPhone: "Telefon",
        formMessage: "Mesaj",
        btnSend: "Gönder",

        // Footer
        footerAbout: "Merkez Hakkında",
        footerAboutText: "STEM Araştırma Merkezi - eğitim alanında inovasyonları ve teknolojileri geliştirmeye odaklanan bilimsel bir kuruluştur.",
        footerLinks: "Faydalı Bağlantılar",
        footerLinkAbout: "Hakkımızda",
        footerLinkDirections: "Araştırma Yönleri",
        footerLinkTeam: "Ekip",
        footerLinkServices: "Hizmetler",
        footerContact: "İletişim",
        footerContactAddress: "Almatı, Al-Farabi Cad., 71",
        footerCopyright: "Araştırma Merkezi. Tüm hakları saklıdır."
    }
};

// Function to change language
function changeLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'UL' && key.includes('List')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'kk';
    changeLanguage(savedLang);
});