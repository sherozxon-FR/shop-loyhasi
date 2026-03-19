import { CARTITEM, SETLOCALSTORAGE } from "./index.js";

const countSAVAT = document.querySelector(".countSAVAT");
const savatContainer = document.querySelector(".savat_container");
const totalElement = document.querySelector(".TOTAL");

function ShowSavat() {
    savatContainer.innerHTML = '';
    let total = 0;

    CARTITEM.forEach((item, index) => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
            <div class="box-img">
                <div class="imageC">
                    <img src="../${item.img}" alt="${item.name}">
                </div>
                <div class="info">
                    <h4>${item.name}</h4>
                    <div class="itemPQ">
                        <span>$${item.price} x <b>${item.quantity}</b></span>
                    </div>
                </div>
            </div>
            <div class="btn">
                <button class="minus">-</button>
                <button class="plus">+</button>
                <button class="remove">x</button>
            </div>
        `;

        // Minus tugmasi
        box.querySelector('.minus').addEventListener('click', () => {
            if (item.quantity > 1) {
                CARTITEM[index].quantity--;
            } else {
                CARTITEM.splice(index, 1);
            }
            SETLOCALSTORAGE();
            ShowSavat();
        });

        // Plus tugmasi
        box.querySelector('.plus').addEventListener('click', () => {
            CARTITEM[index].quantity++;
            SETLOCALSTORAGE();
            ShowSavat();
        });

        // Remove tugmasi
        box.querySelector('.remove').addEventListener('click', () => {
            CARTITEM.splice(index, 1);
            SETLOCALSTORAGE();
            ShowSavat();
        });

        savatContainer.appendChild(box);
        total += item.price * item.quantity;
    });

    countSAVAT.textContent = CARTITEM.length;
    totalElement.textContent = `TOTAL: $${total.toFixed(2)}`;
}

ShowSavat();