// Data for emojis categorized with Dutch names
const emojiData = {
  activiteiten: [
    { char: '⚽', name: 'voetbal' },
    { char: '🏀', name: 'basketbal' },
    { char: '🏈', name: 'amerikaans voetbal' },
    { char: '🎾', name: 'tennis' },
    { char: '🏐', name: 'volleybal' },
    { char: '🏉', name: 'rugby' },
    { char: '🎱', name: 'biljart' },
    { char: '🏓', name: 'tafeltennis' },
    { char: '🏸', name: 'badminton' },
    { char: '🥅', name: 'doelnet' },
    { char: '🏒', name: 'ijshockey' },
    { char: '🏏', name: 'cricket' },
    { char: '⛳', name: 'golf' },
    { char: '🏹', name: 'boogschieten' },
    { char: '🎣', name: 'vissen' },
    { char: '🤿', name: 'duiken' },
    { char: '🥊', name: 'boksen' },
    { char: '🥋', name: 'vechtsport' },
    { char: '⛸️', name: 'schaatsen' },
    { char: '🥌', name: 'curling' },
    { char: '🧗', name: 'klimmen' },
    { char: '🏇', name: 'paardrijden' },
    { char: '🚴', name: 'fietsen' },
    { char: '🏊', name: 'zwemmen' },
    { char: '🤾', name: 'handbal' },
    { char: '🏋️', name: 'gewichtheffen' },
    { char: '🤸', name: 'turnen' },
    { char: '⛹️', name: 'basketbalspeler' },
    { char: '🤺', name: 'schermen' },
    { char: '🏌️', name: 'golfen' },
    // ... add more to reach 300 emojis across all categories
  ],
  eten: [
    { char: '🍎', name: 'appel' },
    { char: '🍌', name: 'banaan' },
    { char: '🍇', name: 'druiven' },
    { char: '🍓', name: 'aardbei' },
    { char: '🍉', name: 'watermeloen' },
    { char: '🍍', name: 'ananas' },
    { char: '🥭', name: 'mango' },
    { char: '🍔', name: 'hamburger' },
    { char: '🍟', name: 'patat' },
    { char: '🍕', name: 'pizza' },
    { char: '🌭', name: 'hotdog' },
    { char: '🥪', name: 'sandwich' },
    { char: '🌮', name: 'taco' },
    { char: '🍣', name: 'sushi' },
    { char: '🥗', name: 'salade' },
    { char: '🍿', name: 'popcorn' },
    { char: '🍩', name: 'donut' },
    { char: '🍪', name: 'koekje' },
    { char: '🎂', name: 'taart' },
    { char: '🍰', name: 'gebak' },
    { char: '🍫', name: 'chocolade' },
    { char: '🍭', name: 'lolly' },
    { char: '🍮', name: 'pudding' },
    { char: '🍯', name: 'honing' },
    { char: '🥛', name: 'melk' },
    { char: '☕', name: 'koffie' },
    { char: '🍵', name: 'thee' },
    { char: '🍺', name: 'bier' },
    { char: '🍷', name: 'wijn' },
    { char: '🥂', name: 'champagne' },
    // ... add more food emojis
  ],
  reizen: [
    { char: '✈️', name: 'vliegtuig' },
    { char: '🚗', name: 'auto' },
    { char: '🚢', name: 'schip' },
    { char: '🚆', name: 'trein' },
    { char: '🚲', name: 'fiets' },
    { char: '🚌', name: 'bus' },
    { char: '🚁', name: 'helikopter' },
    { char: '🚀', name: 'raket' },
    { char: '⛵', name: 'zeilboot' },
    { char: '🚉', name: 'station' },
    { char: '🏖️', name: 'strand' },
    { char: '🏝️', name: 'eiland' },
    { char: '🏞️', name: 'nationaal park' },
    { char: '🌇', name: 'zonsondergang' },
    { char: '🗽', name: 'vrijheidsbeeld' },
    { char: '🗼', name: 'eiffeltoren' },
    { char: '🏰', name: 'kasteel' },
    { char: '🏯', name: 'japans kasteel' },
    { char: '🗻', name: 'berg' },
    { char: '🌋', name: 'vulkaan' },
    // ... add more travel emojis
  ],
  // ... continue adding other categories with their emojis
  // Ensure total emojis across all categories reach at least 300
};

// List of category names
let categories = Object.keys(emojiData);
let currentCategoryIndex = 0;

// Variables for drag-and-drop functionality
let draggedEmoji = null;
let draggedEmojiClone = null;
let currentDroppable = null;

// Variables for auto-scrolling
let autoScrollInterval = null;
const scrollThreshold = 50;
const scrollSpeed = 10;

// Initialize the application
function init() {
  try {
    // Load the default emoji category
    loadEmojis(categories[currentCategoryIndex]);

    // Update live time every second
    updateLiveTime();
    setInterval(updateLiveTime, 1000);

    // Initialize placeholders
    initializePlaceholders();

    // Initialize event listeners
    addGlobalEventListeners();
  } catch (error) {
    logError('init', 'Failed to initialize the application.', { error });
  }
}

// Function to initialize placeholders
function initializePlaceholders() {
  document.querySelectorAll('.add-placeholder-button').forEach(button => {
    button.addEventListener('click', handleAddPlaceholder);
  });

  document.querySelectorAll('.emoji-placeholder').forEach(placeholder => {
    makePlaceholderDroppable(placeholder);
  });
}

// Rest of your JavaScript code remains the same, including all functions and event listeners

// Initialize the application
init();
