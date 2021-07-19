import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]);   
    const searchApi = async (searchTerm)=>{
        console.log('SEARCH! ' + searchTerm)
        try {
            const response = await yelp.get('/search',{
                params:{
                    term:searchTerm,
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
    useEffect(()=>{
        searchApi('Cake')
    },[])
    return [searchApi,results]
}