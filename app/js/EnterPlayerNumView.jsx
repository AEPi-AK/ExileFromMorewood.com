import React from 'react'
import ReactDOM from 'react-dom'

import BackButton from './BackButton.jsx'

import '../less/EnterPlayerNumView.less'

class EnterPlayerNumView extends React.Component {

    savePlayerNum() {
        const inputNode = ReactDOM.findDOMNode(this.refs.input)
        if (!isNaN(inputNode.value) && (inputNode.value!='')) {
            this.props.onNumber(Number(inputNode.value))
        }
    }

    render() {
        return (
            <div>
                <BackButton onClick={this.props.setHomeView}/>
                <div className='enter-container'>
                    <div className='enter-title'>Enter Player Number</div>
                    <input type='text' ref='input' keyboardType='numeric'/>
                    <div className='button' onClick={this.savePlayerNum.bind(this)}>Done</div>
                </div>
            </div>
        )
    }

}

export default EnterPlayerNumView
