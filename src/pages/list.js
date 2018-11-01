export default function list(users) {
  return `<ol>
    ${users.map((user) => {
      return `<li class="card">
      <h4>${user.name}</h4>
      <p><strong>E-mail</strong>: ${user.email}</p>
      <p><strong>CPF</strong>: ${user.cpf}</p>
      <p><strong>Telefone</strong>: ${user.phone}</p>
    </li>`
    }).join('')}
    </ol>`
}