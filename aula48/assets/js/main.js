const inputTarefa = document.querySelector(".input-tarefa")
const btnTarefa = document.querySelector(".btn-tarefa")
const tarefas = document.querySelector(".tarefas")

function criaLi() {
  const li = document.createElement("li")
  return li;
}
inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus()
}
function criaBotaoApagar(li) {
  li.innerText += " "
  const btnApagar = document.createElement("button")
  btnApagar.innerText = "Apagar"
  btnApagar.setAttribute("class", "apagar")
  li.appendChild(btnApagar)
}
function criaTarefa(text) {
  const li = criaLi()
  li.innerText = text
  tarefas.appendChild(li)
  criaBotaoApagar(li)
  limpaInput()
  salvarTarefa()
}
btnTarefa.addEventListener("click", (e) => {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener("click", function (e) {
  const el = e.target
  if (el.classList.contains("apagar")) {
    el.parentElement.remove()
    salvarTarefa()
  }
})
function salvarTarefa(){
  const liTarefas=tarefas.querySelectorAll("li")
  const listaDeTarefas =[]
  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto=tarefaTexto.replace('Apagar','').trim()
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJson= JSON.stringify(listaDeTarefas)
  localStorage.setItem("Tarefas",tarefasJson)
}

function addTarefasSalvas(){
  const tarefas = localStorage.getItem("Tarefas"); 
  const listTarefas = JSON.parse(tarefas)
  for(let tarefa of listTarefas){
    criaTarefa(tarefa)
    console.log(tarefa)
  }
  
}
addTarefasSalvas()