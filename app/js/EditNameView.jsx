import React from 'react'
import ReactDOM from 'react-dom'

import BackButton from './BackButton.jsx'
import EnterPlayerNumView from './EnterPlayerNumView.jsx'

import '../less/EditNameView.less'

class EditNameView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerNum: null,
            playerName: 'ButtWizard420',
        }
    }

    setName() {
        const inputNode = ReactDOM.findDOMNode(this.refs.input)
        if (inputNode.value!='')
            this.setState({playerName: inputNode.value})
    }

    render() {
        if (this.state.playerNum == null) {
            return <EnterPlayerNumView
                onNumber={playerNum => this.setState({playerNum})} 
                setHomeView={this.props.setHomeView}
            />
        } 
        return (
            <div>
            <BackButton onClick={this.props.setHomeView}/>
                <div className='edit-container'> 
                    
                    <div className='title'>Edit Player Name</div> 
                    <div className='names-container'>
                        <div className='name-title'>Current Name</div>
                        <div className='name'>{this.state.playerName}</div>
                        <div className='name-title'>New Name</div>
                        <input type='text' ref='input' maxLength='10' keyboardType='numeric'/>
                    </div>
                    <div className='button' onClick={this.setName.bind(this)}>Done</div>
                </div>
            </div>
        )
    }
}

export default EditNameView
