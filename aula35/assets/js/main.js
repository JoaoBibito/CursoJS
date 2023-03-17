const elementos=[
  {tag:'p',texto:'Frase 1'},
  {tag:'div',texto:'Frase 2'},
  {tag:'section',texto:'Frase 3'},
  {tag:'footer',texto: 'Frase 4'}
]
const container = document.querySelector(".container");
const div = document.createElement("div");

for(let i = 0; i < elementos.length; i++){
  let{tag,texto}= elementos[i];
  let elemento=document.createElement(tag);
  elemento.innerHTML=texto;
  div.appendChild(elemento);
}
container.appendChild(div);
//--

const tab =prompt("Escolha uma tabuada:");
const container2 = document.querySelector(".container2");

const h2 = document.querySelector(".container2 h2");
h2.innerHTML=`Tabuada do ${tab}` 

const div2=document.createElement("div");
for(let i =1; i<=10;i++){
  const p = document.createElement("p");
  p.innerHTML=`${tab} x ${i} = ${tab*i}`;
  p.classList.add(`color${i}`)
  div2.appendChild(p);
}
container2.appendChild(div2)