import React from "react";
import img1 from '../../../Images/1.jpg';
import img2 from '../../../Images/2.jpg';
import img3 from '../../../Images/3.jpg';
import img4 from '../../../Images/4.jpg';
import PopularProduct from "./PopularProduct";
import './PopularProducts.css';

const PopularProducts = () => {
    const popularProducts = [
        {
            id: 1,
            name: "Puma Ladies Wear",
            price: 30,
            img: img1
        },
        {
            id: 2,
            name: "Nike Easy Wear",
            price: 95,
            img: img2
        },
        {
            id: 3,
            name: "Bata Stylish Wear",
            price: 55,
            img: img3
        },
        {
            id: 4,
            name: "Nike Show",
            price: 49,
            img: img4
        },

    ]
  return (
    <div className="mb-20">
      <h2 className="lg:text-3xl sm:text-2xl text-center mt-20 text-primary popular-product-heading uppercase font-bold">Popular Products</h2>
      <h1 className="text-center xs:text-xs lg:text-xl uppercase mt-3">We have the best quality products.</h1>
      <div className="popular-products">
          {
              popularProducts.map(product => <PopularProduct key={product.id} product={product}></PopularProduct>)
          }
      </div>
    </div>
  );
};

export default PopularProducts;
