import { PostInfo } from "./classes.js";

let totalInfoCards = 0;
let topContainer = document.getElementById("top-content");

// genera un número aleatorio entre el rango especificado
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
totalInfoCards = randomRange(3, 6);

for (let i = 0; i < totalInfoCards; i++) {
    const post = new PostInfo("Post #" + (i + 1), "Autor");
    topContainer.appendChild(post.body());
    if (i < totalInfoCards - 1)
        topContainer.appendChild(document.createElement('hr'));
}