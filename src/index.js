import "./style.css";
import {home} from "./home.js"
import { menu } from "./menu.js";
import { about } from "./about.js";

//side effect import for linking
const content = document.querySelector("#content");
console.log("greeting");

home(content);

document.body.addEventListener('click', (e) =>{
    let target = (e.target);
    if((target.tagName).toLowerCase() == 'button'){
        if(target.innerText == 'Home' ){
            content.textContent = "";
            home(content);
        }else if(target.innerText == 'Menu'){
            content.textContent = "";
            menu(content);
        }else if(target.innerText == 'About'){
            content.textContent = "";
            about(content);
        }
    }
});