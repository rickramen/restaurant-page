import burgerImage from "./assets/burger.jpg";

export function loadHome() {
    const content = document.querySelector("#content");
    const elements = [];

    const h1 = document.createElement("h1");
    h1.innerText = "Food so good, you'll wish it were real";
    elements.push(h1);

    const p = document.createElement("p");
    p.innerHTML = 
        "Come down to try the best food around town when you're feelin " +
        "like a Starvin' Marvin! <br>" +
        "Try one of our famous mealio dealios and experience true cuisine.";
    elements.push(p);

    const img = document.createElement("img");
    img.src = burgerImage
    img.alt = "burgerImage";
    img.width = "600";
    elements.push(img);

    elements.forEach((element) => content.appendChild(element));
}


    