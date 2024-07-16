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
                const response = await fetch('/stackline_frontend_assessment_data_2021.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if (data && Array.isArray(data) && data.length > 0) {
                    setProduct(data[0]); // There is only one product in the array
                } else {
                    throw new Error('Product data not found in JSON');
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
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