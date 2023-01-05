import {combineReducers,applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk' //to generate the middleware
import {restaurantListReducer} from './Reducers/restaurantReducer'

const reducers=combineReducers({
   restaurantReducer:restaurantListReducer
    //key funcction
})

const middleware = [thunk]

const store=createStore(reducers,applyMiddleware(...middleware))

export default store