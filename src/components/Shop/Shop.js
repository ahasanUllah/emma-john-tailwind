import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
         });
   }, []);

   useEffect(() => {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id in storedCart) {
         const addedProduct = products.find((product) => product.id === id);
         if (addedProduct) {
            const quantity = storedCart[id]; //value of local storage quantity
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
         }
      }
      setCart(savedCart);
   }, [products]);

   const addToCartHandle = (selectedProduct) => {
      console.log(selectedProduct);
      let newCart = [];
      const exists = cart.find((product) => product.id === selectedProduct.id);
      if (!exists) {
         selectedProduct.quantity = 1;
         newCart = [...cart, selectedProduct];
      } else {
         const rest = cart.filter((product) => product.id !== selectedProduct.id);
         exists.quantity = exists.quantity + 1;
         newCart = [...rest, exists];
      }

      setCart(newCart);
      addToDb(selectedProduct.id);
   };
   return (
      <div className="grid grid-cols-6  ">
         <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-5 xl:grid-cols-3 xl:col-span-5 col-span-4 gap-12 mt-28 mx-4 lg:mx-24">
            {products.map((product) => (
               <Product product={product} addToCartHandle={addToCartHandle} key={product.id}></Product>
            ))}
         </div>
         <div className="bg-secondary col-span-2 md:col-span-1">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;
