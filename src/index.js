import './sass/main.scss';
import Fetch from './partials/fetchCountries';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
};
console.log(refs.searchForm);
const fetch = new Fetch();

refs.searchForm.addEventListener('input', onSearch);

function onSearch(e) {
  fetch.query = e.currentTarget.elements.query.value;

  if (fetch.query === '') {
    return alert('Введи что-то нормальное');
  }
}
