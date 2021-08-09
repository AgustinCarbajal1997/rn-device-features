import * as FileSystem from 'expo-file-system'
import { insertUser, fetchUser } from '../../db';


export const ADD_USER = 'ADD_USER';
export const LOAD_USER = 'LOAD_USER';


export const addUser = (name, surname, image) => {
    return async dispatch => {

        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename;
        let id = Date.now();

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })

            const result = await insertUser(
                id,
                name,
                surname,
                Path
            )

            console.log(result)

            dispatch({
                type: ADD_USER,
                payload: { id: result.insertId, name, surname, image: Path },
            });

        } catch (error) {
            console.log("Hubo un error")
            console.log(error.message);
            throw error;
        }

        

    }
}

export const loadUser = () => {
    return async dispatch => {
        try {
            const result = await fetchUser();
            console.log(result);
            dispatch({ type: LOAD_USER, payload: result.rows._array })
        } catch (error) {
            throw error
        }
    }
}