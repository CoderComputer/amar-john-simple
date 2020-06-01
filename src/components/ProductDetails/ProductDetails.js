import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import style from './ProductDetails.css'

const ProductDetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product)
    return (
        <div className="details">
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetails;