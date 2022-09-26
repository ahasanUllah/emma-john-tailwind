import React from 'react';
import './Product.css';
const Product = (props) => {
   const { product, addToCartHandle } = props;

   const { name, price, img, seller, ratings } = product;
   return (
      <div>
         <div className="card   bg-base-100 shadow-xl relative product-container">
            <figure>
               <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body p-0 text-left">
               <div className="p-6">
                  <h2 className="card-title">{name}</h2>
                  <p>Price: ${price}</p>
                  <div className="mt-12">
                     <p>Manufacturer: {seller}</p>
                     <p>Ratings: {ratings}</p>
                  </div>
               </div>

               <div className="card-actions absolute bottom-0 w-full text-">
                  <button onClick={() => addToCartHandle(product)} className="btn btn-secondary w-full ">
                     Buy Now
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;
