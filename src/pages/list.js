import tabs from '../components/tabs'

export default (users) => {
  return `${tabs()}
    <div class="list">
      ${users === false ? (
        `<div class="list"><h3>Carregando...</h4></div>`
      ) : (
        users.length > 0 ? (`<ol>
          ${users.map((user, i) => {
            return `<li class="card">
            <h4>${user.name}</h4>
            <p><strong>E-mail</strong>: ${user.email}</p>
            <p><strong>CPF</strong>: ${user.cpf}</p>
            <p><strong>Telefone</strong>: ${user.phone}</p>
            <div class="footer">
              <button onClick="window.editUser(${i})">Editar</button>
              <button class="danger" onClick="window.deleteUser(${i})">Excluir</button>
            </div>
          </li>`
          }).join('')}
        </ol>`) : ('<h3>Nenhum usuário cadastrado.</h4>')
      )}
    </div>`
}