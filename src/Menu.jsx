import React, { useState } from 'react';
import { foodItems, drinkItems, dessertItems, sideItems } from './Food';

function Menu({ addToOrder, iceCreamMachineBroken }) {
    const [activeCategory, setActiveCategory] = useState("Food");

    const filteredItems = () => {
        switch (activeCategory) {
            case "Food":
                return foodItems;
            case "Drinks":
                return drinkItems;
            case "Sides":
                return sideItems;
            case "Desserts":
                return dessertItems; 
            default:
                return [];
        }
    };

    const addToCart = (item) => {
        addToOrder(item);
    };

    return (
        <section id="menu-section">
            <div id="menu-header">
                <h2 className={activeCategory === "Food" ? "active" : ""} onClick={() => setActiveCategory("Food")}>Food</h2>
                <h2 className={activeCategory === "Drinks" ? "active" : ""} onClick={() => setActiveCategory("Drinks")}>Drinks</h2>
                <h2 className={activeCategory === "Sides" ? "active" : ""} onClick={() => setActiveCategory("Sides")}>Sides</h2>
                <h2 className={activeCategory === "Desserts" ? "active" : ""} onClick={() => setActiveCategory("Desserts")}>Desserts</h2>
            </div>

            {filteredItems().map((item, index) => (
                <div key={index} className={`food-item ${iceCreamMachineBroken && item.type === 'icecream' ? 'disabled' : ''}`}>
                    <div className="food-display-container">
                        <img src={item.imgPath} alt={item.name} className="food-image" />
                        <div className="food-info-container">
                            <h3 className="food-title">{item.name}</h3>
                            <p className="food-desc">{iceCreamMachineBroken && item.type === 'icecream' ? 'Ice cream machine is broken.' : item.description}</p>
                        </div>
                    </div>
                    <div className="add-to-cart-container">
                            <h4>{item.price}$</h4>
                            <button className="btn-add-to-cart" onClick={() => addToCart(item)} disabled={iceCreamMachineBroken && item.type === 'icecream'}>+</button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Menu;
