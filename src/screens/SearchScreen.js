import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = ()=>{
    const [key,setKey] = useState('Pasta');
    const [results, setResults] = useState([]);

    const searchApi = async ()=>{
        console.log('Search api !',key);
        try {
            const response = await yelp.get('/search',{
                params:{
                    term:key,
                    limit:50,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        }catch(error){
            console.log(error);
            alert('Something Went Wrong 🙁')
        }


        
    }
    

    return (
        <View>
            <SearchBar 
                keyword={key} 
                onChangeKey={newKey=>setKey(newKey)}
                onSubmitKey={()=>searchApi()}
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