import React from 'react'

import '../less/LeaderboardView.less'
import BackButton from './BackButton.jsx'

class LeaderboardView extends React.Component {

  render() {
    const tableRows = [
        {
            rank:1, 
            name:'avi', 
            exp:1337,
        },
        {
            rank:2, 
            name:'jordan', 
            exp:420,
        },
        {
            rank:3, 
            name:'caroline', 
            exp:419,
        },
    ].map(function({rank, name, exp}, i) {

        var stripeStyle = 'light';

        if (i%2==0) {
            stripeStyle = 'dark';
        } else {
            stripeStyle = 'light';
        }

        return (
            <tr className={`stripe-${stripeStyle}`}>
                <td className='leaderboard-rank'>{rank}</td>
                <td className='leaderboard-name'>{name}</td>
                <td className='leaderboard-exp'>{exp}</td>
            </tr>
        )
    })

    return (
      <div>
          <BackButton onClick={this.props.setHomeView}/>
          <div className='leaderboard-container'>
            <div className='leaderboard-title'>Leaderboard</div>
            <div className='table-container'>
                <table>
                    <tr className='title-row'>
                        <td className='title-rank'>rank</td>
                        <td className='title-name'>name</td>
                        <td className='title-exp'>exp</td>
                    </tr>
                    <tbody className='leaderboard-data'>
                        {tableRows}
                    </tbody>
                </table>
            </div>
          </div>
      </div>
    )
  }

}

export default LeaderboardView
