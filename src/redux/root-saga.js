import {all, call} from 'redux-saga/effects'
import {fetchCollectionsStart} from './shop/shop.saga'
import {userSaga} from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'
import {shopSagas} from './shop/shop.saga'

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSaga),
        call(cartSagas),
        call(shopSagas)
    ])
}