import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const ImageSelector = props => {
    const [pickerUri, setPickerUri] = useState()
    
    const verifyPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if(status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Para continuar utilizando esta aplicacion necesita dar permisos',[{text:'OK'}]
            )
            return false;
        }
        return true;

    }

    const handlerTakeImage = async () => {
        const isCamaraOk = await verifyPermissions();
        if(!isCamaraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.8
        })

        setPickerUri(image.uri);
        props.onImage(image.uri);

    }


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickerUri 
                    ? (<Text>No se ha tomado la foto</Text>)
                    : (<Image 
                        style={styles.image}
                        source={{uri:pickerUri}}
                    />)
                }
            </View>
            <Button 
                title="Tomar foto"
                color="red"
                onPress={handlerTakeImage}
            />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        margin:40
    },
    preview:{
        width:"100%",
        height:200,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"black",
        borderWidth:1
    },
    image:{
        width:"100%",
        height:"100%"
    }
})
