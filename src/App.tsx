import { useState, useEffect, createContext, useContext } from "react";
import logoLightSrc from "@/imports/bnk-logo-light.webp";
import logoDarkSrc from "@/imports/bnk-logo-dark.webp";
import heroBgImg from "@/imports/обложка.webp";
import reviewBakhromPhoto from "@/imports/6c954ee3-8a67-472c-ad89-f350ccda60d7.webp";
import reviewOtabekPhoto from "@/imports/a3e41c00-c61f-42ea-93e7-525f58ebd85a.webp";
import reviewNilufarPhoto from "@/imports/fa5e2886-d3d6-476e-a3a0-78bce6d3ce2c.webp";
import aboutImage from "@/imports/o nas.webp";
import faqArrowRight from "@/imports/strelka-pravo-faq.webp";
import faqArrowDown from "@/imports/strelka-niz-faq.webp";
import kiaK3Img from "@/imports/kia-k3.webp";
import kiaK5Img from "@/imports/kia-k5.webp";
import kiaSorentoImg from "@/imports/kia-sorento.webp";
import kiaCarnivalImg from "@/imports/kia-carnival.webp";
import kiaK8Img from "@/imports/kia-k8.webp";
import kiaSportageImg from "@/imports/kia-sportage.webp";
import kiaSeltosImg from "@/imports/kia-seltos.webp";
import kiaBongoImg from "@/imports/kia-bongo.webp";
import kiaCarensImg from "@/imports/kia-carens.webp";
import kiaSonetImg from "@/imports/kia-sonet.webp";
import newsImg11 from "@/imports/11.webp";
import newsImg22 from "@/imports/22.webp";
import newsImg33 from "@/imports/33.webp";
import newsImg44 from "@/imports/44.webp";
import newsImg55 from "@/imports/55.webp";

const heroBgImage = heroBgImg;

// ─── I18N ────────────────────────────────────────────────────────────────────

type Lang = "UZ" | "RU" | "EN" | "KR";

