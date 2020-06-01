import React from 'react';
import style from './ReviewItem.css'
const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity, key, price,img} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '15px',
        marginLeft : '200px'
    };
    return (
        <div style = {reviewItemStyle} className = "review-item">

            <div>
                <img src={img} alt=""/>
            </div>
            <h4 className = "product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
    <p><small>$ {price}</small></p>
            <br/>
            <button
                 className = "main-btn" 
                 onClick = { () => props.removeProduct(key)}
            
            >Remove</button>
        </div>
    );
};

export default ReviewItem;