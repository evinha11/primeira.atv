console.log("Hello, world!");
console.log("Boa tarde, alunos do Senai Cabo!");

function adicionarParagrafo(texto) {
    const p = document.createElement("p");
    p.innerHTML = texto;
    document.getElementById("conteudo").appendChild(p);
}

function quadradoDaSoma(a, b, c, d) {
    const soma = a + b + c + d;
    const resultado = soma * soma;
    adicionarParagrafo(`O quadrado da soma de ${a}, ${b}, ${c} e ${d} é igual a: ${resultado}`);
}

function ehPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function exibirPrimos(n) {
    const divPrimos = document.getElementById("primos");
    for (let i = 2; i <= n; i++) {
        if (ehPrimo(i)) {
            const span = document.createElement("span");
            span.classList.add("primo-box");
            span.textContent = i;
            divPrimos.appendChild(span);
        }
    }
}

// Gerar a soma dos quadrados
for (let i = 0; i <= 9; i++) {
    quadradoDaSoma(i, i + 1, i + 2, i + 3);
}

// Exibir os primeiros 100 números primos
exibirPrimos(100);
