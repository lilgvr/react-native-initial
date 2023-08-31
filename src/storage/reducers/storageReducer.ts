import {
  StorageAction,
  StorageActionType,
  StoragePayload,
} from '@/storage/actions/storageAction';

export type StorageState = {getValue: string | null} & Record<
  string,
  string | null
>;

const initialState: StorageState = {getValue: null};

const storageReducer = (
  state = initialState,
  action: StorageAction,
): StorageState => {
  switch (action.type) {
    case StorageActionType.GET:
      return {...state, getValue: state[action.payload as keyof StorageState]};
    case StorageActionType.SET:
      const {key, value} = action.payload as StoragePayload;
      return {...state, [key]: value};
    case StorageActionType.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default storageReducer;
