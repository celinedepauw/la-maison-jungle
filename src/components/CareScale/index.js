import './careScale.scss';

import sun from '../../assets/sun.svg';
import water from '../../assets/water.svg';

const CareScale = ({ scaleValue, careType }) => {

    const quantityLabel = {
        1:'peu',
        2:'modérément',
        3:'beaucoup'
    }

    const range = [1, 2, 3];

    const scaleType = careType === "light" ? (
        <img src={sun} alt="sun-icon" />
    ) : <img src={water} alt="water-icon" />

    const handleClick = (value) => {
        alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? "de lumière" : "d'arrosage"}`);
    }

    return(
        <div className="careScale" onClick={() => handleClick(scaleValue)}>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? (
                <span key={rangeElem.toString()}>{scaleType}</span>
                 ) : null
            )}
        </div>
    )
}

export default CareScale;