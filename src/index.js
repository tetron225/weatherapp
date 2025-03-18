import "./styles.css";
import { gettingAPI } from "./weatherfunction.js";


const pressButton = document.querySelector('#press');
const anInput = document.querySelector('#city');

pressButton.addEventListener('click', () => {
    console.log(anInput.value);
    gettingAPI(anInput.value);
});
