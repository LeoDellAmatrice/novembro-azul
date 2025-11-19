// static/script.js

// Traduções embutidas (sem fetch)
const I18N = {
    pt: {
        langCode: "pt-br",
        "meta.title": "Novembro Azul — Cuidar é um gesto de coragem",
        "brand.name": "Novembro Azul",
        "nav.home": "Início",
        "nav.prevencao": "Prevenção",
        "nav.mitos": "Mitos & Verdades",
        "nav.participe": "Participe",
        "hero.title": "Cuidar é um gesto de coragem",
        "hero.sub": "Novembro Azul é um convite à conversa, ao exame e ao cuidado. Informação salva vidas — inclusive a sua.",
        "hero.btnPrev": "Como se cuidar",
        "hero.btnMitos": "Mitos & Verdades",
        "sobre.title": "Por que Novembro Azul importa",
        "sobre.desc": "A campanha promove a conscientização sobre a saúde do homem, com foco na prevenção e diagnóstico precoce de doenças, incluindo o câncer de próstata. Falar sobre isso é quebrar tabus e abrir espaço para decisões melhores.",
        "cards.informar.title": "Informar",
        "cards.informar.desc": "Conhecimento reduz medo e aumenta as chances de agir cedo.",
        "cards.prevenir.title": "Prevenir",
        "cards.prevenir.desc": "Hábitos saudáveis, exames regulares e atenção aos sinais fazem diferença.",
        "cards.apoiar.title": "Apoiar",
        "cards.apoiar.desc": "Ninguém precisa cuidar sozinho. Família, amigos e profissionais ajudam.",
        "destaques.early.title": "+ cedo",
        "destaques.early.desc": "Diagnóstico precoce aumenta as opções de tratamento.",
        "destaques.checkup.title": "Check-up",
        "destaques.checkup.desc": "Consultas regulares são parte do cuidado — marque a sua.",
        "destaques.conversa.title": "Conversa",
        "destaques.conversa.desc": "Quebrar o tabu é um passo corajoso e necessário.",
        "prevencao.title": "Prevenção na prática",
        "prevencao.item1.title": "Consulta anual:",
        "prevencao.item1.desc": "Combine exame clínico e pedidos do médico conforme necessidade.",
        "prevencao.item2.title": "Estilo de vida:",
        "prevencao.item2.desc": "Alimentação equilibrada, atividade física e sono de qualidade.",
        "prevencao.item3.title": "Olho nos sinais:",
        "prevencao.item3.desc": "Mudanças urinárias, dor ou desconforto merecem atenção médica.",
        "mitos.title": "Mitos & Verdades",
        "mitos.item1.summary": "“Exame é sempre doloroso.”",
        "mitos.item1.desc": "Existem diferentes exames. Alguns podem causar desconforto, mas são rápidos e seguros.",
        "mitos.item2.summary": "“Se não tenho sintomas, está tudo bem.”",
        "mitos.item2.desc": "Algumas condições são silenciosas. O check-up existe justamente para identificar cedo.",
        "mitos.item3.summary": "“É melhor não saber.”",
        "mitos.item3.desc": "Informação é poder. Saber cedo amplia escolhas e resultados.",
        "cta.title": "Marque seu check-up neste mês",
        "cta.desc": "Dar o primeiro passo muda tudo. Se preferir, leve alguém junto.",
        "cta.btn": "Quero agendar",
        "footer.brand": "Novembro Azul",
        "footer.desc": "Conversa, prevenção e cuidado. Um movimento de todos.",
        "footer.linksTitle": "Links",
        "footer.linkPrev": "Prevenção",
        "footer.linkMitos": "Mitos & Verdades",
        "footer.linkParticipe": "Participe",
        "footer.contatoTitle": "Contato",
        "footer.contatoDesc": "Procure sua unidade de saúde local ou seu médico de confiança.",
        "footer.copy": "© 2025 Campanha Novembro Azul — Projeto educativo."
    },
    en: {
        langCode: "en",
        "meta.title": "Blue November — Taking care is an act of courage",
        "brand.name": "Blue November",
        "nav.home": "Home",
        "nav.prevencao": "Prevention",
        "nav.mitos": "Myths & Facts",
        "nav.participe": "Join",
        "hero.title": "Taking care is an act of courage",
        "hero.sub": "Blue November invites conversation, check-ups, and care. Information saves lives — including yours.",
        "hero.btnPrev": "How to take care",
        "hero.btnMitos": "Myths & Facts",
        "sobre.title": "Why Blue November matters",
        "sobre.desc": "The campaign raises awareness about men's health, focusing on prevention and early diagnosis, including prostate cancer. Talking about it breaks taboos and opens space for better decisions.",
        "cards.informar.title": "Inform",
        "cards.informar.desc": "Knowledge reduces fear and increases the chances of early action.",
        "cards.prevenir.title": "Prevent",
        "cards.prevenir.desc": "Healthy habits, regular exams, and attention to signs make a difference.",
        "cards.apoiar.title": "Support",
        "cards.apoiar.desc": "No one needs to care alone. Family, friends, and professionals help.",
        "destaques.early.title": "Earlier",
        "destaques.early.desc": "Early diagnosis increases treatment options.",
        "destaques.checkup.title": "Check-up",
        "destaques.checkup.desc": "Regular appointments are part of care — book yours.",
        "destaques.conversa.title": "Conversation",
        "destaques.conversa.desc": "Breaking the taboo is a courageous and necessary step.",
        "prevencao.title": "Prevention in practice",
        "prevencao.item1.title": "Annual check-up:",
        "prevencao.item1.desc": "Combine clinical exam and physician requests as needed.",
        "prevencao.item2.title": "Lifestyle:",
        "prevencao.item2.desc": "Balanced diet, physical activity, and quality sleep.",
        "prevencao.item3.title": "Watch the signs:",
        "prevencao.item3.desc": "Urinary changes, pain or discomfort deserve medical attention.",
        "mitos.title": "Myths & Facts",
        "mitos.item1.summary": "“Exams are always painful.”",
        "mitos.item1.desc": "There are different exams. Some may cause discomfort, but they are quick and safe.",
        "mitos.item2.summary": "“If I have no symptoms, I’m fine.”",
        "mitos.item2.desc": "Many conditions are silent. Check-ups exist to identify early.",
        "mitos.item3.summary": "“It’s better not to know.”",
        "mitos.item3.desc": "Information is power. Knowing early expands choices and outcomes.",
        "cta.title": "Book your check-up this month",
        "cta.desc": "Taking the first step changes everything. Bring someone if you prefer.",
        "cta.btn": "I want to schedule",
        "footer.brand": "Blue November",
        "footer.desc": "Conversation, prevention, and care. A movement for everyone.",
        "footer.linksTitle": "Links",
        "footer.linkPrev": "Prevention",
        "footer.linkMitos": "Myths & Facts",
        "footer.linkParticipe": "Join",
        "footer.contatoTitle": "Contact",
        "footer.contatoDesc": "Find your local health unit or your trusted doctor.",
        "footer.copy": "© 2025 Blue November Campaign — Educational project."
    },
    es: {
        langCode: "es",
        "meta.title": "Noviembre Azul — Cuidarse es un acto de valentía",
        "brand.name": "Noviembre Azul",
        "nav.home": "Inicio",
        "nav.prevencao": "Prevención",
        "nav.mitos": "Mitos y Verdades",
        "nav.participe": "Participa",
        "hero.title": "Cuidarse es un acto de valentía",
        "hero.sub": "Noviembre Azul invita a conversar, chequearse y cuidarse. La información salva vidas — incluida la tuya.",
        "hero.btnPrev": "Cómo cuidarse",
        "hero.btnMitos": "Mitos y Verdades",
        "sobre.title": "Por qué importa Noviembre Azul",
        "sobre.desc": "La campaña promueve la concienciación sobre la salud del hombre, enfocándose en la prevención y el diagnóstico temprano, incluido el cáncer de próstata. Hablar de ello rompe tabúes y abre espacio para mejores decisiones.",
        "cards.informar.title": "Informar",
        "cards.informar.desc": "El conocimiento reduce el miedo y aumenta las posibilidades de actuar temprano.",
        "cards.prevenir.title": "Prevenir",
        "cards.prevenir.desc": "Hábitos saludables, exámenes regulares y atención a las señales marcan la diferencia.",
        "cards.apoiar.title": "Apoyar",
        "cards.apoiar.desc": "Nadie necesita cuidarse solo. Familia, amigos y profesionales ayudan.",
        "destaques.early.title": "Más temprano",
        "destaques.early.desc": "El diagnóstico temprano aumenta las opciones de tratamiento.",
        "destaques.checkup.title": "Chequeo",
        "destaques.checkup.desc": "Las consultas regulares son parte del cuidado — agenda la tuya.",
        "destaques.conversa.title": "Conversación",
        "destaques.conversa.desc": "Romper el tabú es un paso valiente y necesario.",
        "prevencao.title": "Prevención en la práctica",
        "prevencao.item1.title": "Chequeo anual:",
        "prevencao.item1.desc": "Combina examen clínico y solicitudes del médico según necesidad.",
        "prevencao.item2.title": "Estilo de vida:",
        "prevencao.item2.desc": "Dieta equilibrada, actividad física y sueño de calidad.",
        "prevencao.item3.title": "Atento a las señales:",
        "prevencao.item3.desc": "Cambios urinarios, dolor o molestias requieren atención médica.",
        "mitos.title": "Mitos y Verdades",
        "mitos.item1.summary": "“El examen siempre es doloroso.”",
        "mitos.item1.desc": "Hay diferentes exámenes. Algunos pueden causar molestia, pero son rápidos y seguros.",
        "mitos.item2.summary": "“Si no tengo síntomas, estoy bien.”",
        "mitos.item2.desc": "Muchas condiciones son silenciosas. Los chequeos existen para identificar temprano.",
        "mitos.item3.summary": "“Es mejor no saber.”",
        "mitos.item3.desc": "La información es poder. Saber temprano amplía elecciones y resultados.",
        "cta.title": "Agenda tu chequeo este mes",
        "cta.desc": "Dar el primer paso lo cambia todo. Lleva a alguien si prefieres.",
        "cta.btn": "Quiero agendar",
        "footer.brand": "Noviembre Azul",
        "footer.desc": "Conversación, prevención y cuidado. Un movimiento de todos.",
        "footer.linksTitle": "Enlaces",
        "footer.linkPrev": "Prevención",
        "footer.linkMitos": "Mitos y Verdades",
        "footer.linkParticipe": "Participa",
        "footer.contatoTitle": "Contacto",
        "footer.contatoDesc": "Busca tu unidad de salud local o tu médico de confianza.",
        "footer.copy": "© 2025 Campaña Noviembre Azul — Proyecto educativo."
    }
};

