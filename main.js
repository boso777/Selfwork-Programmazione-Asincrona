const wrapper = document.getElementById("wrapper");
const btn_src = document.getElementById("btn_src")



const get_data = async (url)=>{
    const promise = await fetch(url);
    const json = await promise.json();
    return json;
}

const main = async () => {
    
    const prodotti = await get_data("./products.json");

    prodotti.forEach(product => {
        const card = document.createElement("div");
        card.innerHTML = `  
        <hr>
        <p>${product.nome}</p>
        <p>${product.categoria}</p>
        <p>${product.prezzo}</p>
        <hr>`;
        wrapper.appendChild(card);
        })
    
    };

let check = 1;

btn_src.addEventListener('click' , () => {
    
    
    wrapper.classList.add('loader');
    setTimeout(() => {
        wrapper.classList.remove('loader');
        if(check == true){
        main();
        check = 0;
    }
    }, 2000);

});
