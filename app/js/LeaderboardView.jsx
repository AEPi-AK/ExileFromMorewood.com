import React from 'react'

import '../less/LeaderboardView.less'
import BackButton from './BackButton.jsx'

class LeaderboardView extends React.Component {

  render() {
    return (
      <div className='container'>Leaderboard
        <BackButton onClick={this.props.setHomeView}/>
      </div>
    )
  }

}

export default LeaderboardView
