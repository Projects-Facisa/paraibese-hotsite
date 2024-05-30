function menuToggle(){
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
}

let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar')
let btnFechar = document.querySelector('.btn-fechar')

lupa.addEventListener('click', () => {
    boxBuscar.classList.add('ativar');
    btnFechar.classList.remove('hidden');
});

btnFechar.addEventListener('click', () => {
    boxBuscar.classList.remove('ativar');
    btnFechar.classList.add('hidden');
    setTimeout(() => {
        boxBuscar.classList.remove('ativar');
    }, 300);
});