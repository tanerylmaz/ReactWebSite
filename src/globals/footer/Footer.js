import React, { useContext } from 'react'
import SocialIcon from '../../components/followme/SocialIcon';
import AppContext from '../../AppContext';
import HomePage from '../../pages/homepage/HomePage';
function Footer() {
    const contextObject = useContext(AppContext);

    return (
        <div id='footer'>
            <div className='container footerContainer' >
                <span>@ Copyright 2024 - <a onClick={() => {
                    contextObject.pageChanger(<HomePage />);
                    contextObject.pageClick(1);
                }}>Devo by Designesia</a></span>
                <div>
                    <SocialIcon icon="facebook" link="https://www.facebook.com" />
                    <SocialIcon icon="instagram" link="https://www.instagram.com" />
                    <SocialIcon icon="linkedin" link="https://www.linkedin.com" />
                    <SocialIcon icon="twitter" link="https://www.twitter.com" />
                </div>
            </div>
        </div>
    )
}

export default Footer;