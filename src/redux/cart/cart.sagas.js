import {all, call, takeLatest, put} from 'redux-saga/effects'

import UserActionTypes from '../user/user.types' //because we need to know about the user signing out in order to clear their cart in the same motion: ;
import {clearCart} from './cart.actions'



export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onUserSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}



export function* cartSagas() {
    yield all([call(onUserSignOut)])
}