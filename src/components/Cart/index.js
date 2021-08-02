import { useState, useEffect } from 'react';

import './cart.scss';

const Cart = ({cart, updateCart}) => {
    
    const [isOpen, setIsOpen] = useState(true);
	const items = Object.keys(cart);
    const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

	useEffect(() => {
		document.title = `LMJ : ${total}€ d'achats`
	}, [total]);

    return isOpen ? (
        <div className="cart">
            <button
				className='cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            {cart.length > 0 ? (
				<div>
					<h2 className="cart-title">Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3 className="cart-total">Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
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