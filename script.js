// Smooth Navbar Shadow

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

}

});

// Reveal Animation

const cards=document.querySelectorAll(".card,.product-card,.leader-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});