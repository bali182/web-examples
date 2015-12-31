import React from 'react';
import QuoteCard from './quote-card.jsx!';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {autobind} from 'core-decorators';

export default class QuoteList extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {quotes : [], quote: ''};
  }

  @autobind addSymbol() {
    const quotes = this.state.quotes.concat([this.state.quote]);
    this.setState({
      quotes: quotes,
      quote: ''
    });
  }

  @autobind handleChange(event) {
    this.setState({quote: event.target.value});
  }

  render() {
    const quoteCards = this.state.quotes.map(quote => <QuoteCard key={"card-" + quote} quote={quote} />);
    return <div style={{width: '350px', margin: 'auto'}}>
      <TextField value={this.state.quote} onChange={this.handleChange} hintText="Quote symbol..." style={{marginRight: '5px'}} />
      <RaisedButton label="Add" onClick={this.addSymbol} disabled={this.state.quote.length === 0} secondary={true}/>
      {quoteCards}
    </div>;
  }
}
