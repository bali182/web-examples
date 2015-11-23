'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import MyReactComponent from './my-react-component.jsx!'

(() => {
  ReactDOM.render(
    <MyReactComponent name={"Doge"} />,
    document.getElementById('react-app')
  )
})()