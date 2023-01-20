const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso!')
    return
  }

  alert('Adcionado com sucesso ✔️')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) // json.stringify transforma o objeto em string para armazenar no local storage
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // JSON.parse converte a string para objeto novamente
nlwSetup.setData(data)
nlwSetup.load()
