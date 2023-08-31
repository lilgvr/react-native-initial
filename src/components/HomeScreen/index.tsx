import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';

type RootStackParams = {
  Home: any;
  Profile: any;
};

export const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, 'Home'>) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      title="Profile"
      onPress={() => {
        navigation.navigate('Profile');
      }}
    />
  </View>
);
