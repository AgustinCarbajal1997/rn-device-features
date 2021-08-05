import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

const Item = ({ name, surname, image }) => (
    <View style={styles.item}>
        <Text>{name}</Text>
        <Text>{surname}</Text>
        <Text>{image}</Text>
    </View>
)



const ListingUsers = () => {
    const listUser = useSelector(state => state.users.users);
    console.log(listUser);
    const renderItem = ({ item }) => (
        <Item name={item.name} surname={item.surname} image={item.image}/>
    )
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listUser}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
        
    )
}

export default ListingUsers

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item:{
        backgroundColor:"gray",
        padding:20,
        marginVertical:8
    }
})
