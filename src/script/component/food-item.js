class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    .card{
      min-height:400px;
      border-radius :20px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      transition: 0.3s all ease-in-out;
    }

    .card:hover{

    }

    .card img{
     width :150px;
     border:4px solid #1B2E35;
    }

    .btn-card{
      background-color:#1B2E35;
      color: #fff;
      height:40px;
      border-radius:20px;
      outline :none;
    }
    .btn-card:hover{
      background-color:#2b4957;
      color: #fff;
    }
    </style>
    <div class="col mb-3">
      <div class="card pb-3">
      <div class="card-body text-center">
      <img src="${this._food.strMealThumb}" class="img-fluid rounded-circle mb-3" alt="..." />
          <p>${this._food.strArea}</p>
          <h5 class="card-title">${this._food.strMeal}</h5>
        </div>
      <button class="btn btn-card w-50 m-auto">Add to Cart</button>
      </div>
    </div>
      `;
  }
}

customElements.define('food-item', FoodItem);
