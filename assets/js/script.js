// Início controle do menu (mobile / desktop)
const open_close_btn = document.querySelector("#open-close-btn");
const header = document.querySelector("#header");

open_close_btn.addEventListener("click", () => {

    if(header.style.display == "flex") { // Se o menu mobile estiver aparecendo
        header.style.display = "none"; 
        open_close_btn.innerText = "menu";
    } else {
        header.style.display = "flex";
        open_close_btn.innerText = "close";
    }
    
});
// Fim controle do menu (mobile / desktop)