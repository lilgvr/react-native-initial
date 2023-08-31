import {useTypedSelector} from '@/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

type RootStackParams = {
  Home: any;
  Profile: any;
};

export const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, 'Home'>) => {
  const storage = useTypedSelector(s => s.storage);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      {Object.entries(storage).map(([key, value]) => (
        <View key={key}>
          <Text>{`${key} : ${value}`}</Text>
        </View>
      ))}
    </View>
  );
};
