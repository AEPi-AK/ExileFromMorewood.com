import React from 'react'

import EnterPlayerNumView from './EnterPlayerNumView.jsx'
import BackButton from './BackButton.jsx'

import '../less/ViewCharacterView.less'

class ViewCharacterView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerNum: null,
        }
    }

    render() {
        if (this.state.playerNum == null) {
            return <EnterPlayerNumView
                onNumber={playerNum => this.setState({playerNum})}
            />
        } 
        return (
            <div className='container'>
                <BackButton onClick={this.props.setHomeView}/>
                Your Character
                <img src='static/img/dickbutt.jpg'/>
            </div>
        )
    }

}

export default ViewCharacterView
