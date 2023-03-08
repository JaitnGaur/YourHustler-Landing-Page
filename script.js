let counter_container = document.querySelectorAll(".counter-container");
let counter = document.querySelectorAll(".counter p")
//console.log(counter_container);
//console.log(counter)
let active = false;
window.addEventListener("scroll", () => {
    console.log(scrollY)
    if (scrollY > 350 && active == false) {
        console.log("hi")
        counter.forEach(counter => {
            counter.innText = 0;
            let count = 0;
            function updatecount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updatecount, 10);
                }
                else {
                    counter.innerText = target;
                }
            }
            updatecount();
            active = true;
        })

    }
    else if (scrollY < 100 || scrollY == 0 && active == true) {
        counter.forEach(counter => {
            counter.innerText = 0;
        })
        active = false;
    }

})
//------------ham-button---------------
let hambtn = document.querySelector(".ham-button");
let ul = document.querySelector(".nav-lists");
let head = document.querySelector("header")
let hamopen = false;
hambtn.addEventListener("click", function () {
    hambtn.classList.toggle("open");
    ul.classList.toggle("active");
    head.classList.toggle("active")
});
//----------carousel------------
let previous = document.querySelector(".prev");
let nextone = document.querySelector(".next");
let carouserl_cards = document.querySelectorAll(".card");
let carousel_container = document.querySelector(".carousel-container");

let carcount = 0;
let swiperight = 380;
nextone.addEventListener("click", () => {
    if (carcount < 4) {
        console.log("next clicked");
        // carouserl_cards.forEach(
        //     (i) => (i.style.transform = "translateX(-" + swiperight + "px)")
        // );
        carousel_container.scroll(swiperight, 0)
        carcount += 1;
        swiperight += 380;
        goright -= 380;
    }
});
let goright = 380;
previous.addEventListener("click", () => {
    if (carcount != 0) {
        console.log("prev clicked");
        // carouserl_cards.forEach(
        //     (i) => (i.style.transform = "translateX(" + goright + "px)")
        // );
        carousel_container.scroll(-goright, 0)
        goright += 380;
        carcount -= 1;
        swiperight -= 380;
    }
});