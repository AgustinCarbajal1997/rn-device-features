import UserModel from "../../models/userModel"
import { ADD_USER, LOAD_USER } from "../actions/users.action"

const INITIAL_STATE = {
    users:[]
}

const UsersDb = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_USER:
            
            
            const newUser = new UserModel(
                action.payload.id.toString(),
                action.payload.name,
                action.payload.surname,
                action.payload.image
            )

            const addingUser = [...state.users, newUser]
            return {...state, users:addingUser}
        case LOAD_USER:
            return {
                ...state,
                users: action.payload.map(item => new UserModel(
                    item.id.toString(),
                    item.name,
                    item.surname,
                    item.image,
                )),
            }
        default:
            return state
    }
} 
export default UsersDb