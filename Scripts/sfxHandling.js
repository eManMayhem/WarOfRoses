// Function to handle click sound effect
const playClickSound = function(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
};

// Attach a click event listener to the element you want to add the click sound effect to
const attachClickSound = function(element, audioElement) {
    element.addEventListener('click', () => {
        playClickSound(audioElement);
    });
};

const handleSfxVolumeChange = function() {
    const sfxVolume = $("clickSfxVolume").value / 10; // Adjust the slider's maximum value

    // Loop through all click sound effect elements and adjust their volume
    const clickSoundElements = [
        $("clickSound1"),
        $("clickSound2"),
        $("clickSound3"),
        $("clickSound4"),
        $("clickSound5"),
    ];

    clickSoundElements.forEach(audioElement => {
        if (audioElement) {
            audioElement.volume = sfxVolume;
        }
    });
};

const playClickSound1 = function() {
    const clickSound1 = document.getElementById('clickSound1');
    clickSound1.currentTime = 0;
    clickSound1.play();
};

const playClickSound3 = function() {
    const clickSound3 = document.getElementById('clickSound3');
    clickSound3.currentTime = 0;
    clickSound3.play();
};

const playClickSound5 = function() {
    const clickSound5 = document.getElementById('clickSound5');
    clickSound5.currentTime = 0;
    clickSound5.play();
};

const playClickSound6 = function() {
    const clickSound6 = document.getElementById('clickSound6');
    clickSound6.currentTime = 0;
    clickSound6.play();
};

const playClickSound7 = function() {
    const clickSound7 = document.getElementById('clickSound7');
    clickSound7.currentTime = 0;
    clickSound7.play();
};