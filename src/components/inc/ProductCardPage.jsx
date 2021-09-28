import React from "react";
import "../inc/productcard.css";
import ProductCard from "../inc/ProductCard";
import anne from "../images/card images/anne.jpg";
import asha from "../images/card images/asha.jpg";


function ProductCardPage() {
  return (
    <div>
      <div className="productCard">
        <ProductCard
          image={anne}
          title="KanAnne-Marie"
          description="Anna Maria Jopek (born 14 December 1970) is a Polish vocalist"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={asha}
          title="Asha Bhosle"
          description="Asha Bhosle is an Indian playback singer and entrepreneur"
        />
      </div>
     
    </div>
  );
}

export default ProductCardPage;
