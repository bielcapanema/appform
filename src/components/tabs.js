function tabs() {
  return `<div class="wrapper">
    <h2>App Form</h2>
    <h6>Utilizando VanillaJS</h6>
    <nav class="tabs">
      <div class="selector"></div>
      <a onClick="window.goTo('/cadastro')" class="${window.location.pathname === '/cadastro' ? 'active' : ''}">Cadastro</a>
      <a onClick="window.goTo('/lista')"  class="${window.location.pathname === '/lista' ? 'active' : ''}">Lista</a>
    </nav>
  </div>`
}

export default tabs