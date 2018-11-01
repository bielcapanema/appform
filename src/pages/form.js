export default function form() {
  return `<form class="register">
  <div class="field">
    <input type="text" name="name" id="name" placeholder="Tyler Durden">
    <label for="name">Nome completo (sem abreviações)</label>
  </div>

  <div class="field">
    <input type="email" name="email" id="email" placeholder="tyler@fightclub.com">
    <label for="email">E-mail</label>
  </div>

  <div class="field">
    <input type="email" name="cpf" id="cpf" placeholder="999.999.999-99">
    <label for="cpf">CPF</label>
  </div>

  <div class="field">
    <input type="phone" name="phone" id="phone" placeholder="(11) 99999-9999">
    <label for="phone">Telefone</label>
  </div>

  <button id="register-btn" type="button" class="register__btn disabled" disabled>
    Cadastrar
  </button>
  </form>`
}

function setBtnLoading(isLoading) {
  const btn = document.getElementById('register-btn')
  if (isLoading) {
    btn.disabled = true
    btn.classList.add('loading')
    btn.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
  } else {
    btn.disabled = false
    btn.classList.remove('loading')
    btn.innerHTML = 'Cadastrar'
  }
}

function setBtnDisabled(isDisabled) {
  const btn = document.getElementById('register-btn')
  if (isDisabled) {
    btn.disabled = true
    btn.classList.add('disabled')
  } else {
    btn.disabled = false
    btn.classList.remove('disabled')
  }
}

export {
  setBtnLoading,
  setBtnDisabled
}