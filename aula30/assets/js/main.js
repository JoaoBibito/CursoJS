
const h1 = document.querySelector(".container h1");
const data = new Date();

//MANEIRA DIFICIL
// function getDayOfWeek(dayWeek){
//   const dayWeekText=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta"]
//   return dayWeekText[dayWeek]
// }
// function getMonthName(dayMonth){
//   const nameMonth=["Janeiro","Fevereiro","Março","Abril","Maio",
//   "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
//   return nameMonth[dayMonth]
// }
// function zeroAEsquerda(num){
//   return num>=10?num:`0${num}`
// }

// function createDate(data){
//   const dayOfWeek = data.getDay();
//   const monthNumber = data.getMonth();
//   const dayName= getDayOfWeek(dayOfWeek);
//   const monthName= getMonthName(monthNumber);
//   console.log(data.getFullYear())

//   return `${dayName}, ${data.getDate()} de ${monthName}`+
//   ` de ${data.getFullYear()} `+
//   `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// }

// h1.innerHTML= createDate(data);


const opcoes ={
  dateStyle:"full",
};

h1.innerHTML=data.toLocaleDateString("pt-BR", opcoes)