import UserModel from "../../models/userModel"
import { ADD_USER } from "../actions/users.action"

const INITIAL_STATE = {
    users:[]
}

const UsersDb = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_USER:
            const newUser = new UserModel(Date.now(), action.payload.name, action.payload.surname)
            const addingUser = [...state.users, newUser]
            return {...state, users:addingUser}
        default:
            return state
    }
} 
export default UsersDb