
function CalcularPreco() {
    // criar referências para os elementos
    const inQuilo = document.getElementById("inQuilo");
    const inConsumo = document.getElementById("inConsumo");
    const outValor = document.getElementById("outValor");

    // mudar para number
    const quilo = Number(inQuilo.value);
    const consumo = Number(inConsumo.value);

    // calcular o quilo x consumo
    const calculo = (quilo * consumo) / 1000;

    // mostrar o resultado
    outValor.textContent = `Valor a pagar R$: ${calculo.toFixed(2)}`;

}

const btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener('click',CalcularPreco);

