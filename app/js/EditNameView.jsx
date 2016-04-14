import React from 'react'
import ReactDOM from 'react-dom'

import BackButton from './BackButton.jsx'
import EnterPlayerNumView from './EnterPlayerNumView.jsx'
import {updateCharacter, calculateLevel, getCharacter, RACES, MAX_LEVEL} from './Game.jsx'

import '../less/EditNameView.less'

class EditNameView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerNum: null,
            playerName: null,
            character: null,
        }
    }

    async onNumberRecieved(playerNum) {
        this.setState({playerNum})

        const characterFromServer = await getCharacter(playerNum)
        if (characterFromServer != null) {
            this.setState({character: characterFromServer})
        }

        this.setState({playerName: this.state.character.name})
        if (this.state.character.name == '') {
            this.setState({playerName: `Player ${playerNum}`})
        }
    }

    async setName() {
        const inputNode = ReactDOM.findDOMNode(this.refs.input)

        if (inputNode.value!='') {
            this.setState({playerName: inputNode.value})

            let character = this.state.character
            character.name = inputNode.value
            
            const characterFromServer = await updateCharacter(character)
            console.log(character)
            console.log(characterFromServer) 
            this.setState({character: characterFromServer})
        }
    }

    render() {
        if (this.state.character == null) {
            return <EnterPlayerNumView
                onNumber={playerNum => this.onNumberRecieved(playerNum)}
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
