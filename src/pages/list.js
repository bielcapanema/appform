export default function list(users) {
  return `<ol>
    ${users.map((user) => {
      return `<li class="card">
      <h4>${user.name}</h4>
      <p>E-mail: ${user.email}</p>
      <p>CPF: ${user.cpf}</p>
      <p>Telefone: ${user.phone}</p>
    </li>`
    }).join('')}
    </ol>`
}