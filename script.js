// Store the place selected by the user

let selectedPlace = "";


// Get the state dropdown from HTML

let state = document.getElementById("state");


// Get the empty place container from HTML

let placeContainer =
    document.getElementById("place-container");


// Get trip information from HTML

let days = document.getElementById("days");

let people = document.getElementById("people");

let start = document.getElementById("start");

let travelMode = document.getElementById("travel-mode");

let budget = document.getElementById("budget");


// Variables to store user information

let selectedTravelMode = "";

let startingLocation = "";

let tripDays = 0;

let totalPeople = 0;

let totalBudget = 0;


// Listen for state selection

state.addEventListener("change", function () {

    // Check if Punjab was selected

    if (state.value === "punjab") {

        placeContainer.innerHTML = `

            <h3>Popular Places in Punjab</h3>

            <img
                src="images/amritsar.jpg"
                alt="Amritsar"
                width="300"
            >

            <h3>Amritsar</h3>

            <button onclick="selectPlace('Amritsar')">
                Plan This Place
            </button>


            <br><br>


            <img
                src="images/qilamubarak.jpg"
                alt="Patiala"
                width="300"
            >

            <h3>Patiala</h3>

            <button onclick="selectPlace('Patiala')">
                Plan This Place
            </button>


            <br><br>


            <img
                src="images/jalandhar.jpg"
                alt="Jalandhar"
                width="300"
            >

            <h3>Jalandhar</h3>

            <button onclick="selectPlace('Jalandhar')">
                Plan This Place
            </button>


            <br><br>


            <img
                src="images/ludhiana.jpg"
                alt="Ludhiana"
                width="300"
            >

            <h3>Ludhiana</h3>

            <button onclick="selectPlace('Ludhiana')">
                Plan This Place
            </button>

        `;

    }

});


// Function for selecting a destination

function selectPlace(place) {

    selectedPlace = place;

    console.log("Selected Place:", selectedPlace);

    document.getElementById("selected-place-text").innerHTML =
        "You selected " + selectedPlace;

}


// Get Continue button

let saveTrip = document.getElementById("save-trip");


// Listen for Continue button

saveTrip.addEventListener("click", function () {

    // Get number of days

    tripDays = Number(days.value);


    // Get number of people

    totalPeople = Number(people.value);


    // Get starting location

    startingLocation = start.value;


    // Get travel mode

    selectedTravelMode = travelMode.value;


    // Get total budget

    totalBudget = Number(budget.value);


    // Display information in console

    console.log("Trip Days:", tripDays);

    console.log("Total People:", totalPeople);

    console.log("Starting Location:", startingLocation);

    console.log("Travel Mode:", selectedTravelMode);

    console.log("Total Budget:", totalBudget);

});