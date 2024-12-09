// Atualiza o horário a cada segundo
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("pt-BR");
    const timeElement = document.querySelector("#time");
    timeElement.textContent = "Horário Atual: " + timeString;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo

// Adiciona hobbies à lista
document.querySelector("#add-hobby").addEventListener("click", function () {
    const hobby = document.querySelector("#hobby-input").value;
    if (hobby) {
        const newItem = document.createElement("li");
        newItem.textContent = hobby;
        document.querySelector("#hobby-list").appendChild(newItem);
        document.querySelector("#hobby-input").value = ""; // Limpa o campo
    } else {
        alert("Digite um hobby!");
    }
});

// Exibe um alerta quando clica no título
document.querySelector("h1").addEventListener("click", function() {
    alert("Bem-vindo(a) à minha página!");
});

// Controla o número de visitas
let visits = localStorage.getItem("visits");
if (!visits) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}
localStorage.setItem("visits", visits);
document.getElementById("visitCount").textContent = `Você visitou esta página ${visits} vezes.`;

// Exibe o botão "voltar ao topo" ao rolar a página
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Alterna o tema entre claro e escuro
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Alerta ao clicar no Projeto 2
document.querySelector(".card-project-2").addEventListener("click", function () {
    alert("Você clicou no Projeto 2!");
});

// Funções para abrir e fechar o modal (corrigindo as duplicações)
function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora da imagem
document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) {  // Fecha o modal se clicar fora da imagem
        closeModal();
    }
});