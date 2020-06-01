import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import imgReview from '../../images/giphy.gif';
const Review = () => {
    const [cart, setCart] = useState([]);
    const [] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder()
    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        
        const cartProducts = productKeys.map(keys => {
            const product = fakeData.find(pd => pd.key === keys);
            product.quantity = saveCart[keys]
            return product;
        })
        setCart(cartProducts);
    }, []);
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={imgReview} alt=""/>
    }
    return (
        <div className = "shop-remove-container">
            <div className = "product-container">
                {
                    cart.map(pd => <ReviewItem 
                        removeProduct = {removeProduct}
                        key = {pd.key}
                        product = {pd}
                    ></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}>
                    <button className = 'main-btn' onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;