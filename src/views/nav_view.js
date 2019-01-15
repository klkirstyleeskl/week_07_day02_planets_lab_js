const PubSub = require('../helpers/pub_sub.js');

const NavView = function () {

};

NavView.prototype.bindEvents = function () {
const mercuryButton = document.querySelector('#Mercury');
mercuryButton.addEventListener('click', (event) => {
  console.log('I clicked Mercury');
  PubSub.publish('NavView:button-clicked', 0);
});

const venusButton = document.querySelector('#Venus');

const earthButton = document.querySelector('#Earth');

const marsButton = document.querySelector('#Mars');

const jupiterButton = document.querySelector('#Jupiter');

const saturnButton = document.querySelector('#Saturn');

const uranusButton = document.querySelector('#Uranus');

const neptuneButton = document.querySelector('#Neptune');
console.log(mercuryButton);



};


module.exports = NavView;
