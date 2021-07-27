import PlantItem from '../PlantItem';

import './shoppingList.scss';

import {plantList} from '../../datas/plantList';

const ShoppingList = () => {
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
                 <PlantItem
                    key={id}
                    id={id}
                    name={name}
                    cover={cover}
                    water={water}
                    light={light}
                    />
            ))}
            </ul>
        </div>
        
    )
}

export default ShoppingList;