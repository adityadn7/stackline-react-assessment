import React from 'react';
import { Product } from "../../types";

const ProductInfo: React.FC<{ product: Product | null }> = ({ product }) => {
    if (!product) {
        return null;
    }

    return (
        <div className="product-container">
            <div className="product-header">
                <h1 className="product-title">{product.title}</h1>
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-details">
                <h2 className="product-subtitle">{product.subtitle}</h2>
                <div className="product-tags">
                    {product.tags.map((tag, index) => (
                        <span key={index} className="product-tag">
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
