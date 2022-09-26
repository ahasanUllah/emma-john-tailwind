import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);
   const addToCartHandle = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
   };
   return (
      <div className="grid grid-cols-6  ">
         <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-5 xl:grid-cols-3 xl:col-span-5 col-span-4 gap-12 mt-28 mx-4 lg:mx-24">
            {products.map((product) => (
               <Product product={product} addToCartHandle={addToCartHandle} key={product.id}></Product>
            ))}
         </div>
         <div className="bg-secondary col-span-2 md:col-span-1">
            <h4 className="text-2xl font-semibold mt-5">Order summary</h4>
            <p>Product Added: {cart.length}</p>
         </div>
      </div>
   );
};

export default Shop;
