import axios from "axios";
import { useEffect, useState } from "react";


export const RestroComponent = (props) =>{

    const [restroCard,setrestroCard] = useState([]);

    useEffect(()=>{
    // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8894736&lng=77.5886234&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // .then(res=> res.json())
    // .then(json=> {console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0])
    // setrestroCard(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)})
    
    },[])



    async function getData(){
        try{
            const cart = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8894736&lng=77.5886234&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            // console.log(data.data);
            // data.map(d=>console.log(d))
            console.log(cart.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        catch(e){
            console.log("there was error",e)
        }
        // fetch("https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2")
        // .then(res=> res.json())
        // .then(json=>json)
        // .catch(handleError)
    }

    function handleError(e){
        console.log(e);
    }
    return(
        <div className="restro-card">
            <img className="restro-logo" alt="restro-img" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"/>
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.eta}</h4>
        </div>
    )
}