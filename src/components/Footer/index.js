import {useState} from 'react';

import QuestionForm from '../QuestionForm';

import './footer.scss';

const Footer = () => {

    const [inputValue, setInputValue] = useState("");

    return(
        <footer className="footer">
            <div className="footer-title">
                Pour les passionnés de plantes
            </div>
            <div className="footer-get-email">Laissez-nous votre email :
            <QuestionForm inputValue={inputValue} setInputValue={setInputValue}/>
            </div>
        </footer>
    )
}

export default Footer;