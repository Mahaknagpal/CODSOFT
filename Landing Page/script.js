document.querySelectorAll(".nav-links a").forEach(link =>{
    link.addEventListener("click",function(e){
        const targetId = this.getAttribute("href");
        if(targetId.startsWith("#")){
            e.preventDefault();
            const targetSection =
            document.querySelector(targetId);
            if(targetSection){
                targetSection.scrollIntoView({
                    behavior : "smooth"
                });
            }
        }
    });
});

const joinBtn =
document.querySelector(".join-free");

const emailInput =
document.querySelector('input[type="email"]');

joinBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === ""){
        alert("Please enter your email address.");
        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email.");
        return;
    }

    alert("Successfully Joined StudyMind!");

    emailInput.value = "";

});

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){
            link.classList.add("active");
        }

    });

});

const cards =
document.querySelectorAll(
".features-card, .subjects-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 10px 30px rgba(124,111,247,.3)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});




