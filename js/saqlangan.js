


import { SAQLANGANLAR, setlocalsaqlangan, updateSaqCount } from './index.js'
const saqlanganCart = document.querySelector('.saqlanganCart')
console.log(SAQLANGANLAR.image);


function ShowSaqlangan() {
    saqlanganCart.innerHTML = ""
    SAQLANGANLAR.forEach((el, index) => {

        saqlanganCart.innerHTML += `
       <div class="box">
    <div class="box-img">
        <div class="imageC">
            <img src="../${el.image}" alt="">
        </div>

        <div class="info">
            <h4 class="h4">${el.Name}</h4>
            <div class="itemPQ">
                <span>${el.narx}</span>
            </div>
        </div>
    </div>

    <div class="btn">
        <button class="remove">x</button>
    </div>
</div>
    `
    });

    initRemoveButtons();
}

function initRemoveButtons() {
    const BUTTONS = document.querySelectorAll('.remove');

    BUTTONS.forEach((button, index) => {
        button.addEventListener('click', () => {
            SAQLANGANLAR.splice(index, 1);
            setlocalsaqlangan();
            ShowSaqlangan();
            updateSaqCount();

        });
    });
}

ShowSaqlangan();
updateSaqCount();






