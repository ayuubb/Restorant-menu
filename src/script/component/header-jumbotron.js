import hero from '../../img/hero.png';

class HeaderJumbotron extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.description = this.getAttribute('description') || null;

    this.innerHTML = `

    <style>
    .jumbotron{
        background:transparent !important;
        padding : 1rem 0 0 0 ;
    }


    .btn-header{
        background-color:#1B2E35;
        color: #fff;
    }
    .btn-header:hover{
        background-color:#2b4957;
        color: #fff;
    }

    @media screen and (max-width: 768px){
        .jumbotron{
            text-align :center;
        }
        .row-jumbotron{
            flex-direction: column-reverse;
        }
    }

    </style>
    <div class="jumbotron">
        <div class="row justify-content-between align-items-center row-jumbotron">
            <div class="col-lg-5 col-md-5">  
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <button type="button" class="btn btn-header">Get Food</button>
            </div>
            <div class="col-lg-5 col-md-5 ">
                <img src="${hero}" class="img-fluid" alt="" />
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('header-jumbotron', HeaderJumbotron);
