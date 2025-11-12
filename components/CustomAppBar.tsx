import React from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

export default function CustomAppBar({ navigation, back }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title="Material Design Navigation" />
      {!back && (
        <Appbar.Action 
          icon="arrow-right" 
          onPress={() => navigation.navigate('Second')} 
        />
      )}
    </Appbar.Header>
  );
}
