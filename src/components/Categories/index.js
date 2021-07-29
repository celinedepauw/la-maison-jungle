import './categories.scss';

const Categories = ({ plantList }) => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
    )
    return(
        <div className="categories">
            <select className="categories-menu">
                {categories.map((category) => (
                    <option key ={category} className="categories-choice">{category}</option>
                ))}
            </select>
            <button className="categories-reinitialize-button">Réinitialiser</button>
        </div>
    )
}

export default Categories;
