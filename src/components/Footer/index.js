import {useState} from 'react';

import './footer.scss';

const Footer = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert("Attention, ceci n'est pas une adresse mail valide, elle ne contient pas de @");
        }
    }

    return(
        <footer className="footer">
            <div className="footer-element">
                Pour les passionnés de plantes
            </div>
            <div className="footer-element">Laissez-nous votre email :</div>
            <input
                placeholder="Saisissez votre adresse mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer;