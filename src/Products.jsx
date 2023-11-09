import React from 'react'
//import App from './App.jsx'
//import ReactDOM from 'react-dom/client'


function Product({product, addcart}){
    
    return(
        <>
            <h3>{product.id}</h3>
            <h3>{product.name}</h3>
            <h3>{product.amount}</h3>
            <button onclick={() => addcart(product)}>Add to Cart</button>
        </>
    );
}

export default Product; 
