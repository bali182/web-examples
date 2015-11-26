import React from 'react'
import QuoteCard from './quote-card.jsx!'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'

export default class QuoteList extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {quotes : [], quote: ''}
  }
  
  addSymbol(event) {
    const quotes = this.state.quotes.concat([this.state.quote])
    this.setState({
      quotes: quotes,
      quote: ''
    })
  }
  
  handleChange(event) {
    this.setState({quote: event.target.value})
  }
  
  render() {
    const quoteCards = this.state.quotes.map(quote => <QuoteCard key={"card-" + quote} quote={quote} />)
    const addSymbol = this.addSymbol.bind(this)
    const handleChange = this.handleChange.bind(this)
    
    return <div>
      <TextField value={this.state.quote} onChange={handleChange} hintText="Quote symbol..." />
      <RaisedButton label="Add" onClick={addSymbol} disabled={this.state.quote.length === 0} secondary={true}/>
      {quoteCards}
    </div>
  }
}