import "./styles.css";
import { gettingAPI } from "./weatherfunction.js";


const pressButton = document.querySelector('#press');
const anInput = document.querySelector('#city');
let container = document.querySelector('#container');



pressButton.addEventListener('click', () => {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    console.log(anInput.value);
    gettingAPI(anInput.value);
});
