const menuHamburguer = document.getElementById('menu-hamburguer');
const navLinks = document.getElementById('nav-links');
// Adiciona os elementos que iremos usar (menu hambuguer e seus links)
menuHamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('ativo');
});
// Faz abrir o menu hamburguer
document.addEventListener('click', (event) => {
    const isMenuAtivo = navLinks.classList.contains('ativo');

    const isClickFora = !navLinks.contains(event.target) && !menuHamburguer.contains(event.target);

    if (isMenuAtivo && isClickFora) {
        navLinks.classList.remove('ativo');
    }
});
// Verificação de um click fora do menu sanduiche, para fecha-lo