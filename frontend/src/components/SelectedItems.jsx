<h2>Indian Starters</h2>
        {selectedIndianStarters.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Main Course</h2>
        <h3>North Indian</h3>
        {selectedNorthMainCourse.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h3>South Indian</h3>
        {selectedSouthMainCourse.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Tandoori</h2>
        {selectedTandori.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Rice Items</h2>
        {selectedRice.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Meals</h2>
        {selectedMeals.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Thali</h2>
        {selectedThali.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Salads</h2>
        {selectedSalads.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Roti</h2>
        {selectedRotis.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Snacks</h2>
        {selectedSnacks.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>South Indian </h2>
        {selectedBreakfasts.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}
        <h2>Ice Creams</h2>
        {selectedIceCreams.map((item, index) => (
          <Item
            itemName={item.name}
            price={item.price}
            key={index}
            quantity={quantity[item.name] || 0}
            onQuantityChange={handleQuantityChange}
          ></Item>
        ))}