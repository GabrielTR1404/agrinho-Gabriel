// BOTÃO PRINCIPAL
const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {
    alert("A energia eólica rural ajuda a reduzir custos e promove sustentabilidade no campo!");
});


// EFEITO DE APARECER NOS CARDS
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach((card) => {
        const posicao = card.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});


// CONFIGURAÇÃO INICIAL DOS CARDS
cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
});


// TEXTO AUTOMÁTICO NO TÍTULO
const titulo = document.querySelector("header h1");

const texto = "Implementação de Sistemas de Energia Eólica em Propriedades Rurais";

let index = 0;

function escreverTexto() {
    if (index < texto.length) {
        titulo.innerHTML += texto.charAt(index);
        index++;
        setTimeout(escreverTexto, 40);
    }
}

titulo.innerHTML = "";
escreverTexto();


// MUDAR COR DO MENU AO ROLAR
const menu = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        menu.style.backgroundColor = "#0f172a";
        menu.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        menu.style.backgroundColor = "#1b262c";
        menu.style.boxShadow = "none";
    }
});


// DATA E HORA
const footer = document.querySelector("footer p");

const data = new Date();

footer.innerHTML =
    "Projeto sobre Energia Eólica Rural - " +
    data.getFullYear() +
    " | Último acesso: " +
    data.toLocaleDateString("pt-BR") +
    " " +
    data.toLocaleTimeString("pt-BR");


// CONTADOR DE VISITAS SIMPLES
let visitas = localStorage.getItem("visitas");

if (visitas === null) {
    visitas = 0;
}

visitas++;

localStorage.setItem("visitas", visitas);

const contador = document.createElement("p");

contador.innerHTML = `Número de visitas: ${visitas}`;

contador.style.marginTop = "10px";

document.querySelector("footer").appendChild(contador);


// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "12px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.backgroundColor = "#0077b6";
botaoTopo.style.color = "white";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "1000";


window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});


botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});