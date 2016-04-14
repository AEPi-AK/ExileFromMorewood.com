import React from 'react'

import '../less/Base.less'

class BackButton extends React.Component {

    render() {
        return (
            <div className='back-button' onClick={this.props.onClick}>
                <img src='./static/img/back.svg'/> 
                <div className='back-text'>back</div>
            </div>
        )
    }
}

export default BackButton
