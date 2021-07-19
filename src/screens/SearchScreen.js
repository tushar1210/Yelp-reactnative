import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ()=>{
    
    const [key,setKey] = useState('');
    const [searchApi, results] = useResults();

    const filterResults = (price) => {
        return results.filter(result =>{
            return result.price === price
        })
    }
    
    return (
        <>
            <SearchBar 
                keyword={key} 
                onChangeKey={newKey=>setKey(newKey)}
                onSubmitKey={()=>searchApi(key)}
            />
            <Button
                title='Submit'
                onPress={()=> searchApi(key)}
                style={styles.buttonStyle}
            />
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResults('$')}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResults('$$')}
                />
                <ResultsList 
                    title="Big Spender"
                    results={filterResults('$$$')}
                />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    buttonStyle:{
        marginBottom:15,
        fontSize:14
    }
});

export default SearchScreen;