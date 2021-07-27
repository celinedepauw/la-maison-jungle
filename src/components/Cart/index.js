import './cart.scss';

const Cart = () => {
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;

    return(
        <div className="cart">
            <h2 className="cart-title">Panier</h2>
            <ul className="cart-list">
                <li className="cart-list-item">Monstera : {monsteraPrice}€</li>
                <li className="cart-list-item">Lierre : {ivyPrice}€</li>
                <li className="cart-list-item">Fleurs : {flowerPrice}€</li>
            </ul>
            <div className="cart-total">
                Total : {monsteraPrice + ivyPrice + flowerPrice }€
            </div>
      </div>
    )
}

export default Cart;