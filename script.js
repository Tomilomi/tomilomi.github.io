// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector(".theme-toggle");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = currentLang === "es" ? "MODO CLARO" : "LIGHT MODE";
        localStorage.setItem("theme", "dark");
    } else {
        button.textContent = currentLang === "es" ? "MODO OSCURO" : "DARK MODE";
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme and language
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.querySelector(".theme-toggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        button.textContent = "LIGHT MODE";
    }

    const savedLang = localStorage.getItem("lang");
    if (savedLang === "es") {
        applyLang("es");
    }
});


window.addEventListener("DOMContentLoaded", () => {
    const char = SakanaWidget.getCharacter("takina");

    char.image = "https://tr.rbxcdn.com/180DAY-da2a8c29538f715d22ad0b1a439a573d/420/420/WaistAccessory/Webp/noFilter";

    SakanaWidget.registerCharacter("custom", char);

    new SakanaWidget({
        character: "custom",
        draggable: true,
        controls: false
    }).mount("#sakana-root");
});

// Email obfuscation
const u = "tomasmgoyenecheap";
const d = "gmail.com";
const el = document.getElementById("email-link");
el.href = "mailto:" + u + "@" + d;
el.textContent = u + "@" + d;


// Language toggle
const translations = {
    en: {
        "t-subtitle":    "Systems Engineering Student — Córdoba, Argentina",
        "t-summary":     "Summary",
        "t-summary-1":   "I am an <strong>advanced Engineering student</strong>. My academic background helps me adapt quickly to <strong>new technologies</strong>, work environments, and challenges.",
        "t-summary-2":   "I enjoy <strong>solving problems</strong>, improving systems, and learning new things. Through personal projects, I've been exploring different areas of <strong>software development</strong> to expand my knowledge and build practical skills.",
        "t-summary-3":   "I am currently looking for <strong>job opportunities</strong> where I can continue learning and growing as a professional.",
        "t-contact":     "Contact",
        "t-toolset":     "Toolset",
        "t-languages":   "Programming Languages",
        "t-databases":   "Databases",
        "t-stacks":      "Stacks & Technologies",
        "t-other":       "Other Skills",
        "t-projects":    "Projects",
        "t-chat-1":      "Full-stack real-time chat application with retro UI.",
        "t-chat-2":      "Backend: Node.js, Express, Sequelize, SQL Server, JWT auth, Multer.",
        "t-chat-3":      "Frontend: React, Axios, TailwindCSS, NES.css.",
        "t-chat-4":      "Architecture: services, repositories, models, routes, middlewares.",
        "t-cats-1":      "Displays a new cat GIF every day.",
        "t-cats-2":      "Focused on full-stack integration and fun UX.",
        "t-education":   "Education",
        "t-education-1": "National Technological University (UTN)",
        "t-education-2": "Systems Engineering — 4th Year",
        "t-lang-section":"Languages",
        "t-lang-1":      "Spanish — Native",
        "t-lang-2":      "English — Intermediate",
    },
    es: {
        "t-subtitle":    "Estudiante de Ingeniería en Sistemas — Córdoba, Argentina",
        "t-summary":     "Resumen",
        "t-summary-1":   "Soy <strong>estudiante avanzado de Ingeniería</strong>. Mi formación académica me permite adaptarme rápidamente a <strong>nuevas tecnologías</strong>, entornos de trabajo y desafíos.",
        "t-summary-2":   "Disfruto <strong>resolver problemas</strong>, mejorar sistemas y aprender cosas nuevas. A través de proyectos personales, exploré distintas áreas del <strong>desarrollo de software</strong> para ampliar mis conocimientos y construir habilidades prácticas.",
        "t-summary-3":   "Actualmente busco <strong>oportunidades laborales</strong> donde pueda seguir aprendiendo y creciendo como profesional.",
        "t-contact":     "Contacto",
        "t-toolset":     "Herramientas",
        "t-languages":   "Lenguajes de Programación",
        "t-databases":   "Bases de Datos",
        "t-stacks":      "Stacks y Tecnologías",
        "t-other":       "Otras Habilidades",
        "t-projects":    "Proyectos",
        "t-chat-1":      "Aplicación de chat en tiempo real full-stack con UI retro.",
        "t-chat-2":      "Backend: Node.js, Express, Sequelize, SQL Server, autenticación JWT, Multer.",
        "t-chat-3":      "Frontend: React, Axios, TailwindCSS, NES.css.",
        "t-chat-4":      "Arquitectura: servicios, repositorios, modelos, rutas, middlewares.",
        "t-cats-1":      "Muestra un nuevo GIF de gato cada día.",
        "t-cats-2":      "Enfocado en la integración full-stack y una UX divertida.",
        "t-education":   "Educación",
        "t-education-1": "Universidad Tecnológica Nacional (UTN)",
        "t-education-2": "Ingeniería en Sistemas — 4° Año",
        "t-lang-section":"Idiomas",
        "t-lang-1":      "Español — Nativo",
        "t-lang-2":      "Inglés — Intermedio",
    }
};

let currentLang = "en";

function applyLang(lang) {
    currentLang = lang;
    document.querySelector(".lang-toggle").textContent = currentLang === "en" ? "ES" : "EN";

    Object.keys(translations[currentLang]).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = translations[currentLang][id];
    });

    const themeBtn = document.querySelector(".theme-toggle");
    const isDark = document.body.classList.contains("dark-mode");
    themeBtn.textContent = currentLang === "es"
        ? (isDark ? "MODO CLARO" : "MODO OSCURO")
        : (isDark ? "LIGHT MODE" : "DARK MODE");

    document.querySelector(".pdf-download").textContent =
        currentLang === "es" ? "DESCARGAR PDF" : "DOWNLOAD PDF";
}

function toggleLang() {
    const elements = [
        ...Object.keys(translations.en).map(id => document.getElementById(id)),
        document.querySelector(".theme-toggle"),
        document.querySelector(".pdf-download"),
        document.querySelector(".lang-toggle")
    ].filter(Boolean);

    elements.forEach(el => el.classList.add("lang-fade"));

    setTimeout(() => {
        applyLang(currentLang === "en" ? "es" : "en");
        elements.forEach(el => el.classList.remove("lang-fade"));
        localStorage.setItem("lang", currentLang);
    }, 200);
}