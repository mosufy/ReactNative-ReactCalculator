import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

export default class Calculator extends Component {
  render() {
    let {inputValue} = this.props;

    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  _renderInputButtons() {
    let {selectedSymbol, onInputButtonPressed} = this.props;
    let views = [];

    for (let r = 0; r < inputButtons.length; r ++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (let i = 0; i < row.length; i ++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            highlight={selectedSymbol === input}
            onPress={onInputButtonPressed.bind(this, input)}
            key={r + "-" + i}/>
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }
}