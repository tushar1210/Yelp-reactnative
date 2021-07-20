import React from 'react';
import {Text,View,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultsDetail';

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10,
        marginBottom:5
    }
})


const ResultsList = (props)=>{
    return(
        <View>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList 
                horizontal
                keyExtractor={(item,index)=>index.toString()}
                showsHorizontalScrollIndicator={false}
                data={props.results}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                            onPress={()=>props.navigation.navigate('Results',{
                                id:item.id
                            })}
                        >
                            <ResultDetail 
                                name={item.name}
                                imageURL={item.image_url}
                                rating={item.rating}
                            />
                        </TouchableOpacity>
                    )
                }}
            
            />
        </View>
    )
}

export default withNavigation(ResultsList);