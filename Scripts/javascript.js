const $ = function(id) {
    return document.getElementById(id);
}

// Global variables 
var settings = false;

// Object to hold the selected country
const playerCountry = {
    germany: false,
    poland: false,
    italy: false,
}

// Function to handle the start button click
var start = function() {
    $("titleScreen2").classList.add("fade-out", "hidden");
    $("startButton").classList.add("fade-out", "hidden");
    $("settingsButton").classList.add("fade-out", "hidden");
    if (settings === true) {
        closeSettings();
    }

    setTimeout(function() {
        $("titleScreen2").style.display = "none";
        $("startButton").style.display = "none";
        $("settingsButton").style.display = "none";
        $("sidebar").classList.add("fade-in");
        $("ds").classList.add("fade-in");
        setTimeout(function() {
            $("sidebar").style.display = "block";
            $("ds").style.display = "block";
        }, 100);
    }, 250);
}

// Function to open the settings menu
const openSettings = function() {
    settings = true;
    $("settingsMenu").style.display = "block";
    $("settingsMenu").classList.add("fade-in");

}

// Function to close the settings menu
const closeSettings = function() {
    settings = false;
    $("settingsMenu").style.display = "none";
    
    setTimeout(function() {
        $("settingsMenu").style.display = "none";
    }, 250);
}

// Function to update the flag, map, and description
const updateCountryDetails = function() {
    const selectedCountry = $("countrySelect").value;
    
    switch (selectedCountry) {
        case "germany":
            playerCountry.germany = true;
            playerCountry.poland = false;
            playerCountry.italy = false;
            break;
        case "poland":
            playerCountry.germany = false;
            playerCountry.poland = true;
            playerCountry.italy = false;
            break;
        case "italy":
            playerCountry.germany = false;
            playerCountry.poland = false;
            playerCountry.italy = true;
            break;
        default:
            playerCountry.germany = false;
            playerCountry.poland = false;
            playerCountry.italy = false;
            break;
    }



    const rulingIdeology = selectedCountry !== "choose" ? countries[selectedCountry].ideology : "Democratic"; // Default to Democratic if no country is selected

    const flagPlaceholder = $("flagPlaceholder");

    // Construct the flag image URL based on the country name and leading ideology
    const flagImageURL = `${selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}_${rulingIdeology}.png`;
    flagPlaceholder.style.backgroundImage = `url(flags/${flagImageURL})`;
    
    const descriptions = {
        choose: "No country chosen.",
        germany: "It's all in the up and up from here for Germany! With the ever-changing political landscape in Europe, Germany stands strong in central Europe and has vowed to protect its weaker neighbors from whatever the world might throw at them. However, there are rumblings in the depths of Berlin about bringing back the Kaiser or even bringing back the communists that once oppressed the East. Can Germany stand tall as a democratic bastion? Or will they crumble under their own weight?",
        poland: "The Kingdom of Poland has risen from the ashes! The recently elected president from the Monarchist party has ascended the throne as the new queen of Poland. She has proclaimed her want for a greater Polish state, to bring Poland back to where it once was in history. There is still large support for the previous democratic government as many people are not happy about the ascension, but what will they do about it?",
        italy: "Turmoil in Italy! The current democratic government has grown severely unpopular among the citizens of Italy. Protests fill the streets, with worker unions demanding higher pay and better working conditions, or else. The current government seemingly can't hold on anymore, and the cracks are beginning to show. Will democracy win back the people of Italy? Or will the country erupt into civil war? Only time will tell. ",
    };
    $("description").innerText = descriptions[selectedCountry];

    const selectedMap = $("mapSelect").value;
    for (const mode in mapMode) {
        mapMode[mode] = (mode === selectedMap);
    }

    let mapImageURL;
    if (selectedCountry === "choose") {
        mapImageURL = `${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}Mode/titleScreen.png`;
    } else {
        mapImageURL = `${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}Mode/${selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}/1.png`;
    }

    // Update the map image source
    $("titleScreenImg").src = mapImageURL;

    // Update the start button color
    updateStartButtonColor(selectedCountry);

    // Update country stats
    updateCountryStats(selectedCountry);

    // Update the pie chart
    updatePieChart(selectedCountry);
}

// Function to update the start button color based on the selected country
const updateStartButtonColor = function(selectedCountry) {
    const startButton = $("startGameButton");
    if (selectedCountry !== "choose") {
        startButton.classList.add("selected");
    } else {
        startButton.classList.remove("selected");
    }
}

// Function to handle the back button
var backButton = function() {
    $("sidebar").classList.remove("fade-in");
    $("ds").classList.remove("fade-in");
    $("ds").classList.add("fade-out", "hidden");
    $("sidebar").classList.add("fade-out", "hidden");
    $("titleScreen2").classList.remove("hidden");
    $("startButton").classList.remove("hidden");
    $("settingsButton").classList.remove("hidden");
    $("titleScreen2").style.display = "flex";
    $("startButton").style.display = "block";
    $("settingsButton").style.display = "block";

    setTimeout(function() {
        $("sidebar").style.display = "none";
        $("ds").style.display = "none";
    }, 250);
};

