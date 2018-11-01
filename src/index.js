import './styles/index.scss';
import form from './pages/form';
import list from './pages/list';

const contentDiv = document.getElementById('app');

const routes = {
  '/form': form,
  '/list': list
};

function validRoute() {
  if (routes[window.location.pathname]) {
    contentDiv.innerHTML = routes[window.location.pathname];
  } else {
    window.history.pushState({}, '/form', `${window.location.origin}/form`);
  }
}

window.onpopstate = () => {
  validRoute()
}

validRoute()