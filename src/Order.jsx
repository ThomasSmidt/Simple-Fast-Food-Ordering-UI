// Order.jsx
import React from 'react';

function Order({ orderItems, totalPrice, removeFromOrder, incrementItem, decrementItem, onPlaceOrder, clearOrder }) {
  const isCartEmpty = orderItems.length === 0;
  return (
    <section id="order-section">
      <h1>Order Summary</h1>
      <div className="order-items">
        {orderItems.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.imgPath} alt={item.name} className="order-item-image" />
            <div className="order-item-details">
              <h3 className="order-item-title">{item.name}</h3>
              <p className="order-item-price">{item.price}$</p>
              <div className="quantity-controls">
                <button className="btn-quantity" onClick={() => decrementItem(item)}>
                  -
                </button>
                <p className="order-item-amount">{item.quantity}</p>
                <button className="btn-quantity" onClick={() => incrementItem(item)}>
                  +
                </button>
              </div>
            </div>
            <button className="btn-remove-item" onClick={() => removeFromOrder(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button id="btn-cancel-order" onClick={clearOrder} disabled={isCartEmpty}>
          Cancel Order
      </button>
      <div id="order-place-container">
        <p id="total-price">Total: {totalPrice}$</p>
        <button id="btn-place-order" onClick={onPlaceOrder} disabled={isCartEmpty}>
          Place Order
        </button>
      </div>
    </section>
    
  );
}

export default Order;
