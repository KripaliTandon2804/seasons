import React from 'react'

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className = "ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading'  
    /**
     * If we forget to add message props in the index.js file
     * This will print the default message
     */
}

export default Loader;
