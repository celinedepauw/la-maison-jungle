import { useState } from 'react';

import Banner from '../components/Banner';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';

import {plantList} from '../datas/plantList';

import '../App.scss';

const App = () => {
  const [cart, updateCart] = useState([]);
	return (
		<div className="app">
			<Banner />
			<div className="app-contain">
				<Cart cart={cart} updateCart={updateCart} />
        <Categories plantList={plantList}/>
				<ShoppingList cart={cart} updateCart={updateCart} plantList={plantList}/>
			</div>
			<Footer />
		</div>
	)
}

export default App;
