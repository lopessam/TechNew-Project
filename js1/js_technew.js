const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 384}px)`; //500 é o tamanho da imagem
        
}
setInterval(carrossel, 1800); //1800 é o tempo que a imagem fica na tela
