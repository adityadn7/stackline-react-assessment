import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import ProductInfo from "./components/Product/ProductInfo";
import SalesDataTable from "./components/Table/SalesDataTable";
import { Product } from "./types";

const App: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://api.jsonbin.io/v3/b/669671a9ad19ca34f8887642'; // publicly accessible URL
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                const data = responseData.record; // Access the 'record' array
                if (data && Array.isArray(data) && data.length > 0) {
                    setProduct(data[0]); // Assuming there's only one product, set the first item
                } else {
                    throw new Error('Product data not found in JSON');
                }
            } catch (error) {
                setProduct(null); // Set product state to null or handle error state
            }
        };

        fetchData();
    }, []);



  return (
      <div className="App">
          <Header />
          <ProductInfo product={product} />
          <SalesDataTable product={product} />
      </div>
  );
};

export default App;
