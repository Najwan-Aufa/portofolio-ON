let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/* ========================== scroll section active link =========================== */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================== scroll section active link =========================== */

  /*================ sticky navbar ================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*================ remove toggle icon and navbar ================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};


 /*================ remove toggle icon and navbar ================*/
 ScrollReveal({
  distance: `80px`,
  duration: 2000,
  delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
 
 const typed = new Typed('.multiple-text', {
  strings: ['Architect', 'UI/UX Designer', 'Web Developer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});


function sendMessage() {
  const fullName = document.getElementById('full_name').value;
  const emailAddress = document.getElementById('email_address').value;
  const mobileNumber = document.getElementById('mobile_number').value;
  const emailSubject = document.getElementById('email_subject').value;
  const message = document.getElementById('message').value;

  const subject = "Pesan: " + emailSubject;
  const body = `Nama: ${fullName}\nEmail: ${emailAddress}\nNomor Telepon: ${mobileNumber}\n\nPesan:\n${message}`;

  const mailtoLink = `mailto:programnajwan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
