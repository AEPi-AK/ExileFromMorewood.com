import React from 'react'

import '../less/Base.less'

class BackButton extends React.Component {

    render() {
        return (
            <div className='back-button' onClick={this.props.onClick}> 
                Back
            </div>
        )
    }
}

export default BackButton
