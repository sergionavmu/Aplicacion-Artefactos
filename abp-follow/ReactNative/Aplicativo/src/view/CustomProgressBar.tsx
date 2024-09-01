import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const CustomProgressBar = ({ label, progress, color }) => (
  <View style={[styles.progressBarItem, styles.progressBarItem]}>
    <Text>{label}</Text>
    <ProgressBar progress={progress} color={color} style={styles.progressBar} />
  </View>
);

const styles = StyleSheet.create({
  progressBarItem: {
    marginLeft: 20,
    marginRight: 20,
  },
  progressBar: {
    width: 20,
    height: 200,
    borderColor: 'black',
    borderWidth: 3,
  },
});

export default CustomProgressBar;
