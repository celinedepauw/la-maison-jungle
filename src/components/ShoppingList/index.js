import PlantItem from '../PlantItem';

import './shoppingList.scss';


const ShoppingList = ({ cart, updateCart, plantList }) => {

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
            <ul className="shoppingList-plants">
            {plantList.map(({id, name, cover, water, light, price}) => (
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
                 
            ))}
            </ul>
        </div>
        
    )
}

export default ShoppingList;