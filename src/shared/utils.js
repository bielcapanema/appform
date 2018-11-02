function validadeForm() {
  const {
    email,
    name,
    cpf,
    phone
  } = getFormValues()

  if (email && name && cpf && phone) {
    setBtnDisabled(false)
  } else {
    setBtnDisabled(true)
  }
}

function getFormValues() {
  const email = $('email').value
  const name = $('name').value
  const cpf = $('cpf').value
  const phone = $('phone').value

  return {
    email,
    name,
    cpf,
    phone
  }
}

function clearFormValues() {
  $('email').value = ''
  $('name').value = ''
  $('cpf').value = ''
  $('phone').value = ''
}

function submitForm(saveCallback) {
  const user = getFormValues()
  setBtnLoading(true)
  setTimeout(() => {
    saveCallback(user)
    setBtnLoading(false)
    clearFormValues()
    setBtnDisabled(true)
  }, 1000)
}

function $(id) {
  return document.getElementById(id);
}

function setBtnLoading(isLoading) {
  const btn = $('register-btn')
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
  const btn = $('register-btn')
  if (isDisabled) {
    btn.disabled = true
    btn.classList.add('disabled')
  } else {
    btn.disabled = false
    btn.classList.remove('disabled')
  }
}

export {
  $,
  validadeForm,
  submitForm
}