const T = {
  RU: {
    partner: "Официальный партнёр KIA в Узбекистане",
    nav: ["О нас", "Лизинг", "Контакты", "Новости"],
    navHrefs: ["#/about", "#calc", "#apply", null],
    newsSubmenu: ["Все новости", "Акции", "События"],
    newsSubmenuHrefs: ["#/news", "#/news/promo", "#/news/events"],
    applyBtn: "Оставить заявку",
    aboutTitle: "О компании",
    aboutDesc: "Мы — дочерняя компания BNK Financial Group, специализирующаяся на современном лизинге в Ташкенте и опирающаяся на передовую финансовую экспертизу Кореи.\n\nПридерживаясь подхода «клиент прежде всего», мы предлагаем надежные и доступные лизинговые решения для бизнеса и частных лиц, помогая приобретать автомобили и технику на выгодных условиях.\n\nРазвиваясь вместе с местным рынком, мы открываем новые возможности для финансового роста и реализации ваших планов.",
    heroLine1: "Финансовые",
    heroLine2: "решения",
    heroLineRed: "для вас",
    heroLine3: "и вашего бизнеса",
    heroDesc: "Лизинг имущества для личных и деловых целей — на условиях, подходящих вам.",
    calcLeasingBtn: "Рассчитать лизинг",
    getConsultationBtn: "Получить консультацию",
    stats: [{ v: "от 30%", l: "аванс" }, { v: "до 48 мес.", l: "срок" }, { v: "1 день", l: "одобрение" }],
    calcCta: "Рассчитать платёж",
    viewModels: "Смотреть модели",
    monthlyBadge: "Ежемесячный платёж",
    monthlyFrom: "от 2 900 000 сум",
    trust: ["✓ Официальный дилер KIA", "✓ Фиксированная ставка"],
    calcLabel: "Калькулятор лизинга",
    calcTitle: "Рассчитайте платёж\nпрямо сейчас",
    calcDesc: "Выберите модель, аванс и срок — увидите платёж мгновенно.",
    modelLabel: "Модель автомобиля",
    advLabel: "Авансовый платёж",
    termLabel: "Срок лизинга",
    sumLabel: "Сумма:",
    monthlyLabel: "Ежемесячный платёж",
    perMonth: "сум / месяц",
    perAnnum: "% годовых",
    calcRows: ["Стоимость авто", "Аванс", "Срок", "Ставка", "Итого переплата"],
    months: "месяцев",
    monthShort: "мес.",
    minLabel: "Мин",
    maxLabel: "Макс",
    stepLabel: "Шаг",
    rate: "18% годовых",
    leaveApp: "Оставить заявку",
    calcNote: "Расчёт предварительный. Итоговые условия уточняются у менеджера.",
    catalogLabel: "Каталог",
    catalogTitle: "Популярные модели KIA",
    priceFrom: "Цена от",
    sum: "сум",
    calcWith: "При авансе 30% / 36 мес.",
    orderBtn: "Рассчитать",
    stepsLabel: "Просто и быстро",
    stepsTitle: "Как оформить лизинг",
    steps: [
      { title: "Оставьте заявку", desc: "Заполните форму онлайн или позвоните нам — менеджер свяжется в течение 15 минут." },
      { title: "Одобрение за 1 день", desc: "Проверяем документы и принимаем решение. Только паспорт и ИНН — больше ничего." },
      { title: "Получите авто", desc: "Подписываем договор, вносите аванс — и уезжаете на новом KIA в тот же день." },
    ],
    reviewsLabel: "Отзывы клиентов",
    reviewsTitle: "Нам доверяют",
    cases: [
      { name: "Бахром Т.", job: "Предприниматель", model: "KIA Sportage", text: "Оформил лизинг за один день. Минимум бумаг, отличные условия. Теперь советую всем партнёрам.", photo: reviewBakhromPhoto },
      { name: "Нилуфар К.", job: "Директор, ООО «Nova Trade»", model: "KIA Sorento", text: "Смогла взять премиальный KIA Sorento с авансом всего 30%. Платёж комфортный, никаких скрытых комиссий.", photo: reviewNilufarPhoto },
      { name: "Отабек Р.", job: "Фрилансер", model: "KIA Seltos", text: "Думал, что лизинг — только для бизнеса. Оказалось, всё просто. Рекомендую BNK Finance!", photo: reviewOtabekPhoto },
    ],
    faqLabel: "FAQ",
    faqTitle: "Частые вопросы",
    faqs: [
      { q: "Какой минимальный аванс?", a: "Стандартный аванс — от 30% от стоимости автомобиля. При определённых условиях (например, для корпоративных клиентов или при повторном обращении) размер аванса может быть рассчитан индивидуально. Уточните у нашего менеджера — подберём оптимальный вариант под вашу ситуацию." },
      { q: "Можно ли досрочно выкупить автомобиль?", a: "Да. Вы можете полностью погасить лизинг в любой момент действия договора. Досрочный выкуп осуществляется с минимальной комиссией, а переплата пересчитывается — вы платите только за фактический срок пользования." },
      { q: "Какие документы нужны?", a: "Для физических лиц: паспорт (ID-карта), свидетельство о регистрации (прописка), справка о доходах. Для юридических лиц: учредительные документы, гувохнома (свидетельство о госрегистрации), реквизиты компании. В отдельных случаях мы можем запросить дополнительные документы — менеджер сообщит об этом заранее." },
      { q: "Есть ли скрытые комиссии?", a: "Нет. Все платежи и условия фиксируются в договоре до его подписания. Вы заранее знаете полную стоимость лизинга и график платежей — никаких дополнительных сборов в процессе." },
      { q: "На чьё имя регистрируется автомобиль?", a: "На период лизинга автомобиль регистрируется на лизинговую компанию, при этом вы пользуетесь им как полноправный владелец. После внесения последнего платежа автомобиль переоформляется в вашу собственность." },
    ],
    applyLabel: "Оставить заявку",
    applyTitle: "Начните путь\nк своей мечте",
    applyDesc: "Менеджер свяжется с вами в течение 15 минут в рабочее время и ответит на все вопросы.",
    applyPerks: ["Решение за 1 рабочий день", "Бесплатная консультация"],
    formTitle: "Заполните форму",
    fieldName: "Ваше имя",
    namePlaceholder: "Баходир Каримов",
    fieldPhone: "Номер телефона",
    fieldModel: "Интересующая модель",
    sendBtn: "Отправить заявку",
    footerDesc: "Лизинговые решения для физических и юридических лиц в Узбекистане. Быстро, прозрачно, выгодно.",
    footerNav: "Навигация",
    footerNavLinks: ["Калькулятор", "Каталог моделей", "Как оформить", "FAQ", "Оставить заявку"],
    footerContacts: "Контакты",
    footerPhone: "Телефон",
    footerEmail: "Email",
    footerAddress: "Адрес",
    footerAddressVal: "Ойбек 12, 100101, Ташкент, Узбекистан",
    footerHours: "Режим работы",
    footerHoursVal: "Пн–Пт: 9:00–18:00",
    footerCopy: "© 2026 BNK Finance Leasing. Все права защищены.",
    footerLicense: "Лицензия ЦБ РУз | Условия лизинга носят информационный характер",
    callBtn: "Позвонить",
    successTitle: "Заявка принята!",
    successDesc: "Спасибо за обращение в",
    successDesc2: "Наш менеджер свяжется с вами в течение",
    successMin: "15 минут",
    successTime: "в рабочее время (Пн–Пт, 9:00–18:00).",
    successCards: [
      { icon: "📞", label: "Звонок менеджера", sub: "до 15 минут" },
      { icon: "📋", label: "Рассмотрение", sub: "1 рабочий день" },
      { icon: "🚗", label: "Получение авто", sub: "в день одобрения" },
    ],
    backBtn: "Вернуться на сайт",
    callUs: "Позвонить нам",
    footerCopyShort: "© 2026 BNK Finance Leasing · Лицензия ЦБ РУз",
    modelTags: ["Доступный седан", "Бизнес-класс", "Премиум SUV", "Семейный минивэн", "Флагман", "Хит продаж", "Компактный SUV", "Грузовой фургон", "Мультивэн", "Городской SUV"],
    allModels: "Все модели",
    showMoreModels: "Показать ещё модели",
    hideModels: "Скрыть модели",
    telegramSupport: "Чат с менеджером",
  },
  UZ: {
    partner: "O'zbekistonda KIA rasmiy hamkori",
    nav: ["Biz haqida", "Lizing", "Kontaktlar", "Yangiliklar"],
    navHrefs: ["#/about", "#calc", "#apply", null],
    newsSubmenu: ["Barcha yangiliklar", "Aksiyalar", "Tadbirlar"],
    newsSubmenuHrefs: ["#/news", "#/news/promo", "#/news/events"],
    applyBtn: "Ariza qoldirish",
    aboutTitle: "Kompaniya haqida",
    aboutDesc: "Biz — BNK Financial Group kompaniyasining filiali bo'lib, Tashkentda zamonaviy lizing xizmatlarini ko'rsatamiz va Koreyaning ilg'or moliyaviy tajribisiga asoslanamiz.\n\n\"Mijoz birinchi\" tamoyiliga amal qilib, biz biznes va shaxsiy shaxslar uchun ishonchli va qulay lizing yechimlarini taklif etamiz, avtomobil va texnikani qulay shartlarda sotib olishga yordam beramiz.\n\nMahalliy bozor bilan birga rivojlanib, biz moliyaviy o'sish va sizning rejalaringizni amalga oshirish uchun yangi imkoniyatlarni ochib beramiz.",
    heroLine1: "Moliyaviy",
    heroLine2: "yechimlar",
    heroLineRed: "siz va",
    heroLine3: "biznesingiz uchun",
    heroDesc: "Shaxsiy va biznes maqsadlari uchun mol-mulk lizingi — sizga mos shartlarda.",
    calcLeasingBtn: "Lizingni hisoblash",
    getConsultationBtn: "Konsultatsiya olish",
    stats: [{ v: "30% dan", l: "boshlang'ich" }, { v: "48 oy", l: "muddat" }, { v: "1 kun", l: "tasdiqlash" }],
    calcCta: "To'lovni hisoblash",
    viewModels: "Modellarni ko'rish",
    monthlyBadge: "Oylik to'lov",
    monthlyFrom: "2 900 000 so'mdan",
    trust: ["✓ KIA rasmiy dileri", "✓ Belgilangan stavka"],
    calcLabel: "Lizing kalkulyatori",
    calcTitle: "To'lovni hoziroq\nhisoblang",
    calcDesc: "Model, boshlang'ich to'lov va muddatni tanlang — to'lovni darhol ko'rasiz.",
    modelLabel: "Avtomobil modeli",
    advLabel: "Boshlang'ich to'lov",
    termLabel: "Lizing muddati",
    sumLabel: "Summa:",
    monthlyLabel: "Oylik to'lov",
    perMonth: "so'm / oy",
    perAnnum: "% yillik",
    calcRows: ["Avtomobil narxi", "Boshlang'ich to'lov", "Muddat", "Stavka", "Jami to'lov"],
    months: "oy",
    monthShort: "oy",
    minLabel: "Min",
    maxLabel: "Maks",
    stepLabel: "Bosqich",
    rate: "18% yillik",
    leaveApp: "Ariza qoldirish",
    calcNote: "Hisob taxminiy. Yakuniy shartlar menejer bilan aniqlanadi.",
    catalogLabel: "Katalog",
    catalogTitle: "KIA ning mashhur modellari",
    priceFrom: "Narxi dan",
    sum: "so'm",
    calcWith: "Boshlang'ich 30% / 36 oy",
    orderBtn: "Hisoblash",
    stepsLabel: "Oddiy va tez",
    stepsTitle: "Lizingni qanday rasmiylashtirish",
    steps: [
      { title: "Ariza qoldiring", desc: "Onlayn shaklni to'ldiring yoki bizga qo'ng'iroq qiling — menejer 15 daqiqa ichida bog'lanadi." },
      { title: "1 kunda tasdiqlash", desc: "Hujjatlarni tekshirib, qaror qabul qilamiz. Faqat pasport va STIR — boshqa hech narsa kerak emas." },
      { title: "Avtomobilni oling", desc: "Shartnomani imzolang, boshlang'ich to'lovni kiriting — va o'sha kuni yangi KIA da ketasiz." },
    ],
    reviewsLabel: "Mijozlar fikrlari",
    reviewsTitle: "Bizga ishonishadi",
    cases: [
      { name: "Baxrom T.", job: "Tadbirkor", model: "KIA Sportage", text: "Lizingni bir kunda rasmiylashtiradim. Minimal hujjatlar, ajoyib shartlar. Endi barcha hamkorlarimga tavsiya qilaman.", photo: reviewBakhromPhoto },
      { name: "Nilufar K.", job: "«Nova Trade» MChJ direktori", model: "KIA Sorento", text: "Atigi 30% boshlang'ich to'lov bilan KIA Sorento oldim. To'lov qulay, yashirin komissiyalar yo'q.", photo: reviewNilufarPhoto },
      { name: "Otabek R.", job: "Frilanser", model: "KIA Seltos", text: "Lizing faqat biznes uchun deb o'ylardim. Aslida hammasi oddiy. BNK Finance ni tavsiya qilaman!", photo: reviewOtabekPhoto },
    ],
    faqLabel: "FAQ",
    faqTitle: "Ko'p so'raladigan savollar",
    faqs: [
      { q: "Minimal boshlang'ich to'lov qancha?", a: "Minimal boshlang'ich to'lov avtomobil narxining 30% ini tashkil etadi. Boshlang'ich to'lov qanchalik yuqori bo'lsa, oylik to'lov shunchalik past bo'ladi." },
      { q: "Avtomobilni muddatidan oldin sotib olish mumkinmi?", a: "Ha, jarima sanksiyalarisiz istalgan vaqtda muddatidan oldin to'lash mumkin. Siz asosiy qarzning qolgan summasini to'laysiz." },
      { q: "Qanday hujjatlar kerak?", a: "Pasport, STIR va ro'yxatga olish guvohnomasi (yuridik shaxslar uchun — ustav va direktor tayinlash qarori). Daromad ma'lumotnomasi talab qilinmaydi." },
      { q: "Yashirin komissiyalar bormi?", a: "Yo'q. Barcha shartlar shartnomada ko'rsatilgan. Imzolashdan oldin lizingning to'liq qiymatini ko'rasiz." },
      { q: "Avtomobil kimning nomiga ro'yxatga olinadi?", a: "Avtomobil to'liq to'lov amalga oshirilgunga qadar lizing kompaniyasi nomiga ro'yxatga olinadi, shundan so'ng sizning mulkingizga o'tadi." },
    ],
    applyLabel: "Ariza qoldirish",
    applyTitle: "O'z KIA ingiz sari\nyo'l boshlang",
    applyDesc: "Menejer ish vaqtida 15 daqiqa ichida siz bilan bog'lanadi va barcha savollarga javob beradi.",
    applyPerks: ["1 ish kunida qaror", "Bepul konsultatsiya"],
    formTitle: "Shaklni to'ldiring",
    fieldName: "Ismingiz",
    namePlaceholder: "Baxtiyor Karimov",
    fieldPhone: "Telefon raqam",
    fieldModel: "Qiziqtirgan model",
    sendBtn: "Ariza yuborish",
    footerDesc: "O'zbekistonda jismoniy va yuridik shaxslar uchun lizing yechimlari. Tez, shaffof, foydali.",
    footerNav: "Navigatsiya",
    footerNavLinks: ["Kalkulyator", "Modellar katalogi", "Rasmiylashtiruv", "FAQ", "Ariza qoldirish"],
    footerContacts: "Kontaktlar",
    footerPhone: "Telefon",
    footerEmail: "Email",
    footerAddress: "Manzil",
    footerAddressVal: "Oybek 12, 100101, Toshkent, O'zbekiston",
    footerHours: "Ish vaqti",
    footerHoursVal: "Du–Ju: 9:00–18:00",
    footerCopy: "© 2026 BNK Finance Leasing. Barcha huquqlar himoyalangan.",
    footerLicense: "O'zbekiston MB litsenziyasi | Lizing shartlari ma'lumotnoma xususiyatiga ega",
    callBtn: "Qo'ng'iroq",
    successTitle: "Ariza qabul qilindi!",
    successDesc: "Murojaat uchun rahmat",
    successDesc2: "Menejerimiz",
    successMin: "15 daqiqa",
    successTime: "ichida ish vaqtida siz bilan bog'lanadi (Du–Ju, 9:00–18:00).",
    successCards: [
      { icon: "📞", label: "Menejer qo'ng'irog'i", sub: "15 daqiqagacha" },
      { icon: "📋", label: "Ko'rib chiqish", sub: "1 ish kuni" },
      { icon: "🚗", label: "Avtomobil olish", sub: "tasdiqlangan kuni" },
    ],
    backBtn: "Saytga qaytish",
    callUs: "Qo'ng'iroq qilish",
    footerCopyShort: "© 2026 BNK Finance Leasing · O'zbekiston MB litsenziyasi",
    modelTags: ["Qulay sedan", "Biznes-klass", "Premium SUV", "Oilaviy miniven", "Flagman", "Eng ko'p sotilgan", "Kompakt SUV", "Yuk furgoni", "Multiven", "Shahar SUV"],
    allModels: "Barcha modellar",
    showMoreModels: "Yana modellarni ko'rsatish",
    hideModels: "Modellarni yashirish",
    telegramSupport: "Menejer bilan chat",
  },
  EN: {
    partner: "Official KIA partner in Uzbekistan",
    nav: ["About us", "Leasing", "Contacts", "News"],
    navHrefs: ["#/about", "#calc", "#apply", null],
    newsSubmenu: ["All news", "Promotions", "Events"],
    newsSubmenuHrefs: ["#/news", "#/news/promo", "#/news/events"],
    applyBtn: "Apply now",
    aboutTitle: "About us",
    aboutDesc: "We are a subsidiary of BNK Financial Group, specializing in modern leasing in Tashkent and backed by Korea's advanced financial expertise.\n\nPrioritizing our customers, we offer reliable and affordable leasing solutions for businesses and individuals, helping you acquire vehicles and equipment on favorable terms.\n\nGrowing with the local market, we create new opportunities for financial growth and achieving your goals.",
    heroLine1: "Financial",
    heroLine2: "solutions",
    heroLineRed: "for you",
    heroLine3: "and your business",
    heroDesc: "Property leasing for personal and business needs — on terms that fit you.",
    calcLeasingBtn: "Calculate leasing",
    getConsultationBtn: "Get a consultation",
    stats: [{ v: "from 30%", l: "down payment" }, { v: "up to 48 months", l: "term" }, { v: "1 day", l: "approval" }],
    calcCta: "Calculate payment",
    viewModels: "View models",
    monthlyBadge: "Monthly payment",
    monthlyFrom: "from 2,900,000 UZS",
    trust: ["✓ Official KIA dealer", "✓ Fixed rate"],
    calcLabel: "Leasing calculator",
    calcTitle: "Calculate your payment\nright now",
    calcDesc: "Choose a model, down payment and term — see the payment instantly.",
    modelLabel: "Car model",
    advLabel: "Down payment",
    termLabel: "Leasing term",
    sumLabel: "Amount:",
    monthlyLabel: "Monthly payment",
    perMonth: "UZS / month",
    perAnnum: "% per annum",
    calcRows: ["Car price", "Down payment", "Term", "Rate", "Total overpayment"],
    months: "months",
    monthShort: "mo.",
    minLabel: "Min",
    maxLabel: "Max",
    stepLabel: "Step",
    rate: "18% per annum",
    leaveApp: "Apply now",
    calcNote: "This is a preliminary estimate. Final terms are confirmed with a manager.",
    catalogLabel: "Catalog",
    catalogTitle: "Popular KIA models",
    priceFrom: "Price from",
    sum: "UZS",
    calcWith: "At 30% down / 36 mo.",
    orderBtn: "Calculate",
    stepsLabel: "Simple and fast",
    stepsTitle: "How to get a lease",
    steps: [
      { title: "Submit a request", desc: "Fill out the form online or call us — a manager will contact you within 15 minutes." },
      { title: "Approval in 1 day", desc: "We check the documents and make a decision. Just a passport and tax ID — nothing else." },
      { title: "Get your car", desc: "Sign the contract, pay the down payment — and drive away in a new KIA the same day." },
    ],
    reviewsLabel: "Customer reviews",
    reviewsTitle: "Trusted by our clients",
    cases: [
      { name: "Bakhrom T.", job: "Entrepreneur", model: "KIA Sportage", text: "Got my lease done in one day. Minimal paperwork, great terms. I recommend it to all my partners now.", photo: reviewBakhromPhoto },
      { name: "Nilufar K.", job: "CEO, Nova Trade LLC", model: "KIA Sorento", text: "Was able to get a KIA Sorento with just a 30% down payment. Comfortable payment, no hidden fees.", photo: reviewNilufarPhoto },
      { name: "Otabek R.", job: "Freelancer", model: "KIA Seltos", text: "Thought leasing was only for business. Turns out it's simple. I recommend BNK Finance!", photo: reviewOtabekPhoto },
    ],
    faqLabel: "FAQ",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "What's the minimum down payment?", a: "The standard down payment is from 30% of the car's price. Under certain conditions (for example, for corporate clients or repeat customers) the down payment can be calculated individually. Ask our manager — we'll find the best option for your situation." },
      { q: "Can I pay off the car early?", a: "Yes. You can pay off the lease in full at any point during the contract. Early payoff comes with a minimal fee, and the overpayment is recalculated — you only pay for the time you actually used it." },
      { q: "What documents do I need?", a: "For individuals: passport (ID card), registration certificate, income statement. For legal entities: incorporation documents, state registration certificate, company details. In some cases we may request additional documents — the manager will let you know in advance." },
      { q: "Are there any hidden fees?", a: "No. All payments and terms are fixed in the contract before signing. You know the full cost of the lease and payment schedule in advance — no extra charges along the way." },
      { q: "Whose name is the car registered under?", a: "During the lease term the car is registered to the leasing company, while you use it as the full owner. After the final payment, the car is transferred into your ownership." },
    ],
    applyLabel: "Apply now",
    applyTitle: "Start your journey\nto your KIA",
    applyDesc: "A manager will contact you within 15 minutes during business hours and answer all your questions.",
    applyPerks: ["Decision within 1 business day", "Free consultation"],
    formTitle: "Fill out the form",
    fieldName: "Your name",
    namePlaceholder: "John Smith",
    fieldPhone: "Phone number",
    fieldModel: "Model of interest",
    sendBtn: "Submit request",
    footerDesc: "Leasing solutions for individuals and businesses in Uzbekistan. Fast, transparent, and beneficial.",
    footerNav: "Navigation",
    footerNavLinks: ["Calculator", "Model catalog", "How to apply", "FAQ", "Apply now"],
    footerContacts: "Contacts",
    footerPhone: "Phone",
    footerEmail: "Email",
    footerAddress: "Address",
    footerAddressVal: "Oybek 12, 100101, Tashkent, Uzbekistan",
    footerHours: "Working hours",
    footerHoursVal: "Mon–Fri: 9:00 AM–6:00 PM",
    footerCopy: "© 2026 BNK Finance Leasing. All rights reserved.",
    footerLicense: "Licensed by the Central Bank of Uzbekistan | Leasing terms are for informational purposes only",
    callBtn: "Call",
    successTitle: "Request received!",
    successDesc: "Thank you for reaching out to",
    successDesc2: "Our manager will contact you within",
    successMin: "15 minutes",
    successTime: "during business hours (Mon–Fri, 9:00 AM–6:00 PM).",
    successCards: [
      { icon: "📞", label: "Manager call", sub: "within 15 minutes" },
      { icon: "📋", label: "Review", sub: "1 business day" },
      { icon: "🚗", label: "Get the car", sub: "on approval day" },
    ],
    backBtn: "Back to site",
    callUs: "Call us",
    footerCopyShort: "© 2026 BNK Finance Leasing · Licensed by the Central Bank of Uzbekistan",
    modelTags: ["Affordable sedan", "Business class", "Premium SUV", "Family minivan", "Flagship", "Best seller", "Compact SUV", "Cargo van", "Multi-purpose van", "Urban SUV"],
    allModels: "All models",
    showMoreModels: "Show more models",
    hideModels: "Hide models",
    telegramSupport: "Chat with a manager",
  },
  KR: {
    partner: "우즈베키스탄 KIA 공식 파트너",
    nav: ["저희 소개", "리스", "연락처", "뉴스"],
    navHrefs: ["#/about", "#calc", "#apply", null],
    newsSubmenu: ["모든 뉴스", "프로모션", "이벤트"],
    newsSubmenuHrefs: ["#/news", "#/news/promo", "#/news/events"],
    applyBtn: "신청하기",
    aboutTitle: "회사 소개",
    aboutDesc: "우리는 BNK Financial Group의 자회사로서 태시켄트에서 현대적인 리스 서비스를 제공하며 한국의 선진 금융 전문성을 바탕으로 합니다.\n\n고객 최우선 원칙을 따르며 기업과 개인을 위한 신뢰할 수 있고 저렴한 리스 솔루션을 제공하여 유리한 조건으로 차량 및 장비를 구입할 수 있도록 돕습니다.\n\n현지 시장과 함께 성장하면서 금융 성장과 목표 달성의 새로운 기회를 창출합니다.",
    heroLine1: "당신과 사업을 위한",
    heroLine2: "맞춤",
    heroLineRed: "금융",
    heroLine3: "솔루션",
    heroDesc: "개인 및 사업 목적의 자산 리스 — 고객님께 맞는 조건으로 제공합니다.",
    calcLeasingBtn: "리스 계산하기",
    getConsultationBtn: "상담 받기",
    stats: [{ v: "30%부터", l: "선수금" }, { v: "48개월", l: "기간" }, { v: "1일", l: "승인" }],
    calcCta: "월 납입금 계산",
    viewModels: "모델 보기",
    monthlyBadge: "월 납입금",
    monthlyFrom: "2,900,000 UZS부터",
    trust: ["✓ KIA 공식 딜러", "✓ 고정 금리"],
    calcLabel: "리스 계산기",
    calcTitle: "지금 바로\n납입금을 계산하세요",
    calcDesc: "모델, 선수금, 기간을 선택하면 납입금을 바로 확인할 수 있습니다.",
    modelLabel: "차량 모델",
    advLabel: "선수금",
    termLabel: "리스 기간",
    sumLabel: "금액:",
    monthlyLabel: "월 납입금",
    perMonth: "UZS / 월",
    perAnnum: "% 연이율",
    calcRows: ["차량 가격", "선수금", "기간", "금리", "총 이자"],
    months: "개월",
    monthShort: "개월",
    minLabel: "최소",
    maxLabel: "최대",
    stepLabel: "단계",
    rate: "연 18%",
    leaveApp: "신청하기",
    calcNote: "본 계산은 예상치이며, 최종 조건은 담당 매니저가 확인해 드립니다.",
    catalogLabel: "카탈로그",
    catalogTitle: "인기 KIA 모델",
    priceFrom: "시작 가격",
    sum: "UZS",
    calcWith: "선수금 30% / 36개월 기준",
    orderBtn: "계산하기",
    stepsLabel: "간편하고 빠르게",
    stepsTitle: "리스 신청 방법",
    steps: [
      { title: "신청서 제출", desc: "온라인 양식을 작성하거나 전화 주시면 15분 이내에 매니저가 연락드립니다." },
      { title: "1일 이내 승인", desc: "서류를 확인하고 결정을 내립니다. 여권과 세금 번호만 있으면 됩니다." },
      { title: "차량 인수", desc: "계약서에 서명하고 선수금을 납부하면 당일 새 KIA를 타고 떠나실 수 있습니다." },
    ],
    reviewsLabel: "고객 후기",
    reviewsTitle: "고객이 신뢰하는 브랜드",
    cases: [
      { name: "바흐롬 T.", job: "사업가", model: "KIA Sportage", text: "하루 만에 리스를 완료했습니다. 서류도 적고 조건도 훌륭해서 이제 모든 파트너에게 추천하고 있습니다.", photo: reviewBakhromPhoto },
      { name: "닐루파르 K.", job: "Nova Trade 대표이사", model: "KIA Sorento", text: "선수금 30%만으로 KIA Sorento를 구매할 수 있었습니다. 납입금도 부담 없고 숨은 수수료도 없습니다.", photo: reviewNilufarPhoto },
      { name: "오타벡 R.", job: "프리랜서", model: "KIA Seltos", text: "리스는 사업자만 가능한 줄 알았는데, 알고 보니 정말 간단했습니다. BNK Finance를 추천합니다!", photo: reviewOtabekPhoto },
    ],
    faqLabel: "자주 묻는 질문",
    faqTitle: "자주 묻는 질문",
    faqs: [
      { q: "최소 선수금은 얼마인가요?", a: "기본 선수금은 차량 가격의 30%부터입니다. 법인 고객이거나 재이용 고객인 경우 등 특정 조건에서는 선수금이 개별적으로 산정될 수 있습니다. 담당 매니저에게 문의하시면 상황에 맞는 최적의 조건을 찾아드립니다." },
      { q: "차량을 조기에 상환할 수 있나요?", a: "네. 계약 기간 중 언제든지 리스를 전액 상환할 수 있습니다. 조기 상환 시 최소한의 수수료가 부과되며, 이자는 실제 이용 기간에 맞춰 재계산됩니다." },
      { q: "어떤 서류가 필요한가요?", a: "개인: 여권(ID 카드), 주민등록증, 소득 증명서. 법인: 설립 서류, 국가 등록 증명서, 회사 정보. 경우에 따라 추가 서류를 요청할 수 있으며, 이 경우 매니저가 사전에 안내해 드립니다." },
      { q: "숨은 수수료가 있나요?", a: "없습니다. 모든 납입금과 조건은 계약 체결 전에 계약서에 명시됩니다. 리스 총비용과 납입 일정을 미리 확인할 수 있으며, 진행 중 추가 비용은 발생하지 않습니다." },
      { q: "차량은 누구의 명의로 등록되나요?", a: "리스 기간 동안 차량은 리스 회사 명의로 등록되며, 고객님은 완전한 소유자처럼 차량을 이용하실 수 있습니다. 마지막 납입이 완료되면 차량은 고객님의 소유로 이전됩니다." },
    ],
    applyLabel: "신청하기",
    applyTitle: "당신의 KIA를 향한\n여정을 시작하세요",
    applyDesc: "영업시간 내 15분 이내에 매니저가 연락드려 모든 문의에 답변해 드립니다.",
    applyPerks: ["영업일 기준 1일 이내 결정", "무료 상담"],
    formTitle: "양식을 작성해 주세요",
    fieldName: "성함",
    namePlaceholder: "김민준",
    fieldPhone: "전화번호",
    fieldModel: "관심 모델",
    sendBtn: "신청서 보내기",
    footerDesc: "우즈베키스탄의 개인 및 법인을 위한 리스 솔루션. 빠르고 투명하며 유익합니다.",
    footerNav: "메뉴",
    footerNavLinks: ["계산기", "모델 카탈로그", "신청 방법", "자주 묻는 질문", "신청하기"],
    footerContacts: "연락처",
    footerPhone: "전화번호",
    footerEmail: "이메일",
    footerAddress: "주소",
    footerAddressVal: "Oybek 12, 100101, 타슈켄트, 우즈베키스탄",
    footerHours: "운영시간",
    footerHoursVal: "월–금: 9:00–18:00",
    footerCopy: "© 2026 BNK Finance Leasing. 모든 권리 보유.",
    footerLicense: "우즈베키스탄 중앙은행 라이선스 | 리스 조건은 정보 제공 목적입니다",
    callBtn: "전화하기",
    successTitle: "신청이 접수되었습니다!",
    successDesc: "문의해 주셔서 감사합니다",
    successDesc2: "담당 매니저가",
    successMin: "15분",
    successTime: "이내에 영업시간(월–금, 9:00–18:00) 중 연락드리겠습니다.",
    successCards: [
      { icon: "📞", label: "매니저 전화", sub: "15분 이내" },
      { icon: "📋", label: "서류 검토", sub: "영업일 1일" },
      { icon: "🚗", label: "차량 인수", sub: "승인 당일" },
    ],
    backBtn: "사이트로 돌아가기",
    callUs: "전화 문의",
    footerCopyShort: "© 2026 BNK Finance Leasing · 우즈베키스탄 중앙은행 라이선스",
    modelTags: ["합리적인 세단", "비즈니스 클래스", "프리미엄 SUV", "패밀리 미니밴", "플래그십", "베스트셀러", "컴팩트 SUV", "화물밴", "다목적 밴", "도심형 SUV"],
    allModels: "전체 모델",
    showMoreModels: "모델 더 보기",
    hideModels: "모델 숨기기",
    telegramSupport: "매니저와 채팅",
  },
} as const;

