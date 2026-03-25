/* ─── DATA ───────────────────────────────────────────────────── */
const zodiacSigns = [
    {
        name: "Aries", dateRange: "March 21 - April 19",
        element: "Fire 🔥", rulingPlanet: "Mars", symbol: "♈",
        traits: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"],
        compatibleWith: [["Leo","♌"],["Sagittarius","♐"],["Gemini","♊"]],
        birthstone: "Diamond 💎", luckyNumbers: [1, 9], color: "Red", colorHex: "#c0392b",
        elementIcon: "🔥", planetIcon: "♂", stoneIcon: "💎"
    },
    {
        name: "Taurus", dateRange: "April 20 - May 20",
        element: "Earth 🌿", rulingPlanet: "Venus", symbol: "♉",
        traits: ["Reliable", "Patient", "Practical", "Devoted", "Responsible"],
        compatibleWith: [["Virgo","♍"],["Capricorn","♑"],["Cancer","♋"]],
        birthstone: "Emerald 💚", luckyNumbers: [2, 6], color: "Emerald Green", colorHex: "#27ae60",
        elementIcon: "🌿", planetIcon: "♀", stoneIcon: "💚"
    },
    {
        name: "Gemini", dateRange: "May 21 - June 20",
        element: "Air 💨", rulingPlanet: "Mercury", symbol: "♊",
        traits: ["Adaptable", "Curious", "Gentle", "Affectionate", "Quick-witted"],
        compatibleWith: [["Libra","♎"],["Aquarius","♒"],["Aries","♈"]],
        birthstone: "Pearl 🤍", luckyNumbers: [3, 5], color: "Sky Yellow", colorHex: "#f1c40f",
        elementIcon: "💨", planetIcon: "☿", stoneIcon: "🤍"
    },
    {
        name: "Cancer", dateRange: "June 21 - July 22",
        element: "Water 🌊", rulingPlanet: "Moon", symbol: "♋",
        traits: ["Loyal", "Emotional", "Sympathetic", "Persuasive", "Protective"],
        compatibleWith: [["Scorpio","♏"],["Pisces","♓"],["Taurus","♉"]],
        birthstone: "Ruby ❤️", luckyNumbers: [2, 7], color: "Silver", colorHex: "#95a5a6",
        elementIcon: "🌊", planetIcon: "☽", stoneIcon: "❤️"
    },
    {
        name: "Leo", dateRange: "July 23 - August 22",
        element: "Fire 🔥", rulingPlanet: "Sun", symbol: "♌",
        traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful"],
        compatibleWith: [["Aries","♈"],["Sagittarius","♐"],["Gemini","♊"]],
        birthstone: "Peridot 🌿", luckyNumbers: [1, 4], color: "Royal Gold", colorHex: "#f39c12",
        elementIcon: "🔥", planetIcon: "☀", stoneIcon: "🌿"
    },
    {
        name: "Virgo", dateRange: "August 23 - September 22",
        element: "Earth 🌿", rulingPlanet: "Mercury", symbol: "♍",
        traits: ["Analytical", "Kind", "Hardworking", "Practical", "Loyal"],
        compatibleWith: [["Taurus","♉"],["Capricorn","♑"],["Cancer","♋"]],
        birthstone: "Sapphire 💙", luckyNumbers: [5, 7], color: "Navy Blue", colorHex: "#2980b9",
        elementIcon: "🌿", planetIcon: "☿", stoneIcon: "💙"
    },
    {
        name: "Libra", dateRange: "September 23 - October 22",
        element: "Air 💨", rulingPlanet: "Venus", symbol: "♎",
        traits: ["Diplomatic", "Gracious", "Fair-minded", "Social", "Cooperative"],
        compatibleWith: [["Gemini","♊"],["Aquarius","♒"],["Leo","♌"]],
        birthstone: "Opal 🌈", luckyNumbers: [4, 6], color: "Rose Pink", colorHex: "#e91e8c",
        elementIcon: "💨", planetIcon: "♀", stoneIcon: "🌈"
    },
    {
        name: "Scorpio", dateRange: "October 23 - November 21",
        element: "Water 🌊", rulingPlanet: "Pluto", symbol: "♏",
        traits: ["Brave", "Passionate", "Resourceful", "Stubborn", "Loyal"],
        compatibleWith: [["Cancer","♋"],["Pisces","♓"],["Virgo","♍"]],
        birthstone: "Topaz 🟡", luckyNumbers: [8, 11], color: "Obsidian Black", colorHex: "#2c3e50",
        elementIcon: "🌊", planetIcon: "♇", stoneIcon: "🟡"
    },
    {
        name: "Sagittarius", dateRange: "November 22 - December 21",
        element: "Fire 🔥", rulingPlanet: "Jupiter", symbol: "♐",
        traits: ["Generous", "Idealistic", "Adventurous", "Witty", "Straightforward"],
        compatibleWith: [["Aries","♈"],["Leo","♌"],["Libra","♎"]],
        birthstone: "Turquoise 🩵", luckyNumbers: [3, 9], color: "Royal Purple", colorHex: "#8e44ad",
        elementIcon: "🔥", planetIcon: "♃", stoneIcon: "🩵"
    },
    {
        name: "Capricorn", dateRange: "December 22 - January 19",
        element: "Earth 🌿", rulingPlanet: "Saturn", symbol: "♑",
        traits: ["Responsible", "Disciplined", "Patient", "Ambitious", "Practical"],
        compatibleWith: [["Taurus","♉"],["Virgo","♍"],["Scorpio","♏"]],
        birthstone: "Garnet 🔴", luckyNumbers: [4, 8], color: "Earthy Brown", colorHex: "#795548",
        elementIcon: "🌿", planetIcon: "♄", stoneIcon: "🔴"
    },
    {
        name: "Aquarius", dateRange: "January 20 - February 18",
        element: "Air 💨", rulingPlanet: "Uranus", symbol: "♒",
        traits: ["Progressive", "Original", "Independent", "Humanitarian", "Inventive"],
        compatibleWith: [["Gemini","♊"],["Libra","♎"],["Aries","♈"]],
        birthstone: "Amethyst 💜", luckyNumbers: [7, 11], color: "Electric Blue", colorHex: "#0288d1",
        elementIcon: "💨", planetIcon: "⛢", stoneIcon: "💜"
    },
    {
        name: "Pisces", dateRange: "February 19 - March 20",
        element: "Water 🌊", rulingPlanet: "Neptune", symbol: "♓",
        traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
        compatibleWith: [["Cancer","♋"],["Scorpio","♏"],["Taurus","♉"]],
        birthstone: "Aquamarine 🩵", luckyNumbers: [3, 7], color: "Sea Green", colorHex: "#00897b",
        elementIcon: "🌊", planetIcon: "♆", stoneIcon: "🩵"
    }
];

