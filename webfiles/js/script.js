//scroll button
let i = false;
window.addEventListener('scroll', () => {
    if (i === false) {
        const chev = document.createElement('p');
        chev.id = "ch";

        chev.textContent = "<"
        document.body.appendChild(chev);
        i = true;
    };

    var chevron = document.getElementById("ch");

    if (window.scrollY <= 800) {
        chevron.classList.add("invis");
    } else {
        chevron.classList.remove("invis");
    }
    chevron.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//button animation
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{

button.addEventListener('mouseover', () => {
    button.classList.add('button-animation');
});

button.addEventListener('mouseout', () => {
    button.classList.remove('button-animation');
});
});


//image lazy loading 
const allImage = document.querySelectorAll("img");

const observImage = new IntersectionObserver(objects => {
    objects.forEach(object => {
        if(object.isIntersecting){
            let balise = object.target
            let newImg = balise.getAttribute("data-img");
            balise.setAttribute("src", newImg);
            balise.removeAttribute("data-img")
            observImage.unobserve(balise);
        }
    });

});
allImage.forEach(img =>{
    observImage.observe(img);
});



//burger menu 

let burger =document.createElement("button");
let nav = document.querySelector("nav");
let menu  = document.querySelector("ul");

window.addEventListener("resize", () => {
    if (window.innerWidth < 1125){
        burger.classList.add("visible");
        nav.appendChild(burger);
        menu.classList.add("invis");
    }
    else{
        burger.remove();
        menu.classList.remove("invis");
    }

});
window.addEventListener("load", () =>{
    if (window.innerWidth < 1125){
        burger.classList.add("visible");
        nav.appendChild(burger);
       menu.classList.add("invis");
    }

else{
    burger.remove();
    menu.classList.remove("invis");

}

});
burger.addEventListener("click", () => {
    menu.classList.toggle("visible");
});
