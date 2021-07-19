import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultDetail = (props)=>{
    return (
        <View style={styles.container}>
            <Image source={{uri:props.imageURL}} style={styles.imageStyles}/>
            <Text style={styles.nameStyles}>{props.name}</Text>
            <Text>{props.rating}🌟</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyles:{
        width:250,
        borderRadius:4,
        height:120,
        marginBottom:5
    },
    nameStyles:{
        fontWeight:'600',
    },
    container:{
        marginLeft:10
    }
});

export default ResultDetail