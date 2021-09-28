import React from "react";
import Slider from "../inc/Slider";
import ProductCardPage from "../inc/ProductCardPage";

function Home() {
  return (
    <div>
      <Slider />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Famous singers</h4>
              <p>Find the Best Singers</p>
            </div>
          </div>
        </div>
      </section>
      <ProductCardPage />
    </div>
  );
}

export default Home;
