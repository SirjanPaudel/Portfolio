let  sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
// Working On Navbar
let navbar = document.querySelector('.navbar')
let menuBtn = document.querySelector('#menu-icon')
menuBtn.addEventListener('click',()=>
{
    menuBtn.classList.toggle('bx-x')
    navbar.classList.toggle('activeNav')
    
    
})


window.onscroll=(()=>

{
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        if(top >= offset && top< offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
    
    menuBtn.classList.remove('bx-x')
    navbar.classList.remove('activeNav')
})
// scroll reveal
ScrollReveal({
    reset:true,
    distance: '80px',
    delay: 200, 
    duration: 2000,

})
ScrollReveal().reveal('.home-content, .heading, .about-content h2', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

// Multiple typing texts

var typed = new Typed('#element', {
    strings: ['Web Developer','Graphic Designer'],
    typeSpeed: 50,
    loop: true
    
})