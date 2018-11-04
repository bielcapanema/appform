const $ = (id) => {
  return document.getElementById(id);
}

const setBtnDisabled = (isDisabled) => {
  const btn = $('register-btn')
  if (isDisabled) {
    btn.disabled = true
    btn.classList.add('disabled')
  } else {
    btn.disabled = false
    btn.classList.remove('disabled')
  }
}

const setBtnLoading = (isLoading) => {
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

const getFormValues = () => {
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

const isFormValid = () => {
  const emailError = $('email-error').innerText.length > 0
  const nameError = $('name-error').innerText.length > 0
  const cpfError = $('cpf-error').innerText.length > 0
  const phoneError = $('phone-error').innerText.length > 0

  const {
    email,
    name,
    cpf,
    phone
  } = getFormValues()

  return !(emailError || nameError || cpfError || phoneError) && email.length && name.length && cpf.length && phone.length
}

const validateField = (field) => {
  const err = $(`${field}-error`)
  const value = $(field).value

  err.innerText = ''

  if (value.length === 0) {
    err.innerText = 'Campo obrigatório!'
  } else {
    switch (field) {
      case 'name':
        if (value.length < 3) {
          err.innerText = 'Campo deve conter 3 caracteres ou mais'
        }
        break
      case 'email':
        if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
          err.innerText = 'Digite um e-mail válido!'
        }
        break
      case 'cpf':
        if (!/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/.test(value)) {
          err.innerText = 'Digite um CPF válido!'
        }
        break
      case 'phone':
        if (!/^[+]?[(]?[0-9]{2}[)]?[ ]?[0-9]{5}[-]?[0-9]{4,6}$/.test(value)) {
          err.innerText = 'Digite um telefone válido!'
        }
        break
      default:
        break
    }
  }

  if (err.innerText.length > 0) {
    $(field).classList.add('invalid')
  } else {
    $(field).classList.remove('invalid')
  }

  if (isFormValid()) {
    setBtnDisabled(false)
  } else {
    setBtnDisabled(true)
  }
}


const clearFormValues = () => {
  $('email').value = ''
  $('name').value = ''
  $('cpf').value = ''
  $('phone').value = ''
}

const submitForm = (saveCallback) => {
  setTimeout(() => {
    if (isFormValid()) {
      const user = getFormValues()
      setBtnLoading(true)
      saveCallback(user)
      setTimeout(() => {
        setBtnLoading(false)
        clearFormValues()
        setBtnDisabled(true)
      }, 1000)
    }
  }, 1)
}

export {
  $,
  submitForm,
  validateField
}