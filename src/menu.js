export function loadMenu() {
    const content = document.querySelector("#content");
    const fragment = document.createDocumentFragment();

    const h2 = document.createElement("h2");
    h2.innerText = "Our Menu";
    fragment.appendChild(h2);

    content.appendChild(fragment);
}