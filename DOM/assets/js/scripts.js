/*
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original */

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    /*Se já existir o dark-mode ele vai tirar, e se não existir ele vai colocar no dark-mode*/
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    if (botao.classList.contains(darkModeClass)) {
        botao.innerHTML = 'Light Mode';
        h1.innerHTML = `Dark Mode ON`;
    } else {
        botao.innerHTML = 'Dark Mode';
        h1.innerHTML = `Light Mode ON`;
    }
}

const darkModeClass = 'dark-mode';
const botao = document.getElementById("mode-selector");
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


botao.addEventListener("click", changeMode);