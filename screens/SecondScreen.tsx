import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type SecondScreenProps = StackScreenProps<RootStackParamList, 'Second'>;

export default function SecondScreen({ navigation }: SecondScreenProps) {
  return (
    <View style={style.container}>
      <Text>SecondScreen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});