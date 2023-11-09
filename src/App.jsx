import React from 'react'
import Products from './Products.jsx'
import Cart from './Cart.jsx'
import {useState} from 'react'

const product = [{id: 1, name: "Watch" , amount: 1500},
            {id: 2, name: "Snikers" , amount: 2500}]

function App(){
    const [cart, setCart] = useState([])


    const addcart = (product) =>{
        setCart([...cart,product]);
    } 

    const removecart = (product) =>{
        setCart(cart.filter ((item) => item.id !== product.id));
    }

    return (
        <>
        <div>
            <h1>Shopping Cart</h1>
            {product.map((product) => (
          <Products key={product.id} product={product} addcart={addcart} />))}
        </div>
          <Cart cart={cart} removecart={removecart}/>
        
            
        </>
    );
}


   
export default App;