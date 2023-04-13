const inputTarefa = document.querySelector(".input-tarefa")
const btnTarefa = document.querySelector(".btn-tarefa")
const tarefas = document.querySelector(".tarefas")

function criaTarefa(text){
  console.log(text)
}
btnTarefa.addEventListener("click",(e)=>{
  if(!inputTarefa.value) return 
  criaTarefa(inputTarefa.value)
})