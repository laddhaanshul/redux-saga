import { createStore, combineReducers } from 'redux'
import responseDataReducer from './reducers/ResponseData';

const rootReducer = combineReducers({
    responseData: responseDataReducer
})

const store = createStore(rootReducer)
export default store  