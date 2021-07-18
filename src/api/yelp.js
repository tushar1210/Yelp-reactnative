import axios from "axios";




export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        "Authorization":'Bearer NnY2suKJEcH6pKpq_0yqevbMotjXwzMlaSL_Xoh7g0cI9sgYHUsl30snWMp0YBnqLxvgFEvIJQQo8m5JtgkN6ALC9vFP-FJQr3IXs1a2fD6d30IUvLZettuWrDP0YHYx',
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
    }
});