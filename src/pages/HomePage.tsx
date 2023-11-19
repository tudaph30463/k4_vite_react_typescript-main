import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { Header } from "../compoments/elements/Header";
import { Footer } from "../compoments/elements/Footer";
import { Main } from "../compoments/elements/Main";
const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProductList(data);
  } catch (error) {
    console.log(error);
  }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header/>
      <div className="flex flex-wrap justify-center gap-7">
      {productList.map((product, index) => (
        <Main key={index} product={product} />
          
      ))}
    </div>
    <Footer/>
    </div>
    
  );
};

export default HomePage;
