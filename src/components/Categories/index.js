import './categories.scss';

const Categories = ({ categories, activeCategory, setActiveCategory }) => {

    return(
        <div className="categories">
            <select
                className="categories-menu"
                value={activeCategory}
                onChange = {(e) => setActiveCategory(e.target.value)}
            >
                {categories.map((category) => (
                    <option key ={category} className="categories-choice">{category}</option>
                ))}
            </select>
            <button
                className="categories-reinitialize-button"
                onClick={() => setActiveCategory('')}
            >
                Réinitialiser
            </button>
        </div>
    )
}

export default Categories;
