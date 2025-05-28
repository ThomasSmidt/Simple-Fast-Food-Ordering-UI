import React from 'react';

function Footer( {totalRevenue, orderNumber} ) {
    return (
        <footer>
            <p>Todays Revenue: {totalRevenue}$</p>
            <p>Order Number: {orderNumber}</p>
        </footer>
    );
}

export default Footer;