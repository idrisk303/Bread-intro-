const text = document.querySelector("h1");

text.innerHTML = "";

setTimeout(() => {
    text.innerHTML = "A NEW LEGEND IS RISING";
}, 1000);

setTimeout(() => {
    text.innerHTML = "THE FUTURE IS BAKING";
}, 5000);

setTimeout(() => {
    text.innerHTML = "JOIN THE BAKERS";
}, 9000);