type Translations = typeof T.RU | typeof T.UZ | typeof T.EN | typeof T.KR;

const LangCtx = createContext<{ lang: Lang; t: Translations; setLang: (l: Lang) => void }>({
  lang: "RU", t: T.RU, setLang: () => {},
});

const useLang = () => useContext(LangCtx);

// ─── THEME ───────────────────────────────────────────────────────────────────

type Theme = "light" | "dark";

const ThemeCtx = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light", toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeCtx);

function Logo({ className }: { className: string }) {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "dark" ? logoDarkSrc : logoLightSrc}
      alt="BNK Finance Leasing"
      className={className}
    />
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const MODELS = [
  { id: "k3", name: "KIA K3", trim: "K3 Classic 1.4 MPI 6MT FWD", price: 219900000, img: kiaK3Img, type: "Sedan" },
  { id: "k5", name: "KIA K5", trim: "K5 Comfort 1.5 T-GDI 7DCT FWD", price: 379900000, img: kiaK5Img, type: "Sedan" },
  { id: "sorento", name: "KIA Sorento", trim: "Sorento Comfort 2.5 MPI 180 hp", price: 636900000, img: kiaSorentoImg, type: "SUV" },
  { id: "carnival", name: "KIA Carnival", trim: "Carnival Comfort 3.5 MPI 272 hp", price: 624900000, img: kiaCarnivalImg, type: "Minivan" },
  { id: "k8", name: "KIA K8", trim: "K8 Prestige FWD 3.5 GDI + MPI 8AT FWD", price: 789900000, img: kiaK8Img, type: "Sedan" },
  { id: "sportage", name: "KIA Sportage", trim: "Sportage Luxe 2.0 MPI 156 hp FWD", price: 454900000, img: kiaSportageImg, type: "SUV" },
  { id: "seltos", name: "KIA Seltos", trim: "Seltos Style 2.0 MPI Atkinson 147 hp", price: 399900000, img: kiaSeltosImg, type: "SUV" },
  { id: "bongo", name: "KIA Bongo III", trim: "Bongo III Standard Cab Chassis J2 Diesel 80 hp", price: 279900000, img: kiaBongoImg, type: "Truck" },
  { id: "carens", name: "KIA Carens", trim: "Carens Comfort 1.5 MPI 115 hp", price: 339900000, img: kiaCarensImg, type: "Minivan" },
  { id: "sonet", name: "KIA Sonet", trim: "Sonet Classic 1.5 MPI 115 hp", price: 199900000, img: kiaSonetImg, type: "SUV" },
];

