import { get_data } from "./getdata.js";

const wrapper = document.getElementById("wrapper");
const btn_src = document.getElementById("btn_src")


let check = true;

const prodotti = await get_data("./products.json")

function make_card(array){
    array.forEach(product => {
        const card = document.createElement("div");
        card.innerHTML = `  
        <hr>
        <p>${product.nome}</p>
        <p>${product.categoria}</p>
        <p>${product.prezzo}</p>
        <hr>`;
        wrapper.appendChild(card);
        })}

btn_src.addEventListener('click' , () => {
    
    wrapper.classList.add('loader');
    setTimeout(() => {
        wrapper.classList.remove('loader');
        if(check == true){
            make_card(prodotti);
            check = 0;
        }
    }, 2000);

});
