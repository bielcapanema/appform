import {
  validRoute
} from './router'
import {
  baseUrl
} from './config'

const saveState = (state) => {
  localStorage.setItem('list', JSON.stringify(state));
}

const setInitialData = async () => {
  const response = await fetch(`${baseUrl}/users`);
  const data = await response.json();
  saveState(data);
  validRoute()
}

const getState = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  if (list === null) {
    setInitialData()
    return false
  }
  return list;
}

const addUser = (user) => {
  const list = JSON.parse(localStorage.getItem('list'));
  list.push(user)
  saveState(list);
}

const deleteUser = (position) => {
  const list = JSON.parse(localStorage.getItem('list'));
  list.splice(position, 1)
  saveState(list);
}

const editUser = (newUser, index) => {
  const list = JSON.parse(localStorage.getItem('list'));
  list[index] = newUser
  saveState(list);
}

export {
  addUser,
  deleteUser,
  getState,
  editUser
}