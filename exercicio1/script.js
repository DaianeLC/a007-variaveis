let nome = ""
let idade 

console.log(typeof nome)
console.log(typeof idade)

// o erro ocorre porque a minha variavel nome é uma constante no conceito aprendido,só que para essa função ela é editavel

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade)

console.log("Olá",nome,"tenho", idade,"anos")