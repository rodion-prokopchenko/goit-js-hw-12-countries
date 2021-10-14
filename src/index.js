import './sass/main.scss';
import Fetch from './partials/fetchCountries';
import countries from './templates/countries.hbs';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  countriesContainer: document.querySelector('.countriesConrainer'),
};
console.log(refs.searchForm);
console.log(refs.countriesContainer);
const fetch = new Fetch();
console.log(fetch);

refs.searchForm.addEventListener('input', onSearch);

function onSearch(e) {
  if (fetch.queary === '') {
    return alert('Введи что-то нормальное');
  }
  fetch.queary = e.currentTarget.elements.query.value;

  console.log(fetch);
  appendCountries();
}

function appendCountries(countries) {
  refs.countriesContainer.insertAdjacentHTML('beforeend', countries);
}
