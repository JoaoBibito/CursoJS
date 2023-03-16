function meuEscopo (){
  const form = document.querySelector('.form');
  const result = document.querySelector(".result");
  const pessoas=[];
  function recebeEvent(evento){
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso= form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({Nome:nome.value ,
                  Sobrenome:sobrenome.value,
                  Peso: peso.value, 
                  Altura:altura.value})
    console.log(pessoas)
    result.innerHTML+=`<p>Nome: ${nome.value} Sobrenome: ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}`
  };
  form.addEventListener("submit", recebeEvent);
}
meuEscopo();