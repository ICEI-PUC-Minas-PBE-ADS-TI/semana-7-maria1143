let nome = prompt  ("Qual o seu nome?");

function lerNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor.trim() === "") {
        valor = prompt("Valor inválido! Por favor, digite um número para: " + mensagem);
    }
    return Number(valor);
}

let renda = lerNumero("Qual sua renda mensal?");
let qtdDespesas = lerNumero("Quantas despesas você quer informar (1 a 5)?");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

let totalDespesas = 0;
for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = lerNumero(`Digite o valor da despesa ${i}:`);
    totalDespesas += valorDespesa;
}

let classificacao = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
 
if (sobra >= (renda * 0.3)) {
        classificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        classificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let rendaFmt = renda.toFixed(2);
let despesasFmt = totalDespesas.toFixed(2);
let sobraFmt = sobra.toFixed(2);

let mensagemFinal = `
--- RESUMO DO ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${rendaFmt}
Total de Despesas: R$ ${despesasFmt}
Sobra: R$ ${sobraFmt}
---------------------------
Status: ${classificacao}
`;

alert(mensagemFinal);
console.log(mensagemFinal);