// Function to start the game with loading screen
const startGame = function() {
    console.log("Start game function called");


    const selectedCountry = $("countrySelect").value;
    const rulingIdeology = selectedCountry !== "choose" ? countries[selectedCountry].ideology : "Democratic"; // Default to Democratic if no country is selected
    const flagImageURL = `${selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}_${rulingIdeology}.png`;

    // Update flagGame with the selected country's flag
    $("flagGame").style.display = "block";
    $("flagGame").style.backgroundImage = `url(flags/${flagImageURL})`;

    $("sidebar2").classList.add("fade-in");
    $("sidebar2").classList.remove("hidden");
    $("sidebar2").style.display = "block";

    $("playButton").classList.add("fade-in");
    $("playButton").classList.remove("hidden");
    $("playButton").style.display = "block";
    

    // Show the loading screen
    const loadingScreen = $("loadingScreen");
    loadingScreen.style.opacity = 1; // Ensure opacity is reset
    loadingScreen.style.display = "block";

    // Hide the sidebar, description, and version elements
    $("sidebar").classList.remove("fade-in");
    $("ds").classList.remove("fade-in");
    $("version").classList.remove("fade-in");

    // Add fade-out and hidden classes to hide the elements
    $("ds").classList.add("fade-out", "hidden");
    $("sidebar").classList.add("fade-out", "hidden");
    $("version").classList.add("fade-out", "hidden");

    // Get the selected map mode
    const selectedMap = $("mapSelect").value;

    // Apply styles based on the selected map mode
    switch (selectedMap) {
        case "light":
            loadingScreen.classList.remove("loading-screen-dark");
            loadingScreen.classList.remove("loading-screen-old");
            loadingScreen.classList.add("loading-screen-light");
            break;
        case "dark":
            loadingScreen.classList.remove("loading-screen-light");
            loadingScreen.classList.remove("loading-screen-old");
            loadingScreen.classList.add("loading-screen-dark");
            break;
        case "old":
            loadingScreen.classList.remove("loading-screen-dark");
            loadingScreen.classList.remove("loading-screen-light");
            loadingScreen.classList.add("loading-screen-old");
            break;
        default:
            loadingScreen.classList.remove("loading-screen-dark");
            loadingScreen.classList.remove("loading-screen-old");
            loadingScreen.classList.add("loading-screen-light");
            break;
    }

    // After a brief delay, hide the loading screen
    setTimeout(function() {
        loadingScreen.style.opacity = 0;
        $("sidebar").style.display = "none";
        $("ds").style.display = "none"; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = "none";
            openPopup();
        }, 300); // Delay for 0.5 seconds to match the transition duration
    }, 2500); // Delay for 2.5 seconds to simulate loading
};

// Function to check if a country is chosen before starting the game
const checkCountrySelection = function() {
    alert("This game is still under construction and is still in early development, many things you will see here are not final! If you want more info, just ask me... or look at the really bad roadmpa thats in the files.");

    if (playerCountry.poland === true) {
    
        if (confirm("Poland is currently still in development! Play at your own risk. Some decsions may not work.") == true) {
            startGame();
        } else {
            userPreference = "aaa";
        }
    } else {

    if ($("countrySelect").value !== "choose") {
        startGame();
    } else {
        alert("Make sure to choose a country first! :3");
    }
}
}

// Event listener for slider interaction (click and value change)
const slider = document.querySelector('.slider');
slider.addEventListener('click', playClickSound5);
slider.addEventListener('input', playClickSound5);

// Event listeners attached within window.onload
window.onload = function() {
    $("startButton").onclick = start;
    $("settingsButton").onclick = function() {
        if (settings) {
            closeSettings();
        } else {
            openSettings();
        }
    };
    $("countrySelect").onchange = updateCountryDetails;
    $("backButton").onclick = backButton;
    $("startGameButton").onclick = checkCountrySelection;
    $("mapSelect").onchange = changeMap;

    // Attach click sound events
    const clickSoundElements = [
        { element: $("settingsButton"), audioElement: $("clickSound5") },
        { element: $("startButton"), audioElement: $("clickSound3") },
        { element: $("backButton"), audioElement: $("clickSound2") },
        { element: $("mapSelect"), audioElement: $("clickSound5") },
        { element: $("countrySelect"), audioElement: $("clickSound4") },
        { element: $("startGameButton"), audioElement: $("clickSound3") },
    ];

    clickSoundElements.forEach(item => attachClickSound(item.element, item.audioElement));
    
    $("clickSfxVolume").addEventListener("input", handleSfxVolumeChange);
    
    $("clickSfxVolume").addEventListener("input", function() {
        $("slider-value").innerText = this.value;
    });

    // Attach the event listener to open the popup on game start
};