import React from 'react'

function PageTitle(params) {
    return (
        <div className='pageTitle'>
            <h2>{params.title}</h2>
            <p className='pageTitleBorder'>
                <span></span>
            </p>
        </div>
    )
}

export default PageTitle;