const zodiacSigns = [
    {
        name: "Aries",
        dateRange: "March 21 - April 19",
        element: "Fire",
        rulingPlanet: "Mars",
        symbol: "♈",
        icon: "fa-ram",
        traits: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"],
        compatibleWith: ["Leo", "Sagittarius", "Gemini"],
        birthstone: "Diamond",
        luckyNumbers: [1, 9],
        color: "Red"
    },
    {
        name: "Taurus",
        dateRange: "April 20 - May 20",
        element: "Earth",
        rulingPlanet: "Venus",
        symbol: "♉",
        icon: "fa-bull",
        traits: ["Reliable", "Patient", "Practical", "Devoted", "Responsible"],
        compatibleWith: ["Virgo", "Capricorn", "Cancer"],
        birthstone: "Emerald",
        luckyNumbers: [2, 6],
        color: "Green"
    },
    {
        name: "Gemini",
        dateRange: "May 21 - June 20",
        element: "Air",
        rulingPlanet: "Mercury",
        symbol: "♊",
        icon: "fa-users",
        traits: ["Adaptable", "Curious", "Gentle", "Affectionate", "Quick-witted"],
        compatibleWith: ["Libra", "Aquarius", "Aries"],
        birthstone: "Pearl",
        luckyNumbers: [3, 5],
        color: "Yellow"
    },
    {
        name: "Cancer",
        dateRange: "June 21 - July 22",
        element: "Water",
        rulingPlanet: "Moon",
        symbol: "♋",
        icon: "fa-crab",
        traits: ["Loyal", "Emotional", "Sympathetic", "Persuasive", "Protective"],
        compatibleWith: ["Scorpio", "Pisces", "Taurus"],
        birthstone: "Ruby",
        luckyNumbers: [2, 7],
        color: "Silver"
    },
    {
        name: "Leo",
        dateRange: "July 23 - August 22",
        element: "Fire",
        rulingPlanet: "Sun",
        symbol: "♌",
        icon: "fa-lion",
        traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful"],
        compatibleWith: ["Aries", "Sagittarius", "Gemini"],
        birthstone: "Peridot",
        luckyNumbers: [1, 4],
        color: "Gold"
    },
    {
        name: "Virgo",
        dateRange: "August 23 - September 22",
        element: "Earth",
        rulingPlanet: "Mercury",
        symbol: "♍",
        icon: "fa-virgin",
        traits: ["Analytical", "Kind", "Hardworking", "Practical", "Loyal"],
        compatibleWith: ["Taurus", "Capricorn", "Cancer"],
        birthstone: "Sapphire",
        luckyNumbers: [5, 7],
        color: "Navy Blue"
    },
    {
        name: "Libra",
        dateRange: "September 23 - October 22",
        element: "Air",
        rulingPlanet: "Venus",
        symbol: "♎",
        icon: "fa-balance-scale",
        traits: ["Diplomatic", "Gracious", "Fair-minded", "Social", "Cooperative"],
        compatibleWith: ["Gemini", "Aquarius", "Leo"],
        birthstone: "Opal",
        luckyNumbers: [4, 6],
        color: "Pink"
    },
    {
        name: "Scorpio",
        dateRange: "October 23 - November 21",
        element: "Water",
        rulingPlanet: "Pluto",
        symbol: "♏",
        icon: "fa-scorpion",
        traits: ["Brave", "Passionate", "Stubborn", "Resourceful", "True friend"],
        compatibleWith: ["Cancer", "Pisces", "Virgo"],
        birthstone: "Topaz",
        luckyNumbers: [8, 11],
        color: "Black"
    },
    {
        name: "Sagittarius",
        dateRange: "November 22 - December 21",
        element: "Fire",
        rulingPlanet: "Jupiter",
        symbol: "♐",
        icon: "fa-arrow-up",
        traits: ["Generous", "Idealistic", "Great sense of humor", "Adventurous", "Straightforward"],
        compatibleWith: ["Aries", "Leo", "Libra"],
        birthstone: "Turquoise",
        luckyNumbers: [3, 9],
        color: "Purple"
    },
    {
        name: "Capricorn",
        dateRange: "December 22 - January 19",
        element: "Earth",
        rulingPlanet: "Saturn",
        symbol: "♑",
        icon: "fa-goat",
        traits: ["Responsible", "Disciplined", "Self-control", "Good managers", "Patient"],
        compatibleWith: ["Taurus", "Virgo", "Scorpio"],
        birthstone: "Garnet",
        luckyNumbers: [4, 8],
        color: "Brown"
    },
    {
        name: "Aquarius",
        dateRange: "January 20 - February 18",
        element: "Air",
        rulingPlanet: "Uranus",
        symbol: "♒",
        icon: "fa-water",
        traits: ["Progressive", "Original", "Independent", "Humanitarian", "Inventive"],
        compatibleWith: ["Gemini", "Libra", "Aries"],
        birthstone: "Amethyst",
        luckyNumbers: [7, 11],
        color: "Blue"
    },
    {
        name: "Pisces",
        dateRange: "February 19 - March 20",
        element: "Water",
        rulingPlanet: "Neptune",
        symbol: "♓",
        icon: "fa-fish",
        traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
        compatibleWith: ["Cancer", "Scorpio", "Taurus"],
        birthstone: "Aquamarine",
        luckyNumbers: [3, 7],
        color: "Sea Green"
    }
];

