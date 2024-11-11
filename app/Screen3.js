import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen3({route}) {
    const {item} = route.params;

    return(
        <View style={styles.container}>
            <View style = {styles.viewBikeImage}>
                <Image source={item.image} style={styles.bikeImage}/>
            </View>
            <Text style={styles.textName}>
                {item.name}
            </Text>
            <View style={styles.viewPrice}>
                <Text style={styles.textPrice1}>
                    15% Off {item.price}
                </Text>
                <Text style={styles.textPrice2}>
                    {item.price * 15 / 100}$
                </Text>
            </View>
            <Text style={styles.textTitleDes}>
                Description
            </Text>
            <View style={styles.viewDes}>
                <Text style={styles.textDes}>
                    It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
                </Text>
            </View>
            <TouchableOpacity style={styles.getAddButton}>
                <Text style={styles.getAddText}>Add to card</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        marginLeft: 15,
        backgroundColor: '#f8f8f8'
    },
    viewBikeImage:{
        width:360,
        height:320,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#ffe4e1',
        justifyContent: 'center',
        alignItems: 'center'

    },
    bikeImage: {
        width: 270,
        height: 270,
        resizeMode: 'contain',
    },
    textName:{
        fontSize: 35,
        fontWeight: 400,
        marginTop: 10,
        fontFamily: "Voltaire"
    },
    viewPrice:{
        flexDirection: "row",
        height:30
    },
    textPrice1:{
        fontSize: 25,
        fontWeight: 400,
        color: "#00000096",
        marginLeft: 15,
        fontFamily: "Voltaire"
    },
    textPrice2:{
        fontSize: 25,
        fontWeight: 400,
        color: "#000000",
        marginLeft: 20,
        fontFamily: "Voltaire",
        textDecorationLine: 'line-through'
    },
    textTitleDes:{
        fontSize: 25,
        fontWeight: 400,
        color: "#000000",
        marginLeft: 15,
        fontFamily: "Voltaire",
        marginTop: 15,
        marginBottom: 15
    },
    viewDes:{
        height: 105,
        width: 340, 
        marginLeft: 15,
    },
    textDes:{
        fontSize: 22,
        fontWeight: 400,
        color: "#00000096",
        marginLeft: 15,
        fontFamily: "Voltaire",
    },
    getAddButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4D4D',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        width: 250,
        height: 60,
        marginTop: 15,
        marginLeft: 100
    },
    getAddText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: "Voltaire",
    },
})