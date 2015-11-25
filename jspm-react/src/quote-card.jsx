import React from 'react'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardText from 'material-ui/lib/card/card-text'
import Avatar from 'material-ui/lib/avatar'

export default class QuoteCard extends React.Component {
  render() {
    const quote = this.props.quote
    
    return <Card>
      <CardHeader
        title={quote.Symbol}
        subtitle={quote.Name}
        avatar={<Avatar>{quote.Symbol.charAt(0)}</Avatar>}/>
    </Card>
  }
}