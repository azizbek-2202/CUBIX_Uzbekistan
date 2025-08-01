"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type Language = "en" | "uz" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    team: "Team",
    contact: "Contact",

    // Hero Section
    heroTitle: "Welcome to KUBIX",
    heroSubtitle:
      "We create innovative web and mobile applications that turn your business ideas into reality using cutting-edge technology and modern design.",
    getInTouch: "Get In Touch",
    viewOurWork: "View Our Work",

    // About Section
    aboutTitle: "About Kubix",
    aboutDescription:
      "Founded with a passion for technology and innovation, Kubix has been at the forefront of digital transformation, helping businesses unlock their full potential through custom software solutions.",
    mission: "Mission",
    vision: "Vision",
    values: "Values",
    missionText: "To deliver cutting-edge digital solutions that empower businesses to thrive in the digital age.",
    visionText:
      "To be the leading technology partner for businesses seeking innovative and scalable digital transformation.",
    valuesText: "Innovation, Quality, Transparency, and Client Success drive everything we do.",

    // Services
    servicesTitle: "Our Services",
    servicesDescription:
      "We offer comprehensive digital solutions tailored to meet your business needs and drive growth.",
    webDevelopment: "Web Development",
    uiuxDesign: "UI/UX Design",
    mobileDevelopment: "Mobile Development",
    digitalMarketing: "Digital Marketing",
    backendDevelopment: "Backend Development",
    cybersecurity: "Cybersecurity",
    consulting: "Consulting",

    // Portfolio
    portfolioTitle: "Our Portfolio",
    portfolioDescription:
      "Discover our latest projects and see how we've helped businesses achieve their digital goals.",
    project1: "E-Commerce Platform",
    project1Description: "A modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    project2: "Market CRM",
    project2Description: "A comprehensive CRM system for managing customer relationships, sales, and marketing campaigns.",
    project3: "Networking web site",
    project3Description: "Expand your professional network, connect with experienced professionals, and discover new job opportunities. Together, we learn, grow, and strive for success.",
    project4: "Market ERP",
    project4Description: "Digitize your business and automate management. Manage sales, warehouse, finance and customer service processes on a single platform. Get started now for quick decisions, full control and efficient growth!",
    project5: "Real Estate Platform",
    project5Description: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
    project6: "Social Media Management Tool",
    project6Description: "A comprehensive tool for managing social media accounts, scheduling posts, and analyzing engagement.",

    // Team
    teamTitle: "Our Team",
    teamDescription: "Meet the talented individuals who make Kubix a leader in digital innovation.",
    ceoFounder: "CEO & Founder",
    ceoFounderBio: "A promising leader and Middle FrontEnd developer with over 5 years of experience in the technology industry",
    cto: "CTO",
    ctoBio: "Technical expert specializing in scalable architectures",
    leadDesigner: "Lead Designer",
    leadDesignerBio: "Creative designer with passion for user experience",
    fullStackDeveloper: "Full Stack Developer",
    fullStackDeveloperBio: "Full-stack developer with expertise in modern frameworks",
    devopsEngineer: "DevOps Engineer",
    devopsEngineerBio: "Infrastructure specialist ensuring seamless deployments",
    projectManager: "Project Manager",
    projectManagerBio: "Experienced PM ensuring projects deliver on time",

    // Why Choose Us
    whyChooseTitle: "Why Choose Kubix",
    whyChooseDescription:
      "We combine technical expertise with business acumen to deliver solutions that drive real results.",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc:
      "We deliver projects on time without compromising quality, ensuring your business stays ahead of the competition.",
    modernStack: "Modern Stack",
    modernStackDesc:
      "We use cutting-edge technologies and frameworks to build scalable, maintainable, and future-proof solutions.",
    transparentCommunication: "Transparent Communication",
    transparentCommunicationDesc:
      "Regular updates, clear documentation, and open communication channels keep you informed throughout the project.",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc:
      "Rigorous testing and quality control processes ensure your product meets the highest standards.",
    expertTeam: "Expert Team",
    expertTeamDesc:
      "Our experienced team of developers, designers, and project managers bring expertise to every project.",
    agileMethodology: "Agile Methodology",
    agileMethodologyDesc:
      "We follow agile development practices for flexibility, faster iterations, and better project outcomes.",

    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialsDescription:
      "Don't just take our word for it. Here's what our satisfied clients have to say about working with Kubix.",
    ceoTechStart: "CEO, TechStart Inc.",
    founderEcoSolutions: "Founder, EcoSolutions",
    ctoFinanceFlow: "CTO, FinanceFlow",
    marketingDirectorBrandBoost: "Marketing Director, BrandBoost",
    founderHealthTech: "Founder, HealthTech Solutions",
    vpOperationsLogiFlow: "VP of Operations, LogiFlow",
    testimonial1:
      "Kubix transformed our digital presence completely. Their team's expertise and dedication resulted in a 300% increase in our online engagement.",
    testimonial2:
      "Working with Kubix was a game-changer. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations.",
    testimonial3:
      "The mobile app Kubix developed for us has been incredibly successful. Their attention to detail and user experience is outstanding.",
    testimonial4:
      "Kubix's digital marketing strategies helped us reach new heights. Our ROI improved by 250% within the first quarter.",
    testimonial5:
      "The healthcare platform Kubix built for us is robust, secure, and user-friendly. It has revolutionized how we serve our patients.",
    testimonial6:
      "Kubix's team understood our complex requirements and delivered a solution that streamlined our entire operation. Highly recommended!",

    // Contact
    contactTitle: "Get In Touch",
    contactDescription: "Ready to start your next project? Let's discuss how we can help bring your ideas to life.",
    sendMessage: "Send us a message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    message: "Message",
    contactInformation: "Contact Information",
    email: "Email",
    phone: "Phone",
    address: "Address",
    findUs: "Find Us",
    phone_number: "Phone Number",
    phone_number_placeholder: "Enter your phone number",

    // Footer
    footerDescription:
      "We're a forward-thinking IT company dedicated to transforming businesses through innovative digital solutions. Let's build the future together.",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved. Built with ❤️ for innovation.",

    // Stats
    projectsCompleted: "Projects Completed",
    happyClients: "Happy Clients",
    yearsExperience: "Years Experience",
    supportAvailable: "Support Available",
  },
  uz: {
    // Navigation
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    services: "Xizmatlar",
    portfolio: "Portfolio",
    team: "Jamoa",
    contact: "Aloqa",

    // Hero Section
    heroTitle: "Xush kelibsiz KUBIX ga",
    heroSubtitle:
      "Biz ilg'or texnologiyalar va zamonaviy dizayn yordamida biznes g'oyalaringizni haqiqatga aylantiradigan innovatsion veb va mobil ilovalarni yaratamiz.",
    getInTouch: "Bog'lanish",
    viewOurWork: "Ishlarimizni Ko'rish",

    // About Section
    aboutTitle: "Kubix Haqida",
    aboutDescription:
      "Texnologiya va innovatsiyaga bo'lgan ishtiyoq bilan tashkil etilgan Kubix raqamli transformatsiya sohasida yetakchi bo'lib, bizneslarning maxsus dasturiy ta'minot yechimlari orqali to'liq salohiyatini ochishga yordam beradi.",
    mission: "Missiya",
    vision: "Vizyon",
    values: "Qadriyatlar",
    missionText: "Bizneslarni raqamli asrda gullab-yashnashga imkon beradigan ilg'or raqamli yechimlarni taqdim etish.",
    visionText:
      "Innovatsion va kengaytiriladigan raqamli transformatsiyani izlayotgan bizneslar uchun yetakchi texnologiya hamkori bo'lish.",
    valuesText: "Innovatsiya, Sifat, Shaffoflik va Mijoz Muvaffaqiyati biz qiladigan hamma narsani boshqaradi.",

    // Services
    servicesTitle: "Bizning Xizmatlarimiz",
    servicesDescription:
      "Biz sizning biznes ehtiyojlaringizga moslashtirilgan va o'sishni ta'minlaydigan keng qamrovli raqamli yechimlarni taklif etamiz.",
    webDevelopment: "Veb Dasturlash",
    uiuxDesign: "UI/UX Dizayn",
    mobileDevelopment: "Mobil Dasturlash",
    digitalMarketing: "Raqamli Marketing",
    backendDevelopment: "Backend Dasturlash",
    cybersecurity: "Kiberxavfsizlik",
    consulting: "Konsalting",

    // Portfolio
    portfolioTitle: "Bizning Portfolio",
    portfolioDescription:
      "Eng so'nggi loyihalarimizni kashf eting va bizneslarning raqamli maqsadlariga erishishda qanday yordam berganimizni ko'ring.",
    project1: "E-Commerce Platform",
    project1Description: "Zamonaviy e-commerce yechimi, real vaqt inventarizatsiyasi, to'lovlarni qayta ishlash va analitika paneli kabi ilg'or funksiyalarni o'z ichiga oladi.",
    project2: "Market CRM",
    project2Description: "Do'konlarni boshqarish, statistikalar uchun keng qamrovli ERP tizimi.",
    project3: "Tarmoq veb-sayti",
    project3Description: "Professional aloqalarni kengaytiring, tajribali mutaxassislar bilan bog‘laning va yangi ish imkoniyatlarini toping. Birgalikda o‘rganamiz, o‘samiz va muvaffaqiyat sari harakat qilamiz.",
    project4: "Market ERP",
    project4Description: "Biznesingizni raqamlashtiring va boshqaruvni avtomatlashtiring. Savdo, ombor, moliya va mijozlar bilan ishlash jarayonlarini yagona platformada boshqaring. Tezkor qarorlar, to‘liq nazorat va samarali o‘sish uchun hoziroq boshlang!",
    project5: "Real Estate Platform",
    project5Description: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
    project6: "Social Media Management Tool",
    project6Description: "A comprehensive tool for managing social media accounts, scheduling posts, and analyzing engagement.",


    // Team
    teamTitle: "Bizning Jamoa",
    teamDescription: "Kubixni raqamli innovatsiya sohasida yetakchi qiladigan iqtidorli shaxslar bilan tanishing.",
    ceoFounder: "Bosh direktor va Asoschisi",
    ceoFounderBio: "Texnologiya sohasida 5 yildan ortiq tajribaga ega istiqbolli yetakchi va Middle FrontEnd dasturchisi",
    uxDeveloper: "Ux/Ui Dasturchi",
    uxDeveloperBio: "Foydalanuvchi tajribasini yaxshilashga qaratilgan innovatsion dizayn yechimlarini ishlab chiqishga ixtisoslashgan.",
    leadDesigner: "Bosh dizayner",
    leadDesignerBio: "Foydalanuvchi tajribasiga ishtiyoqi bor ijodiy dizayner",
    fullStackDeveloper: "Full Stack Dasturchi",
    fullStackDeveloperBio: "Zamonaviy frameworklarda tajribaga ega full-stack dasturchi",
    backendDeveloper: "Backend Dasturchi",
    backendDeveloperBio: "Zamonaviy backend texnologiyalarida tajribaga ega dasturchi",
    projectManager: "Loyiha menejeri",
    projectManagerBio: "Loyihalarni o'z vaqtida yetkazib berishni ta'minlaydigan tajribali PM",

    // Why Choose Us
    whyChooseTitle: "Nega Kubixni Tanlash Kerak",
    whyChooseDescription:
      "Biz texnik tajriba va biznes aql-idrokini birlashtirgan holda haqiqiy natijalarni beradigan yechimlarni taqdim etamiz.",
    fastDelivery: "Tez Yetkazib Berish",
    fastDeliveryDesc:
      "Biz sifatni buzmasdan loyihalarni o'z vaqtida yetkazib beramiz, bu sizning biznesingizni raqobatda oldinda turishi uchun.",
    modernStack: "Zamonaviy Texnologiyalar",
    modernStackDesc:
      "Biz kengaytiriladigan, saqlash mumkin va kelajakka mo'ljallangan yechimlarni yaratish uchun eng so'nggi texnologiya va freymvorklardan foydalanamiz.",
    transparentCommunication: "Shaffof Muloqot",
    transparentCommunicationDesc:
      "Muntazam yangilanishlar, aniq hujjatlar va ochiq aloqa kanallari sizni loyiha davomida xabardor qiladi.",
    qualityAssurance: "Sifat Kafolati",
    qualityAssuranceDesc:
      "Qattiq test va sifat nazorati jarayonlari mahsulotingiz eng yuqori standartlarga javob berishini ta'minlaydi.",
    expertTeam: "Mutaxassis Jamoa",
    expertTeamDesc:
      "Bizning tajribali dasturchilar, dizaynerlar va loyiha menejerlarimiz har bir loyihaga o'z tajribalarini olib keladi.",
    agileMethodology: "Agile Metodologiya",
    agileMethodologyDesc:
      "Biz moslashuvchanlik, tezroq iteratsiyalar va yaxshi loyiha natijalari uchun agile rivojlanish amaliyotlariga amal qilamiz.",

    // Testimonials
    testimonialsTitle: "Mijozlarimiz Nima Deydi",
    testimonialsDescription:
      "Faqat bizning so'zimizga ishonmang. Kubix bilan ishlash haqida qoniqgan mijozlarimiz nima deyishini eshiting.",
    ceoTechStart: "Bosh direktor, TechStart Inc.",
    founderEcoSolutions: "Asoschisi, EcoSolutions",
    ctoFinanceFlow: "Texnik direktor, FinanceFlow",
    marketingDirectorBrandBoost: "Marketing direktori, BrandBoost",
    founderHealthTech: "Asoschisi, HealthTech Solutions",
    vpOperationsLogiFlow: "Boshqaruvchi, LogiFlow",
    testimonial1:
      "Kubix bizning raqamli mavjudligimizni butunlay o'zgartirdi. Ularning jamoasining tajribasi va fidoyiligi onlayn faolligimizni 150% ga oshirdi.",
    testimonial2:
      "Kubix bilan ishlash o'yin o'zgartiruvchi edi. Ular bizning elektron tijorat platformamizni muddatdan oldin yetkazib berishdi va barcha kutganlarimizdan oshib ketdi.",
    testimonial3:
      "Kubix biz uchun ishlab chiqqan mobil ilova juda muvaffaqiyatli bo'ldi. Ularning tafsilotlarga e'tibori va foydalanuvchi tajribasi ajoyib.",
    testimonial4:
      "Kubixning raqamli marketing strategiyalari bizga yangi cho'qqilarga erishishga yordam berdi. Bizning ROI birinchi chorakda 250% ga yaxshilandi.",
    testimonial5:
      "Kubix biz uchun qurgan sog'liqni saqlash platformasi mustahkam, xavfsiz va foydalanuvchi uchun qulay. Bu bizning bemorlarimizga xizmat ko'rsatish usulimizni inqilob qildi.",
    testimonial6:
      "Kubix jamoasi bizning murakkab talablarimizni tushundi va butun operatsiyamizni soddalashtirgan yechimni yetkazib berdi. Tavsiya etamiz!",

    // Contact
    contactTitle: "Bog'laning",
    contactDescription:
      "Keyingi loyihangizni boshlashga tayyormisiz? G'oyalaringizni hayotga tatbiq etishda qanday yordam berishimizni muhokama qilaylik.",
    sendMessage: "Bizga xabar yuboring",
    fullName: "To'liq Ism",
    emailAddress: "Email Manzil",
    message: "Xabar",
    contactInformation: "Aloqa Ma'lumotlari",
    email: "Email",
    phone: "Telefon",
    address: "Manzil",
    findUs: "Bizni Toping",
    phone_number: "Telefon Raqami",
    phone_number_placeholder: "Telefon raqamingizni kiriting",

    // Footer
    footerDescription:
      "Biz innovatsion raqamli yechimlar orqali bizneslarni o'zgartirishga bag'ishlangan ilg'or IT kompaniyasimiz. Kelajakni birga quraylik.",
    quickLinks: "Tezkor Havolalar",
    allRightsReserved: "Barcha huquqlar himoyalangan. Innovatsiya uchun ❤️ bilan qurilgan.",

    // Stats
    projectsCompleted: "Tugallangan Loyihalar",
    happyClients: "Mamnun Mijozlar",
    yearsExperience: "Yillik Tajriba",
    supportAvailable: "Qo'llab-quvvatlash Mavjud",
  },
  ru: {
    // Navigation
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    portfolio: "Портфолио",
    team: "Команда",
    contact: "Контакты",

    // Hero Section
    heroTitle: "Добро пожаловать в KUBIX",
    heroSubtitle:
      "Мы создаем инновационные веб- и мобильные приложения, которые воплощают ваши бизнес-идеи в реальность, используя передовые технологии и современный дизайн.",
    getInTouch: "Связаться",
    viewOurWork: "Посмотреть Работы",

    // About Section
    aboutTitle: "О Kubix",
    aboutDescription:
      "Основанная с страстью к технологиям и инновациям, Kubix находится в авангарде цифровой трансформации, помогая бизнесу раскрыть свой полный потенциал через индивидуальные программные решения.",
    mission: "Миссия",
    vision: "Видение",
    values: "Ценности",
    missionText: "Предоставлять передовые цифровые решения, которые позволяют бизнесу процветать в цифровую эпоху.",
    visionText:
      "Быть ведущим технологическим партнером для бизнеса, стремящегося к инновационной и масштабируемой цифровой трансформации.",
    valuesText: "Инновации, Качество, Прозрачность и Успех Клиентов движут всем, что мы делаем.",

    // Services
    servicesTitle: "Наши Услуги",
    servicesDescription:
      "Мы предлагаем комплексные цифровые решения, адаптированные к потребностям вашего бизнеса и способствующие росту.",
    webDevelopment: "Веб-разработка",
    uiuxDesign: "UI/UX Дизайн",
    mobileDevelopment: "Мобильная Разработка",
    digitalMarketing: "Цифровой Маркетинг",
    backendDevelopment: "Backend Разработка",
    cybersecurity: "Кибербезопасность",
    consulting: "Консалтинг",

    // Portfolio
    portfolioTitle: "Наше Портфолио",
    portfolioDescription:
      "Откройте для себя наши последние проекты и посмотрите, как мы помогли бизнесу достичь своих цифровых целей.",
        project1: "Платформа электронной коммерции",
    project1Description: "Современное решение для электронной коммерции, включающее расширенные функции, такие как инвентаризация в реальном времени, обработка платежей и аналитические панели.",
    project2: "Маркет CRM",
    project2Description: "Комплексная CRM-система для управления взаимоотношениями с клиентами, продажами и маркетинговыми кампаниями.",
    project3: "Сетевой веб-сайт",
    project3Description: "Расширяйте свой профессиональный круг общения, общайтесь с опытными специалистами и открывайте новые возможности трудоустройства. Вместе мы учимся, развиваемся и стремимся к успеху.",
    project4: "Market ERP",
    project4Description: "Цифровизируйте свой бизнес и автоматизируйте управление. Управляйте продажами, складом, финансами и обслуживанием клиентов на единой платформе. Начните прямо сейчас, чтобы получать быстрые решения, полный контроль и эффективно расти!",
    project5: "Платформа недвижимости",
    project5Description: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
    project6: "Social Media Management Tool",
    project6Description: "A comprehensive tool for managing social media accounts, scheduling posts, and analyzing engagement.",

    // Team
    teamTitle: "Наша Команда",
    teamDescription: "Познакомьтесь с талантливыми людьми, которые делают Kubix лидером в области цифровых инноваций.",
    ceoFounder: "Генеральный директор и основатель",
    ceoFounderBio: "Перспективный лидер и Middle FrontEnd-разработчик с более чем 5-летним опытом работы в технологической отрасли.",
    cto: "Технический директор",
    ctoBio: "Технический эксперт, специализирующийся на масштабируемых архитектурах",
    leadDesigner: "Ведущий дизайнер",
    leadDesignerBio: "Креативный дизайнер со страстью к пользовательскому опыту",
    fullStackDeveloper: "Full Stack разработчик",
    fullStackDeveloperBio: "Full-stack разработчик с экспертизой в современных фреймворках",
    devopsEngineer: "DevOps инженер",
    devopsEngineerBio: "Специалист по инфраструктуре, обеспечивающий бесшовные развертывания",
    projectManager: "Менеджер проектов",
    projectManagerBio: "Опытный PM, обеспечивающий своевременную поставку проектов",

    // Why Choose Us
    whyChooseTitle: "Почему Выбирают Kubix",
    whyChooseDescription:
      "Мы сочетаем техническую экспертизу с деловой проницательностью для предоставления решений, которые приносят реальные результаты.",
    fastDelivery: "Быстрая Доставка",
    fastDeliveryDesc:
      "Мы доставляем проекты вовремя без ущерба для качества, обеспечивая вашему бизнесу опережение конкурентов.",
    modernStack: "Современный Стек",
    modernStackDesc:
      "Мы используем передовые технологии и фреймворки для создания масштабируемых, поддерживаемых и перспективных решений.",
    transparentCommunication: "Прозрачная Коммуникация",
    transparentCommunicationDesc:
      "Регулярные обновления, четкая документация и открытые каналы связи держат вас в курсе на протяжении всего проекта.",
    qualityAssurance: "Обеспечение Качества",
    qualityAssuranceDesc:
      "Строгие процессы тестирования и контроля качества гарантируют, что ваш продукт соответствует высочайшим стандартам.",
    expertTeam: "Экспертная Команда",
    expertTeamDesc:
      "Наша опытная команда разработчиков, дизайнеров и менеджеров проектов привносит экспертизу в каждый проект.",
    agileMethodology: "Agile Методология",
    agileMethodologyDesc:
      "Мы следуем agile практикам разработки для гибкости, более быстрых итераций и лучших результатов проекта.",

    // Testimonials
    testimonialsTitle: "Что Говорят Наши Клиенты",
    testimonialsDescription: "Не верьте нам на слово. Вот что говорят наши довольные клиенты о работе с Kubix.",
    ceoTechStart: "Генеральный директор, TechStart Inc.",
    founderEcoSolutions: "Основатель, EcoSolutions",
    ctoFinanceFlow: "Технический директор, FinanceFlow",
    marketingDirectorBrandBoost: "Директор по маркетингу, BrandBoost",
    founderHealthTech: "Основатель, HealthTech Solutions",
    vpOperationsLogiFlow: "Вице-президент по операциям, LogiFlow",
    testimonial1:
      "Kubix полностью трансформировал наше цифровое присутствие. Экспертиза и преданность их команды привели к 300% увеличению нашей онлайн-активности.",
    testimonial2:
      "Работа с Kubix изменила правила игры. Они доставили нашу платформу электронной коммерции раньше срока и превзошли все наши ожидания.",
    testimonial3:
      "Мобильное приложение, которое Kubix разработал для нас, было невероятно успешным. Их внимание к деталям и пользовательскому опыту выдающееся.",
    testimonial4:
      "Стратегии цифрового маркетинга Kubix помогли нам достичь новых высот. Наш ROI улучшился на 250% в первом квартале.",
    testimonial5:
      "Платформа здравоохранения, которую Kubix построил для нас, надежна, безопасна и удобна для пользователя. Она революционизировала то, как мы обслуживаем наших пациентов.",
    testimonial6:
      "Команда Kubix поняла наши сложные требования и предоставила решение, которое упростило всю нашу операцию. Настоятельно рекомендуем!",

    // Contact
    contactTitle: "Связаться с Нами",
    contactDescription:
      "Готовы начать свой следующий проект? Давайте обсудим, как мы можем помочь воплотить ваши идеи в жизнь.",
    sendMessage: "Отправить сообщение",
    fullName: "Полное Имя",
    emailAddress: "Email Адрес",
    message: "Сообщение",
    contactInformation: "Контактная Информация",
    email: "Email",
    phone: "Телефон",
    address: "Адрес",
    findUs: "Найти Нас",
    phone_number: "Телефонный Номер",
    phone_number_placeholder: "Введите ваш телефонный номер",

    // Footer
    footerDescription:
      "Мы - передовая IT-компания, посвященная трансформации бизнеса через инновационные цифровые решения. Давайте строить будущее вместе.",
    quickLinks: "Быстрые Ссылки",
    allRightsReserved: "Все права защищены. Создано с ❤️ для инноваций.",

    // Stats
    projectsCompleted: "Завершенных Проектов",
    happyClients: "Довольных Клиентов",
    yearsExperience: "Лет Опыта",
    supportAvailable: "Поддержка Доступна",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // LocalStorage dan tilni o'qish
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "uz", "ru"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    console.log("Language set to:", lang)
  }

  const t = (key: string): string => {
    if (!mounted) return key
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}