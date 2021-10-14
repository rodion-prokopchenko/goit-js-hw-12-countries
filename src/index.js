import './sass/main.scss';
import countriesAll from './templates/countries.hbs';
import Fetch from './partials/fetchCountries';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  countriesContainer: document.querySelector('.countriesConrainer'),
};

const fetchF = new Fetch();

refs.searchForm.addEventListener('input', onSearch);
console.log(fetchF.fetchCountries(fetch));

function createCountries(fetchF) {
  return countriesAll(fetchF);
}
console.log(createCountries(fetchF));

function appendCountries(fetchF) {
  refs.countriesContainer.insertAdjacentHTML('beforeend', createCountries(fetchF));
}

function onSearch(e) {
  fetchF.queary = e.currentTarget.elements.query.value;
  fetchF.fetchCountries();
  console.log(fetchF.fetchCountries);
  appendCountries(fetchF.fetchCountries);
}