const MONTHS = {
    January:1, February:2, March:3, April:4, May:5, June:6,
    July:7, August:8, September:9, October:10, November:11, December:12
};
const MONTH_NAMES = Object.keys(MONTHS);

/* ─── POPULATE SELECTS ───────────────────────────────────────── */
(function populateSelects() {
    const daySel  = document.getElementById('birthDay');
    const yearSel = document.getElementById('birthYear');

    for (let d = 1; d <= 31; d++) {
        const opt = document.createElement('option');
        opt.value = opt.textContent = d;
        daySel.appendChild(opt);
    }

    const curYear = new Date().getFullYear();
    for (let y = curYear; y >= 1924; y--) {
        const opt = document.createElement('option');
        opt.value = opt.textContent = y;
        yearSel.appendChild(opt);
    }
})();

/* ─── CANVAS STARFIELD ───────────────────────────────────────── */
(function initStars() {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        buildStars();
    }

    function buildStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 3000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x:    Math.random() * canvas.width,
                y:    Math.random() * canvas.height,
                r:    Math.random() * 1.2 + 0.2,
                a:    Math.random(),
                da:   (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
                drift: Math.random() * 0.05
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.a += s.da;
            if (s.a <= 0.1 || s.a >= 1) s.da *= -1;
            s.y += s.drift * 0.03;
            if (s.y > canvas.height) s.y = 0;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 245, 210, ${s.a})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
})();

/* ─── ZODIAC LOOKUP ──────────────────────────────────────────── */
function checkZodiac(day, month) {
    const cur = month * 100 + day;
    for (const sign of zodiacSigns) {
        const [s, e] = sign.dateRange.split(' - ');
        const [sm, sd] = s.split(' ');
        const [em, ed] = e.split(' ');
        const start = MONTHS[sm] * 100 + parseInt(sd);
        const end   = MONTHS[em] * 100 + parseInt(ed);
        if (start <= end) { if (cur >= start && cur <= end) return sign; }
        else              { if (cur >= start || cur <= end) return sign; }
    }
    return null;
}

