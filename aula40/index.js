const numeros=[1,2,3,4,5,6,7,8,9];
console.log("")
for(let numero of numeros){
  if(numero===2){
    console.log("Encontrieo o numero 2. ")
    continue;//Não executa o as linhas restantes desse bloco bloco 
  }
  console.log(numero)
  if(numero===7){
    console.log("Numero 7, saindo do loop");// para todo o loop
    break;
  }
}