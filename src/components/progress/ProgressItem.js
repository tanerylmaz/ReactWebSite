import React from 'react'

function ProgressItem(params) {
    return (
        <div className='progress'>
            <span className='title timer' data-from={params.from} data-to={params.to} data-speed={params.speed}>{params.to}</span>
            <div className='overlay'></div>
            <div className='left'></div>
            <div className='right'></div>
        </div>
    )
}

export default ProgressItem;