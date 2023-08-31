import storageReducer from '@/storage/reducers/storageReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  storage: storageReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

export default rootReducer;
