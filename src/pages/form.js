import tabs from '../components/tabs'

export default function form() {
  return `${tabs()}
  <form id="form" class="register">
    <div class="field">
      <input onkeyup="window.validadeForm()" type="text" name="name" id="name" placeholder="Tyler Durden">
      <label for="name">Nome completo (sem abreviações)</label>
    </div>

    <div class="field">
      <input onkeydown="window.validadeForm()" type="email" name="email" id="email" placeholder="tyler@fightclub.com">
      <label for="email">E-mail</label>
    </div>

    <div class="field">
      <input onkeydown="window.validadeForm()" type="email" name="cpf" id="cpf" placeholder="999.999.999-99">
      <label for="cpf">CPF</label>
    </div>

    <div class="field">
      <input onkeyup="window.validadeForm()" type="phone" name="phone" id="phone" placeholder="(11) 99999-9999">
      <label for="phone">Telefone</label>
    </div>

    <button onclick="window.submit()" id="register-btn" type="button" class="register__btn disabled" disabled>
      Cadastrar
    </button>
  </form>`
}