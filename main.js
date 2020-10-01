let nome = prompt("Digite o seu nome:")
const saudacao = window.document.getElementById('saudacao')
saudacao.innerText="Olá, " + nome + "!";

const confirma = Number(prompt("Coloque o número correspondente à sua resposta. Quer iniciar o teste? (1) SIM | (2) NÃO"))

if (confirma === 1) {
    let perg1 = Number(prompt("Quem era o vocalista da banda Queen? (1) Maddona | (2) Freedy Mercury | (3) Simone"))
    let perg2 = Number(prompt("Quem descobriu o Brasil? (1) Cristovam Colombo | (2) Maria Madalena | (3) Pedro Alvares Cabral"))
    let perg3 = Number(prompt("Quem é Gal Costa? (1) Cantora | (2) Modelo | (3) Atriz"))

    let certo1 = window.document.getElementById("certo1")
    let errado1 = window.document.getElementById("errado1")
    let certo2 = window.document.getElementById("certo2")
    let errado2 = window.document.getElementById("errado2")
    let certo3 = window.document.getElementById("certo3")
    let errado3 = window.document.getElementById("errado3")

    if (perg1 == 2){
        certo1.innerHTML= "Resposta " + perg1
    }   else {
    errado1.innerHTML= "Resposta " + perg1
    }
    if (perg2 == 3) {
        certo2.innerHTML= "Resposta " + perg2
    }   else {
    errado2.innerHTML= "Resposta " + perg2
    }
    if (perg3 == 1) {
        certo3.innerHTML= "Resposta " + perg3
    }   else {
    errado3.innerHTML= "Resposta " + perg3
    }


} else
alert("Obrigado e até logo")
