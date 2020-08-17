// File: ./src/index.js
import generateRandomString from './utilities/random';

import './style.scss';

document.addEventListener('DOMContentLoaded', function () {
  let randomString = `Hello World! : <span>${generateRandomString()}</span>`;

  window.setTimeout(function () {
    document.getElementsByTagName('h1')[0].innerHTML = randomString
  }, 0);
});