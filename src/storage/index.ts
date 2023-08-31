import rootReducer from '@/storage/reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
