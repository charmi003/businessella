import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./user/userReducer";
import ordersReducer from './orders/ordersReducer';

const rootReducer=combineReducers({
    user:userReducer,
    orders:ordersReducer
});

const store=createStore(
    rootReducer,

    //for using the redux dev tools
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f   
    )
);

export default store 