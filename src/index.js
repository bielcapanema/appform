import './styles/index.scss';
import {
  addUser,
  editUser,
  deleteUser
} from './db'
import {
  submitForm,
  validateField
} from './shared/utils'
import {
  validRoute,
  goTo
} from './router'

window.deleteUser = () => {
  deleteUser()
  validRoute()
}
window.editUser = (index) => {
  goTo('/editar', {
    index,
    edit: true
  })
}
window.goTo = goTo
window.validateField = validateField
window.onpopstate = validRoute
window.submit = (index) => {
  submitForm(isNaN(index) ? addUser : (user) => editUser(user, index))
}

validRoute()