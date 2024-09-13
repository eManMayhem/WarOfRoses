var popup = document.getElementById('popup');
var offsetX, offsetY;

// Function to handle mouse down event
function dragMouseDown(e) {
    e.preventDefault();
    // Get the initial cursor position
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
    
    // Register mouse move and mouse up event listeners
    document.addEventListener('mousemove', dragMouseMove);
    document.addEventListener('mouseup', dragMouseUp);
}

// Function to handle mouse move event
function dragMouseMove(e) {
    e.preventDefault();
    // Calculate the new position of the popup
    var newX = e.clientX - offsetX;
    var newY = e.clientY - offsetY;
    
    // Set the new position of the popup
    popup.style.left = newX + 'px';
    popup.style.top = newY + 'px';
}

const openPopup = function() {
    // Get the selected country
    const selectedCountry = document.getElementById("countrySelect").value;

    // Get the popup element
    const popup = document.getElementById('popup');

    playClickSound6();

    const playButton = $('playButton');
    playButton.classList.add('popup-open');
    playButton.disabled = true;


    // Check if the selected country exists in the decisions object
    if (decisions[selectedCountry]) {
        // Find the active event for the selected country
        let activeEventKey = null;
        for (const eventKey in decisions[selectedCountry]) {
            if (decisions[selectedCountry][eventKey].active) {
                activeEventKey = eventKey;
                break;
            }
        }

        // If no active event is found, log an error
        if (!activeEventKey) {
            console.error('No active event found for the selected country.');
            return;
        }

        // Get the active event
        const activeEvent = decisions[selectedCountry][activeEventKey];

        // Check if the active event has the 'buttons' property and it is an array
        if (activeEvent && activeEvent.buttons && Array.isArray(activeEvent.buttons)) {
            // Set the header and description
            const popupTitle = document.querySelector('.popup-title');
            const decisionText = document.getElementById('decisionText');
            popupTitle.textContent = activeEvent.header;
            decisionText.textContent = activeEvent.description;

            // Clear any existing buttons
            const buttonsContainer = document.querySelector('.popup-buttons');
            buttonsContainer.innerHTML = '';

            // Create and append buttons
            activeEvent.buttons.forEach(button => {
                const buttonElement = document.createElement('button');
                buttonElement.textContent = button.text;
                buttonElement.addEventListener('click', () => {
                    button.action();
                    closePopup();
                    playButton.classList.remove('popup-open');
                    playButton.disabled = false;
                });
                buttonsContainer.appendChild(buttonElement);

                // Attach click sound event to the button
                buttonElement.addEventListener('click', playClickSound7);
            });

            // Show the popup
            popup.style.display = 'block';
        } else {
            console.error('Buttons property is missing or invalid in the active event.');
        }
    } else {
        // Log an error if the selected country is not found in the decisions object
        console.error('Selected country not found in decisions object.');
    }
};

// Function to update the content of the popup based on the provided event
const updatePopupContent = function(event) {
    const popupTitle = document.querySelector('.popup-title');
    const decisionText = document.getElementById('decisionText');
    const buttonsContainer = document.querySelector('.popup-buttons');

    if (!event || !event.header || !event.description || !event.buttons || !Array.isArray(event.buttons)) {
        console.error('Invalid event object:', event);
        return;
    }

    // Update the popup title and description
    popupTitle.textContent = event.header;
    decisionText.textContent = event.description;

    // Clear any existing buttons
    buttonsContainer.innerHTML = '';

    // Create and append buttons
    event.buttons.forEach(button => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button.text;
        buttonElement.addEventListener('click', () => {
            button.action();
            closePopup();
        });
        buttonsContainer.appendChild(buttonElement);
    });
};

const togglePopup = () => {
    const popup = $('popup');

    if (popup.style.display === 'none') {
        openPopup();
    }
};

const closePopup = function() {
    document.getElementById('popup').style.display = 'none';
};

// Function to handle mouse up event
function dragMouseUp(e) {
    e.preventDefault();
    // Remove mouse move and mouse up event listeners
    document.removeEventListener('mousemove', dragMouseMove);
    document.removeEventListener('mouseup', dragMouseUp);
}

// Attach mouse down event listener to the popup
popup.addEventListener('mousedown', dragMouseDown);
