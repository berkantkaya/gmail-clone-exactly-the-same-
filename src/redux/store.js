import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { modalReducer } from "./reducers/ModalReducer"
import { userReducer } from "./reducers/UserReducer"

const initialState={}

const reducer=combineReducers({
  modal:modalReducer,
  user:userReducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store