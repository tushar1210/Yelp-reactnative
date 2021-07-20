import React, {useState, useEffect} from 'react';
import { Text, View, Image, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';

const styles = StyleSheet.create({
    titleStyle:{
        marginHorizontal:20
    },
    imageStyles:{
        width:250,
        borderRadius:4,
        height:120,
        marginBottom:5,
        alignItems:'center'
    }
})

const ResultsScreen = (props)=>{
    const [result,setResult] = useState(null);
    const id = props.navigation.getParam('id');
    try{
        const getResult = async(id)=>{
            const response = await yelp.get(`/${id}`)
            setResult(response.data);
        };
        useEffect(()=>{
            getResult(id)
        },[]);
    }catch(err){
        console.log(err);
    }

    if(!result)return null;

    return(
        <View style={{alignItems:'center'}}>
            <Text> {result.name} </Text>
            <FlatList
                data={result.photos}
                
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>{
                    console.log(item);
                    return (
                        <Image
                            source={{uri:item}}
                            style={styles.imageStyles}
                        />
                    )
                }}
            />
        </View>

    )
}

export default ResultsScreen;