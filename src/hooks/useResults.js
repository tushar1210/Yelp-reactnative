import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm)=>{
        try {
            const response = await yelp.get('/search',{
                params:{
                    term:searchTerm,
                    limit:50,
                    location: 'san jose'
                }
            })
            console.log(response);
            setResults(response.data.businesses)
        }catch(error){
            console.log(error);
            alert('Something Went Wrong 🙁')
        }
    }
    useEffect(()=>{
        searchApi('Pasta')
    },[])
    return [searchApi,results]
}