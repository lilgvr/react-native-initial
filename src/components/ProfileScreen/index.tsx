import {StorageSet} from '@/storage/action-creators/storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ProfileScreenStyles} from '@/components/ProfileScreen/styles';

type RootStackParams = {
  Profile: any;
  Home: any;
};

export const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, 'Profile'>) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState<string>('');
  const [value, setValue] = useState<string>('');

  return (
    <View>
      <TextInput
        style={ProfileScreenStyles.input}
        onChangeText={setKey}
        placeholder="Key"
      />
      <TextInput
        style={ProfileScreenStyles.input}
        onChangeText={setValue}
        placeholder="Value"
      />
      <Button
        title="Save"
        onPress={() => {
          dispatch(StorageSet({key, value}));
          setKey('');
          setValue('');
        }}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
