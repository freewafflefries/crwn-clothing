import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'



import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleWare = createSagaMiddleware()

var middleware = [sagaMiddleWare]

if (process.env.NODE_ENV === 'development'){
    const logger = createLogger()
    middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)

const storeAndPersistor = {
    store,
    persistor
}

export default storeAndPersistor