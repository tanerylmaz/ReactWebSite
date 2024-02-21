import React from 'react'
import PortfolioItem from './PortfolioItem';
import PageTitle from '../../components/pagetitle/PageTitle';

function Portfolio() {
    return (
        <div id='portfolioPage' className='pages'>
            <PageTitle title="Portfolyo" />
            <div className='container'>
                <div className='row'>
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;