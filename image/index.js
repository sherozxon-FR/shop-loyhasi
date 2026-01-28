

const CARTITEM = JSON.parse(localStorage.getItem('CART')) || [];


document.querySelectorAll('.add_to_cart_btn').forEach(btn => {
    btn.addEventListener('click', function () {
        addTocart(this.parentElement);
    });
});

function addTocart(ELEMENT) {
    const Name = ELEMENT.querySelector("h3").textContent;
    const Price = ELEMENT.querySelector(".price").textContent;
    const ImageSrc = ELEMENT.querySelector("img").src;
    const price = parseFloat(Price.replace('$', ''));

    const uxshashItem = CARTITEM.find(item => item.name === Name);

    if (uxshashItem) {
        uxshashItem.quantity += 1;
    } else {
        CARTITEM.push({
            name: Name,
            price: price,
            img: ImageSrc,
            quantity: 1
        });
    }

    SETLOCALSTORAGE();
    updateCartCount();
}


function updateCartCount() {
    const countSAVAT = document.querySelector(".countSAVAT");

    const totalCount = CARTITEM.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);
    countSAVAT.textContent = totalCount;
}


function SETLOCALSTORAGE() {
    localStorage.setItem('CART', JSON.stringify(CARTITEM));
}

// sahifa yangilanganda ham savat soni chiqishi uchun
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});

export { CARTITEM, SETLOCALSTORAGE };




// bu qism saqlanganlar uchun  funksiyaler
const SAQLANGANLAR = JSON.parse(localStorage.getItem('saqlangan')) || []
const countSAQLANGAN = document.querySelector(".countSAQLANGAN");
console.log(countSAQLANGAN);



// saved uchun funksoyalar
document.querySelectorAll('.fav_btn').forEach((button, index) => {
    button.addEventListener('click', function () {
        addtoSaved(this.parentElement.parentElement)
    })
});

function addtoSaved(SavedEL) {
    const Sprice = SavedEL.querySelector('.price').textContent;
    const Simg = SavedEL.querySelector('img').src;
    const Sname = SavedEL.querySelector("h3").textContent


    const uxshashEl = SAQLANGANLAR.find(item => item.Name === Sname)

    if (uxshashEl) {
        alert('Bu maxsulot avvaldan bor edi')
    } else {
        SAQLANGANLAR.push({
            Name: Sname,
            image: Simg,
            narx: Sprice
        })
    }
    setlocalsaqlangan()
    updateSaqCount()

}


function setlocalsaqlangan() {
    localStorage.setItem('saqlangan', JSON.stringify(SAQLANGANLAR))
}

function updateSaqCount() {
    const countSAQLANGAN = document.querySelector(".countSAQLANGAN");
    countSAQLANGAN.textContent = SAQLANGANLAR.length;
}

document.addEventListener("DOMContentLoaded", updateSaqCount);

export { SAQLANGANLAR, setlocalsaqlangan, updateSaqCount }

