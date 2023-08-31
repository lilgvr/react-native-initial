import {
  StorageAction,
  StorageActionType,
  StoragePayload,
} from '@/storage/actions/storageAction';

export type StorageState = Record<string, string>;

const initialState: StorageState = {};

const storageReducer = (state = initialState, action: StorageAction) => {
  switch (action.type) {
    case StorageActionType.GET:
      return state[action.payload as keyof StorageState];
    case StorageActionType.SET:
      const {key, value} = action.payload as StoragePayload;
      return {...state, [key]: value};
    default:
      return state;
  }
};

export default storageReducer;
