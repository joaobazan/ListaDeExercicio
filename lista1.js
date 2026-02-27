//criar um programapara exibir a mensagem : Olá mundo
console.log("olá mundo")
//criar um programa para exibir seu nome completo 
console.log("meu nome é João Paulo")
//crie um programa que mostre um número e exiba seu duplo
let num = 10;

console.log(`o numero é ${num}`)
console.log(`o duplo deste número é ${num * 2}`)
//criar um programa que mostre o número e exiba seu triplo
console.log(`o triplo deste número é ${num * 3}`)
//Criar um programa para converter metros em centímetros
let metros = 5;
let centimetros = metros * 100;

console.log(`${metros} metros equivalem a ${centimetros} centímetros.`);
//Criar um programa para mostrar o antecessor e sucessor de um número
console.log(`o antecessor é ${num - 1} e o sucessor é ${num + 1}`)

//Crie um programa que mostre a área de um retângulo
let base = 5;
let altura = 10;

console.log(`a área desse retângulo é ${base * altura} `)
//criar um programa para calcular um aumento de 10% num salário de 2000,00

let salario = 3000.00;
let aumentoper = 10; 
let valoraumento = salario * (aumentoper / 100)
let novovalor = valoraumento + salario 
console.log(`o novo valor é ${novovalor}`)

//criar um programa para verificar se eu número é par ou impar
if (num % 2 === 0) {
    console.log(`O número ${num} é Par`);
} else {
    console.log(`O número ${num} é impar.`);
}
let nota1 = 9;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
console.log(`a media é ${media} nota1 é ${nota1} e nota2 é ${nota2}`)