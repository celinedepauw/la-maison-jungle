import { useState } from 'react';

import Banner from '../components/Banner';
import Cart from '../components/Cart';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';

import '../App.scss';

const App = () => {
  const [cart, updateCart] = useState([]);
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
