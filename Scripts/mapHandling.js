// Object to hold the selected map mode
const mapMode = {
    light: false,
    dark: false,
    old: true,
}

// Function to handle map change
const changeMap = function() {
    // Show the loading screen
    const loadingScreen = $("loadingScreen");
    loadingScreen.style.opacity = 1; // Ensure opacity is reset
    loadingScreen.style.display = "block";

    // Get the selected map mode
    const selectedMap = $("mapSelect").value;

    // Get the selected country (if any)
    const selectedCountry = $("countrySelect").value;

    // Construct the map image URL based on the selected map mode and country
    let mapImageURL;
    if (selectedCountry === "choose") {
        mapImageURL = `${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}Mode/titleScreen.png`;
    } else {
        mapImageURL = `${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}Mode/${selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}/1.png`;
    }

    // Update the map image source
    $("titleScreenImg").src = mapImageURL;

    // Update the loading screen style based on the selected map mode
    switch (selectedMap) {
        case "light":
            loadingScreen.classList.remove("loading-screen-dark", "loading-screen-old");
            loadingScreen.classList.add("loading-screen-light");
            break;
        case "dark":
            loadingScreen.classList.remove("loading-screen-light", "loading-screen-old");
            loadingScreen.classList.add("loading-screen-dark");
            break;
        case "old":
            loadingScreen.classList.remove("loading-screen-dark", "loading-screen-light");
            loadingScreen.classList.add("loading-screen-old");
            break;
        default:
            loadingScreen.classList.remove("loading-screen-dark", "loading-screen-old");
            loadingScreen.classList.add("loading-screen-light");
            break;
    }

    // Fade out the loading screen after a delay to simulate loading
    setTimeout(function() {
        loadingScreen.style.opacity = 0; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = "none"; // Hide after fade out
        }, 300); // Delay for 0.5 seconds to match the transition duration
    }, 2300); // Delay for 2~ seconds to simulate loading
}

const selectedMap = $("mapSelect").value;
for (const mode in mapMode) {
    mapMode[mode] = (mode === selectedMap);
}