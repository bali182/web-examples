import React from 'react'

export default class MyReactComponent extends React.Component {
  constructor() {
    super()
		this.colors = ['#FF0000', '#00FF00', '#0000FF']
    this.state = { colorIndex: 0 }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      colorIndex: (this.state.colorIndex + 1) % this.colors.length
    })
  }

  render() {
		const nextColor = this.colors[this.state.colorIndex]
    return <a href="#" style={{color: nextColor}} onClick={this.handleClick.bind(this)}>
      Hello there, {this.props.name}!
    </a>
  }
}
