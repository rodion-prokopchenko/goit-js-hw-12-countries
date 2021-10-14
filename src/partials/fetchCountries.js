const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
const BASE_URL = 'https://restcountries.com/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class Fetch {
  constructor(searchQueary, page) {
    this.searchQueary = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/all?fields=${this.searchQueary}&`;
    fetch(url, options)
      .then(r => r.json())
      .then();
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
