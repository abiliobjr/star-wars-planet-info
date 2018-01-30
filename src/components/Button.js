import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button type="button" onClick={this.props.proxPlaneta}>{this.props.texto}</button>
  }
}

export default Button;