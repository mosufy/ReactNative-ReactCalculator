import React, {Component} from 'react';
import Calculator from '../components/Calculator';

export default class CalculatorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  render() {
    return (
      <Calculator {...this.props}
                  previousInputValue={this.state.previousInputValue}
                  inputValue={this.state.inputValue}
                  selectedSymbol={this.state.selectedSymbol}
                  onInputButtonPressed={this._onInputButtonPressed}/>
    )
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input);
      case 'string':
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: inputValue
    })
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.appLoader,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //
  };
};