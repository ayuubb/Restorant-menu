// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/style.css';

import 'regenerator-runtime';

// component
import './script/component/nav-bar.js';
import './script/component/header-jumbotron.js';
import main from './script/view/main.js';
import './script/component/footer-bar.js';

document.addEventListener('DOMContentLoaded', main);
