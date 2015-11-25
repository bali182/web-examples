import React from 'react'
import QuoteCard from './quote-card.jsx!'
import QuoteService from './quote-service'

export default class QuoteList extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {quotes : []}
    this.service = new QuoteService()
  }
  
  componentDidMount() {
    this.service.fetchStockData(this.props.quoteSymbols)
      .then(quotes => this.setState({quotes: quotes}))
  }
  
  render() {
    const quoteCards = this.state.quotes.map(q => <QuoteCard key={q.Symbol} quote={q}/>)
    return <div>{quoteCards}</div>
  }
}