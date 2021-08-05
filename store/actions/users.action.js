import * as FileSystem from 'expo-file-system'
export const ADD_USER = 'ADD_USER';

// export const addUser = (item) => ({
//     type: 'ADD_USER',
//     payload:item
// })

export const addUser = (name, surname, image) => {
    return async dispatch => {

        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message);
            throw error;
        }

        dispatch({ type: ADD_USER, payload:{ name, surname, image: Path }})

    }
}