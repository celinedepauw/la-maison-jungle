import './plantItem.scss';

import CareScale from '../CareScale';

const PlantItem = ({ id, name, cover, water, light, price }) => {

    const handleClick = (plantName) => {
        alert(`Vous souhaitez acheter 1 ${plantName} ? Très bon choix !`);
    }

    return(
        <li key={id} className="plantItem" onClick={() => handleClick(name)}>
            <img className = "plantItem-cover" src={cover} alt={`${name} cover`} />
            <span className='plantItem-price'>{price}€</span>
            {name}
            <div className="plantItem-scales">
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} /> 
            </div>
           
        </li>
    )
}

export default PlantItem;