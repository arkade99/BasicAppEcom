import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchDataProducts } from "./FetchData";

const Home = () => {
  const [allProducts, setAllProducts] = useState(null);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("Current_User"));
  useEffect(() => {
    if (token == null) {
      alert("Please Log in"), navigate("/login");
    } else {
      const getProductData = async () => {
        try {
          const result = await FetchDataProducts();
          console.log("allProductsresult", result);
          setAllProducts(result);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      };
      getProductData();
    }
  }, []);

  return (
    <>
      <div className="main-page">
        <h2>Wellcome</h2>
        <div>
          {allProducts &&
            allProducts.map((product) => (
              <ul key={product.id}>
                <li>{product.name}</li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
