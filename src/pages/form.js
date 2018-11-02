import tabs from '../components/tabs'

export default function form() {
  return `${tabs()}
  <form id="form" class="register">
    <div class="field">
      <input onblur="window.validateField('name')" type="text" name="name" id="name" placeholder="Tyler Durden" required>
      <label for="name">Nome completo (sem abreviações)</label>
      <span id="name-error" class="input-error"></span>
    </div>

    <div class="field">
      <input onblur="window.validateField('email')" type="email" name="email" id="email" placeholder="tyler@fightclub.com" required>
      <label for="email">E-mail</label>
      <span id="email-error" class="input-error"></span>
    </div>

    <div class="field">
      <input onblur="window.validateField('cpf')" type="text" name="cpf" id="cpf" placeholder="999.999.999-99" required>
      <label for="cpf">CPF</label>
      <span id="cpf-error" class="input-error"></span>
    </div>

    <div class="field">
      <input onblur="window.validateField('phone')" type="phone" name="phone" id="phone" placeholder="(11) 99999-9999" required>
      <label for="phone">Telefone</label>
      <span id="phone-error" class="input-error"></span>
    </div>

    <button onclick="window.submit()" id="register-btn" type="button" class="register__btn disabled" disabled>
      Cadastrar
    </button>
  </form>`
}