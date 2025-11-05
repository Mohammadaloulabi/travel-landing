// --------------------------Dark Mode script----------------------------------
const page = document.getElementById("page");
const saved = localStorage.getItem("theme-old");
if (saved === "dark") page.classList.add("dark");

document.getElementById("toggle").addEventListener("click", () => {
  page.classList.toggle("dark");
  localStorage.setItem(
    "theme-old",
    page.classList.contains("dark") ? "dark" : "light"
  );
});

// ------------------------translate script--------------------------------------
// نصوص الهيرو فقط
const i18n = {
  en: {
    "hero.kicker": "Best Destinations around the world",
    "hero.title": "Travel, enjoy and live a new and full life",
    "hero.subtitle":
      "Built Wicket longer admire do barton vanity itself do in it Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
    "hero.cta": "Find out more",
    "hero.cta2": "Play Demo",
  },
  ar: {
    "hero.kicker": "أفضل الوجهات حول العالم",
    "hero.title": "سافر، واستمتع، وعيش حياة جديدة مليئة بالحيوية.",
    "hero.subtitle":" بُني ويكِت لفترة أطول ليُعجب بنفسه فحسب.كان يفضّل الانشغال بالاستماع إلى الرياضيين.أما بوابة الحديقة، فكانوا يبيعونها بصعوبة في الغرب.",
    "hero.cta": "اكتشف الآن",
    "hero.cta2": "تشغيل العرض التجريبي",
  },
};

const HERO_ID = "hero";
const TOGGLE_ID = "langToggle";
const STORAGE_KEY = "lang";

// استرجاع اللغة المحفوظة أو EN كافتراضي
let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

const heroEl = document.getElementById(HERO_ID);
const toggleBtn = document.getElementById(TOGGLE_ID);

function applyLang(lang) {
  // ترجمة عناصر الهيرو بناء على مفاتيح data-i18n
  document.querySelectorAll(`#${HERO_ID} [data-i18n]`).forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = i18n[lang][key];
    if (typeof text !== "undefined") el.textContent = text;
  });


  if (lang === "ar") {
    heroEl.setAttribute("dir", "rtl");
    heroEl.classList.add("text-end");
    heroEl.classList.remove("text-start");
   
    toggleBtn.textContent = "EN";
    toggleBtn.setAttribute("aria-label", "Switch to English");
  } else {
    heroEl.setAttribute("dir", "ltr");
    heroEl.classList.add("text-start");
    heroEl.classList.remove("text-end");
   
    toggleBtn.textContent = "AR";
    toggleBtn.setAttribute("aria-label", "التبديل إلى العربية");
  }

  
  localStorage.setItem(STORAGE_KEY, lang);
  currentLang = lang;
}


toggleBtn.addEventListener("click", () => {
  const next = currentLang === "en" ? "ar" : "en";
  applyLang(next);
});

heroEl.classList.add("text-start");
applyLang(currentLang);
