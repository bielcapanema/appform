const INITIAL_STATE = [{
    name: 'My name 1',
    cpf: '04080757247',
    phone: '11987654321',
    email: 'myemail1@test.com.br'
  },
  {
    name: 'My name 2',
    cpf: '77797584192',
    phone: '11987654321',
    email: 'myemail2@test.com.br'
  },
  {
    name: 'My name 3',
    cpf: '45486737688',
    phone: '11987654321',
    email: 'myemail3@test.com.br'
  },
  {
    name: 'My name 4',
    cpf: '74668869066',
    phone: '11987654321',
    email: 'myemail4@test.com.br'
  }
]

function getState() {
  const list = JSON.parse(localStorage.getItem('list'));
  if (typeof list !== 'object') {
    saveState(INITIAL_STATE);
    return INITIAL_STATE
  }
  return list;
}

function saveState(state) {
  localStorage.setItem('list', JSON.stringify(state));
}

function addUser(user) {
  const list = JSON.parse(localStorage.getItem('list'));
  list.push(user)
  saveState(list);
}

function removeUser(position) {
  const list = JSON.parse(localStorage.getItem('list'));
  list.splice(position, 1)
  saveState(list);
}

export {
  addUser,
  removeUser,
  getState
}