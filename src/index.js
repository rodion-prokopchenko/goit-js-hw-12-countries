import './sass/main.scss';
import countriesAll from './templates/countries.hbs';
import country from './templates/country.hbs';
import Fetch from './partials/fetchCountries';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

console.log(country);
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  countriesContainer: document.querySelector('.countriesConrainer'),
};

const fetchF = new Fetch();

refs.searchForm.addEventListener('input', onSearch);

function createCountries() {
  return countriesAll(fetchF);
}
function createCountry() {
  return country(fetchF);
}
function appendCountry() {
  refs.countriesContainer.insertAdjacentHTML('beforeend', createCountry(fetchF.fetchCountries));
}

function appendCountries() {
  refs.countriesContainer.insertAdjacentHTML('beforeend', createCountries(fetchF.fetchCountries));
}

function onSearch(e) {
  fetchF.queary = e.currentTarget.elements.query.value;
  fetchF.fetchCountries();
  //     if (fetchF.fetchCountries().lenght > 10) {
  //       alert({
  //         text: 'Too many marches found. Please enter a more specific query',
  //       });
  //   }
  // if(fetchF.fetchCountries.lenght=== =>2 && <=10){
  // appendCountries()
  //   }
  console.log(fetchF.fetchCountries);
  appendCountry();
}
