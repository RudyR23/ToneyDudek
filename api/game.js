const dailyDataset = [
    {
        hasAlt: true,
        clues: ["Dunfermline Athletic", "Borussia Mönchengladbach", "Lille", "Wolverhampton Wanderers"],
        alts: ["(or Debrecen)", "(or Fiorentina)", "(or Columbus Crew)", "(or Salford City)"],
        counts: [3, 4, 5, 6],
        whyText: 'The <span class="highlighted-explanation-span">number of sides of the club\'s crest</span> increases by one each time.',
        answers: ["Wolverhampton Wanderers", "Salford City"],
        accepted: [["wolverhampton wanderers", "wolves", "wolverhampton"], ["salford city", "salford"]]
    },
    {
        hasAlt: true,
        clues: ["England", "France", "Argentina", "Germany"],
        alts: ["(or Spain)", "(or Uruguay)", "", "(or Italy)"],
        counts: [1, 2, 3, 4],
        whyText: 'The <span class="highlighted-explanation-span">number of World Cups won by the international team</span> increases by one each time.',
        answers: ["Germany", "Italy"],
        accepted: [["germany", "deutschland"], ["italy", "italia"]]
    },
    {
        hasAlt: false,
        clues: ["Fevernova", "Teamgeist", "Jabulani", "Brazuca"],
        alts: ["", "", "", ""],
        counts: [2002, 2006, 2010, 2014],
        whyText: 'These are the official <span class="highlighted-explanation-span">adidas match balls used in FIFA World Cups</span> <span class="white-text-span">from 2002 to 2014</span>.',
        answers: ["Brazuca"],
        accepted: [["brazuca"]]
    },
    {
        hasAlt: false,
        clues: ["David Moyes", "Louis van Gaal", "Jose Mourinho", "Ole Gunnar Solskjaer"],
        alts: ["", "", "", ""],
        counts: [2013, 2014, 2016, 2018],
        whyText: 'These are the <span class="highlighted-explanation-span">first four managers to succeed Sir Alex Ferguson</span> <span class="white-text-span">at Manchester United</span>.',
        answers: ["Ole Gunnar Solskjaer", "Ole Gunnar Solskjær"],
        accepted: [["ole gunnar solskjaer", "ole gunnar solskjær", "solskjaer", "solskjær", "ole"]]
    },
    {
        hasAlt: false,
        clues: ["Theo Walcott", "Pierre-Emerick Aubameyang", "Eddie Nketiah", "Viktor Gyokeres"],
        alts: ["", "", "", ""],
        counts: [2008, 2018, 2022, 2025],
        whyText: 'These are the <span class="highlighted-explanation-span">last four players to be given the number 14 shirt</span> <span class="white-text-span">at Arsenal</span>.',
        answers: ["Viktor Gyokeres", "Viktor Gyökeres"],
        accepted: [["viktor gunnar gyokeres", "viktor gyökeres", "gyokeres", "gyökeres", "viktor"]]
    },
    {
        hasAlt: false,
        clues: ["19", "10", "30", "10"],
        alts: ["", "", "", ""],
        counts: ["Barcelona", "Barcelona", "PSG", "Inter Miami"],
        whyText: 'These are the <span class="highlighted-explanation-span">last 4 shirt numbers worn by Lionel Messi</span> <span class="white-text-span">in club football</span>.',
        answers: ["10"],
        accepted: [["10"]]
    },
    {
        hasAlt: true,
        clues: ["Dan Burn", "Erling Haaland", "Mateus Fernandes", "Konstantinos Mavropanos"],
        alts: ["(or Luke Shaw)", "(or Ollie Watkins)", "(or Dominik Szoboszlai)", "(or Gianluigi Donnarumma)"],
        counts: ["1,1", "2,2", "3,3", "4,4"],
        whyText: 'The <span class="highlighted-explanation-span">number of syllables in the current Premier League player\'s first and last name</span> increases by 1 each time.',
        answers: ["Konstantinos Mavropanos", "Gianluigi Donnarumma"],
        accepted: [["konstantinos mavropanos", "mavropanos", "konstantinos"], ["gianluigi donnarumma", "donnarumma", "gianluigi"]]
    },
    {
        hasAlt: true,
        clues: ["Arnaut Danjuma", "Bobby Charlton", "Chris Brunt", "Daniel Agger"],
        alts: ["", "", "", ""],
        counts: ["AD", "BC", "CB", "DA"],
        whyText: 'The <span class="highlighted-explanation-span">first initial moves up by one</span> (A becomes B, etc.) while the <span class="highlighted-explanation-span">second initial moves down by one</span> (D becomes C, etc.).',
        answers: ["Daniel Agger", "Darren Anderton", "Darren Ambrose"],
        accepted: [["daniel agger", "agger"], ["darren anderton", "anderton"], ["darren ambrose", "ambrose"]]
    },
    {
        hasAlt: true,
        clues: ["Rui Patricio, Wolves", "Hugo Ekitike, Liverpool", "Petr Cech, Arsenal", "Adnan Januzaj, Manchester United"],
        alts: ["", "", "", "(or Kostas Manolas, Roma)"],
        counts: [11, 22, 33, 44],
        whyText: 'Their <span class="highlighted-explanation-span">double digit shirt number at that club</span> increases by 11 each time.',
        answers: ["Adnan Januzaj", "Kostas Manolas"],
        accepted: [["adnan januzaj", "januzaj", "adnan"], ["kostas manolas", "manolas", "kostas"]]
    },
    {
        hasAlt: true,
        clues: ["Jan Koller", "Marcelo", "Maynor Figueroa", "Julio Enciso"],
        alts: ["", "", "", "(or Julian Alvarez, or Jules Kounde)"],
        counts: ["January", "March", "May", "July"],
        whyText: 'The sequence tracks players whose names begin with the letters representing odd-numbered calendar months: Month 1 (<span class="highlighted-explanation-span">Jan</span>uary), Month 3 (<span class="highlighted-explanation-span">Mar</span>ch), Month 5 (<span class="highlighted-explanation-span">May</span>), and Month 7 (<span class="highlighted-explanation-span">Jul</span>y).',
        answers: ["Julio Enciso", "Julian Alvarez", "Jules Kounde"],
        accepted: [["julio enciso", "enciso", "julio"], ["julian alvarez", "julián álvarez", "alvarez", "álvarez", "julian", "julián"], ["jules kounde", "jules koundé", "kounde", "koundé", "jules"]]
    }
];

