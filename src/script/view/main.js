import '../component/food-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const foodListElement = document.querySelector('food-list');

  const getFood = () => {
    DataSource.getFood().then(renderResult).catch(fallbackResult);
  };

  const onButtonSearchClicked = () => {
    DataSource.searchFood(searchBox.value).then(renderResult).catch(fallbackResult);
  };

  const renderResult = (result) => {
    foodListElement.foods = result;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };
  searchElement.clickEvent = onButtonSearchClicked;
  getFood();
};

export default main;
