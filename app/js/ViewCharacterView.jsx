import React from 'react'

import { calculateLevel, getCharacter, RACES} from './Game.jsx'
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
        const tableRows = [
            {
                title:'Strength', 
                val:10,
            },
            {
                title:'Wisdom', 
                val:15,
            },
            {
                title:'Dexterity', 
                val:20
            },
            {
                title:'Exp Points', 
                val:13,
            },
        ].map(({title, val}, i) => (
            <tr key={i}>
                <th>{title}</th>
                <td>{val}</td>
            </tr>
        ))


        if (this.state.playerNum == null) {
            return <EnterPlayerNumView
                onNumber={playerNum => this.onNumberRecieved(playerNum)} 
                setHomeView={this.props.setHomeView}
            />
        } 

        return (
            <div>
                <BackButton onClick={this.props.setHomeView}/>
                <div className='view-character-container'> 
                    <div className='title'>Your Character</div>
                    <div className='character-card'>
                        <div className='character-type'>Dickbutt</div>
                        <img src='static/img/dickbutt.jpg'/>
                        <div className='level-text'>Level 4 of 20</div>
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
