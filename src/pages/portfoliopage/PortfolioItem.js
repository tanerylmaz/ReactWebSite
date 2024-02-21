import React from 'react'

function PortfolioItem(props) {
    return (
        <div className='col-4'>
            <div className='portfolioItem'>
                <div>
                    <p>Portfolio web Sitesi</p>
                    <span>Web uyg</span>
                </div>
                <img src='/img/1.jpg' alt='' />
            </div>
        </div>
    );
}

export default PortfolioItem;