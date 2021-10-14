const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
const BASE_URL = 'https://restcountries.com/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class Fetch {
  constructor(searchQueary) {
    this.searchQueary = '';
  }

  fetchArticles() {
    const url = `${BASE_URL}/name/${this.searchQueary}`;
    fetch(url, options)
      .then(r => r.json())
      .then(({ countries }) => {
        return countries;
      });
  }
  set queary(newQuery) {
    this.searchQueary = newQuery;
  }
}
