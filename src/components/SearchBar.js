import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons' ;
const styles = StyleSheet.create({
    searchBarStyle:{
        backgroundColor:'#F0EEEE',
        flexDirection:'row',
        height: 50,
        borderRadius: 5,
        marginHorizontal:25,
        
    },
    searchBarItemStyle:{
        paddingHorizontal:5,
        flex:1,
        margin:5
    },
    searchLogoStyles:{
        alignSelf:'center',
    }
    
});

const SearchBar = ({keyword, onChangeKey, onSubmitKey})=>{
    return (
        <View style={styles.searchBarStyle}>
            <Feather name='search' size={30} style={styles.searchLogoStyles}/>
            <TextInput
                style={styles.searchBarItemStyle}
                placeholder = 'Search Resturant'
                value={keyword}
                onChangeText={onChangeKey}
                onEndEditing={onSubmitKey}
                autoCorrect={false}
            />
        </View>
    )
}

export default SearchBar