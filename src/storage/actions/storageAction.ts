import {Action} from 'redux';

export enum StorageActionType {
  SET = 'storage/set',
  GET = 'storage/get',
}

export type StoragePayload = {key: string; value: string};

export interface StorageAction extends Action {
  type: StorageActionType;
  payload: StoragePayload | string;
}
