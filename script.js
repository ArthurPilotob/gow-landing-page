// Menu hamburguer

const menuHamburguer = document.getElementById('menu-hamburguer');
const navLinks = document.getElementById('nav-links');

menuHamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('ativo');
});
// Abre o menu hamburguer quando clicado

document.addEventListener('click', (event) => {
    const isMenuAtivo = navLinks.classList.contains('ativo');
    const isClickFora = !navLinks.contains(event.target) && !menuHamburguer.contains(event.target);

    if (isMenuAtivo && isClickFora) {
        navLinks.classList.remove('ativo');
    }
});
// Fecha o menu hamburguer em qualquer click fora da sua box


// Modais

const botoesAbrirModal = document.querySelectorAll('[data-modal-id]');
const botoesFecharModal = document.querySelectorAll('[data-modal-close]');

botoesAbrirModal.forEach(botao => {
    botao.addEventListener('click', () => {
        const modalId = botao.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        
        modal.classList.add('ativo');
    });
});
// Faz o modal abrir ao clicar em ver detalhes
botoesFecharModal.forEach(botao => {
    botao.addEventListener('click', () => {
        const modal = botao.closest('.modal');
        modal.classList.remove('ativo');
    });
});
// Faz o modal fechar ao clicar no X no canto superior esquerdo