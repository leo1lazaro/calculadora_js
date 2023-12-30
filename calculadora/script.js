//buscando botoes e operadores
const mostrarVisor = document.querySelector('.visor_res')
const numeros = document.querySelectorAll('.num')
const operacao = document.querySelectorAll('.op')
let numeroAtualNoVisor
let numClicado
let opClicada
let n2
let n1

//limpando o visor antes de começarmos
function limparVisor() {
    mostrarVisor.textContent = ''
}
//verificando os clicks dos numeros
for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function () {
        if (numeros[i].value == 'ac') {
            limparVisor()
            n1=0
            n2=0
        } else {
            numClicado = Number(numeros[i].value)
            mostrarVisor.textContent = numClicado
        }
        numeroAtualNoVisor = Number(mostrarVisor.textContent)
    })
}

//verificando os operadores clicados
for (let i = 0; i < operacao.length; i++) {
    operacao[i].addEventListener('click', function () {
        if (operacao[i].value == '5') {

            n2 = numeroAtualNoVisor;
            limparVisor()
            calcular(n2)
            mostrarVisor.textContent = res
            n2 = 0

        } else {
            opClicada = Number(operacao[i].value)
            n1 = numeroAtualNoVisor
            limparVisor()
        }
    })
}
// //valor das operações
// [1] - soma
// [2] - subtraçao
// [3] - multiplicacao
// [4] - divisao
// [5] - igual
// dados no visor Number(mostrarVisor.textContent)

function calcular(valor) {
    switch (opClicada) {
        case 1:
            res = n1 + valor
            return
        case 2:
            res = n1 - valor
            return res
        case 3:
            res = n1 * valor
            return res
        case 4:
            res = n1 / valor
            return res

    }

}