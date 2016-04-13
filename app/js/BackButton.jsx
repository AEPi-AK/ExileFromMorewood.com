import React from 'react'

import '../less/BackButton.less'

class BackButton extends React.Component {

    render() {
        return (
            <div className='back-button-container' onClick={this.props.onClick}> 
                Back
            </div>
        )
    }
}

export default BackButton
