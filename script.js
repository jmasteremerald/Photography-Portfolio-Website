const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const xbtn = document.getElementById('x');
const links = document.getElementsByClassName('nav-links');
console.log(links);
const l_images = document.getElementsByClassName('l-hide');
const r_images = document.getElementsByClassName('r-hide');
const p_tag = document.getElementById('about-me-p');
const testimonials = document.getElementsByClassName('testimonials');
const testimonialParagraph = document.getElementsByClassName('p-graph-observer');
//const h_tag = doument.getElementById('h-one');



//menu icon functionality
xbtn.addEventListener('click', ()=>{
    nav.classList.remove('show');
}); 
menuIcon.addEventListener('click', ()=>{
    nav.classList.add('show');
});
Array.from(links).forEach((link)=>{
    link.addEventListener('click',()=>{
        nav.classList.remove('show');     
    })
});
/////

function callback1(entries){
    // the forEach method calls a function for each element of an array,   so with an argument of entry, for each entry this function will be called 
    //the argument entry is based off of each element of the array starting from [0]
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("o-show");
            entry.target.classList.remove("l-hide");
        }
        else{
            entry.target.classList.add("l-hide");
            entry.target.classList.remove("o-show");
        }
        console.log(entry)
    })
}
function callback2(entries){
    // the forEach method calls a function for each element of an array,   so with an argument of entry, for each entry this function will be called 
    //the argument entry is based off of each element of the array starting from [0]
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("o-show");
            entry.target.classList.remove("r-hide");
        }
        else{
            entry.target.classList.add("r-hide");
            entry.target.classList.remove("o-show");
        }
        console.log(entry)
    })
}
var options = {
    root: null,  ///// the root: null, is the viewport
    threshold: 0.1,
 };

// creating a new object Intersection observer which takes a callback and options as peramaters
//anytime intersection observer observers intersection callback function is fired
const observer1 = new IntersectionObserver(callback1, options);
const observer2 = new IntersectionObserver(callback2, options);

// what do i want to observe?   i want to observe the main container
Array.from(l_images).forEach((image)=>{
    observer1.observe(image);
});
Array.from(r_images).forEach((image)=>{
    observer2.observe(image);
});
Array.from(testimonials).forEach((testimonial)=>{
    observer1.observe(testimonial);
});
Array.from(testimonialParagraph).forEach((testimonialP)=>{
    observer1.observe(testimonialP);
});
/*observer1.observe(h1_tag);*/
observer2.observe(p_tag);