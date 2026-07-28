const text = document.querySelector("h1");

const scenes = [
    "A NEW LEGEND IS RISING",
    "THE FUTURE IS BAKING",
    "JOIN THE BAKERS"
];

let i = 0;

function showScene() {

    text.style.opacity = 0;

    setTimeout(() => {

        text.innerHTML = scenes[i];

        text.style.opacity = 1;

        i++;

        if (i < scenes.length) {
            setTimeout(showScene, 3000);
        }

    }, 800);

}

showScene();
