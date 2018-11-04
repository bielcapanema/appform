import {
  build,
  fake
} from 'test-data-bot'

const userBuilder = build('User').fields({
  username: fake(f => f.internet.userName()),
  email: fake(f => f.internet.email()),
})

const usersMock = [{
    name: 'My name 2',
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

export {
  userBuilder,
  usersMock
}