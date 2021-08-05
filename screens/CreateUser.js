import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useDispatch, connect } from 'react-redux'
import { addUser } from '../store/actions/users.action'
const INITIAL_STATE = {
    id:null,
    name:"",
    surname:""
}

const CreateUser = () => {
    const [userName, setUserName] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
    

    const onChangeUserName = (text, name) => {
        setUserName({
            ...userName,
            [name]: text
        })
    }

    const onHandleSubmit = () => {
        dispatch(addUser(userName))

    }
    
    

    return (
        <View >
            <Text>Nuevo usuario</Text>
            <TextInput 
                style={styles.input}
                
                placeholder="Ingrese su nombre"
                onChangeText={text => onChangeUserName(text,"name")}
                value={userName.name}
            />
            <TextInput 
                style={styles.input}
                placeholder="Ingrese su apellido"
                onChangeText={text => onChangeUserName(text,"surname")}
                value={userName.surname}
            />
            <Button title="Crear usuario" color="red" onPress={onHandleSubmit}/>
        </View>
    )
}

export default connect() (CreateUser)


const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:"center",
    //     alignItems:"center"
    // },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})
