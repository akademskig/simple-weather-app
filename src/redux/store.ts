import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import rootReducer from "./root.reducer";
import createSagaMiddleware from 'redux-saga'
import weatherSaga from "./weather/weather.saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from "redux-devtools-extension"
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["weather"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [sagaMiddleware]

let store: Store<any, AnyAction> = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)))
let persistor = persistStore(store)

export {
    store, persistor
}

sagaMiddleware.run(weatherSaga)