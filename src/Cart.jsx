import raect from 'react'

function Cart(cart , removecart){
    return(
        <ul>
            {cart.map((item) => (
            <li>
                {item.name} - {item.amount}
                <button onClick={() => removecart(item) }>Remove</button>
            </li>
            ))}
        </ul>
    );
}

export default  Cart;