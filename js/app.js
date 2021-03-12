/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const navBarList = document.getElementById("navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Helper Function to determine if the whole Section is in the Viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Helper Function to determine if any part of the section is in the viewport
function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav
// Add link to nav bar if section is in the viewport
if (isVisible(section1)) {
  // create new list item
  const liSection1 = document.createElement('li');

  // give list item a class name
  liSection1.className = "nav_section1"

  // create an anchor item
  const aSection1 = document.createElement('a');

  //give anchor a class
  aSection1.className = "nav_section1_link";

  //give anchor an href to the section
  aSection1.setAttribute("href", "#section1");

  //set text for anchor
  aSection1.innerHTML = "Section 1"

  // append anchor to list item
  liSection1.appendChild(aSection1);

  // append list item to navBar
  navBarList.appendChild(liSection1);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
