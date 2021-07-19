import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ()=>{
    
    const [key,setKey] = useState('');
    const [searchApi, results] = useResults();
    return (
        <View>
            <SearchBar 
                keyword={key} 
                onChangeKey={newKey=>setKey(newKey)}
                onSubmitKey={()=>searchApi(key)}
            />
            <Button
                title='Submit'
                onPress={()=> searchApi()}
            />
            <Text>There are {results.length} places near you !</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;