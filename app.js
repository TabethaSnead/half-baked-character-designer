// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');

const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
const catchphrases = [];
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url(./assets/${headDropdown.value}-head.png)`;

    // get the value of the head dropdown

    // increment the head change count state
    headCount++;

    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url(./assets/${middleDropdown.value}-middle.png)`;
    // get the value of the middle dropdown
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    // let bttmDropdownval = bottomDropdown.value;
    // get the value of the bottom dropdown
    bottomEl.style.backgroundImage = `url(./assets/${bottomDropdown.value}-pants.png)`;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const inputPhrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(inputPhrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchPhrases();
});

function displayStats() {
    reportEl.textContent = `you have changed the head ${headCount} times. You have changed the middle ${middleCount} times.
    you have changed the pants ${bottomCount} times.`;

    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchPhrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';

    // loop through each catchphrase in state
    for (let phrase of catchphrases) {
        const displayPhrase = document.createElement('div');
        displayPhrase.classList.add('catchPhrase-class');
        displayPhrase.textContent = phrase;
        catchphrasesEl.append(displayPhrase);
    }
    // and for each catchphrase
}
