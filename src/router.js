import form from './pages/form'
import list from './pages/list'
import {
  getState,
} from './db'
import {
  $,
} from './shared/utils'

const contentDiv = $('app')

const routes = {
  '/cadastro': form,
  '/lista': list,
  '/editar': form
};

const goTo = (pathName, options) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName](getState(), options);
}

const validRoute = () => {
  if (routes[window.location.pathname]) {
    contentDiv.innerHTML = routes[window.location.pathname](getState());
  } else {
    goTo('/cadastro')
  }
}

export {
  validRoute,
  goTo
}