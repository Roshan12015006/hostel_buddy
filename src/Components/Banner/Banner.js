import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Bicycle">Bicycles</option>
              <option value="Aircooler">Aircooler</option>
              <option value="Laptops">Laptops</option>
              <option value="Matrix">Matrix</option>
              <option value="Daily use products">Daily use products</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Bicycle")} >Bicycle</span>
            <span onClick={()=>setCategory("Aircooler")} >Aircooler</span>
            <span onClick={()=>setCategory("Laptop")} >Laptop</span>
            <span onClick={()=>setCategory("Matrix")} >Matrix</span>
            <span onClick={()=>setCategory("Daily use product")} >Daily use product</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
          </div>
        </div>
        
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
