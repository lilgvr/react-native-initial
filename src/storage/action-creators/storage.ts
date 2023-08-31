import {
  StorageAction,
  StorageActionType,
  StoragePayload,
} from '@/storage/actions/storageAction';

export const StorageGet = (payload: string): StorageAction => ({
  type: StorageActionType.GET,
  payload,
});

export const StorageSet = (payload: StoragePayload): StorageAction => ({
  type: StorageActionType.SET,
  payload,
});
