/* =====================================================
MNQ ERP v2.0
APP.JS
===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

loader();

liveClock();

liveDate();

darkMode();

backToTop();

navbarSticky();

counterAnimation();

initSwiper();

contactForm();

});

/* =====================================================
LOADER
===================================================== */

function loader(){

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1200);

});

}

/* =====================================================
LIVE DATE
===================================================== */

function liveDate(){

const dateBox=document.getElementById("liveDate");

const todayBox=document.getElementById("todayDate");

if(!dateBox && !todayBox) return;

const date=new Date();

const options={

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

};

const text=date.toLocaleDateString("bn-BD",options);

if(dateBox) dateBox.innerHTML=text;

if(todayBox) todayBox.innerHTML=text;

}

/* =====================================================
LIVE CLOCK
===================================================== */

function liveClock(){

function update(){

const clock=document.getElementById("liveTime");

const clock2=document.getElementById("todayTime");

if(!clock && !clock2) return;

const time=new Date().toLocaleTimeString("bn-BD");

if(clock) clock.innerHTML=time;

if(clock2) clock2.innerHTML=time;

}

update();

setInterval(update,1000);

}

/* =====================================================
DARK MODE
===================================================== */

function darkMode(){

const btn=document.getElementById("darkMode");

if(!btn) return;

const saved=localStorage.getItem("theme");

if(saved==="dark"){

document.body.classList.add("dark");

btn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

btn.onclick=()=>{

document.body.classList.toggle("dark");

const dark=document.body.classList.contains("dark");

localStorage.setItem("theme",dark?"dark":"light");

btn.innerHTML=dark

?'<i class="fa-solid fa-sun"></i>'

:'<i class="fa-solid fa-moon"></i>';

};

}

/* =====================================================
BACK TO TOP
===================================================== */

function backToTop(){

const btn=document.getElementById("backToTop");

if(!btn) return;

window.addEventListener("scroll",()=>{

btn.style.display=window.scrollY>300

?"flex"

:"none";

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* =====================================================
STICKY NAVBAR
===================================================== */

function navbarSticky(){

const nav=document.querySelector(".navbar");

if(!nav) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>80)

nav.classList.add("sticky");

else

nav.classList.remove("sticky");

});

}

/* =====================================================
COUNTER
===================================================== */

function counterAnimation(){

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target=Number(counter.dataset.count);

let count=0;

const speed=target/100;

const run=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(run);

}else{

counter.innerHTML=target;

}

};

run();

});

}

/* =====================================================
SWIPER
===================================================== */

function initSwiper(){

if(typeof Swiper==="undefined") return;

if(document.querySelector(".heroSwiper")){

new Swiper(".heroSwiper",{

loop:true,

speed:1000,

autoplay:{

delay:5000,

disableOnInteraction:false

},

effect:"fade",

pagination:{

el:".swiper-pagination",

clickable:true

},

navigation:{

nextEl:".swiper-button-next",

prevEl:".swiper-button-prev"

}

});

}

}

/* =====================================================
CONTACT FORM
===================================================== */

function contactForm(){

const form=document.getElementById("contactForm");

if(!form) return;

form.addEventListener("submit",(e)=>{

e.preventDefault();

success("আপনার বার্তা সফলভাবে পাঠানো হয়েছে");

form.reset();

});

}

/* =====================================================
AOS
===================================================== */

if(typeof AOS!=="undefined"){

AOS.init({

duration:1000,

once:true,

offset:100

});

}
