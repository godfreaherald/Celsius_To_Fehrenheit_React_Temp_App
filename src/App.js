import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange = temperature => {
    this.setState({ temperature: temperature, scale: 'c' });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ temperature: temperature, scale: 'f' });
  };

  toCelcius = fahrenheit => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = celsius => {
    return (celsius * 9) / 5 + 32;
  };

  tryConvert = (input, convertTo) => {
    const inputVal = parseFloat(input);
    if (Number.isNaN(inputVal)) {
      return '';
    }

    const output = convertTo(inputVal);
    const rounded = (output * 1000) / 1000;

    return rounded.toString();
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f'
        ? this.tryConvert(temperature, this.toCalsius)
        : temperature;
    const fahrenheit =
      scale === 'c'
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          handleTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          handleTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

export default App;
