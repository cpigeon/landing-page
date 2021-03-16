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
const navBarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Helper Function to determine if the Section is in the Viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -400 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav bar dynamically 
function createNavBar(sections) {
  for (const section of sections) {
    const listItem = document.createElement('li');
    const anchorItem = document.createElement('a');
    const sectionNo = section.getAttribute("data-nav");
    anchorItem.textContent = sectionNo;
    anchorItem.setAttribute("href", '#' + section.id);
    listItem.appendChild(anchorItem);
    navBarList.appendChild(listItem);
  }
};


// Add class 'active' to section when near top of viewport
function addActiveClass(sections) {
  for (const section of sections) {
    if (isInViewport(section)) {
      section.className = "your-active-class";
    }
    else {
      section.classList.remove("your-active-class");
    }
  }
};

// Scroll to section using scrollIntoView
function scrollTo(event) {
  if (event.target.nodeName === "A") {
    event.preventDefault();
    const sectionID = event.target.getAttribute('href');
    document.querySelector(sectionID).scrollIntoView({behavior: "smooth"});
  }
};


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
createNavBar(sections);

// Scroll to section on link click
document.addEventListener('click', function(event) {
  scrollTo(event);
});

// Set sections as active
document.addEventListener('scroll', function(event) {
  addActiveClass(sections);
});
