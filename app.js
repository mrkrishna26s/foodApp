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

const RestaurentCard = () => {
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt4aAT6t8SWbxuE7YgThGOLOOPImFMqCpYg&s"/>
            <h3>Tinku Singh</h3>
            <h4>Biryani, Hydrabadi, Indian</h4>
            <h4>4.4 star</h4>
            <h4>30 minutes</h4>
        </div>

    )
};

const Body = () => {
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />

                
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