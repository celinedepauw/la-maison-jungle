import {useState} from 'react';

import Categories from '../Categories';
import PlantItem from '../PlantItem';

import { plantList } from '../../datas/plantList';

import './shoppingList.scss';


const ShoppingList = ({ cart, updateCart }) => {

    const [activeCategory, setActiveCategory] = useState('');
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return(
        <div className="shoppingList">
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className="shoppingList-plants">
            {plantList.map(({id, name, cover, water, light, price, category}) => 
            !activeCategory || activeCategory === category ? (
                <div key={id}>
                    <PlantItem
                        key={id}
                        id={id}
                        name={name}
                        cover={cover}
                        water={water}
                        light={light}
                        price={price}
                    />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
                </div>
            ) : null
            )}
            </ul>
        </div>
        
    )
}

export default ShoppingList;