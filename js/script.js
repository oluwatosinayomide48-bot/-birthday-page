/*====================================
    DYNAMO CONCEPTZ
    SCRIPT.JS
=====================================*/

// ===============================
// Typing Effect
// ===============================

const motto = document.querySelector(".motto");

const text = "Design is Intelligence Made Visible.";

let i = 0;

function typeWriter(){

    if(i < text.length){

        motto.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,60);

    }

}

motto.innerHTML="";

typeWriter();


// ===============================
// Scroll Reveal Animation
// ===============================

const cards = document.querySelectorAll(".card");

function revealCards(){

    cards.forEach(card=>{

        const cardTop = card.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(cardTop < screenHeight-100){

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(60px)";

    card.style.transition="0.8s ease";

});

window.addEventListener("scroll",revealCards);

revealCards();


// ===============================
// Smooth Button Animation
// ===============================

const buttons=document.querySelectorAll(".btn,.whatsapp");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px) scale(1)";

});

});


// ===============================
// Logo Glow
// ===============================

const logo=document.querySelector(".logo");

setInterval(()=>{

logo.style.filter="drop-shadow(0 0 35px gold)";

setTimeout(()=>{

logo.style.filter="drop-shadow(0 0 18px gold)";

},700);

},1500);


// ===============================
// Smooth Page Load
// ===============================

window.onload=()=>{

document.body.style.opacity="1";

};

document.body.style.opacity="0";

document.body.style.transition="opacity .8s ease";