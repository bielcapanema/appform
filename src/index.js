import './styles/index.scss';
import {
  addUser
} from './db'
import {
  validadeForm,
  submitForm,
} from './shared/utils'
import {
  validRoute,
  goTo
} from './router'

window.goTo = goTo
window.onpopstate = validRoute
window.validadeForm = validadeForm
window.submit = function submit() {
  submitForm(addUser)
}

validRoute()