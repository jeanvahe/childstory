import { put, take, call, fork } from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';

 export function* requestStorySetList() {
   try {
   } catch (error) {
     yield put(receiveArticleList([], typeId));
     toastShort('网络发生错误，请重试');
   }
 }


export function* watchRequestStorySetList() {
  while (true) {
    yield take(types.REQUEST_STORYSET_LIST);
    yield fork(requestStorySetList);
  }
}
