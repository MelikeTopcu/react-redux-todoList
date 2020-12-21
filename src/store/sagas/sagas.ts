import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { TodoListActionTypes } from '../../types';
import { loadFailure, loadSuccess } from '../actions/items';

export function* load() {
  try {
    const { data } = yield call(api.get, 'http://localhost:3000/items');
    yield put(loadSuccess(data));
    // console.log('data', data)
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* deleteRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.delete, `http://localhost:3000/items/${payload.id}`);
  } catch (error) {
    console.log('DELETE ERROR');
  }
}

export function* addRequest({ payload }: TodoListActionTypes) {
  const newTodo = { id: '', complete: false, text : payload.text };
  try {
    yield call(api.post, `http://localhost:3000/items`, newTodo);
  } catch (error) {
    console.log('ADD ERROR');
  }
}

export function* updateRequest({ payload }: TodoListActionTypes) {
  const editTodo = { id: payload.id, complete: payload.complete, text : payload.text };
  try {
    yield call(api.put, `http://localhost:3000/items/${payload.id}`, editTodo);
  } catch (error) {
    console.log('UPDATE ERROR');
  }
}

export function* toggleRequest({ payload }: TodoListActionTypes) {
  const toggleTodo = { id: payload.id, complete: true, text: payload.text};
  try {
    yield call(api.put, `http://localhost:3000/items/${payload.id}`, toggleTodo);
  } catch (error) {
    console.log('TOOGLE ERROR');
  }
}

