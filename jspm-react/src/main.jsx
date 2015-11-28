'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import QuoteApp from './quote-app.jsx!'

(() => {
  ReactDOM.render(
    <QuoteApp/>,
    document.getElementById('react-app')
  )
})()
