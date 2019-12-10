import React, { Component } from 'react';

const Scales = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  handleChange = e => {
    this.props.handleTemperatureChange(e.target.value);
  };

  render() {
    return (
      <fieldset>
        <legend> Enter Temperature in {Scales[this.props.scale]}</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
