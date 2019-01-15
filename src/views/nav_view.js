const PubSub = require('../helpers/pub_sub.js');

const NavView = function () {

};

NavView.prototype.bindEvents = function () {
const mercuryButton = document.querySelector('#Mercury');
const venusButton = document.querySelector('#Venus');
const earthButton = document.querySelector('#Earth');
const marsButton = document.querySelector('#Mars');
const jupiterButton = document.querySelector('#Jupiter');
const saturnButton = document.querySelector('#Saturn');
const uranusButton = document.querySelector('#Uranus');
console.log(mercuryButton);
  menu.addEventListener('click', (event) => {
      console.log('testing');
});


};


module.exports = NavView;