/* ─── FORM SUBMIT ────────────────────────────────────────────── */
document.getElementById('birthChartForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name     = document.getElementById('firstName').value.trim();
    const surname  = document.getElementById('lastName').value.trim();
    const day      = parseInt(document.getElementById('birthDay').value);
    const monthVal = parseInt(document.getElementById('birthMonth').value);
    const year     = parseInt(document.getElementById('birthYear').value);

    if (!name || !surname || isNaN(day) || isNaN(monthVal) || isNaN(year)) {
        showResult(`<p class="error-msg">✦ Please fill in all required fields.</p>`);
        return;
    }

    // Show loader
    const loadingEl = document.getElementById('loading');
    const resultEl  = document.getElementById('result');
    loadingEl.style.display = 'block';
    resultEl.innerHTML = '';

    // Simulate reading delay
    setTimeout(() => {
        loadingEl.style.display = 'none';
        const zodiac = checkZodiac(day, monthVal);
        if (!zodiac) {
            showResult(`<p class="error-msg">✦ Could not determine zodiac sign. Please check your birth date.</p>`);
            return;
        }
        renderResult(name, surname, day, monthVal, year, zodiac);
    }, 1800);
});

/* ─── RENDER RESULT ──────────────────────────────────────────── */
function renderResult(name, surname, day, monthVal, year, z) {
    const monthName = MONTH_NAMES[monthVal - 1];

    const compatHTML = z.compatibleWith.map(([n,sym]) =>
        `<span class="compat-sign"><span class="sign-sym">${sym}</span>${n}</span>`
    ).join('');

    const traitsHTML = z.traits.map(t =>
        `<span class="trait-pill">${t}</span>`
    ).join('');

    const numsHTML = z.luckyNumbers.map(n =>
        `<span class="num-badge">${n}</span>`
    ).join('');

    const html = `
        <div class="oracle-banner">
            <p class="greeting-name">The stars speak for — <strong>${name} ${surname}</strong></p>
            <div class="zodiac-symbol">${z.symbol}</div>
            <h2 class="zodiac-name">${z.name}</h2>
            <p class="zodiac-dates">${z.dateRange}</p>
        </div>

        <div class="info-grid">
            <div class="info-tile">
                <span class="tile-icon">${z.elementIcon}</span>
                <div class="tile-label">Element</div>
                <div class="tile-value">${z.element}</div>
            </div>
            <div class="info-tile">
                <span class="tile-icon">${z.planetIcon}</span>
                <div class="tile-label">Ruling Planet</div>
                <div class="tile-value">${z.rulingPlanet}</div>
            </div>
            <div class="info-tile">
                <span class="tile-icon">${z.stoneIcon}</span>
                <div class="tile-label">Birthstone</div>
                <div class="tile-value">${z.birthstone}</div>
            </div>
            <div class="info-tile">
                <span class="tile-icon">🎂</span>
                <div class="tile-label">Birth Date</div>
                <div class="tile-value">${monthName} ${day}, ${year}</div>
            </div>
        </div>

        <div class="traits-section">
            <div class="section-title">✦ Personality Traits</div>
            <div class="traits-pills">${traitsHTML}</div>
        </div>

        <div class="compat-section">
            <div class="section-title">♡ Most Compatible With</div>
            <div class="compat-signs">${compatHTML}</div>
        </div>

        <div class="lucky-section">
            <div class="lucky-card">
                <div class="section-title">✦ Lucky Numbers</div>
                <div class="lucky-numbers">${numsHTML}</div>
            </div>
            <div class="lucky-card">
                <div class="section-title">✦ Signature Color</div>
                <div class="color-swatch">
                    <div class="swatch-dot" style="background:${z.colorHex}"></div>
                    <span class="swatch-name">${z.color}</span>
                </div>
            </div>
        </div>
    `;

    showResult(html);
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showResult(html) {
    const el = document.getElementById('result');
    el.innerHTML = html;
    el.className = 'result-container';
    // re-trigger animation
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = '';
}