const months = {
    "January": 1, "February": 2, "March": 3,
    "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9,
    "October": 10, "November": 11, "December": 12
};

document.getElementById('birthChartForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('firstName').value.trim();
    const surName = document.getElementById('lastName').value.trim();
    const day = parseInt(document.getElementById('birthDay').value);
    const monthName = document.getElementById('birthMonth').options[document.getElementById('birthMonth').selectedIndex].text;
    const month = months[monthName];
    const year = parseInt(document.getElementById('birthYear').value);

    // Validate inputs
    if (!name || !surName || isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').innerHTML = '<p class="error">Please fill in all required fields correctly</p>';
        return;
    }

    // Find zodiac sign
    const zodiac = checkZodiac(day, month);
    
    // Display results
    const resultDiv = document.getElementById('result');
    if (zodiac) {
        resultDiv.innerHTML = `
            <div class="result-card">
                <h2>Hello ${name} ${surName}!</h2>
                <div class="zodiac-sign">${zodiac.symbol}</div>
                <h3>Your Zodiac: ${zodiac.name}</h3>
                <p><strong>Element:</strong> ${zodiac.element}</p>
                <p><strong>Ruling Planet:</strong> ${zodiac.rulingPlanet}</p>
                <p><strong>Traits:</strong> ${zodiac.traits.join(', ')}</p>
                <p><strong>Compatible With:</strong> ${zodiac.compatibleWith.join(', ')}</p>
                <p><strong>Birthstone:</strong> ${zodiac.birthstone}</p>
                <p><strong>Lucky Numbers:</strong> ${zodiac.luckyNumbers.join(', ')}</p>
                <p><strong>Color:</strong> ${zodiac.color}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<p class="error">Could not determine your zodiac sign. Please check your birth date.</p>';
    }
});

function checkZodiac(day, month) {
    const current = month * 100 + day;
    
    for (const sign of zodiacSigns) {
        const [startStr, endStr] = sign.dateRange.split(" - ");
        const [startMonthStr, startDayStr] = startStr.split(" ");
        const [endMonthStr, endDayStr] = endStr.split(" ");
        
        const startMonth = months[startMonthStr];
        const endMonth = months[endMonthStr];
        const start = startMonth * 100 + parseInt(startDayStr);
        const end = endMonth * 100 + parseInt(endDayStr);

        if (start <= end) {
            if (current >= start && current <= end) return sign;
        } else {
            if (current >= start || current <= end) return sign;
        }
    }
    return null;
}