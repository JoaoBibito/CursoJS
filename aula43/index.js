function fizzBuzz(numero){
  if(typeof(numero)!== "number") return numero;
    let str='';
    if(numero%3===0) str = "Fizz";
    if(numero%5===0) str+="Buzz"
    return str==""? numero:str
}

for(let i =0;i<=100;i++){
  console.log(i, fizzBuzz(i))
}