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
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
    width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
    e.preventDefault();
    if (index == 0) {
        index = index + 1;
        track.style.transform = "translateX(" + index * -width + "px)";

    }
});
prev.addEventListener("click", function () {
    if (index != 0) {
        index = index - 1;
        track.style.transform = "translateX(" + index * -width + "px)";
    }
});