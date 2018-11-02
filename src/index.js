import './styles/index.scss';
import form from './pages/form';
import list from './pages/list';
import {
  getState,
  addUser
} from './db'
import {
  $,
  validadeForm,
  submitForm
} from './shared/utils'

const contentDiv = $('app');

const routes = {
  '/cadastro': form,
  '/lista': list
};

function validRoute() {
  if (routes[window.location.pathname]) {
    contentDiv.innerHTML = routes[window.location.pathname](getState());
  } else {
    window.history.pushState({}, '/cadastro', `${window.location.origin}/cadastro`);
  }
}

window.goTo = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName](getState());
}

window.onpopstate = () => {
  validRoute()
}

window.validadeForm = validadeForm
window.submit = function submit() {
  submitForm(addUser)
}

validRoute()