const toggle = document.querySelector('.toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerToggle = document.querySelector('.hamburger-toggle');
const hamburgerDropdownContent = document.querySelector('.hamburger-dropdown-content');
const dropDownToggle = document.querySelector('.dropdown-toggle');

// toggle hamburger menu
toggle.addEventListener('click', () => {
  toggle.classList.toggle('change');
  if (hamburgerMenu.style.display === 'block') {
    hamburgerMenu.style.display = 'none';
  } else {
    hamburgerMenu.style.display = 'block';
  }
});


// toggle hamburger dropdown 
hamburgerToggle.addEventListener('click', () => {
  dropDownToggle.classList.toggle('active');
  if(hamburgerDropdownContent.style.display === 'block') {
      hamburgerDropdownContent.style.display = 'none';
  } else {
    hamburgerDropdownContent.style.display = 'block';
  }
});

