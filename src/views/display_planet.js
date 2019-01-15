const PubSub = require('../helpers/pub_sub.js');

const DisplayPlanet = function () {

};

DisplayPlanet.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planet-selected', (event) => {
    const result = event.detail;
    this.renderInfo(result);
  });
};

DisplayPlanet.prototype.renderInfo = function (planet) {
  console.log('something hilarious');
  const resultSection = document.querySelector('.planet-details');
  resultSection.innerHTML = ""
  const planetParagraph = document.createElement('p');
  planetParagraph.textContent = (`This is ${planet.name}. It's orbit is ${planet.orbit}
  A day on ${planet.name} is approximately ${planet.day} Earth days. It is
  ${planet.surfaceArea} times the size of Earth. ${planet.name} has a volume of ${planet.volume}
  compared to Earth. Its gravitational pull is ${planet.gravity} times that of Earth and it
  has ${planet.moons} moons. Here is a photo wot I took on my holidays:`)
  const planetPhoto = document.createElement('img');

  planetPhoto.src = planet.image;
  planetPhoto.className = 'planet-photo';
console.dir(planetPhoto);
  resultSection.appendChild(planetParagraph);
  resultSection.appendChild(planetPhoto);
};


module.exports = DisplayPlanet;
