import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen1 = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.introText}>
                A premium online store for sporter and their stylish choice
            </Text >
            <View style = {styles.viewBikeImage}>
                <Image source={require('../assets/images/Bike1.png')} style={styles.bikeImage}/>
            </View>
            <Text style={styles.shopName}>
                POWER BIKE SHOP
            </Text>
            <TouchableOpacity style={styles.getStartedButton}
                onPress={() => navigation.navigate('Screen2')}
            >
                <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8'
    },
    introText: {
        fontSize: 24,
        textAlign: 'center',
        margin: 20,
        fontWeight: 'bold'
    },
    viewBikeImage:{
        width:350,
        height:350,
        borderRadius: 50,
        backgroundColor: '#ffe4e1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bikeImage: {
        width: 270,
        height: 270,
        resizeMode: 'contain',
    },
    shopName: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    getStartedButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4D4D',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        width: 350,
        height: 60
    },
    getStartedText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default Screen1;