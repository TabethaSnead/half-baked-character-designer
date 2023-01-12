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

const headImg = document.getElementById('headImg');
const middleImg = document.getElementById('middleImg');
const pantsImg = document.getElementById('pantsImg');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
let catchphrases = [];
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    headImg.src = `../assets/${headDropdown.value}-head.png`;

    // get the value of the head dropdown

    // increment the head change count state
    headCount++;
    displayStats();
    console.log(headCount);
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (call displayStats() to do this work)
});

middleDropdown.addEventListener('change', () => {
    middleImg.src = `../assets/${middleDropdown.value}-middle.png`;
    // get the value of the middle dropdown
    // increment the middle change count state
    middleCount++;
    displayStats();
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    pantsImg.src = `../assets/${bottomDropdown.value}-pants.png`;
    // increment the bottom change count state
    bottomCount++;
    displayStats();
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    catchphrases.push(catchphraseInput.value);
    console.log(catchphrases);
    catchphrasesEl.textContent = '';
    // push the new catchphrase to the catchphrase array in state
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
});

function displayStats() {
    headEl.textContent = headCount;
    middleEl.textContent = middleCount;
    bottomEl.textContent = bottomCount;
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
}
