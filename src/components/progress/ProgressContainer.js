import React from 'react'
import './Progress.css'

function ProgressContainer(props) {
    return (
        <div id='progress' className='container'>
            {props.children}
        </div>
    )
}

export default ProgressContainer;