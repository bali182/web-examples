import React from 'react';
import QuoteList from './quote-list.jsx!';
import FlexBox from 'react-flexbox';

export default class QuoteApp extends React.Component {
  render() {
    return <FlexBox row>
        <FlexBox column>
          <QuoteList />
        </FlexBox>
      </FlexBox>;
  }
}
