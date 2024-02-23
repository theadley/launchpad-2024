const cities = [
  {
    name: 'Cape Town',
    high: 30,
    low: 17,
    current: 20,
    condition: 'Clear',
  },
  {
    name: 'Durban',
    high: 34,
    low: 20,
    current: 30,
    condition: 'Partly Cloudy',
  },
  {
    name: 'Johannesburg',
    high: 32,
    low: 19,
    current: 28,
    condition: 'Sunny',
  },
];

for (const city of cities) {
  const { name, high, low, current, condition } = city;
  if (!(name && high && low && current && condition)) {
    console.log('skipping');
    continue; // Skip this one because something is wrong
  }

  const card = document.createElement('forecast-card');
  card.setAttribute('id', city.name);
  card.setAttribute('city', city.name);
  card.setAttribute('low', city.low);
  card.setAttribute('high', city.high);
  card.setAttribute('current', city.current);
  card.setAttribute('condition', city.condition);
  document.querySelector('body').appendChild(card);
}

setInterval(() => {
  const cityToChange = cities.at(Math.floor(Math.random() * cities.length));
  const newCurrentTemp =
    cityToChange.low + (cityToChange.high - cityToChange.low) * Math.random();
  cityToChange.current = newCurrentTemp;

  // DOM Update
  const domElement = document.getElementById(cityToChange.name);
  if (domElement) {
    domElement.setAttribute('current', Math.round(newCurrentTemp));
  }
}, 1000);
