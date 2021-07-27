import { useState } from 'react';

import './cart.scss';

const Cart = () => {
    const monsteraPrice = 8;
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className="cart">
            <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2 className="cart-title">Mon panier</h2>
            <div className="cart-list">
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3 className="cart-total">
                Total : {monsteraPrice * cart}€
            </h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
      </div>
    ) : (
        <div className="cart-closed">
            <button
                className="cart-toggle-button"
                onClick={() => setIsOpen(true)}>
                    Ouvrir le panier
            </button>
        </div>
       
    )
}

export default Cart;