
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () =>{
        burger.classList.toggle('toggle');
        console.log("elegnacko");
        nav.classList.toggle('nav-active');
    });
   
   
  
}

navSlide();
