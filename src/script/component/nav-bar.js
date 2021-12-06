import roller from '../../img/roller.png';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    nav{
      background-color : #34454C ;
      border-radius :0 0 7px 7px;
    }
    nav h4{
      color : #ffff;
      margin: 0;
    }
    </style>

    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <h4>INTER-FOOD</h4>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <a class="nav-link" href="#"><img class="trol" src="${roller}" alt="" /></a>
      </div>
    </div>
    </div>
  </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
