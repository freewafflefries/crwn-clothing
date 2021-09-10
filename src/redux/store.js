import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'



var middleware = [thunk]

if (process.env.NODE_ENV === 'development'){
    const logger = createLogger()
    middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)

const storeAndPersistor = {
    store,
    persistor
}

export default storeAndPersistor