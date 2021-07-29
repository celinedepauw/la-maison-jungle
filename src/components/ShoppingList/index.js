import PlantItem from '../PlantItem';

import './shoppingList.scss';

import {plantList} from '../../datas/plantList';

const ShoppingList = ({ cart, updateCart }) => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
    )
    return(
        <div className="shoppingList">
            <ul className="shoppingList-categories">
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className="shoppingList-plants">
            {plantList.map(({id, name, cover, water, light}) => (
                <div key={id}>
                    <PlantItem
                    key={id}
                    id={id}
                    name={name}
                    cover={cover}
                    water={water}
                    light={light}
                    />
                <button on Click={() => updateCart(cart + 1)}>Ajouter</button>
                </div>
                 
            ))}
            </ul>
        </div>
        
    )
}

export default ShoppingList;