/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* ================= MOBILE DROPDOWN ================= */

const dropdown = document.querySelector(".dropdown");

if(dropdown){

    dropdown.querySelector("a").addEventListener("click",(e)=>{

        if(window.innerWidth <= 800){

            e.preventDefault();

            dropdown.classList.toggle("open");

        }

    });

}


/* ================= CLOSE MENU ================= */

document.querySelectorAll(".navigation > a").forEach(link=>{

    link.addEventListener("click",()=>{

        navigation.classList.remove("active");

    });

});


/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries,observer)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 60;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.textContent = target;

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

},{
    threshold:.5
});


counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/* ================= FORM ================= */

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your consultation request has been received.";

    form.reset();

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".service-card,.case-card,.audience-card,.timeline-item,.difference-item"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});


revealElements.forEach(element=>{

    element.classList.add("reveal");

    revealObserver.observe(element);

});