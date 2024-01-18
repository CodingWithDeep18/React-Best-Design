import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-page">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="hero-content-p">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="footer-btn">
          <button className="shop-now">Shop Now</button>
          <button className="category-btn">Category</button>
          <div>
            <p>Also Available On</p>
            <img src="public/flipkart.png" className="flipkart-image" />
            <img src="public/amazon.png" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="public/shoe_image.png"
          alt="nike-shoe-image"
          className="sidepageShoe"
        />
      </div>
    </section>
  );
};

export default HeroSection;
