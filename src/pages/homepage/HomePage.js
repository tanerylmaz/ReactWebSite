import React from 'react'

function HomePage() {
    return (
        <div className='pages container' id='homePage'>
            <p>I Am Taner YILMAZ</p>
            <h1>Developer</h1>
            <div className='homePageItemContainer'>
                <div className='homePageItem'>
                    <p>Türkiye</p>
                    <span>İstanbul</span>
                </div>
                <div className='homePageItem'>
                    <p>Türkiye</p>
                    <span>Ankara</span>
                </div>
                <div className='homePageItem'>
                    <p>Türkiye</p>
                    <span>Zonguldak</span>
                </div>
            </div>
        </div>
    )
}

export default HomePage;