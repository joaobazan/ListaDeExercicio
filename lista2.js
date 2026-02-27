//Criar um programa que mostre se um numero e positivo ou negativo

let num1 = 99;
if (num1>=0) {
    console.log(`o numero ${num1} é positivo`);
} else {
    console.log(`o numero ${num1} e negativo`);
}

//Criar um programa que mostre se um ano é bissexto.
let ano = 2020;
if ((ano % 4 === 0 && ano % 100 !== 0 )) {
    console.log(`o ano ${ano} é bissexto`);
}

//Criar um programa que mostre uma senha e a mensagem de acesso permitido
let senha = "123456";
let senhacorreta = "123456";
if (senha === senhacorreta) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}