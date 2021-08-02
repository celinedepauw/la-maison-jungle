import { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import Cart from '../components/Cart';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';

import '../App.scss';

const App = () => {
	const savedCart = localStorage.getItem('cart');
  	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	  }, [cart]);
	return (
		<div className="app">
			<Banner />
			<div className="app-contain">
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
	)
}

export default App;