const RED = "#BB162B";

const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(Math.round(n));

// Таблица процентных ставок (годовые %) в зависимости от взноса и срока
const RATES_TABLE: Record<number, Record<number, number>> = {
  30: { 12: 0.13, 18: 0.17, 24: 0.20, 36: 0.23, 48: 0.24 },
  35: { 12: 0.11, 18: 0.16, 24: 0.18, 36: 0.22, 48: 0.23 },
  40: { 12: 0.10, 18: 0.15, 24: 0.18, 36: 0.21, 48: 0.23 },
  45: { 12: 0.08, 18: 0.14, 24: 0.17, 36: 0.21, 48: 0.22 },
  50: { 12: 0.05, 18: 0.11, 24: 0.14, 36: 0.18, 48: 0.21 },
  55: { 12: 0.05, 18: 0.09, 24: 0.13, 36: 0.18, 48: 0.20 },
  60: { 12: 0.00, 18: 0.07, 24: 0.10, 36: 0.15, 48: 0.18 },
  65: { 12: 0.00, 18: 0.05, 24: 0.09, 36: 0.13, 48: 0.17 },
  70: { 12: 0.00, 18: 0.05, 24: 0.06, 36: 0.12, 48: 0.15 },
};

function getRate(downPct: number, months: number): number {
  // Найти ближайший доступный процент взноса
  const availableDowns = [30, 35, 40, 45, 50, 55, 60, 65, 70];
  let closestDown = availableDowns[0];
  for (const down of availableDowns) {
    if (down <= downPct) {
      closestDown = down;
    }
  }

  // Найти ближайший доступный срок
  const availableMonths = [12, 18, 24, 36, 48];
  let closestMonths = availableMonths[0];
  for (const m of availableMonths) {
    if (m <= months) {
      closestMonths = m;
    }
  }

  return RATES_TABLE[closestDown]?.[closestMonths] ?? 0.18;
}

