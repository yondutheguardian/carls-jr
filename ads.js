
// Reference to the creative's various properties and elements.
var creative = {};


/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('scratch-container');
  creative.dom.exit = document.getElementById('bg-exit');
  creative.dom.image0 = document.getElementByClass('cube-front');
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
  creative.dom.image0.style.visibility  = 'visible';
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('Background Exit');
}

/**
 *  Main onload handler
 */
// window.addEventListener('load', preInit);

// function bgExitHandler(e) {
//   Enabler.exit('Background Exit');
// }

document.getElementById('bg-exit').addEventListener('click', exitClickHandler, false);