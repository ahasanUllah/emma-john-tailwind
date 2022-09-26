import React from 'react';

const Cart = ({ cart }) => {
   // console.log(cart);
   let total = 0;
   let shipping = 0;
   let quantity = 0;
   for (const product of cart) {
      console.log(product);

      quantity = quantity + product.quantity;
      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping;
   }
   const tax = parseFloat((total * 0.1).toFixed(2));
   const grandTotal = total + shipping + tax;
   return (
      <div className="sticky top-4 space-y-5 space-x-7 font-semibold text-left">
         <h4 className="text-2xl font-semibold mt-5 text-center">Order summary</h4>
         <p>Product Added: {quantity}</p>
         <p>Total: ${total}</p>
         <p>Shipping: ${shipping}</p>
         <p>Tax: {tax}</p>
         <h5 className="text-xl font-bold">Grand Total: {grandTotal.toFixed(2)}</h5>
      </div>
   );
};

export default Cart;
