import { createStore, combineReducers, applyMiddleware } from "redux";
// reducers
import UsersDb from "./reducers/users.reducer";
const RootReducer = combineReducers({
    users:UsersDb
})

export default createStore(RootReducer)