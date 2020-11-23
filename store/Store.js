import { createStore, combineReducers, applyMiddleware } from 'redux'
import responseDataReducer from './reducers/ResponseData';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/RootSaga'

const rootReducer = combineReducers({
    responseData: responseDataReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store  
