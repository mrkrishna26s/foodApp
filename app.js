import React from "react"
import ReactDOM from "react-dom/client"


/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *      - RestaurentCard
 *          - img
 *          - Name of Res, star raiting, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


const Header =  () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="https://images.seeklogo.com/logo-png/40/1/shopee-food-logo-png_seeklogo-405304.png" />
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurentCard = ({resName, cuisines, star, del_time}) => {
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt4aAT6t8SWbxuE7YgThGOLOOPImFMqCpYg&s"/>
            <h3>{resName}</h3>
            <h3>{cuisines}</h3>
            <h3>{star}</h3>
            <h3>{del_time}</h3>

        </div>

    )
};

const Body = () => {
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                <RestaurentCard resName="singh grills" cuisines= "Biryani, NorthIndian, Hydrabadi" star= "5" del_time="30 minutes" />
                <RestaurentCard resName="Tinku Singh" cuisines= "Mutton, Sahi mutton, Hydrabadi" star= "4" de_-time="35 minutes"/>
                <RestaurentCard resName="Arnavi" cuisines= "Mesh, veg & Non-Veg" star= "3" del_time="30 minutes"/>
                

                
            </div>
        </div>
    )
}




const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />

        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);