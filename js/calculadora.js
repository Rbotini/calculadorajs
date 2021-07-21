function calculadora(num){
   
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
    
}
function clean(){
   document.getElementById('resultado').innerHTML=" ";

}
function calcular(){
  var total = document.getElementById('resultado').innerHTML;
  if(total)
  {
     
    document.getElementById('resultado').innerHTML = eval(total);
  }
}
  
var x = '3 * 8 + 10';
console.log(eval(x));