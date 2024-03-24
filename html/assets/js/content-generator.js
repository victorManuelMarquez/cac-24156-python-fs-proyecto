import { PostCard, PostInfo } from "./classes.js";

let randomNumber = 0;
let topContainer = document.getElementById("topContent");
let mainContainer = document.getElementById("mainContent");

// genera un número aleatorio entre el rango especificado
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomNumber = randomRange(3, 6);

// agrego los posteos
for (let i = 0; i < randomNumber; i++) {
    const card = new PostCard("Post #" + (i + 1), "Autor", "General", "https://picsum.photos/200?random=" + randomRange(1, 100));
    topContainer.appendChild(card.body());
}

// agrego contenido principal
randomNumber = randomRange(1, 10);

for (let i = 0; i < randomNumber; i++) {
    const post = new PostInfo("Posteo del día", "Autor", "General", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et amet praesentium sint cum neque, possimus sapiente at commodi error placeat rerum. Excepturi temporibus ab, aspernatur ea porro veritatis debitis.", "https://picsum.photos/200?random=" + randomRange(1, 100));
    mainContainer.appendChild(post.body());
}