const LAUNCH_DATE = new Date("July 7, 2026 00:00:00").getTime();
const validFootballersDA = ["daniel agger", "darren anderton", "darren ambrose", "david alaba", "dani alves", "daniel alves", "danny welbeck", "dele alli"];

function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1) ? matrix[i - 1][j - 1] : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
        }
    }
    return matrix[b.length][a.length];
}

function normalizeStr(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');
}

function checkSolutionMatching(guess, entry, currentQIdx) {
    const cleanGuess = normalizeStr(guess);
    if (!cleanGuess) return -1;
    
    if (currentQIdx === 7) {
        const words = cleanGuess.split(' ');
        if (words.length >= 2 && words[0].charAt(0) === 'd' && words[words.length - 1].charAt(0) === 'a') {
            if (validFootballersDA.some(p => cleanGuess.includes(p) || p.includes(cleanGuess))) return 999;
        }
    }

    if (currentQIdx === 9) {
        if (cleanGuess.split(' ').some(w => w.startsWith("jul"))) {
            for (let setIdx = 0; setIdx < entry.accepted.length; setIdx++) {
                if (entry.accepted[setIdx].some(variant => cleanGuess === variant || variant.includes(cleanGuess) || cleanGuess.includes(variant))) return setIdx;
            }
            return 0;
        }
    }

    for (let setIdx = 0; setIdx < entry.accepted.length; setIdx++) {
        for (let variant of entry.accepted[setIdx]) {
            if (variant.length < 3 || !isNaN(variant)) {
                if (cleanGuess === variant) return setIdx;
                continue;
            }
            if (cleanGuess === variant || (variant.includes(cleanGuess) && cleanGuess.length > 3)) return setIdx;
            if (getLevenshteinDistance(cleanGuess, variant) <= (variant.length > 12 ? 3 : variant.length > 6 ? 2 : 1)) return setIdx;
        }
    }
    return -1;
}

function determineActiveSequenceDay(overrideIdx) {
    if (overrideIdx !== null && overrideIdx !== undefined && overrideIdx !== "") {
        return parseInt(overrideIdx) % dailyDataset.length;
    }
    const now = Date.now();
    const difference = now - LAUNCH_DATE;
    const absoluteDayIndex = Math.floor(difference / (1000 * 60 * 60 * 24));
    return Math.max(0, absoluteDayIndex) % dailyDataset.length;
}

export default async function handler(req, res) {
    // 1. Get current question index (allow sandbox overrides if passed via headers or query strings)
    const clientOverride = req.query.forcedIndex || req.headers['x-forced-index'];
    const currentQIdx = determineActiveSequenceDay(clientOverride);
    const entry = dailyDataset[currentQIdx];

    // 2. Handle POST Request (Guess verification)
    if (req.method === 'POST') {
        let body = req.body;
        if (typeof body === 'string') {
            try { body = JSON.parse(body); } catch(e) {}
        }
        const userGuess = body?.guess || '';
        const matchIndex = checkSolutionMatching(userGuess, entry, currentQIdx);

        if (matchIndex !== -1) {
            function titleCase(str) {
                return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            }
            let chosenPrimaryAns = (matchIndex === 999 || currentQIdx === 9) ? titleCase(userGuess.trim()) : entry.answers[matchIndex];
            
            return res.status(200).json({
                correct: true,
                matchIndex: matchIndex,
                primaryAnswer: chosenPrimaryAns,
                answers: entry.answers,
                whyText: entry.whyText,
                counts: entry.counts
            });
        } else {
            return res.status(200).json({ correct: false });
        }
    }

    // 3. Handle GET Request (Fetch clues safely without exposing answers)
    const filteredQuestion = {
        hasAlt: entry.hasAlt,
        clues: entry.clues,
        alts: entry.alts
    };

    return res.status(200).json({
        questionIndex: currentQIdx,
        question: filteredQuestion
    });
}