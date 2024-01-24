
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



// React Functional Component

const AppLayout = () => {
    return(
        <div>
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)