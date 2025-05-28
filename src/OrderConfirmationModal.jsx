// OrderConfirmationModal.jsx
import React from 'react';

function OrderConfirmationModal({ orderItems, totalPrice, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Order Confirmation</h2>
        <ul>
          {orderItems.map((item, index) => (
            <li className='modal-list' key={index}>
              <img src={item.imgPath} alt={item.name} />
              {item.quantity} x {item.name} - {item.price * item.quantity}$
            </li>
          ))}
        </ul>
        <p>Total Price: {totalPrice}$</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;
