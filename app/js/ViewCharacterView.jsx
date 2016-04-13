import React from 'react'

import EnterPlayerNumView from './EnterPlayerNumView.jsx'
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
            <div className='container'>View Character
            Hallo Player Number {this.state.playerNum}
            </div>
        )
    }

}

export default ViewCharacterView
