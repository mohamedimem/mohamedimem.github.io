/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 100,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input,.card,.contact_information', { interval: 200 });

//skills
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills() {
  let itemClass = this.parentNode.className
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})



////bot token
var telegram_bot_id = "5433943098";
//chat id
var chat_id = "5433943098";
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
  ready();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify({
      "chat_id": chat_id,
      "text": message
    })
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};
