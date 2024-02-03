import { Link } from "react-router-dom"
import logoImg from "../utils/constants"

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logoImg}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}