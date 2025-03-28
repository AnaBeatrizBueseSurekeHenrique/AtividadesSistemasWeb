import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

var end : Endereco = new Endereco("a", 1, "b", "c");
var tel : Telefone = new Telefone("11", 2, "33");
var tel2 : Telefone = new Telefone("34", 3, "34");
var cl : Cliente = new Cliente("b", 4, 5, "d", end, [tel, tel2]);
var prod : Produto = new Produto(2, "a", 10);
var pro2 : Produto = new Produto(3, "dd", 4);
var vend : Venda = new Venda(2, 3, cl, [prod, pro2]);
console.log(vend.calcularTotal());