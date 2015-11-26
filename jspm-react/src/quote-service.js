'use strict';
import 'fetch'
import lazy from 'lazy'
import queryString from 'query-string'

export default class QuoteService {
  fetchStockData(symbol) {
    const query = `select * from yahoo.finance.quotes where symbol = "${symbol}"`
    const baseUrl = 'http://query.yahooapis.com/v1/public/yql'
    const queryParams = {
      q: query,
      format: 'json',
      env: 'http://datatables.org/alltables.env'
    }
    const url = `${baseUrl}?${queryString.stringify(queryParams) }&callback=`
    return fetch(url)
      .then(r => r.json())
      .then(r => r.query.results.quote)
  }
}