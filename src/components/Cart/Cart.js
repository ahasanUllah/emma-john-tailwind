import React from 'react';

const Cart = ({ cart }) => {
   return (
      <div>
         <h4 className="text-2xl font-semibold mt-5">Order summary</h4>
         <p>Product Added: {cart.length}</p>
      </div>
   );
};

export default Cart;
