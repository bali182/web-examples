import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Avatar from 'material-ui/lib/avatar';
import QuoteService from './quote-service.jsx!';
import {Colors} from 'material-ui/lib/styles';

export default class QuoteCard extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      quote: {},
      color: this.randomColor()
    };
    this.service = new QuoteService();
  }
  
  randomColor() {
    const keys = Object.keys(Colors);
    return Colors[keys[Math.floor(Math.random() * keys.length)]];
  }
  
  componentDidMount() {
    this.service.fetchStockData(this.props.quote)
      .then(quote => this.setState({quote: quote}));
  }

  render() {
    const quote = this.state.quote;
    const symbol = quote.Symbol;
    const name = quote.Name;
    const askPrice = quote.Ask;
    const bidPrice = quote.Bid;
    return <Card>
      <CardHeader
        title={symbol ? symbol : 'Loading...'}
        subtitle={name ? name : 'Loading...'}
        avatar={<Avatar backgroundColor={this.state.color}>{symbol ? symbol.charAt(0) : '?'}</Avatar>}/>
      <CardText >
        Bid price:<b>{`$${bidPrice}`}</b>, Ask price: <b>{`$${askPrice}`}</b>  
      </CardText>
    </Card>;
  }
}
