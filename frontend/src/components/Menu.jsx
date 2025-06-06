import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import FoodCart from "./FoodCart";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [menu, setMenu] = useState({});
  const [quantity, setQuantity] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toBack = () => {
    navigate("/browse");
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get("http://localhost:8080/menu");
        setMenu(response.data[0]);
      } catch (error) {
        console.error("Error fetching menu", error);
      }
    };
    fetchItem();
  }, []);

  const handleQuantityChange = (itemName, qty) => {
    setQuantity((prev) => ({ ...prev, [itemName]: qty }));
  };

  const allItems = [
    ...(menu.soups || []),
    ...(menu.starters?.indian || []),
    ...(menu.starters?.chinese || []),
    ...(menu.main_course?.north_indian || []),
    ...(menu.main_course?.south_indian || []),
    ...(menu.tandoori || []),
    ...(menu.rice_items || []),
    ...(menu.meals || []),
    ...(menu.thali || []),
    ...(menu.salads || []),
    ...(menu.ice_creams || []),
    ...(menu.snacks || []),
    ...(menu.rotis || []),
    ...(menu.south_indian_breakfast || []),
  ];

  const searchedItem = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSelection = (title, subtitle, items = []) => (
    <>
      <h2 className="title">{title}</h2>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      <hr />
      {items.map((item, index) => (
        <Item
          serial={index + 1}
          key={index}
          itemName={item.name}
          price={item.price || 0}
          quantity={quantity[item.name] || 0}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </>
  );

  const selectedItems = allItems.filter((item) => quantity[item.name] > 0);
  const hasSelectedItems = selectedItems.length > 0;

  return (
    <div className="menu-wrapper">
      <div className="searchbar-wrapper">
        <input
          type="button"
          className="back-btn"
          value="Back"
          onClick={toBack}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchbar"
        />
      </div>

      <div className="search-container">
        {searchTerm && (
          <div className="results">
            <h2 className="title">Search Results</h2>
            <hr />
            {searchedItem.length > 0 ? (
              searchedItem.map((item, index) => (
                <Item
                  key={index}
                  itemName={item.name}
                  price={item.price || 0}
                  quantity={quantity[item.name] || 0}
                  onQuantityChange={handleQuantityChange}
                />
              ))
            ) : (
              <p>No matching items found.</p>
            )}
          </div>
        )}

        {renderSelection("Soups", "", menu.soups)}
        {renderSelection("Starters", "Chinese", menu.starters?.chinese)}
        {renderSelection("Starters", "Indian", menu.starters?.indian)}
        {renderSelection(
          "Main Course",
          "North Indian",
          menu.main_course?.north_indian
        )}
        {renderSelection(
          "Main Course",
          "South Indian",
          menu.main_course?.south_indian
        )}
        {renderSelection("Tandoori", "", menu.tandoori)}
        {renderSelection("Roti", "", menu.rotis)}
        {renderSelection("Rice Items", "", menu.rice_items)}
        {renderSelection("Thali", "", menu.thali)}
        {renderSelection("Meals", "", menu.meals)}
        {renderSelection("Snacks", "", menu.snacks)}
        {renderSelection("South Indian", "", menu.south_indian_breakfast)}
        {renderSelection("Ice Cream", "", menu.ice_creams)}

        {hasSelectedItems && (
          <FoodCart selectedItems={selectedItems} quantity={quantity} />
        )}
      </div>
    </div>
  );
}

export default Menu;
