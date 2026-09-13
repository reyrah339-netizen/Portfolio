/*
  ===========================================================
  این فایل تنها جایی است که باید برای اضافه کردن تکلیف جدید
  ویرایش کنی. لازم نیست HTML یا CSS یا فایل script.js را
  تغییر بدهی.

  برای هر تکلیف جدید، یک بلوک شبیه نمونه‌های زیر داخل آرایه
  PORTFOLIO_ITEMS اضافه کن. بعد از آخرین آیتم یک کاما (,)
  بگذار و بلوک جدید را بچسبان.

  فیلدهای هر آیتم:
    id          -> یک شماره یا متن یکتا (تکراری نباشد)
    title       -> عنوان تکلیف
    description -> توضیح کوتاه (۱ تا ۳ خط کافی است)
    type        -> "image" یا "video" یا "audio"
    src         -> مسیر فایل داخل پوشه assets
    date        -> تاریخ دلخواه
    tags        -> آرایه‌ای از برچسب‌ها
  ===========================================================
*/

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "پوستر تولد انیمه‌ای — طرح اول",
    description: "تولید تصویر با پرامپت متنی برای ساخت پوستر تبریک تولد به سبک انیمه فوتبالی.",
    type: "image",
    src: "assets/images/tsubasa-poster-1.jpg",
    date: "",
    tags: ["تولید تصویر", "پرامپت‌نویسی"]
  },
  {
    id: 2,
    title: "پوستر تولد انیمه‌ای — طرح دوم",
    description: "نسخه دوم پوستر تبریک تولد با همان شخصیت، در ترکیب‌بندی و پس‌زمینه متفاوت.",
    type: "image",
    src: "assets/images/tsubasa-poster-2.jpg",
    date: "",
    tags: ["تولید تصویر", "پرامپت‌نویسی"]
  },
  {
    id: 3,
    title: "طراحی شخصیت در حال حرکت",
    description: "تمرین تولید تصویر پویا از یک شخصیت انیمه در حالت ضربه زدن به توپ.",
    type: "image",
    src: "assets/images/tsubasa-kick.jpg",
    date: "",
    tags: ["تولید تصویر", "طراحی کاراکتر"]
  },
  {
    id: 4,
    title: "آموزش افکت تاری حرکتی",
    description: "تصویر آموزشی که نحوه‌ی استفاده از یک کد پرامپت برای ایجاد افکت تاری حرکتی و پویا در پس‌زمینه‌ی عکس را نشان می‌دهد.",
    type: "image",
    src: "assets/images/motionblur-tutorial.jpg",
    date: "",
    tags: ["ادیت عکس", "پرامپت‌نویسی"]
  },
  {
    id: 5,
    title: "آموزش تبدیل عکس به پوستر تولد",
    description: "کد پرامپتی که یک عکس ساده را به پوستر تولد رویایی با افکت‌های نوری تبدیل می‌کند.",
    type: "image",
    src: "assets/images/birthdayposter-tutorial.jpg",
    date: "",
    tags: ["ادیت عکس", "پرامپت‌نویسی"]
  },
  {
    id: 6,
    title: "شخصیت پلیس خرگوشی",
    description: "طراحی یک شخصیت انیمیشنی سه‌بعدی الهام‌گرفته از سبک انیمیشن‌های دیزنی.",
    type: "image",
    src: "assets/images/bunny-cop.jpg",
    date: "",
    tags: ["طراحی کاراکتر", "تولید تصویر"]
  },
  {
    id: 7,
    title: "خرگوش زمستانی",
    description: "تصویر یک شخصیت خرگوش با ظاهری گرم و زمستانی، در فضایی نورپردازی‌شده.",
    type: "image",
    src: "assets/images/bunny-pomegranate.jpg",
    date: "",
    tags: ["طراحی کاراکتر", "تولید تصویر"]
  },
  {
    id: 8,
    title: "کاور مجله دیجیتال",
    description: "طراحی یک کاور مجله با محوریت یک محصول تکنولوژی، با چیدمان تایپوگرافی مینیمال.",
    type: "image",
    src: "assets/images/modern-magazine-cover.png",
    date: "",
    tags: ["طراحی گرافیک", "تولید تصویر"]
  },
  {
    id: 9,
    title: "شخصیت میوه‌ای بامزه",
    description: "طراحی یک شخصیت خیالی و بامزه با ترکیب یک میوه و ویژگی‌های نوزادی.",
    type: "image",
    src: "assets/images/lychee-eating.jpg",
    date: "",
    tags: ["طراحی کاراکتر"]
  },
  {
    id: 10,
    title: "شخصیت میوه‌ای با گوشی موبایل",
    description: "نسخه‌ای دیگر از شخصیت میوه‌ای، این‌بار در حال نگه‌داشتن یک گوشی موبایل.",
    type: "image",
    src: "assets/images/lychee-phone.png",
    date: "",
    tags: ["طراحی کاراکتر"]
  },
  {
    id: 11,
    title: "روند سنی یک شخصیت",
    description: "تصویرسازی خطی از تغییر یک شخصیت در پنج مرحله سنی، از نوزادی تا پیری.",
    type: "image",
    src: "assets/images/avatar-aging.jpg",
    date: "",
    tags: ["تصویرسازی", "طراحی کاراکتر"]
  },
  {
    id: 12,
    title: "برنامه هفتگی رنگی",
    description: "طراحی یک جدول برنامه هفتگی رنگارنگ و کودکانه با شخصیت و فضای تصویری اختصاصی.",
    type: "image",
    src: "assets/images/weekly-schedule.png",
    date: "",
    tags: ["طراحی گرافیک"]
  },
  {
    id: 14,
    title: "آهنگ درباره‌ی خدا",
    description: "یک قطعه موسیقی درباره‌ی خدا که با ابزار تولید موسیقی هوش مصنوعی Suno ساخته شده است.",
    type: "audio",
    src: "assets/audio/audio-1.m4a",
    date: "",
    tags: ["تولید موسیقی", "Suno"]
  },
  {
    id: 15,
    title: "منظره‌ی سینمایی کانیون شبانه",
    description: "نمای سینمایی از یک رودخانه در دل صخره‌ها زیر آسمانی پر از ستاره و کهکشان راه شیری.",
    type: "video",
    src: "assets/videos/canyon-night.mp4",
    date: "",
    tags: ["تولید ویدیو", "منظره"]
  },
  {
    id: 16,
    title: "کارگران مینیاتوری در حال ساخت آیفون",
    description: "ویدیوی خلاقانه با افکت مینیاتوری از کارگران کوچک در حال رنگ‌آمیزی و مونتاژ یک آیفون غول‌پیکر.",
    type: "video",
    src: "assets/videos/miniature-iphone-workers.mp4",
    date: "",
    tags: ["تولید ویدیو", "خلاقانه"]
  },
  {
    id: 17,
    title: "غذای خانگی در قابلمه مسی",
    description: "نمای نزدیک و اشتها‌آور از غذایی گرم با برنج و لوبیا سبز در حال چیده‌شدن در یک قابلمه مسی.",
    type: "video",
    src: "assets/videos/food-pot.mp4",
    date: "",
    tags: ["تولید ویدیو", "غذا"]
  },
  {
    id: 18,
    title: "تیزر مفهومی آیفون",
    description: "انیمیشنی از یک گوشی آیفون در فضایی انتزاعی و شیشه‌ای با نورپردازی نمایشی.",
    type: "video",
    src: "assets/videos/iphone-concept.mp4",
    date: "",
    tags: ["تولید ویدیو", "تیزر تبلیغاتی"]
  },
  {
    id: 19,
    title: "نقشه‌ی کاغذی با پنجره‌ای پنهان",
    description: "افکت خلاقانه‌ی پارگی یک نقشه‌ی کاغذی که به یک صحنه‌ی کوچک از یک رستوران فست‌فود می‌رسد.",
    type: "video",
    src: "assets/videos/map-reveal.mp4",
    date: "",
    tags: ["تولید ویدیو", "خلاقانه"]
  },
  {
    id: 20,
    title: "تیزر نوشیدنی انرژی‌زا",
    description: "قوطی یک نوشیدنی انرژی‌زا در میان جرقه‌های نور و پاشش آب، به سبک تیزرهای تبلیغاتی.",
    type: "video",
    src: "assets/videos/energy-drink-ad.mp4",
    date: "",
    tags: ["تولید ویدیو", "تیزر تبلیغاتی"]
  },
  {
    id: 21,
    title: "تیزر هدفون بی‌سیم",
    description: "نمایش مینیمال و شیک یک هدفون در حال چرخش، معلق در فضایی تاریک.",
    type: "video",
    src: "assets/videos/headphones-ad.mp4",
    date: "",
    tags: ["تولید ویدیو", "تیزر تبلیغاتی"]
  },
  {
    id: 22,
    title: "عروسک بافتنی در حال قلاب‌بافی",
    description: "شخصیتی عروسکی و بافتنی (آمیگورومی) که خودش در حال بافتن نخ‌های رنگارنگ است.",
    type: "video",
    src: "assets/videos/crochet-doll.mp4",
    date: "",
    tags: ["تولید ویدیو", "خلاقانه"]
  },
  {
    id: 23,
    title: "قایق بادبانی روی دریای بافتنی",
    description: "صحنه‌ای خیالی از یک قایق کوچک روی دریایی که از نخ‌های بافته‌شده ساخته شده است.",
    type: "video",
    src: "assets/videos/yarn-sea-boat.mp4",
    date: "",
    tags: ["تولید ویدیو", "خلاقانه"]
  },
  {
    id: 24,
    title: "ساخت خودروی کریستالی توسط بازوهای رباتیک",
    description: "مفهومی صنعتی و هنری از مونتاژ یک خودروی لوکس شیشه‌ای توسط بازوهای رباتیک بلورین.",
    type: "video",
    src: "assets/videos/crystal-car.mp4",
    date: "",
    tags: ["تولید ویدیو", "خلاقانه"]
  },
  {
    id: 25,
    title: "جوانه‌ی سبز در گلدان",
    description: "نمای نزدیک و آرام از رویش یک نهال کوچک در گلدانی کنار پنجره.",
    type: "video",
    src: "assets/videos/plant-sprout.mp4",
    date: "",
    tags: ["تولید ویدیو", "طبیعت"]
  },
  {
    id: 26,
    title: "کانگورو در طبیعت",
    description: "نمای واقع‌گرایانه از یک کانگورو در حال دویدن در دشت‌های استرالیا هنگام غروب.",
    type: "video",
    src: "assets/videos/kangaroo.mp4",
    date: "",
    tags: ["تولید ویدیو", "طبیعت"]
  },
  {
    id: 27,
    title: "قدم زدن در خیابان شهر",
    description: "ویدیویی واقع‌گرایانه از یک زن در حال خندیدن و قدم زدن در خیابانی شهری.",
    type: "video",
    src: "assets/videos/woman-walking.mp4",
    date: "",
    tags: ["تولید ویدیو", "انسان واقع‌گرایانه"]
  },
  {
    id: 28,
    title: "دلمه در ظرف کریستالی",
    description: "نمای نزدیک از چیدن دلمه‌های تازه در یک قابلمه‌ی شیشه‌ای و شفاف.",
    type: "video",
    src: "assets/videos/dolma-crystal-pot.mp4",
    date: "",
    tags: ["تولید ویدیو", "غذا"]
  },
  {
    id: 29,
    title: "یک لحظه، پنج جهان — سکانس نوآر",
    description: "بخشی از پروژه‌ی «یک لحظه، پنج جهان»: لحظه‌ی روشن‌کردن یک شمع، روایت‌شده به سبک نوآر سیاه‌وسفید دهه‌ی ۱۹۴۰.",
    type: "video",
    src: "assets/videos/candle-noir.mp4",
    date: "",
    tags: ["تولید ویدیو", "نوآر"]
  },
  {
    id: 30,
    title: "پسر و ربات دوست‌داشتنی",
    description: "کلیپی داستانی و احساسی از یک پسر بچه و ربات همراهش، با عکسی قاب‌گرفته از خاطره‌ی مشترکشان.",
    type: "video",
    src: "assets/videos/boy-and-robot.mp4",
    date: "",
    tags: ["تولید ویدیو", "داستانی"]
  }
];
