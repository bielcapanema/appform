import {
  addUser,
  deleteUser,
  editUser,
  getState
} from '../db'

describe('DB tests', () => {
  let usersMock = []

  beforeEach(() => {
    localStorage.removeItem('list');
    usersMock = [{
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
  });

  it('should retun false if list is not set', () => {
    expect(getState()).toBeFalsy()
  })

  it('should retun the list if list is set', () => {
    localStorage.setItem('list', JSON.stringify(usersMock));
    expect(getState()).toEqual(usersMock)
  })

  it('should delete list item of given index', () => {
    localStorage.setItem('list', JSON.stringify(usersMock));
    const position = 1
    deleteUser(position)
    usersMock.splice(position, 1)
    expect(getState()).toEqual(usersMock)
  })

  it('should edit list item of given index', () => {
    localStorage.setItem('list', JSON.stringify(usersMock));
    const position = 1
    const newUser = {
      name: 'NEW USER',
      cpf: '77797584192',
      phone: '11987654321',
      email: 'myemail2@test.com.br'
    }
    editUser(newUser, position)
    usersMock[position] = newUser
    expect(getState()).toEqual(usersMock)
  })

  it('should add user to the end of the list', () => {
    localStorage.setItem('list', JSON.stringify(usersMock));
    const newUser = {
      name: 'NEW USER',
      cpf: '77797584192',
      phone: '11987654321',
      email: 'myemail2@test.com.br'
    }
    addUser(newUser)
    usersMock.push(newUser)
    expect(getState()).toEqual(usersMock)
  })

})