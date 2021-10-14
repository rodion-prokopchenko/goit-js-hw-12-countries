const BASE_URL = 'https://restcountries.com/v2';

export default class Fetch {
  constructor(searchQueary) {
    this.searchQueary = '';
  }

  fetchCountries() {
    const url = `${BASE_URL}/name/${this.searchQueary}`;
    console.log(url);

    return fetch(url)
      .then(response => response.json())
      .then(countries => {
        console.log(countries);
        return countries;
      });
  }

  set queary(newQuery) {
    this.searchQueary = newQuery;
  }
}
