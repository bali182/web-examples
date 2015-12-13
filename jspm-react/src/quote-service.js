import 'fetch';
import queryString from 'query-string';

export default class QuoteService {
  async fetchStockData(symbol) {
    const response = await fetch(this.buildUrl(symbol));
    const parsed = await response.json();
    return parsed.query.results.quote;
  }

  buildUrl(symbol) {
    const query = `select * from yahoo.finance.quotes where symbol = "${symbol}"`;
    const baseUrl = 'http://query.yahooapis.com/v1/public/yql';
    const queryParams = {
      q: query,
      format: 'json',
      env: 'http://datatables.org/alltables.env'
    };
    return `${baseUrl}?${queryString.stringify(queryParams) }&callback=`;
  }
}
