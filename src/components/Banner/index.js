import './banner.scss';

import logo from '../../assets/logo.png';

const Banner = () => {
    return(
        <div className="banner">
            <img src={logo} alt="la maison jungle" className="banner-logo" />
            <h1 className="banner-title">La maison jungle</h1>
        </div>
    
    )
}

export default Banner;