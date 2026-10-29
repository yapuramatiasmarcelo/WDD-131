const elementoAno = document.getElementById("anoatual");
const elementoModificacao = document.getElementById("ultimaModificacao");

if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

if (elementoModificacao) {
    elementoModificacao.textContent = document.lastModified;
}
