const slide = document.querySelectorAll('.slide');

const prevBtn = document.getElementById('prev-btn'); /* botão de voltar */
const nextBtn = document.getElementById('next-btn'); /* botão de avançar */

let slideAtual = 0;

function esconderSlide(){
    slide.forEach(item => item.classList.remove('on'));
}

function mostrarSlide(){
    slide[slideAtual].classList.add('on');
}

function voltarSlide(){
    esconderSlide()
    if(slideAtual === 0){
        slideAtual = slide.length -1;
    }else{
        slideAtual--;
    }
    mostrarSlide()
}

function proximoSlide(){
    esconderSlide()
    if(slideAtual === slide.length -1){
        slideAtual = 0;
    }else{
        slideAtual++;
    }
    mostrarSlide()
}


prevBtn.addEventListener('click', voltarSlide);

nextBtn.addEventListener('click', proximoSlide);

setInterval(proximoSlide, 8000);
