import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// reducers
import UsersDb from "./reducers/users.reducer";
const RootReducer = combineReducers({
    users:UsersDb
})

export default createStore(RootReducer, applyMiddleware(thunk))