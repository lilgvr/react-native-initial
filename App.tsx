import {HomeScreen, ProfileScreen} from '@/components';
import {persistor, store} from '@/storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>loading</Text>}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
