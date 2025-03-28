import Pessoa from "./Pessoa";

/*var a = 6;

var b = 16;

if ( a === 6){ //tanto tipo quanto conteudo são iguais.
    let a = 5;
    var b = 3;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
console.log("O resultado é: " + minhaFuncao(a,b));

function minhaFuncao(n1: number, n2: number) : number{
   return n1+n2;
}*/
var p1 : Pessoa = new Pessoa("Carlos", 111111);
var p2 : Pessoa = new Pessoa("Pedro", 222222);
p2.telefone = 3333333;
console.log(p1.nome);
console.log(p2.telefone);
