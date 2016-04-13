import React from 'react'
import ReactDOM from 'react-dom'

import EnterPlayerNumView from './EnterPlayerNumView.jsx'
import '../less/EditNameView.less'

class EditNameView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerNum: null,
            playerName: 'lol some stuff idk lol',
        }
    }

    setName() {
        const inputNode = ReactDOM.findDOMNode(this.refs.input)
        this.setState({playerName: inputNode.value})
    }

    render() {
        if (this.state.playerNum == null) {
            return <EnterPlayerNumView
                onNumber={playerNum => this.setState({playerNum})}
            />
        } 
        return (
            <div className='container'> 
                <div className='title'>Edit Name</div> 
                <div className='names-container'>
                    <div className='name-title'>Current Name</div>
                    <div className='name'>{this.state.playerName}</div>
                    <div className='name-title'>New Name</div>
                    <input type='text' ref='input' keyboardType='numeric'/>
                    <div className='button' onClick={this.setName.bind(this)}>Finish</div>
                </div>
            </div>
        )
    }
}

export default EditNameView
