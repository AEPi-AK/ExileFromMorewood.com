import React from 'react'

import { calculateLevel, getCharacter, RACES, MAX_LEVEL} from './Game.jsx'
import EnterPlayerNumView from './EnterPlayerNumView.jsx'
import BackButton from './BackButton.jsx'

import '../less/ViewCharacterView.less'

class ViewCharacterView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerNum: null,
            character: null,
        }
    }

    async onNumberRecieved(playerNum) {
        this.setState({playerNum})

        const characterFromServer = await getCharacter(playerNum)
        if (characterFromServer != null) {
            this.setState({character: characterFromServer})
        }
        console.log(this.state.character)
    }

    render() {

        if (this.state.character == null) {
            return <EnterPlayerNumView
                onNumber={playerNum => this.onNumberRecieved(playerNum)} 
                setHomeView={this.props.setHomeView}
            />
        } 
        const tableRows = [
            {
                title:'Strength', 
                val:this.state.character.strength,
            },
            {
                title:'Wisdom', 
                val:this.state.character.wisdom,
            },
            {
                title:'Dexterity', 
                val:this.state.character.dexterity,
            },
            {
                title:'Exp Points', 
                val:this.state.character.points,
            },
        ].map(({title, val}, i) => (
            <tr key={i}>
                <th>{title}</th>
                <td>{val}</td>
            </tr>
        ))


        return (
            <div>
                <BackButton onClick={this.props.setHomeView}/>
                <div className='view-character-container'> 
                    <div className='title'>Your Character</div>
                    <div className='character-card'>
                        <div className='character-type'>{this.state.character.race}</div>
                        <img src={`static/img/${this.state.character.race}.png`}/>
                        <div className='level-text'>Level {calculateLevel(this.state.character.points)} of {MAX_LEVEL}</div>
                        <div className='table-container'>
                            <table>
                                <tbody>
                                {tableRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewCharacterView
