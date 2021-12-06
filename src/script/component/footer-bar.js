import love from '../../img/love.png';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        footer{
          height:50px;
          width:100%;
          background-color:#1B2E35;
        }
        footer p{
          margin: 0 ;
        }
      </style>

      <footer class="d-flex align-items-center justify-content-center mt-5">
        <div class="container">
            <p class="text-white text-center">Made by Ayub with <img src="${love}" alt="" /> ,2021</p>
        </div>
      </footer>
      `;
  }
}

customElements.define('footer-bar', Footer);
