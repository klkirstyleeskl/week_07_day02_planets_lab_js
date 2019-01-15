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
venusButton.addEventListener('click', (event) => {
  console.log('I clicked Venus');
  PubSub.publish('NavView:button-clicked', 1);
});

const earthButton = document.querySelector('#Earth');
earthButton.addEventListener('click', (event) => {
  console.log('I clicked Earth');
  PubSub.publish('NavView:button-clicked', 2);
});

const marsButton = document.querySelector('#Mars');
marsButton.addEventListener('click', (event) => {
  console.log('I clicked Mars');
  PubSub.publish('NavView:button-clicked', 3);
});

const jupiterButton = document.querySelector('#Jupiter');
jupiterButton.addEventListener('click', (event) => {
  console.log('I clicked Jupiter');
  PubSub.publish('NavView:button-clicked', 4);
});

const saturnButton = document.querySelector('#Saturn');
saturnButton.addEventListener('click', (event) => {
  console.log('I clicked Saturn');
  PubSub.publish('NavView:button-clicked', 5);
});

const uranusButton = document.querySelector('#Uranus');
uranusButton.addEventListener('click', (event) => {
  console.log('I clicked Uranus');
  PubSub.publish('NavView:button-clicked', 6);
});

const neptuneButton = document.querySelector('#Neptune');
console.log(mercuryButton);
neptuneButton.addEventListener('click', (event) => {
  console.log('I clicked Neptune');
  PubSub.publish('NavView:button-clicked', 7);
});


};


module.exports = NavView;
