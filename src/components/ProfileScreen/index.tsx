import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, View} from 'react-native';

type RootStackParams = {
  Profile: any;
  Home: any;
};

export const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParams, 'Profile'>) => {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
