import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [degreeMode, setDegreeMode] = useState(true);

  const pressButton = (value) => {
    if (value === 'AC') {
      setDisplay('0');
      setExpression('');
      return;
    }

    if (value === '⌫') {
      if (display.length <= 1) {
        setDisplay('0');
      } else {
        setDisplay(display.slice(0, -1));
      }
      return;
    }

    if (value === '=') {
      calculate();
      return;
    }

    if (value === 'DEG' || value === 'RAD') {
      setDegreeMode(!degreeMode);
      return;
    }

    if (value === 'sin') {
      scientificFunction('sin');
      return;
    }

    if (value === 'cos') {
      scientificFunction('cos');
      return;
    }

    if (value === 'tan') {
      scientificFunction('tan');
      return;
    }

    if (value === 'sin⁻¹') {
      scientificFunction('asin');
      return;
    }

    if (value === 'cos⁻¹') {
      scientificFunction('acos');
      return;
    }

    if (value === 'tan⁻¹') {
      scientificFunction('atan');
      return;
    }

    if (value === '√') {
      scientificFunction('sqrt');
      return;
    }

    if (value === 'x²') {
      scientificFunction('square');
      return;
    }

    if (value === 'log') {
      scientificFunction('log');
      return;
    }

    if (value === 'ln') {
      scientificFunction('ln');
      return;
    }

    if (value === 'π') {
      addValue(Math.PI.toString());
      return;
    }

    if (value === 'e') {
      addValue(Math.E.toString());
      return;
    }

    if (value === '!') {
      factorial();
      return;
    }

    if (value === '+/-') {
      toggleSign();
      return;
    }

    if (value === 'xʸ') {
      addValue('^');
      return;
    }

    if (value === '×') {
      addValue('*');
      return;
    }

    if (value === '÷') {
      addValue('/');
      return;
    }

    addValue(value);
  };

  const addValue = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const toggleSign = () => {
    if (display === '0') return;

    if (display.startsWith('-')) {
      setDisplay(display.substring(1));
    } else {
      setDisplay('-' + display);
    }
  };

  const scientificFunction = (type) => {
    const number = parseFloat(display);

    if (isNaN(number)) {
      setDisplay('Error');
      return;
    }

    let result;

    switch (type) {
      case 'sin':
        result = degreeMode
          ? Math.sin((number * Math.PI) / 180)
          : Math.sin(number);
        break;

      case 'cos':
        result = degreeMode
          ? Math.cos((number * Math.PI) / 180)
          : Math.cos(number);
        break;

      case 'tan':
        result = degreeMode
          ? Math.tan((number * Math.PI) / 180)
          : Math.tan(number);
        break;

      case 'asin':
        result = Math.asin(number);
        if (degreeMode) {
          result = (result * 180) / Math.PI;
        }
        break;

      case 'acos':
        result = Math.acos(number);
        if (degreeMode) {
          result = (result * 180) / Math.PI;
        }
        break;

      case 'atan':
        result = Math.atan(number);
        if (degreeMode) {
          result = (result * 180) / Math.PI;
        }
        break;

      case 'sqrt':
        result = Math.sqrt(number);
        break;

      case 'square':
        result = Math.pow(number, 2);
        break;

      case 'log':
        result = Math.log10(number);
        break;

      case 'ln':
        result = Math.log(number);
        break;

      default:
        result = number;
    }

    if (!isFinite(result)) {
      setDisplay('Error');
      return;
    }

    setDisplay(formatResult(result));
  };

  const factorial = () => {
    const number = parseInt(display);

    if (number < 0 || !Number.isInteger(number)) {
      setDisplay('Error');
      return;
    }

    if (number > 170) {
      setDisplay('Error');
      return;
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
      result *= i;
    }

    setDisplay(String(result));
  };

  const calculate = () => {
    try {
      let expressionToCalculate = display;

      expressionToCalculate = expressionToCalculate
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/\^/g, '**');

      if (!/^[0-9+\-*/().\s*]+$/.test(expressionToCalculate)) {
        setDisplay('Error');
        return;
      }

      const result = Function(
        `"use strict"; return (${expressionToCalculate})`
      )();

      if (!isFinite(result)) {
        setDisplay('Error');
        return;
      }

      setExpression(display + ' =');
      setDisplay(formatResult(result));
    } catch {
      setDisplay('Error');
    }
  };

  const formatResult = (number) => {
    if (Number.isInteger(number)) {
      return String(number);
    }

    return Number(number.toFixed(10)).toString();
  };

  const Button = ({
    text,
    type = 'number',
    wide = false,
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          wide && styles.wideButton,
          type === 'operator' && styles.operatorButton,
          type === 'function' && styles.functionButton,
          type === 'special' && styles.specialButton,
          type === 'equals' && styles.equalsButton,
        ]}
        onPress={() => pressButton(text)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.buttonText,
            type === 'function' && styles.functionText,
            type === 'special' && styles.specialText,
            type === 'operator' && styles.operatorText,
            type === 'equals' && styles.equalsText,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      {/* Display */}
      <View style={styles.displayArea}>

        <Text style={styles.mode}>
          {degreeMode ? 'DEG' : 'RAD'}
        </Text>

        <Text style={styles.expression}>
          {expression}
        </Text>

        <Text
          style={styles.display}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {display}
        </Text>

      </View>

      {/* Scientific Buttons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scientificScroll}
      >
        <View style={styles.scientificRow}>

          <Button text="sin" type="function" />
          <Button text="cos" type="function" />
          <Button text="tan" type="function" />

          <Button text="sin⁻¹" type="function" />
          <Button text="cos⁻¹" type="function" />
          <Button text="tan⁻¹" type="function" />

          <Button text="log" type="function" />
          <Button text="ln" type="function" />
          <Button text="√" type="function" />
          <Button text="x²" type="function" />

        </View>
      </ScrollView>

      {/* Main Calculator */}
      <View style={styles.calculator}>

        {/* Row 1 */}
        <View style={styles.row}>
          <Button text="AC" type="special" />
          <Button text="⌫" type="special" />
          <Button text="%" type="special" />
          <Button text="÷" type="operator" />
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="×" type="operator" />
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="-" type="operator" />
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <Button text="1" />
          <Button text="2" />
          <Button text="3" />
          <Button text="+" type="operator" />
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <Button text="+/-" type="special" />
          <Button text="0" />
          <Button text="." />
          <Button text="=" type="equals" />
        </View>

        {/* Extra Scientific Row */}
        <View style={styles.row}>
          <Button text="π" type="function" />
          <Button text="e" type="function" />
          <Button text="!" type="function" />
          <Button
            text={degreeMode ? 'DEG' : 'RAD'}
            type="function"
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  displayArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  mode: {
    color: '#777777',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 5,
  },

  expression: {
    color: '#777777',
    fontSize: 16,
    marginBottom: 5,
  },

  display: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '300',
  },

  scientificScroll: {
    flexGrow: 0,
    marginBottom: 8,
  },

  scientificRow: {
    flexDirection: 'row',
    gap: 7,
    paddingVertical: 4,
  },

  calculator: {
    gap: 8,
    paddingBottom: 15,
  },

  row: {
    flexDirection: 'row',
    gap: 8,
  },

  button: {
    flex: 1,
    height: 58,
    borderRadius: 14,
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wideButton: {
    flex: 2,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '500',
  },

  functionButton: {
    backgroundColor: '#202020',
    borderWidth: 1,
    borderColor: '#333333',
    minWidth: 68,
  },

  functionText: {
    color: '#BBBBBB',
    fontSize: 15,
  },

  specialButton: {
    backgroundColor: '#555555',
  },

  specialText: {
    color: '#FFFFFF',
  },

  operatorButton: {
    backgroundColor: '#FF9500',
  },

  operatorText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
  },

  equalsButton: {
    backgroundColor: '#FF9500',
  },

  equalsText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
  },
});