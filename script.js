
//------animated counter--------
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
let swipeRight = 380;
let swipeRightadd = 380;
let swipeLeft = 380;
let swipeLeftadd = 380;
if (window.outerWidth <= 768) {
    swipeRight = 310;
    swipeRightadd = 310;
    swipeLeft = 310;
    swipeLeftadd = 310;
    carcount = 5;
}
else {
    swipeRight = 380;
    swipeRightadd = 380;
    swipeLeft = 380;
    swipeLeftadd = 380;
    carcount = 4
}

nextone.addEventListener("click", () => {
    if (carcount < 5) {
        console.log("next clicked");
        carousel_container.scroll(swipeRight, 0)
        carcount += 1;
        swipeRight += swipeRightadd;
        swipeLeft -= swipeRightadd;
    }
    else {
        carcount = 0;
        carousel_container.scroll(0, 0);
        swipeLeft = swipeLeftadd;
        swipeRight = swipeRightadd
    }
});

previous.addEventListener("click", () => {
    if (carcount != 0) {
        console.log("prev clicked");
        carousel_container.scroll(-swipeLeft, 0)
        carcount -= 1;
        swipeLeft += swipeLeftadd;
        swipeRight -= swipeLeftadd;

    }
});