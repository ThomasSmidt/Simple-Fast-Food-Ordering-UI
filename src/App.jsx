import React, { useState } from 'react';
import Menu from './Menu.jsx';
import Header from './Header.jsx';
import Order from './Order.jsx';
import Footer from './Footer.jsx';
import OrderConfirmationModal from './OrderConfirmationModal';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderItems, setOrderItems] = useState([]);
  const [showModal, setShowModal] = useState(false); // Manage modal state here
  const [totalRevenue, setTotalRevenue] = useState(0); // Initialize total revenue state
  const [orderNumber, setOrderNumber] = useState(1);
  const [iceCreamMachineBroken, setIceCreamMachineBroken] = useState(Math.random() < 0.5);

  // Function to randomize if the icecream machine is broken
  const randomizeIceCreamMachineBroken = () => {
    const newRandomNumber = Math.random();
    setIceCreamMachineBroken(newRandomNumber < 0.5);
  }

  // Function to add an item to the order
  const addToOrder = (item) => {
    setOrderItems((prevOrderItems) => {
      const existingItem = prevOrderItems.find((orderItem) => orderItem.name === item.name);
      if (existingItem) {
        return prevOrderItems.map((orderItem) =>
          orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        );
      } else {
        return [...prevOrderItems, { ...item, quantity: 1 }];
      }
    });
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
  };

  // Function to remove all instances of an item from the order
  const removeFromOrder = (itemToRemove) => {
    setOrderItems((prevOrderItems) =>
      prevOrderItems.filter((orderItem) => orderItem.name !== itemToRemove.name)
    );
    setTotalPrice((prevTotalPrice) =>
      prevTotalPrice - itemToRemove.price * itemToRemove.quantity
    );
  };

  // Function to increment the quantity of an item
  const incrementItem = (item) => {
    setOrderItems((prevOrderItems) =>
      prevOrderItems.map((orderItem) =>
        orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      )
    );
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
  };

  // Function to decrement the quantity of an item
  const decrementItem = (item) => {
    if (item.quantity > 1) {
      setOrderItems((prevOrderItems) =>
        prevOrderItems.map((orderItem) =>
          orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity - 1 } : orderItem
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
    }
  };

  // Function to handle placing order
  const handlePlaceOrder = () => {
    setShowModal(true); // Show modal when order is placed
    setTotalRevenue((prevRevenue) => prevRevenue + totalPrice);
  };

  // Function to clear order items
  const clearOrder = () => {
    setOrderItems([]);
    setTotalPrice(0);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false)
    console.log('Is broken:', {iceCreamMachineBroken});
    setOrderNumber(prevOrderNumber => prevOrderNumber + 1)
    randomizeIceCreamMachineBroken();
    clearOrder(); // Clear order items after placing order;
  };

  return (
    <div className="App">
      <Header />
      <div id="main-container">
        <Menu addToOrder={addToOrder} iceCreamMachineBroken={iceCreamMachineBroken}/>
        <Order
          orderItems={orderItems}
          totalPrice={totalPrice}
          removeFromOrder={removeFromOrder}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
          onPlaceOrder={handlePlaceOrder} // Pass the function to handle placing order
          clearOrder={clearOrder}
        />
      </div>
      <Footer totalRevenue={totalRevenue} 
      orderNumber={orderNumber}/>
      {showModal && (
        <OrderConfirmationModal
          orderItems={orderItems}
          totalPrice={totalPrice}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
