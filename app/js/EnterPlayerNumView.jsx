import React from 'react'
import ReactDOM from 'react-dom'

import '../less/EnterPlayerNumView.less'

class EnterPlayerNumView extends React.Component {

    savePlayerNum() {
        const inputNode = ReactDOM.findDOMNode(this.refs.input)
        if (!isNaN(inputNode.value)) {
            this.props.onNumber(Number(inputNode.value))
        }
    }

    render() {
        return (
            <div className='container'>Enter Player Num plx
                <input type='text' ref='input' keyboardType='numeric'/>
                <div className='button' onClick={this.savePlayerNum.bind(this)}>Finish</div>
            </div>
        )
    }

}

export default EnterPlayerNumView
