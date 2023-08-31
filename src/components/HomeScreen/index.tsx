import {ProfileScreenStyles} from '@/components/ProfileScreen/styles';
import {useTypedSelector} from '@/hooks';
import {StorageClear, StorageGet} from '@/storage/action-creators/storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';

type RootStackParams = {
  Home: any;
  Profile: any;
};

export const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, 'Home'>) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState<string>('');
  const storage = useTypedSelector(s => s.storage);

  const storageValues = useMemo(
    () => Object.entries(storage).filter(([k]) => k !== 'getValue'),
    [storage],
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <View>
        <TextInput
          style={ProfileScreenStyles.input}
          onChangeText={setKey}
          placeholder="Key"
          editable={!!storageValues.length}
        />
        <Button
          title="Get value"
          onPress={() => {
            dispatch(StorageGet(key));
          }}
          disabled={!storageValues.length}
        />
        <Text style={{textAlign: 'center'}}>{storage.getValue}</Text>
        <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>
          All values:
        </Text>
      </View>
      {storageValues.length ? (
        storageValues.map(([storageKey, value]) => (
          <View key={storageKey}>
            <Text>{`${storageKey} : ${value}`}</Text>
          </View>
        ))
      ) : (
        <Text>Empty</Text>
      )}
      <Button
        title="Clear"
        onPress={() => {
          dispatch(StorageClear());
        }}
      />
    </View>
  );
};
