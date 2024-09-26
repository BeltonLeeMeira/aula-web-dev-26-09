//Tipos de dados e variaveis
var exemplo = "Olá dev";
console.log(exemplo)

let exemplo2 = "Fiapinho"
console.log(exemplo2)

const exemplo3 = "Cidade"
console.log(exemplo3)

//valor undefined
let valor;
console.log(valor)


//valor nulo
let valor1 = null;
console.log(valor1)

//valor booleano

let valor2 = false
console.log(valor2)

//valor objeto
let objeto = {};
console.log(objeto)

// array

let array = [];
console.log(array)

let array1 = [];
console.log(array1)

//conversão typeof= verifica o tipo da variavel

let numero ="123"
console.log(typeof numero)
let numeroConvertido = parseInt(numero)
console.log(numero)

//operadores

let x = 20;
let y = 10;

//Operadores arimeticos

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//Operadores de comparação

console.log(x==y);
console.log(x===y);
console.log(x!=y);

//Operadores logicos

console.log(x > y);
console.log(x < y);
console.log(x > y && y <50);
console.log(x > y || y <50);

//estrutura condicional

//if

let nome = "fiap"
if(nome == "fiap"){
    console.log("nome correto")
}

//if else

if(nome == "fiap"){
    console.log("nome Coreto")
}
else{
    console.log("nome Errado")
}

//if else else if(encadiado)
    let idade = 4;

if(idade > 60){
    console.log("é uma criança")
}
else if(idade >=13 && idade <=27){
    console.log("é um aborrecente")
}
else if(idade >=18 && idade <=50){
    console.log("é um Adulto")
}
else{
    console.log("é um idoso")
}

//condição ternaria

let numero2 = 100;

let resultado = numero2 ==100 ? "Correto" :"Errado";
console.log(resultado)

//Condição switch case

const pratos ="lasanha"

switch(pratos){
    case "Macarrão":
        console.log("O melhor macarrão ");
        break;
    case "Salada":
        console.log("Salada Saudável");
        break;
    case "lasanha":
        console.log("O melhor prato de massa");
        break;
    default:
        console.log("Nenhum prato escolhido")
}

let z = true
console.log(z)
let f = true
console.log(f)
