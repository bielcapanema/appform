import './styles/index.scss';
import {
  addUser
} from './db'
import {
  submitForm,
  validateField
} from './shared/utils'
import {
  validRoute,
  goTo
} from './router'

window.goTo = goTo
window.validateField = validateField
window.onpopstate = validRoute
window.submit = function submit() {
  submitForm(addUser)
}

validRoute()