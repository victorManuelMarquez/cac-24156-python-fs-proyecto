// script generador de contenido aleatorio para la página.
import { UserCardInfo } from "./classes.js";

const nombres = ["Juan", "Ana", "Martín", "Nicolás", "Franco", "Horacio", "Pablo", "María", "Gastón"];
const apellidos = ["Ocampo", "Fernández", "López", "Peralta", "Cruz", "Morales", "Gutierrez", "Solá"];
const info = [
    "Compromiso y dedicación para este sitio desde el minuto 1, siempre dando el 100% por el proyecto.", 
    "Contemplando el progreso y la dedicación del grupo hacia el proyecto en común.", 
    "Desde mi espacio con todo compromiso con el equipo de trabajo.", 
    "ATR con el proyecto!!!", 
    "Amo la playa y un buen grupo de trabajo.", 
    "Siempre a toda máquina!!!", 
    "Trabajando!!", 
    "Todo inicia aquí.", 
    "Tengo espacio para tí..."
];
let totalNosotros = nombres.length;

const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1) + min);

let nosotrosSection = document.getElementById("nosotros").querySelector('.section-content');


totalNosotros = randomNumber(3, totalNosotros.length);

for (let i=0; i<totalNosotros; i++) {
    let randomName = nombres[randomNumber(0, nombres.length-1)];
    randomName += " " + apellidos[randomNumber(0, apellidos.length-1)];
    let randomInfo = info[randomNumber(0, info.length-1)];
    nosotrosSection.appendChild(new UserCardInfo(randomName, randomInfo).body());
}