function applyTranslations(t) {
    // Elementos com data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] != null) el.textContent = t[key];
    });
    // Título da página
    if (t["meta.title"]) document.title = t["meta.title"];
    // lang do documento
    if (t["langCode"]) document.documentElement.lang = t["langCode"];
}

function setLanguage(lang) {
    const chosen = I18N[lang] ? lang : "pt";
    localStorage.setItem("i18n_lang", chosen);
    applyTranslations(I18N[chosen]);
}

// Inicializa com localStorage ou idioma do navegador
const stored = localStorage.getItem("i18n_lang");
const browserLang = (navigator.language || "pt").slice(0, 2);
setLanguage(stored || browserLang);

// Troca pelos botões
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Configuração: número oficial da campanha (international format, sem sinais)
const WA_DEFAULT_NUMBER = "5511999998888"; // substitua pelo número desejado sem '+'
// Se quiser enviar para um contato dinâmico, o formulário permite informar telefone

function sanitizePhone(raw) {
    if (!raw) return "";
    // Remove tudo que não seja dígito
    return raw.replace(/\D/g, "");
}

function buildWhatsAppUrl(number, text) {
    // number vazio => usar wa.me without number is not valid; require number. We'll use default.
    const target = number || WA_DEFAULT_NUMBER;
    const encoded = encodeURIComponent(text);
    // usa wa.me (abre web.whatsapp.com ou app)
    return `https://wa.me/${target}?text=${encoded}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("whatsapp-form");
    const clearBtn = document.getElementById("wa-clear");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("wa-name").value.trim();
        const phoneRaw = document.getElementById("wa-phone").value.trim();
        const message = document.getElementById("wa-message").value.trim();

        if (!name || !message) {
            alert("Por favor, preencha seu nome e a mensagem.");
            return;
        }

        const phoneSan = sanitizePhone(phoneRaw);
        const targetNumber = phoneSan || WA_DEFAULT_NUMBER;

        // montar mensagem amigável
        const fullMessage = `Olá, meu nome é ${name}.\n\n${message}\n\n---\nEnviado pelo site Novembro Azul.`;
        const url = buildWhatsAppUrl(targetNumber, fullMessage);

        // abrir em nova aba
        window.open(url, "_blank");
    });

    clearBtn.addEventListener("click", () => {
        form.reset();
    });
});
