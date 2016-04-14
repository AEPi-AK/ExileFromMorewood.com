import React from 'react'

import '../less/Base.less'

class BackButton extends React.Component {

    render() {
        if (this.props.dragonSlayer) {
            return (
                <div className='back-button' onClick={this.props.onClick}>
                    <img src='./static/img/back-red.svg'/> 
                    <div className='back-text'>back</div>
                </div>
            )
        }
        return (
            <div className='back-button' onClick={this.props.onClick}>
                <img src='./static/img/back.svg'/> 
                <div className='back-text'>back</div>
            </div>
        )
    }
}

export default BackButton
