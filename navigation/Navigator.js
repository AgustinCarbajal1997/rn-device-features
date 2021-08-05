import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingUsers from '../screens/ListingUsers';
import CreateUser from '../screens/CreateUser';
import { Button } from 'react-native';


const Stack = createNativeStackNavigator();

export const NavigatorApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListUsers">
                <Stack.Screen name="ListUsers" component={ListingUsers} options={({ navigation }) => ({ 
                    title:"Lista de usuarios",
                    headerRight: ()=> (
                        <Button title="Crear" color="red" onPress={()=> navigation.navigate("CreateUsers") }/>
                    )
                 })}/>
                <Stack.Screen name="CreateUsers" component={CreateUser} options={{
                    title:"Crear nuevo usuario"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
