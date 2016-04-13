import React from 'react'

import EnterPlayerNumView from './EnterPlayerNumView.jsx'

import '../less/EditNameView.less'

class EditNameView extends React.Component {

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
            <div className='container'>Edit Name 
            Hallo Player Number {this.state.playerNum}
            </div>
        )
    }


}

export default EditNameView
