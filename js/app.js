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

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


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


/*********** my code **********/

//get all sections in the page
const sections = document.querySelectorAll('main section');
//get needed section data for nav-bar
const nav_list = document.getElementById('navbar__list');
//get sections count
const sections_ln = sections.length;

// loop to push data of names and IDs in the nav bar list
for (const section of sections) {
  let data_nav = section.getAttribute("data-nav");
  let sec_id = section.getAttribute("id");
  nav_list.innerHTML += "<li><a class='navbar-item' href=#"+sec_id+">"+data_nav+"</a></li>";
}


// Scroll to anchor ID using scrollTO event
const nav_items = document.querySelectorAll("a[class='navbar-item']");//get all items in nav bar
for (const nav_item of nav_items) {                                   //add on click event for all of them
    nav_item.addEventListener('click', function (event) {
    event.preventDefault();                                           //remove default action
    const actv_id = nav_item.hash.slice(1);                           //Variable to carry the selected section ID

    document.getElementById(actv_id).scrollIntoView({                 //scroll to view
      behavior: 'smooth'
    });
    document.querySelector(".your-active-class").className = ""
    document.getElementById(actv_id).className = 'your-active-class';


  });
}

// Set sections as active

for (let i = 0; i <= sections_ln; i++) {
  window.addEventListener('scroll', function (event) {
    let desired_scroll = (window.scrollY) + 50;            //desired sroll position tolerence
    console.log(desired_scroll);
  
    if ( (sections[i].offsetTop <= desired_scroll ) && (desired_scroll <= sections[i+1].offsetTop)) {

      const actv_id = sections[i].id;
      document.querySelector(".your-active-class").className = ""
      document.getElementById(actv_id).className = 'your-active-class';

    }
  })
  
}

// test
/*
let newsec = document.createElement('section')
newsec.setAttribute('id','section4');
newsec.setAttribute('data-nav','section 4');

newsec.innerHTML ='<div><h1>section 4</h1></div>'

const mainTag = document.querySelector("main");
mainTag.appendChild(newsec);*/
