import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native'
import { useSelector } from 'react-redux'

const Item = ({ name, surname, image }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={{ uri:image }} />
        <View style={styles.userData}>
            <Text style={styles.userDataText}>{name}</Text>
            <Text style={styles.userDataText}>{surname}</Text>
        </View>

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
        backgroundColor:"#FFCCBB",
        padding:20,
        marginVertical:8,
        flexDirection:"row",
        alignItems:"center",
        
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    userData:{
        paddingLeft:60,
        
    },
    userDataText:{
        fontSize:25
    }
})
