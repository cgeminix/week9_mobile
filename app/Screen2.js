import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const products = [
    { id: '1', name: 'Pinarello', price: '1800', image: require('../assets/images/Bike1.png') },
    { id: '2', name: 'Pina Mountai', price: '1700', image: require('../assets/images/Bike2.png') },
    { id: '3', name: 'Pina Bike', price: '1500', image: require('../assets/images/Bike3.png') },
    { id: '4', name: 'Pinarello', price: '1900', image: require('../assets/images/Bike4.png') },
    { id: '5', name: 'Pina Bike', price: '2700', image: require('../assets/images/Bike3.png') },
    { id: '6', name: 'Pinarello', price: '1350', image: require('../assets/images/Bike2.png') },

]

const Screen2 = ({navigation}) => {
    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.productCard} 
            onPress={()=> navigation.navigate('Screen3',{item})}
        >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
        </TouchableOpacity>
    );
    return(
        <View style={styles.container}>
        <Text style={styles.header}>The world's Best Bike</Text>
        <View style={styles.section}> 
            <View style={styles.sectionButton}>
                <Text style={styles.sectionText}>All</Text>
            </View>
            <View style={styles.sectionButton}>
                <Text style={styles.sectionText}>Roadbike</Text>
            </View>
            <View style={styles.sectionButton}>
                <Text style={styles.sectionText}>Mountain</Text>
            </View>
        </View>
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.grid}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red'
    },
    section:{
        width: 370,
        height: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    sectionButton:{
        width: 110,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#ffe4e1",
        borderWidth: 3,
        margin: 10,
        borderRadius: 10
    },
    sectionText:{
        fontSize: 18,
        color: '#a9a9a9'
    },
    grid: {
        justifyContent: 'center',
    },
    productCard: {
        backgroundColor: '#ffe4e1',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
    },
    productImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
export default Screen2;