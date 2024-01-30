import { RestroComponent } from "./RestroComponent"

export const Body = ()=>{
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