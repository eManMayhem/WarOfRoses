const countries = {
    albania: {
        name: "Albania",
        formalname: "Kingdom of Albania",
        adjetive: "Albanian",
        ideology: "Monarchist",
        exist: true,
        puppet: false,
        happiness: 5.8,
        democratic: 19,
        communsit: 12,
        monarchist: 52,
        fascist: 29,
        stats: {
            army: 8,
            tanks: 2,
            air: 4,
            spy: 4
        }
    },
    armenia: {
        name: "Armenia",
        formalname: "Republic of Armenia",
        adjetive: "Armenian",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 1.6,
        democratic: 68,
        communsit: 23,
        monarchist: 6,
        fascist: 3,
        stats: {
            army: 10,
            tanks: 2,
            air: 8,
            spy: 7
        }
    },
    austria: {
        name: "Austria",
        formalname: "Austrian Commune",
        adjetive: "Austrian",
        ideology: "Communist",
        exist: true,
        puppet: false,
        happiness: 6.1,
        democratic: 24,
        communsit: 64,
        monarchist: 10,
        fascist: 2,
        stats: {
            army: 13,
            tanks: 3,
            air: 12,
            spy: 3
        }
    },
    azerbijan: {
        name: "Azerbaijan",
        formalname: "Republic of Azerbaijan",
        adjetive: "Azerbaijani",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 8.4,
        democratic: 65,
        communsit: 20,
        monarchist: 10,
        fascist: 5,
        stats: {
            army: 11,
            tanks: 6,
            air: 9,
            spy: 5
        }
    },
    belerus: {
        name: "Belarus",
        formalname: "Belarusian Soviet Socialist Republic",
        adjetive: "Belarusian",
        ideology: "Communist",
        exist: true,
        puppet: false,
        happiness: -3.6,
        democratic: 5,
        communsit: 87,
        monarchist: 3,
        fascist: 5,
        stats: {
            army: 8,
            tanks: 3,
            air: 7,
            spy: 6
        }
    },
    belgium: {
        name: "Belgium",
        formalname: "Kingdom of Belgium",
        adjetive: "Belgian",
        ideology: "Monarchist",
        exist: true,
        puppet: false,
        happiness: 7.9,
        democratic: 35,
        communsit: 18,
        monarchist: 42,
        fascist: 5,
        stats: {
            army: 13,
            tanks: 5,
            air: 11,
            spy: 2
        }
    },
    bosnia: {
        name: "Bosnia & Herzegovina",
        formalname: "Kingdom of Bosnia & Herzegovina",
        adjetive: "Bosnian",
        ideology: "Monarchist",
        exist: true,
        puppet: false,
        happiness: -4.8,
        democratic: 16,
        communsit: 11,
        monarchist: 60,
        fascist: 13,
        stats: {
            army: 10,
            tanks: 4,
            air: 8,
            spy: 5
        }
    },
    bulgaria: {
        name: "Bulgaria",
        formalname: "Third Bulgarian Empire",
        adjetive: "Bulgarian",
        ideology: "Fascist",
        exist: true,
        puppet: false,
        happiness: -2.6,
        democratic: 13,
        communsit: 28,
        monarchist: 18,
        fascist: 41,
        stats: {
            army: 22,
            tanks: 6,
            air: 18,
            spy: 5
        }
    },
    croatia: {
        name: "Croatia",
        formalname: "Republic of Croatia",
        adjetive: "Croatian",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 3.4,
        democratic: 60,
        communsit: 18,
        monarchist: 12,
        fascist: 10,
        stats: {
            army: 8,
            tanks: 3,
            air: 6,
            spy: 7
        }
    },
    cyprus: {
        name: "Cyprus",
        formalname: "Republic of Cyprus",
        adjetive: "Cypriot",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 7.6,
        democratic: 73,
        communsit: 13,
        monarchist: 9,
        fascist: 5,
        stats: {
            army: 2,
            tanks: 0,
            air: 3,
            spy: 1
        }
    },
    czechia: {
        name: "Czechia",
        formalname: "Czech Republic",
        adjetive: "Czech",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 6.8,
        democratic: 64,
        communsit: 21,
        monarchist: 10,
        fascist: 5,
        stats: {
            army: 9,
            tanks: 2,
            air: 8,
            spy: 2
        }
    },
    denmark: {
        name: "Denmark",
        formalname: "Kingdom of Denmark",
        adjetive: "Danish",
        ideology: "Monarchist",
        exist: true,
        puppet: false,
        happiness: 8.7,
        democratic: 40,
        communsit: 13,
        monarchist: 45,
        fascist: 2,
        stats: {
            army: 3,
            tanks: 1,
            air: 15,
            spy: 2
        }
    },
    estonia: {
        name: "Estonia",
        formalname: "Estionian Imperium",
        adjetive: "Estonian",
        ideology: "Fascist",
        exist: true,
        puppet: false,
        happiness: 6.2,
        democratic: 5,
        communsit: 18,
        monarchist: 10,
        fascist: 72,
        stats: {
            army: 5,
            tanks: 1,
            air: 4,
            spy: 3
        }
    },
    finland: {
        name: "Finland",
        formalname: "Republic of Finland",
        adjetive: "Finnish",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 9.2,
        democratic: 65,
        communsit: 18,
        monarchist: 10,
        fascist: 7,
        stats: {
            army: 14,
            tanks: 5,
            air: 4,
            spy: 5
        }
    },
    france: {
        name: "France",
        formalname: "French Republic",
        adjetive: "French",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 7.9,
        democratic: 65,
        communsit: 14,
        monarchist: 17,
        fascist: 4,
        stats: {
            army: 18,
            tanks: 7,
            air: 14,
            spy: 5
        }
    },
    georgia: {
        name: "Georgia",
        formalname: "Georgian Republic",
        adjetive: "Georgian",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: -2.3,
        democratic: 28,
        communsit: 27,
        monarchist: 20,
        fascist: 15,
        stats: {
            army: 4,
            tanks: 2,
            air: 4,
            spy: 2
        }
    },
    germany: {
        name: "Germany",
        formalname: "Republic of Germany",
        adjetive: "German",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 7.2,
        democratic: 84,
        communsit: 4,
        monarchist: 9,
        fascist: 3,
        stats: {
            army: 12,
            tanks: 4,
            air: 15,
            spy: 1
        }
    },
    greece: {
        name: "Greece",
        formalname: "Kingdom of Greece",
        adjetive: "Greek",
        ideology: "Monarchist",
        exist: true,
        puppet: false,
        happiness: 5.6,
        democratic: 20,
        communsit: 15,
        monarchist: 55,
        fascist: 10,
        stats: {
            army: 11,
            tanks: 2,
            air: 6,
            spy: 4
        }
    },
    hungary: {
        name: "Hungary",
        formalname: "Republic of Hungary",
        adjetive: "Hungarian",
        ideology: "Fascist",
        exist: true,
        puppet: false,
        happiness: -6.2,
        democratic: 22,
        communsit: 13,
        monarchist: 5,
        fascist: 60,
        stats: {
            army: 6,
            tanks: 2,
            air: 4,
            spy: 3
        }
    },
    poland: {
        name: "Poland",
        formalname: "Kingdom of Poland",
        adjetive: "Polish",
        ideology: "Monarchist",
        exist: true,
        puppet: false,
        happiness: 4.4,
        democratic: 24,
        communsit: 13,
        monarchist: 54,
        fascist: 9,
        stats: {
            army: 24,
            tanks: 2,
            air: 8,
            spy: 3
        }
    },
    italy: {
        name: "Italy",
        formalname: "Italian Republic",
        adjetive: "Italian",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: -7.8,
        democratic: 32,
        communsit: 27,
        monarchist: 22,
        fascist: 19,
        stats: {
            army: 9,
            tanks: 3,
            air: 10,
            spy: 4
        }
    },
    luxembourg: {
        name: "Luxembourg",
        formalname: "Grand Duchy of Luxembourg",
        adjetive: "Luxembourgian",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: -5.7,
        democratic: 78,
        communsit: 5,
        monarchist: 14,
        fascist: 3,
        stats: {
            army: 3,
            tanks: 1,
            air: 3,
            spy: 7
        }
    },
    lithuania: {
        name: "Lithuania",
        formalname: "Republic of Lithuania",
        adjetive: "Lithuanian",
        ideology: "Democratic",
        exist: true,
        puppet: false,
        happiness: 1.2,
        democratic: 75,
        communsit: 8,
        monarchist: 13,
        fascist: 4,
        stats: {
            army: 5,
            tanks: 2,
            air: 4,
            spy: 2
        }
    }
}

const updateCountryStats = function(selectedCountry) {
    if (selectedCountry === "choose") {
        $("heading").innerText = "Statistics:";
        $("army").innerText = "Manpower";
        $("tanks").innerText = "Tanks";
        $("air").innerText = "Planes";
        $("spy").innerText = "Spies";
        $("happy").innerText = "Happiness";

        return;
    } 

    var stats = countries[selectedCountry].stats;

    $("heading").innerText = countries[selectedCountry].adjetive + " Statistics: ";
    $("army").innerText =  (stats.army * 10) + "k Manpower";
    $("tanks").innerText = stats.tanks + "k Tanks";
    $("air").innerText = stats.air + "k Planes";
    if(stats.spy == 1) {
        $("spy").innerText = stats.spy + " Agent";
    } else {
        $("spy").innerText = stats.spy + " Agents";
    }
    $("happy").innerText = countries[selectedCountry].happiness + " Happiness";
};