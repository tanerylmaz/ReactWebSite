import React from 'react'

function SocialIcon(params) {
    var iconClass = "bi bi-" + params.icon;
    return (
        <a className='socialIconItem' href={params.link}><i className={iconClass}></i></a>
    )
}

export default SocialIcon;