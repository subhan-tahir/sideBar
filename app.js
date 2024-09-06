//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
// var tl = gsap.timeline();

// tl.to(".box1", {  x: -1000, duration: 1 ,opacity: 0});
// tl.to(".box1", {  x: 0, duration: 1 ,opacity: 1});
// tl.to(".box2", {  x: 170, duration: 1 });
// tl.to(".box3", {  x: 100, duration: 1});

// gsap.to('.hero-container',{
// x:100,
// duration:2,
// opacity:0,
// })

gsap.from('.hero-container',{
    x:-200,
    duration:2,
    opacity:0,
    })
gsap.to('.hero-container', {
    x: 0,          // Move 100 pixels to the right
    opacity: 1,      // Fade out
    duration: 2,     // Duration of the animation
  });  


let sideBar = document.querySelector('.sideBar-container');
let navBtn = document.getElementById('barBtn');
let body = document.querySelector('body');
// let section = document.getElementById('main-container');
let overlay = document.getElementById('checkOverlay');
navBtn.addEventListener('click', () => {

    const isSidebarActive = sideBar.classList.contains('activeSidebar');
    console.log(isSidebarActive);
    
    if (isSidebarActive) {
        body.style.overflow = 'auto';
    } else {
        sideBar.classList.add('activeSidebar');
        body.style.overflow = 'hidden';
        overlay.classList.add('overlay');
    }
});

overlay.addEventListener('click',()=>{  
    sideBar.classList.remove('activeSidebar');
    overlay.classList.remove('overlay');
    body.style.overflow = 'auto';
})

