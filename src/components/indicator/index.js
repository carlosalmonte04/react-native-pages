import React, { PropTypes, Component } from 'react';
import { View, Animated } from 'react-native';

import styles from './styles.js';

export default class Indicator extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    index: PropTypes.instanceOf(Animated.Value).isRequired,
  };

  render() {
    let { count, index, color } = this.props;
    let dots = [];

    for (let i = 0; i < count; i++) {
      let mn = i - 1;
      let mx = i + 1;

      let opacity = index
        .interpolate({
          inputRange: [-1, mn, i, mx, count],
          outputRange: [0.5, 0.5, 1.0, 0.5, 0.5],
        });

      let dotStyle = {
        opacity,
        backgroundColor: color,
      };

      dots.push(
        <Animated.View style={[styles.dot, dotStyle]} key={i} />
      );
    }

    return (
      <View style={styles.container}>
        {dots}
      </View>
    );
  }
}
