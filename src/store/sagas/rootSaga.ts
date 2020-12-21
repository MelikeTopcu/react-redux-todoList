import { all, takeLatest } from 'redux-saga/effects';
import { ItemsTypes } from '../../types';
import { addRequest, deleteRequest,  load, toggleRequest, updateRequest } from './sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ItemsTypes.LOAD_REQUEST, load),
    takeLatest(ItemsTypes.REMOVE_ITEM, deleteRequest),
    takeLatest(ItemsTypes.ADD_ITEM, addRequest),
    takeLatest(ItemsTypes.UPDATE_ITEM, updateRequest),
    takeLatest(ItemsTypes.TOGGLE_ITEM, toggleRequest),
  ]);
}
