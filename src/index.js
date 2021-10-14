import './sass/main.scss';
import countriesAll from './templates/countries.hbs';
import Fetch from './partials/fetchCountries';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  countriesContainer: document.querySelector('.countriesConrainer'),
};

const fetch = new Fetch();

refs.searchForm.addEventListener('input', onSearch);
console.log(fetch.fetchCountries(fetch));

function createCountries(countries) {
  console.log(countriesAll(countries));
  return countriesAll(countries);
}

function appendCountries(countries) {
  refs.countriesContainer.insertAdjacentHTML('beforeend', createCountries(countries));
}

function onSearch(e) {
  fetch.queary = e.currentTarget.elements.query.value;
  fetch.fetchCountries();
  appendCountries(countries);
}
