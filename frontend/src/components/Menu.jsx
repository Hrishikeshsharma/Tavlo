import React, { useState } from "react";
import Item from "./Item";
import { useEffect } from "react";
import axios from "axios";
import FoodCart from "./FoodCart";

import "./Menu.css";

function Menu() {
  const [menu, setMenu] = useState({});
  const [quantity, setQuantity] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchItem = async (e) => {
      await axios
        .get("http://localhost:8080/menu")
        .then((response) => {
          setMenu(response.data[0]);
        })
        .catch((error) => console.error("Error fetching menu", error));
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
    item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const renderSelection = (title, subtitle, items = []) => (
    <>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      <hr />
      {items.map((item, index) => (
        <Item
          serial={index + 1}
          key={index}
          itemName={item.name}
          price={item.price || 0}
          quantity={quantity[item.name] || 0}
          onQuantityChange={handleQuantityChange}
        ></Item>
      ))}
    </>
  );

  const selectedItems = allItems.filter((item) => quantity[item.name] > 0);
  const hasSelectedItems = selectedItems.length > 0;
  return (
    <div className="search-container" style={{ position: "relative" }}>
      <div className="searchbar-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchbar"
        />
      </div>

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
        "Main course",
        "North indian",
        menu.main_course?.north_indian
      )}
      {renderSelection(
        "Main Course",
        "South inndian",
        menu.main_course?.south_indian
      )}
      {renderSelection("Tandoori", "", menu.tandoori)}
      {renderSelection("Roti", "", menu.rotis)}
      {renderSelection("Rice items", "", menu.rice_items)}
      {renderSelection("Thali", "", menu.thali)}
      {renderSelection("Meals", "", menu.meals)}
      {renderSelection("Snacks", "", menu.snacks)}
      {renderSelection("South Indian", "", menu.south_indian_breakfast)}
      {renderSelection("Ice cream", "", menu.ice_creams)}
      {hasSelectedItems && (
        <FoodCart selectedItems={selectedItems} quantity={quantity}></FoodCart>
      )}
    </div>
  );
}

export default Menu;
