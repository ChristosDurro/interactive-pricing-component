// Query Selectors

let views = document.getElementById("pageviews");
let monthly = document.getElementById("monthly");
let cost = document.getElementById("cost");
let slider = document.getElementById("slider-bar");
let toggle = document.getElementById("switch");
let isYearly = false;

const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const perMonth = [8, 12, 16, 24, 36];

//Event Listeners

// Event listener for updating values when using the slide bar

slider.addEventListener("input", () => {
    updateValue();
    let value = slider.value * 25;
    slider.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;
});

// Toggler for monthly or yearly charging

toggle.addEventListener("click", () => {
    if (isYearly == false) {
        isYearly = true;
    } else {
        isYearly = false;
    }
    updateValue();
});

// Functions

// Update pageviews, cost and monthly or yearly price 

const updateValue = () => {

    cost.innerHTML = !isYearly ? perMonth[slider.value] : (perMonth[slider.value] * 12) * .75;
    monthly.innerHTML = !isYearly ? "/month" : "/year";
    views.innerHTML = pageViews[slider.value];
}
