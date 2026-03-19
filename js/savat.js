




import { CARTITEM, SETLOCALSTORAGE } from "./index.js";

const countSAVAT = document.querySelector(".countSAVAT");
const savatContainer = document.querySelector(".savat_container");
const totalElement = document.querySelector(".TOTAL");




function ShowSavat() {
    savatContainer.innerHTML = '';
    let total = 0;
    CARTITEM.forEach((item, index) => {
        savatContainer.innerHTML += ` 
        <div class="box">
                <div class="box-img">
                    <div class="imageC">
                        <img src="../${item.img}" alt="${item.name}">
                    </div>

                    <div class="info">
                        <h4> ${item.name}</h4>
                        <div class="itemPQ">
                            <span> $${item.price} x <b>${item.quantity}</b> </span>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button>-</button>
                    <button>+</button>
                    <button class="remove">x</button>
                </div>
            </div>
        
        `;
        total += item.price * item.quantity;
    });

    countSAVAT.textContent = CARTITEM.length;
    totalElement.textContent = `TOTAL: $${total.toFixed(2)}`;

    // Event listenerlarni har safar yangilash
    RemoveButtons();
}

function RemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            CARTITEM.splice(index, 1);
            SETLOCALSTORAGE();
            ShowSavat();
        });
    });
}

ShowSavat();


