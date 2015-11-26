import React from 'react'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardText from 'material-ui/lib/card/card-text'
import Avatar from 'material-ui/lib/avatar'
import QuoteService from './quote-service'

export default class QuoteCard extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {quote : {}}
    this.service = new QuoteService()  
  }
  
  componentDidMount() {
    this.service.fetchStockData(this.props.quote)
      .then(quote => this.setState({quote: quote}))
  }
  
  render() {
    const quote = this.state.quote
    const symbol = quote.Symbol
    const name = quote.Name
    return <Card>
      <CardHeader
        title={symbol ? symbol : 'Loading...'}
        subtitle={name ? name : 'Loading...'}
        avatar={<Avatar>{symbol ? symbol.charAt(0) : '?'}</Avatar>}/>
    </Card>
  }
}