export function loadAbout() {
    const content = document.querySelector("#content");
    const fragment = document.createDocumentFragment();

    const h2 = document.createElement("h2");
    h2.innerText = "About Us";
    fragment.appendChild(h2);

    content.appendChild(fragment);
}