function calcMonthly(price: number, downPct: number, months: number) {
  const principal = price * (1 - downPct / 100);
  const annualRate = getRate(downPct, months);
  const rate = annualRate / 12;
  if (months === 0) return principal;
  if (rate === 0) return principal / months;
  return (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
}

// ─── HEADER ──────────────────────────────────────────────────────────────────

const LANG_ORDER: Lang[] = ["UZ", "RU", "EN", "KR"];
const langInfo: Record<Lang, { code: string; name: string }> = {
  UZ: { code: "UZ", name: "O'zbekcha" },
  RU: { code: "RU", name: "Русский" },
  EN: { code: "EN", name: "English" },
  KR: { code: "KR", name: "한국어" },
};

function LangSwitcher({ align = "right", direction = "down" }: { align?: "left" | "right"; direction?: "down" | "up" }) {
  const { lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setLangOpen((v) => !v)}
        className="flex items-center gap-1.5 pl-3 pr-2.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shrink-0"
      >
        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-wider">{langInfo[lang].code}</span>
        <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-100">{langInfo[lang].name}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-3 h-3 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {langOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
          <div
            className={`absolute ${align === "right" ? "right-0" : "left-0"} ${
              direction === "up" ? "bottom-full mb-2" : "top-full mt-2"
            } w-48 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 z-50 overflow-hidden`}
          >
            {LANG_ORDER.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setLangOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold transition-colors ${
                  lang === l
                    ? "text-[#BB162B]"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 w-6 shrink-0 text-left">{langInfo[l].code}</span>
                <span className="flex-1 text-left">{langInfo[l].name}</span>
                {lang === l && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#BB162B] shrink-0">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Header({ onCta }: { onCta: () => void }) {
  const { t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="shrink-0 flex items-center gap-2 group">
          <Logo className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          {t.nav.map((label, i) => {
            const href = t.navHrefs[i];
            const hasSubmenu = href === null;
            return hasSubmenu ? (
              <div key={label} className="relative group">
                <button
                  className="hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                >
                  {label}
                  <svg className="inline-block w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  {t.newsSubmenu?.map((item, j) => (
                    <a
                      key={item}
                      href={t.newsSubmenuHrefs[j]}
                      onClick={(e) => {
                        e.preventDefault();
                        const submenuHref = t.newsSubmenuHrefs[j];
                        if (submenuHref.startsWith("#/")) {
                          window.location.hash = submenuHref;
                        }
                      }}
                      className="block px-4 py-3 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  if (href.startsWith("#/")) {
                    window.location.hash = href;
                  } else {
                    window.location.hash = '';
                    setTimeout(() => {
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }
                }}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {label}
              </a>
            );
          }
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onCta}
            className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#BB162B] hover:bg-[#961020] transition-colors shrink-0"
          >
            {t.applyBtn}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shrink-0"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.36-6.36l-1.06 1.06M6.7 17.3l-1.06 1.06m0-12.72L6.7 6.7m10.6 10.6l1.06 1.06M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.75 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.598.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <LangSwitcher />
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700 shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[110] bg-white dark:bg-[#0a0a0c] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-4 h-16">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700 shrink-0"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <Logo className="h-7 w-auto object-contain" />
          </div>

          <nav className="flex flex-col px-6 py-4 gap-1">
            {t.nav.map((label, i) => {
              const href = t.navHrefs[i];
              const hasSubmenu = href === null;
              return hasSubmenu ? (
                <div key={label} className="border-b border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                    className="w-full text-left py-3 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors flex justify-between items-center"
                  >
                    {label}
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  {openDropdown === i && (
                    <div className="pl-4 bg-gray-50 dark:bg-gray-800/50 rounded">
                      {t.newsSubmenu?.map((item, j) => (
                        <a
                          key={item}
                          href={t.newsSubmenuHrefs[j]}
                          onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false);
                            setOpenDropdown(null);
                            const submenuHref = t.newsSubmenuHrefs[j];
                            if (submenuHref.startsWith("#/")) {
                              window.location.hash = submenuHref;
                            }
                          }}
                          className="block py-2 text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    if (href.startsWith("#/")) {
                      window.location.hash = href;
                    } else {
                      window.location.hash = '';
                      setTimeout(() => {
                        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="py-3 text-lg font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="px-6 mt-2 flex flex-col gap-3">
            <a
              href="tel:+998931837779"
              className="w-full py-3.5 rounded-2xl border-2 border-[#BB162B] text-sm font-bold text-[#BB162B] flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {t.callBtn}
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                onCta();
              }}
              className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-[#BB162B] hover:bg-[#961020] transition-colors"
            >
              {t.applyBtn}
            </button>
          </div>

          <div className="mt-auto px-6 py-6 flex items-center justify-between">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700 shrink-0"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.36-6.36l-1.06 1.06M6.7 17.3l-1.06 1.06m0-12.72L6.7 6.7m10.6 10.6l1.06 1.06M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.75 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.598.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <LangSwitcher align="right" direction="up" />
          </div>
        </div>
    )}
    </>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero({ onCta }: { onCta: () => void }) {
  const { t } = useLang();
  return (
    <section id="hero" className="relative pt-20 pb-16 min-h-[620px] sm:min-h-[680px] lg:min-h-0 md:pt-32 lg:pb-20 overflow-hidden bg-white dark:bg-[#0a0a0c]">
      {/* Background Photo — full-bleed behind content on mobile, right-side panel on desktop */}
      <div className="absolute inset-0 w-full lg:w-3/4 lg:left-auto lg:right-0 h-full pointer-events-none overflow-hidden">
        <img
          src={heroBgImg}
          alt="BNK Finance Leasing"
          className="w-full h-full object-cover object-[68%_center] lg:object-right"
        />
        {/* Mobile/tablet: fade from white behind the headline down to a lighter veil over the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 via-40% to-white/25 dark:from-[#0a0a0c] dark:via-[#0a0a0c]/85 dark:to-[#0a0a0c]/30 lg:hidden" />
        {/* Desktop: fade from white on the left where the text sits */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/80 via-35% to-transparent dark:from-[#0a0a0c] dark:via-[#0a0a0c]/80 dark:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-2 pb-2 sm:py-6">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight mb-4 sm:mb-5">
            {t.heroLine1}<br />
            {t.heroLine2}<br />
            <span className="text-[#BB162B]">{t.heroLineRed}</span><br />
            {t.heroLine3}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
            {t.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={() => document.getElementById("calc")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 rounded-lg text-white font-bold text-sm bg-[#BB162B] hover:bg-[#961020] transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow active:scale-95"
            >
              <span>{t.calcLeasingBtn}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <a
              href="#apply"
              className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#BB162B] transition-colors underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 hover:decoration-[#BB162B]"
            >
              {t.getConsultationBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TRUST BAR ───────────────────────────────────────────────────────────────

function TrustBar() {
  const { t } = useLang();
  return (
    <section className="bg-white dark:bg-[#0a0a0c] border-y border-gray-100 dark:border-gray-800 py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 mb-6 sm:mb-7">
          {t.stats.map((s) => (
            <div key={s.l} className="text-center px-2">
              <div className="text-xl sm:text-3xl font-black text-gray-900 dark:text-white">{s.v}</div>
              <div className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5 sm:mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-300 font-semibold">
          {t.trust.map((item) => (
            <div key={item} className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-900/60 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-red-100 dark:hover:border-red-900/50 transition-colors">
              <span className="text-[#BB162B] font-bold">✓</span>
              <span>{item.replace("✓ ", "")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function About({ onApplyClick }: { onApplyClick?: () => void }) {
  const { t } = useLang();
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
          <img
            src={aboutImage}
            alt={t.aboutTitle}
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            {t.aboutTitle}
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
            {t.aboutDesc}
          </p>
          <div className="flex gap-4">
            <button
              onClick={onApplyClick || (() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }))}
              className="px-6 md:px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#BB162B] hover:bg-[#961020] transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── NEWS PAGE ────────────────────────────────────────────────────────────────

function NewsPage({ onApplyClick }: { onApplyClick?: () => void }) {
  const { t, lang } = useLang();
  const [newsCategory, setNewsCategory] = useState<"all" | "promo" | "events">("all");
  const [selectedNewsItem, setSelectedNewsItem] = useState<any>(null);
  const [lightboxImage, setLightboxImage] = useState<{ images: string[]; index: number } | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const updateCategory = () => {
      const hash = window.location.hash;
      const category = hash === "#/news/promo" ? "promo" : hash === "#/news/events" ? "events" : "all";
      setNewsCategory(category);
      setSelectedNewsItem(null);
    };
    updateCategory();
    window.addEventListener("hashchange", updateCategory);
    return () => window.removeEventListener("hashchange", updateCategory);
  }, []);

  const newsData = {
    all: {
      RU: {
        title: "Все новости",
        items: [
          {
            title: "Стратегическое партнерство с ADM Global",
            date: "2026-09-20",
            desc: "Руководство BNK Finance Leasing подписало меморандум о взаимопонимании с ADM Global - лидером автомобильного рынка Узбекистана.",
            fullText: "Новый шаг к масштабированию и стратегическому партнерству!\n\nРуководство нашей компании подписало меморандум о взаимопонимании (MOU) с ADM Global - одним из лидеров автомобильного рынка Узбекистана (2-е место по продажам в стране).\n\nСотрудничество с CEO ADM Global Данияром Давлетьяровым открывает новые возможности:\n\n✔️ Поставка автомобилей и развитие лизинговых программ\n✔️ Укрепление позиций на местном рынке\n✔️ Обмен опытом и совместные проекты, включая визиты партнеров в Корею\n\nКроме того, в рамках поездки состоялась встреча с Чрезвычайным и Полномочным Послом Республики Корея в Узбекистане Вон До Ёном. Обсудили дальнейшую поддержку и укрепление деловых связей.\n\nДальше - больше! 💪",
            image: newsImg11
          }
        ]
      },
      UZ: {
        title: "Barcha yangiliklar",
        items: [
          {
            title: "ADM Global bilan strategik hamkorlik",
            date: "2026-09-20",
            desc: "BNK Finance Leasing rahbarligi O'zbekistondagi avtomobil bozorining lideriva - ADM Global bilan hamkorlik shartnomasi imzoladi.",
            fullText: "Kengaytirish va strategik hamkorlikka yangi qadam!\n\nBizning kompaniyaning rahbarligi O'zbekistondagi avtomobil bozorining liderlaridan biri ADM Global bilan o'zaro tushunish memorandumini (MOU) imzoladi (mamlakatda sotuv bo'yicha 2-o'rinni egallab turibdi).\n\nADM Global generaliy direktori Daniyor Davletbekov bilan hamkorlik yangi imkoniyatlarni ochib beradi:\n\n✔️ Avtomobillarni yetkazib berish va lizing dasturlarini rivojlantirish\n✔️ Mahalliy bozordagi pozitsiyalarni mustahkamlay\n✔️ Tajribani almashuv va koreyaliklarning vizitlari bo'lgan qo'shma loyihalar\n\nBundan tashqari, sayohat paytida Koreya Respublikasining Chekkalanmagan vakoili Vo Do Yenom bilan uchrashdi. Keyingi qo'llab-quvvatlash va biznes aloqalarini mustahkamlash haqida muhokamalik qildi.\n\nBundan keyin ko'proq bo'ladi! 💪",
            image: newsImg11
          }
        ]
      },
      EN: {
        title: "All News",
        items: [
          {
            title: "Strategic Partnership with ADM Global",
            date: "2026-09-20",
            desc: "BNK Finance Leasing leadership signed a Memorandum of Understanding with ADM Global, a leader in Uzbekistan's automotive market.",
            fullText: "A New Step Towards Scaling and Strategic Partnership!\n\nOur company's leadership signed a Memorandum of Understanding (MOU) with ADM Global - one of the leaders of the Uzbekistan automotive market (2nd place in national sales).\n\nCollaboration with ADM Global CEO Daniyar Davletbekov opens new opportunities:\n\n✔️ Vehicle supply and development of leasing programs\n✔️ Strengthening positions in the local market\n✔️ Exchange of experience and joint projects, including partner visits to Korea\n\nAdditionally, during the trip, a meeting was held with Won Do Yeon, the Extraordinary and Plenipotentiary Ambassador of the Republic of Korea in Uzbekistan. We discussed further support and strengthening of business relations.\n\nMore to come! 💪",
            image: newsImg11
          }
        ]
      },
      KR: {
        title: "모든 뉴스",
        items: [
          {
            title: "ADM Global과의 전략적 파트너십",
            date: "2026-09-20",
            desc: "BNK Finance Leasing 경영진이 우즈베키스탄 자동차 시장의 선도 기업인 ADM Global과 양해각서에 서명했습니다.",
            fullText: "확대 및 전략적 파트너십을 향한 새로운 걸음!\n\n당사 경영진이 우즈베키스탄 자동차 시장의 리더 중 하나인 ADM Global과 양해각서(MOU)를 체결했습니다(국내 판매량 2위).\n\nADM Global CEO인 Daniyar Davletbekov과의 협력은 새로운 기회를 제공합니다:\n\n✔️ 차량 공급 및 리스 프로그램 개발\n✔️ 현지 시장에서의 입지 강화\n✔️ 경험 교류 및 한국 방문을 포함한 공동 프로젝트\n\n또한 방문 중 우즈베키스탄의 주재 대사인 원도연 대사와의 회담이 개최되었습니다. 향후 지원과 비즈니스 관계 강화에 대해 논의했습니다.\n\n더 많은 것이 계속될 예정입니다! 💪",
            image: newsImg11
          }
        ]
      },
    },
    promo: {
      RU: { title: "Акции и предложения", items: [] },
      UZ: { title: "Aksiyalar va takliflar", items: [] },
      EN: { title: "Promotions & Offers", items: [] },
      KR: { title: "프로모션 및 제안", items: [] },
    },
    events: {
      RU: {
        title: "События",
        items: [
          {
            title: "Стратегическое партнерство с ADM Global",
            date: "2026-09-20",
            desc: "Руководство BNK Finance Leasing подписало меморандум о взаимопонимании с ADM Global - лидером автомобильного рынка Узбекистана.",
            fullText: "Новый шаг к масштабированию и стратегическому партнерству!\n\nРуководство нашей компании подписало меморандум о взаимопонимании (MOU) с ADM Global - одним из лидеров автомобильного рынка Узбекистана (2-е место по продажам в стране).\n\nСотрудничество с CEO ADM Global Данияром Давлетьяровым открывает новые возможности:\n\n✔️ Поставка автомобилей и развитие лизинговых программ\n✔️ Укрепление позиций на местном рынке\n✔️ Обмен опытом и совместные проекты, включая визиты партнеров в Корею\n\nКроме того, в рамках поездки состоялась встреча с Чрезвычайным и Полномочным Послом Республики Корея в Узбекистане Вон До Ёном. Обсудили дальнейшую поддержку и укрепление деловых связей.\n\nДальше - больше! 💪",
            image: newsImg11,
            images: [newsImg11, newsImg22, newsImg33, newsImg44, newsImg55]
          }
        ]
      },
      UZ: {
        title: "Tadbirlar",
        items: [
          {
            title: "ADM Global bilan strategik hamkorlik",
            date: "2026-09-20",
            desc: "BNK Finance Leasing rahbarligi O'zbekistondagi avtomobil bozorining lideriva - ADM Global bilan hamkorlik shartnomasi imzoladi.",
            fullText: "Kengaytirish va strategik hamkorlikka yangi qadam!\n\nBizning kompaniyaning rahbarligi O'zbekistondagi avtomobil bozorining liderlaridan biri ADM Global bilan o'zaro tushunish memorandumini (MOU) imzoladi (mamlakatda sotuv bo'yicha 2-o'rinni egallab turibdi).\n\nADM Global generaliy direktori Daniyor Davletbekov bilan hamkorlik yangi imkoniyatlarni ochib beradi:\n\n✔️ Avtomobillarni yetkazib berish va lizing dasturlarini rivojlantirish\n✔️ Mahalliy bozordagi pozitsiyalarni mustahkamlay\n✔️ Tajribani almashuv va koreyaliklarning vizitlari bo'lgan qo'shma loyihalar\n\nBundan tashqari, sayohat paytida Koreya Respublikasining Chekkalanmagan vakoili Vo Do Yenom bilan uchrashdi. Keyingi qo'llab-quvvatlash va biznes aloqalarini mustahkamlash haqida muhokamalik qildi.\n\nBundan keyin ko'proq bo'ladi! 💪",
            image: newsImg11,
            images: [newsImg11, newsImg22, newsImg33, newsImg44, newsImg55]
          }
        ]
      },
      EN: {
        title: "Events",
        items: [
          {
            title: "Strategic Partnership with ADM Global",
            date: "2026-09-20",
            desc: "BNK Finance Leasing leadership signed a Memorandum of Understanding with ADM Global, a leader in Uzbekistan's automotive market.",
            fullText: "A New Step Towards Scaling and Strategic Partnership!\n\nOur company's leadership signed a Memorandum of Understanding (MOU) with ADM Global - one of the leaders of the Uzbekistan automotive market (2nd place in national sales).\n\nCollaboration with ADM Global CEO Daniyar Davletbekov opens new opportunities:\n\n✔️ Vehicle supply and development of leasing programs\n✔️ Strengthening positions in the local market\n✔️ Exchange of experience and joint projects, including partner visits to Korea\n\nAdditionally, during the trip, a meeting was held with Won Do Yeon, the Extraordinary and Plenipotentiary Ambassador of the Republic of Korea in Uzbekistan. We discussed further support and strengthening of business relations.\n\nMore to come! 💪",
            image: newsImg11,
            images: [newsImg11, newsImg22, newsImg33, newsImg44, newsImg55]
          }
        ]
      },
      KR: {
        title: "이벤트",
        items: [
          {
            title: "ADM Global과의 전략적 파트너십",
            date: "2026-09-20",
            desc: "BNK Finance Leasing 경영진이 우즈베키스탄 자동차 시장의 선도 기업인 ADM Global과 양해각서에 서명했습니다.",
            fullText: "확대 및 전략적 파트너십을 향한 새로운 걸음!\n\n당사 경영진이 우즈베키스탄 자동차 시장의 리더 중 하나인 ADM Global과 양해각서(MOU)를 체결했습니다(국내 판매량 2위).\n\nADM Global CEO인 Daniyar Davletbekov과의 협력은 새로운 기회를 제공합니다:\n\n✔️ 차량 공급 및 리스 프로그램 개발\n✔️ 현지 시장에서의 입지 강화\n✔️ 경험 교류 및 한국 방문을 포함한 공동 프로젝트\n\n또한 방문 중 우즈베키스탄의 주재 대사인 원도연 대사와의 회담이 개최되었습니다. 향후 지원과 비즈니스 관계 강화에 대해 논의했습니다.\n\n더 많은 것이 계속될 예정입니다! 💪",
            image: newsImg11,
            images: [newsImg11, newsImg22, newsImg33, newsImg44, newsImg55]
          }
        ]
      },
    },
  };

  const currentNews = newsData[newsCategory][lang] || newsData[newsCategory].RU;

  return (
    <section id="news" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8 mt-6 md:mt-0 flex gap-3 flex-wrap">
          {["all", "promo", "events"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                window.location.hash = cat === "all" ? "#/news" : `#/news/${cat}`;
                setSelectedNewsItem(null);
              }}
              className={`px-4 md:px-6 py-2.5 rounded-2xl text-sm font-bold transition-colors ${
                newsCategory === cat
                  ? "bg-[#BB162B] text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat === "all" ? (lang === "RU" ? "Все новости" : lang === "UZ" ? "Barcha yangiliklar" : lang === "EN" ? "All news" : "모든 뉴스") :
               cat === "promo" ? (lang === "RU" ? "Акции" : lang === "UZ" ? "Aksiyalar" : lang === "EN" ? "Promotions" : "프로모션") :
               (lang === "RU" ? "События" : lang === "UZ" ? "Tadbirlar" : lang === "EN" ? "Events" : "이벤트")}
            </button>
          ))}
        </div>

        {selectedNewsItem ? (
          <>
            <button
              onClick={() => setSelectedNewsItem(null)}
              className="mb-8 flex items-center gap-2 text-[#BB162B] hover:text-[#961020] font-bold transition-colors"
            >
              <span>← {lang === "RU" ? "Вернуться к новостям" : lang === "UZ" ? "Yangiliklarni qaytarish" : lang === "EN" ? "Back to news" : "뉴스로 돌아가기"}</span>
            </button>

            <div className="border border-gray-200 dark:border-gray-700 rounded-3xl p-8 bg-gray-50 dark:bg-gray-900/30 mb-12">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                    {selectedNewsItem.title}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(selectedNewsItem.date).toLocaleDateString(lang === "RU" ? "ru-RU" : lang === "UZ" ? "uz-UZ" : "en-US")}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {selectedNewsItem.fullText || selectedNewsItem.desc}
              </p>
              {selectedNewsItem.images && selectedNewsItem.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {selectedNewsItem.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => setLightboxImage({ images: selectedNewsItem.images, index: imgIdx })}
                      className="rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${selectedNewsItem.title} ${imgIdx + 1}`}
                        className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              {currentNews.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              {newsCategory === "all" && (lang === "RU" ? "Следите за последними новостями BNK Finance Leasing" : lang === "UZ" ? "BNK Finance Leasing yangiliklariga ergashib boring" : lang === "EN" ? "Stay updated with BNK Finance Leasing news" : "BNK Finance Leasing 뉴스를 최신 상태로 유지하세요")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentNews.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedNewsItem(item)}
                  className="text-left group border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-[#BB162B] dark:hover:border-[#BB162B]"
                >
                  {item.image && (
                    <div className="relative h-40 overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="p-5 bg-white dark:bg-gray-900">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(item.date).toLocaleDateString(lang === "RU" ? "ru-RU" : lang === "UZ" ? "uz-UZ" : "en-US")}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-3 line-clamp-2 group-hover:text-[#BB162B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {item.desc}
                    </p>
                    <div className="mt-4 text-xs font-bold text-[#BB162B] group-hover:text-[#961020] transition-colors">
                      {lang === "RU" ? "Читать далее →" : lang === "UZ" ? "Ko'proq o'qish →" : lang === "EN" ? "Read more →" : "계속 읽기 →"}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        <button
          onClick={onApplyClick}
          className="px-6 md:px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#BB162B] hover:bg-[#961020] transition-colors"
        >
          {lang === "RU" ? "Оставить заявку" : lang === "UZ" ? "Ariza qoldirish" : lang === "EN" ? "Apply now" : "신청하기"}
        </button>

        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
            onTouchEnd={(e) => {
              setTouchEnd(e.changedTouches[0].clientX);
              if (touchStart - e.changedTouches[0].clientX > 50 && lightboxImage.index < lightboxImage.images.length - 1) {
                setLightboxImage({ ...lightboxImage, index: lightboxImage.index + 1 });
              }
              if (e.changedTouches[0].clientX - touchStart > 50 && lightboxImage.index > 0) {
                setLightboxImage({ ...lightboxImage, index: lightboxImage.index - 1 });
              }
            }}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img src={lightboxImage.images[lightboxImage.index]} alt="Lightbox" className="w-full h-full object-contain rounded-2xl" />

              {lightboxImage.index > 0 && (
                <button
                  onClick={() => setLightboxImage({ ...lightboxImage, index: lightboxImage.index - 1 })}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {lightboxImage.index < lightboxImage.images.length - 1 && (
                <button
                  onClick={() => setLightboxImage({ ...lightboxImage, index: lightboxImage.index + 1 })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 rounded-full text-white text-sm">
                {lightboxImage.index + 1} / {lightboxImage.images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── CALCULATOR ──────────────────────────────────────────────────────────────

function Calculator() {
  const { t } = useLang();
  const [modelIdx, setModelIdx] = useState(1);
  const [down, setDown] = useState(30);
  const [months, setMonths] = useState(36);
  const [showAllModels, setShowAllModels] = useState(false);
  const visibleModels = showAllModels ? MODELS : MODELS.slice(0, 4);

  const model = MODELS[modelIdx];
  const monthly = calcMonthly(model.price, down, months);
  const downAmt = model.price * (down / 100);
  const total = monthly * months + downAmt;
  const currentRate = getRate(down, months);

  return (
    <section id="calc" className="py-12 md:py-28 bg-white dark:bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-[#BB162B] border border-red-100 dark:border-red-900/50">
            {t.calcLabel}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 leading-tight whitespace-pre-line text-gray-900 dark:text-white">
            {t.calcTitle}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm md:text-base">{t.calcDesc}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-[#F8F9FA] dark:bg-gray-900/50 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            {/* Model Selector Tabs */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{t.modelLabel}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {visibleModels.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => setModelIdx(i)}
                    className={`p-3 rounded-2xl text-left transition-all border text-xs sm:text-sm font-bold flex flex-col justify-between ${
                      modelIdx === i
                        ? "bg-white dark:bg-gray-900 border-[#BB162B] text-[#BB162B] shadow-md ring-2 ring-red-500/10"
                        : "bg-white/60 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <div>{m.name}</div>
                    <div className="text-[11px] font-normal text-gray-500 dark:text-gray-400 mt-1">{fmt(m.price)} {t.sum}</div>
                  </button>
                ))}
              </div>

              {MODELS.length > 4 && (
                <button
                  onClick={() => setShowAllModels((v) => !v)}
                  className="mt-3 w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#BB162B] border border-dashed border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                >
                  {showAllModels ? t.hideModels : t.showMoreModels}
                </button>
              )}
            </div>

            {/* Down Payment Slider */}
            <div className="mb-8 bg-white dark:bg-gray-900/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-200">{t.advLabel}</label>
                <span className="text-xl font-black text-[#BB162B] bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-xl">{down}%</span>
              </div>
              <input
                type="range"
                min={30}
                max={70}
                step={5}
                value={down}
                onChange={(e) => setDown(+e.target.value)}
                className="w-full accent-[#BB162B] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
                <span>30% ({t.minLabel})</span>
                <span>50%</span>
                <span>70% ({t.maxLabel})</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 flex justify-between">
                <span>{t.sumLabel}</span>
                <strong className="text-gray-900 dark:text-white font-bold text-sm">{fmt(downAmt)} {t.sum}</strong>
              </div>
            </div>

            {/* Term Slider */}
            <div className="bg-white dark:bg-gray-900/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-800 dark:text-gray-200">{t.termLabel}</label>
                <span className="text-xl font-black text-[#BB162B] bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-xl">
                  {months} {t.months}
                </span>
              </div>
              <input
                type="range"
                min={12}
                max={48}
                step={12}
                value={months}
                onChange={(e) => setMonths(+e.target.value)}
                className="w-full accent-[#BB162B] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
                <span>12 {t.months}</span>
                <span>24 {t.months}</span>
                <span>36 {t.months}</span>
                <span>48 {t.months}</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-gray-900 text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden dark:ring-1 dark:ring-gray-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">{t.monthlyLabel}</div>
              <div className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tight">
                {fmt(monthly)} <span className="text-lg font-medium text-gray-400">{t.perMonth}</span>
              </div>

              <div className="my-6 border-t border-gray-800" />

              <div className="space-y-3 text-sm">
                {[
                  [t.calcRows[0], fmt(model.price) + " " + t.sum],
                  [t.calcRows[1] + " (" + down + "%)", fmt(downAmt) + " " + t.sum],
                  [t.calcRows[2], months + " " + t.months],
                  [t.calcRows[3], (currentRate * 100).toFixed(1) + "% " + t.perAnnum.replace("% ", "")],
                  [t.calcRows[4], fmt(total - model.price) + " " + t.sum],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">{k}</span>
                    <span className="font-bold text-white">{v}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:opacity-95 active:scale-95 shadow-[0_8px_25px_rgba(187,22,43,0.4)]"
                style={{ background: RED }}
              >
                {t.leaveApp}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center px-4">{t.calcNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MODELS ──────────────────────────────────────────────────────────────────

function Models({ onCta }: { onCta: () => void }) {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<"ALL" | "SUV" | "Sedan" | "Minivan" | "Truck">("SUV");

  const filteredModels = MODELS.filter((m) => filter === "ALL" || m.type === filter);

  const filterLabels: Record<"SUV" | "Sedan" | "Minivan" | "Truck", string> =
    lang === "UZ"
      ? { SUV: "SUV / Krossoverlar", Sedan: "Sedanlar", Minivan: "Minivenlar", Truck: "Yuk mashinalari" }
      : lang === "EN"
      ? { SUV: "SUV / Crossovers", Sedan: "Sedans", Minivan: "Minivans", Truck: "Trucks" }
      : lang === "KR"
      ? { SUV: "SUV / 크로스오버", Sedan: "세단", Minivan: "미니밴", Truck: "화물차" }
      : { SUV: "SUV / Кроссоверы", Sedan: "Седаны", Minivan: "Минивэны", Truck: "Грузовые" };

  return (
    <section id="models" className="py-12 md:py-28 bg-[#F7F8FC] dark:bg-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-[#BB162B] border border-red-100 dark:border-red-900/50">
              {t.catalogLabel}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-3 text-gray-900 dark:text-white">
              {t.catalogTitle}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap bg-white dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter("ALL")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "ALL" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t.allModels}
            </button>
            <button
              onClick={() => setFilter("SUV")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "SUV" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {filterLabels.SUV}
            </button>
            <button
              onClick={() => setFilter("Sedan")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "Sedan" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {filterLabels.Sedan}
            </button>
            <button
              onClick={() => setFilter("Minivan")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "Minivan" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {filterLabels.Minivan}
            </button>
            <button
              onClick={() => setFilter("Truck")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "Truck" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {filterLabels.Truck}
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredModels.map((m) => {
            const monthly = calcMonthly(m.price, 30, 36);
            const tagIdx = MODELS.findIndex((x) => x.id === m.id);
            return (
              <div
                key={m.id}
                className="bg-white dark:bg-gray-900/60 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative overflow-hidden bg-gray-100 h-52">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full text-white bg-[#BB162B] shadow-sm">
                      {t.modelTags[tagIdx % t.modelTags.length]}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-black text-gray-900 dark:text-white">
                        {m.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{m.type}</span>
                    </div>

                    <div className="mt-4 space-y-1">
                      <div className="text-xs text-gray-400 dark:text-gray-500">{t.priceFrom}</div>
                      <div className="text-2xl font-black text-gray-900 dark:text-white">
                        {fmt(m.price)} <span className="text-xs font-normal text-gray-500 dark:text-gray-400">{t.sum}</span>
                      </div>

                      <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
                        <div className="text-[11px] text-gray-400 dark:text-gray-500">{t.calcWith}</div>
                        <div className="text-base font-bold text-[#BB162B]">
                          {fmt(monthly)} {t.sum}/{t.monthShort}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onCta}
                    className="w-full py-3.5 rounded-2xl text-xs font-bold transition-all border-2 border-[#BB162B] text-[#BB162B] hover:bg-[#BB162B] hover:text-white flex items-center justify-center gap-2 active:scale-95"
                  >
                    {t.orderBtn} {m.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── STEPS ───────────────────────────────────────────────────────────────────

function Steps() {
  const { t } = useLang();
  return (
    <section id="steps" className="py-12 md:py-28 bg-white dark:bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-[#BB162B] border border-red-100 dark:border-red-900/50">
            {t.stepsLabel}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 text-gray-900 dark:text-white">
            {t.stepsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {t.steps.map((s, i) => (
            <div
              key={i}
              className="bg-[#F7F8FC] dark:bg-gray-900/40 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/50 hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black text-white shadow-lg shadow-red-500/20" style={{ background: RED }}>
                    0{i + 1}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{t.stepLabel} {i + 1}</span>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASES ───────────────────────────────────────────────────────────────────

function Cases() {
  const { t } = useLang();
  return (
    <section className="py-12 md:py-28 bg-[#F7F8FC] dark:bg-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-[#BB162B] border border-red-100 dark:border-red-900/50">
            {t.reviewsLabel}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 text-gray-900 dark:text-white">
            {t.reviewsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.cases.map((c) => (
            <div key={c.name} className="bg-white dark:bg-gray-900/60 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#BB162B]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm font-medium">"{c.text}"</p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-11 h-11 rounded-2xl shrink-0 shadow-md overflow-hidden">
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-full h-full object-cover scale-150"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{c.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{c.job} · {c.model}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-28 bg-white dark:bg-[#0a0a0c]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-[#BB162B] border border-red-100 dark:border-red-900/50">
            {t.faqLabel}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-3 text-gray-900 dark:text-white">
            {t.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all overflow-hidden ${
                open === i ? "border-red-200 dark:border-red-900/60 bg-red-50/20 dark:bg-red-950/10 shadow-sm" : "border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 font-bold text-gray-900 dark:text-white text-base md:text-lg"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <img
                  src={open === i ? faqArrowDown : faqArrowRight}
                  alt="Toggle"
                  className="w-6 h-6 shrink-0 transition-opacity duration-300"
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APPLY FORM ──────────────────────────────────────────────────────────────

function LeadForm({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", model: MODELS[0].id });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white">
        {t.formTitle}
      </h3>

      <form onSubmit={handle} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{t.fieldName}</label>
          <input
            type="text"
            required
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-[#F8F9FA] dark:bg-gray-800/60 border-2 border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#BB162B] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{t.fieldPhone}</label>
          <input
            type="tel"
            required
            placeholder="+998 XX XXX-XX-XX"
            value={form.phone}
            className="w-full bg-[#F8F9FA] dark:bg-gray-800/60 border-2 border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#BB162B] transition-colors"
            onFocus={() => {
              if (!form.phone) setForm({ ...form, phone: "+998 " });
            }}
            onBlur={() => {
              if (form.phone === "+998 ") setForm({ ...form, phone: "" });
            }}
            onChange={(e) => {
              let val = e.target.value;
              if (!val.startsWith("+998")) val = "+998 ";
              const prefix = "+998 ";
              const digits = val.slice(prefix.length).replace(/\D/g, "").slice(0, 9);
              let formatted = prefix;
              if (digits.length > 0) formatted += digits.slice(0, 2);
              if (digits.length > 2) formatted += " " + digits.slice(2, 5);
              if (digits.length > 5) formatted += "-" + digits.slice(5, 7);
              if (digits.length > 7) formatted += "-" + digits.slice(7, 9);
              setForm({ ...form, phone: formatted });
            }}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{t.fieldModel}</label>
          <select
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
            className="w-full bg-[#F8F9FA] dark:bg-gray-800/60 border-2 border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:border-[#BB162B] transition-colors appearance-none cursor-pointer"
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({fmt(m.price)} {t.sum})
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:opacity-95 active:scale-95 shadow-[0_8px_25px_rgba(187,22,43,0.35)]"
          style={{ background: RED }}
        >
          {t.sendBtn}
        </button>
      </form>
    </>
  );
}

function ApplyForm({ onSubmit }: { onSubmit: () => void }) {
  const { t } = useLang();

  return (
    <section id="apply" className="py-12 md:py-28 bg-[#F7F8FC] dark:bg-[#0f0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-[#BB162B] border border-red-100 dark:border-red-900/50">
            {t.applyLabel}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 leading-tight whitespace-pre-line text-gray-900 dark:text-white">
            {t.applyTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-md text-base">{t.applyDesc}</p>

          <div className="mt-8 space-y-3.5">
            {t.applyPerks.map((p) => (
              <div key={p} className="flex items-center gap-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: RED }}>
                  <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {p}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200/80 dark:border-gray-800 flex items-center gap-4">
            <Logo className="h-9 w-auto object-contain" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{t.partner}</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-white dark:bg-gray-900/60 rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 dark:border-gray-800">
            <LeadForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FORM MODAL ──────────────────────────────────────────────────────────────

function FormModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 dark:border-gray-800">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
        <LeadForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  const { t } = useLang();
  const socials = [
    {
      name: "Telegram",
      href: "https://t.me/bnkfinanceuz",
      color: "hover:border-[#229ED9] hover:text-[#229ED9] hover:bg-blue-50/50",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bnkfinance.uz/",
      color: "hover:border-[#E1306C] hover:text-[#E1306C] hover:bg-pink-50/50",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 2.156 4.919 5.406.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 5.258-4.919 5.406-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-2.199-4.919-5.42-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-5.258 4.919-5.406 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/bnkfinance.uz/",
      color: "hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-blue-50/50",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];
  const navHrefs = ["#calc", "#models", "#steps", "#faq", "#apply"];

  return (
    <footer className="py-10 md:py-14 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0c] text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="md:col-span-2">
            <Logo className="h-9 w-auto object-contain mb-4" />
            <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed max-w-sm">{t.footerDesc}</p>

            <div className="flex flex-wrap gap-2.5 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-bold px-4 py-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 ${s.color} transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow active:scale-95`}
                >
                  {s.icon}
                  <span>{s.name}</span>
                  <svg className="w-3 h-3 opacity-40 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{t.footerNav}</div>
            <div className="space-y-2.5">
              {t.footerNavLinks.map((l, i) => (
                <a key={l} href={navHrefs[i] || "#"} className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{t.footerContacts}</div>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <div className="text-gray-400 dark:text-gray-500 font-bold text-[11px] uppercase tracking-wider">{t.footerPhone}</div>
                <a href="tel:+998931837779" className="font-bold text-gray-900 dark:text-white hover:text-[#BB162B] transition-colors">
                  +998 93 183 77 79
                </a>
              </div>
              <div>
                <div className="text-gray-400 dark:text-gray-500 font-bold text-[11px] uppercase tracking-wider">{t.footerEmail}</div>
                <a href="mailto:info@bnkleasing.uz" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  info@bnkleasing.uz
                </a>
              </div>
              <div>
                <div className="text-gray-400 dark:text-gray-500 font-bold text-[11px] uppercase tracking-wider">{t.footerAddress}</div>
                <a
                  href="https://www.google.com/maps/place/Bnk+Finance+Leasing/data=!4m2!3m1!1s0x0:0x4d41dba2ce5bc8b0?sa=X&ved=1t:2428&hl=ru&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t.footerAddressVal}
                </a>
              </div>
              <div>
                <div className="text-gray-400 dark:text-gray-500 font-bold text-[11px] uppercase tracking-wider">{t.footerHours}</div>
                <span className="font-medium text-gray-800 dark:text-gray-300">{t.footerHoursVal}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-gray-600">
          <span>{t.footerCopy}</span>
          <span>{t.footerLicense}</span>
        </div>
      </div>
    </footer>
  );
}

// ─── STICKY CTA ──────────────────────────────────────────────────────────────

function TelegramFloat() {
  const { t } = useLang();
  return (
    <a
      href="https://t.me/BNKSultonovRP"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 flex items-center gap-2.5 bg-[#229ED9] hover:bg-[#1d8ec3] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_25px_rgba(34,158,217,0.4)] hover:shadow-[0_12px_30px_rgba(34,158,217,0.5)] hover:scale-105 transition-all group"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
      <span className="text-xs font-bold hidden sm:inline">{t.telegramSupport}</span>
    </a>
  );
}

// ─── SUCCESS PAGE ────────────────────────────────────────────────────────────

function SuccessPage({ onBack }: { onBack: () => void }) {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FC] dark:bg-[#0f0f12]">
      <header className="bg-white dark:bg-[#0a0a0c] border-b border-gray-100 dark:border-gray-800 px-4 md:px-8 h-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <Logo className="h-6 sm:h-8 w-auto object-contain max-w-[140px] sm:max-w-none" />
          <a
            href="tel:+998931837779"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-[#BB162B] transition-colors bg-gray-50 dark:bg-gray-900 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-gray-200/60 dark:border-gray-800 shrink-0"
          >
            <svg viewBox="0 0 20 20" fill={RED} className="w-3.5 h-3.5 shrink-0"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            <span className="whitespace-nowrap">+998 93 183 77 79</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16">
        <div className="max-w-lg w-full text-center bg-white dark:bg-gray-900/60 p-6 sm:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="relative mx-auto mb-6 sm:mb-8 w-20 h-20 sm:w-24 sm:h-24">
            <div className="w-full h-full rounded-full flex items-center justify-center shadow-lg shadow-red-500/30" style={{ background: RED }}>
              <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10 sm:w-12 sm:h-12">
                <path d="M12 30l12 12 24-24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black mb-3 text-gray-900 dark:text-white">
            {t.successTitle}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-2">
            {t.successDesc} <strong className="text-gray-900 dark:text-white">BNK Finance Leasing</strong>.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            {t.successDesc2} <strong className="text-gray-900 dark:text-white">{t.successMin}</strong> {t.successTime}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {t.successCards.map((c) => (
              <div key={c.label} className="bg-[#F8F9FA] dark:bg-gray-800/60 rounded-2xl p-3 sm:p-3.5 border border-gray-100 dark:border-gray-800 text-center flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-1">
                <div className="text-lg sm:text-xl shrink-0">{c.icon}</div>
                <div className="text-left sm:text-center">
                  <div className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-snug">{c.label}</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-95 active:scale-95 shadow-md"
              style={{ background: RED }}
            >
              {t.backBtn}
            </button>
            <a
              href="tel:+998931837779"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white transition-all bg-white dark:bg-gray-900 flex items-center justify-center gap-2"
            >
              {t.callUs}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#0a0a0c] border-t border-gray-100 dark:border-gray-800 py-4 text-center text-xs text-gray-400 dark:text-gray-600 px-4">{t.footerCopyShort}</div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("RU");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [submitted, setSubmitted] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<"main" | "about" | "news">("main");
  const scrollToApply = () => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/about") {
        setCurrentRoute("about");
        window.scrollTo({ top: 0 });
      } else if (hash.startsWith("#/news")) {
        setCurrentRoute("news");
        window.scrollTo({ top: 0 });
      } else if (hash === "#thanks") {
        // Do nothing, stay on success page
      } else {
        setCurrentRoute("main");
        window.scrollTo({ top: 0 });
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
    <LangCtx.Provider value={{ lang, t: T[lang], setLang }}>
      <div className={`min-h-screen bg-white dark:bg-[#0a0a0c] text-gray-900 dark:text-gray-100 selection:bg-red-500 selection:text-white transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}>
        {submitted ? (
          <SuccessPage
            onBack={() => {
              setSubmitted(false);
              window.scrollTo({ top: 0 });
            }}
          />
        ) : currentRoute === "about" ? (
          <>
            <Header onCta={() => setShowFormModal(true)} />
            <About onApplyClick={() => setShowFormModal(true)} />
            <Footer />
            <TelegramFloat />
            {showFormModal && (
              <FormModal
                onClose={() => setShowFormModal(false)}
                onSubmit={() => {
                  setShowFormModal(false);
                  setSubmitted(true);
                  window.location.hash = '#thanks';
                }}
              />
            )}
          </>
        ) : currentRoute === "news" ? (
          <>
            <Header onCta={() => setShowFormModal(true)} />
            <NewsPage onApplyClick={() => setShowFormModal(true)} />
            <Footer />
            <TelegramFloat />
            {showFormModal && (
              <FormModal
                onClose={() => setShowFormModal(false)}
                onSubmit={() => {
                  setShowFormModal(false);
                  setSubmitted(true);
                  window.location.hash = '#thanks';
                }}
              />
            )}
          </>
        ) : (
          <>
            <Header onCta={() => setShowFormModal(true)} />
            <Hero onCta={scrollToApply} />
            <TrustBar />
            <Calculator />
            <Models onCta={scrollToApply} />
            <Steps />
            <Cases />
            <FAQ />
            <ApplyForm onSubmit={() => {
                  setSubmitted(true);
                  window.location.hash = '#thanks';
                }} />
            <Footer />
            <TelegramFloat />
            {showFormModal && (
              <FormModal
                onClose={() => setShowFormModal(false)}
                onSubmit={() => {
                  setShowFormModal(false);
                  setSubmitted(true);
                  window.location.hash = '#thanks';
                }}
              />
            )}
          </>
        )}
      </div>
    </LangCtx.Provider>
    </ThemeCtx.Provider>
  );
}
