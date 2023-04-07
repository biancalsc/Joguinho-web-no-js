const gatinho = document.querySelector ('.gatinho');
const arbusto = document.querySelector ('.arbusto');

const jump = () => {
    gatinho.classList.add('jump');
    setTimeout(() => {
        gatinho.classList.remove('jump')
    }, 500)
}
const loop = setInterval(() => {
    const arbustoPosition = arbusto.offsetLeft;
    const gatinhoPosition = +window.getComputedStyle(gatinho).bottom.replace('px', '');
    
    if (arbustoPosition <= 80 && arbustoPosition > 0 && gatinhoPosition < 50) {
        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        gatinho.style.animation = 'none';
        gatinho.style.bottom = `${gatinhoPosition}px`;

        gatinho.src = './images/gatoPulando.png';
        gatinho.style.width = '70px';
        gatinho.style.marginLeft = '30px'

        clearInterval (loop);
    }
}, 10)

document.addEventListener('keydown', jump)