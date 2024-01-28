
import React from "react";
import ReactDOM from "react-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroComponent = (props) =>{
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


const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restro-container">
                    <RestroComponent name="Meghana Foods" cuisine="Biryani, North Indian, Asain" rating="4.4 stars" eta="23 minutes"/>
                    <RestroComponent name="KFC" cuisine="Biryani, South Indian, Asain" rating="4.1 stars" eta="32 minutes"/>
                    
                    
                </div>
        </div>
    )
}


// React Functional Component

const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)