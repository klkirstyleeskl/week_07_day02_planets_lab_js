const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

  SolarSystem.prototype.bindEvents = function () {
    PubSub.subscribe('NavView:button-clicked', (event) => {
    const planetIndex = event.detail;
    console.log(planetIndex);
    const planetResult = this.getPlanet(planetIndex);
    console.log(planetResult);
    PubSub.publish('SolarSystem:planet-selected', planetResult);
  });
};

  SolarSystem.prototype.getPlanet = function (index) {
    return this.planets[index];
};


module.exports = SolarSystem;
