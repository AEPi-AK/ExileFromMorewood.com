import React from 'react'

import '../less/LeaderboardView.less'
import BackButton from './BackButton.jsx'

import {calculateLevel, getLeaderboard, getCharacter, RACES, MAX_LEVEL, DRAGONSLAYER_LEVEL} from './Game.jsx'

class LeaderboardView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            leaderboard: null,
        }
    }

    async componentDidMount() {
        const leaderboardFromServer = await getLeaderboard()
        if (leaderboardFromServer!=null)
            this.setState({leaderboard: leaderboardFromServer})
        console.log(leaderboardFromServer)
    }

    render() {

        if (this.state.leaderboard!=null) {
            const tableRows = this.state.leaderboard.map(function({name, points}, i) {
                var stripeStyle = 'light';
                if (i%2==0) {
                    stripeStyle = 'dark';
                } else {
                    stripeStyle = 'light';
                }

                var dSlayer = false;
                if (calculateLevel(points)>=DRAGONSLAYER_LEVEL) {
                    dSlayer = true;
                }

                return (
                    <tr className={`stripe-${stripeStyle} dslayer-${dSlayer}`} key={i}>
                        <td className='leaderboard-rank'>{i+1} <img src='./static/img/dragon.png'/></td>
                        <td className='leaderboard-name'>{name}</td>
                        <td className='leaderboard-exp'>{points}</td>
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
                                <tbody className='top-table'>
                                    <tr className='title-row'>
                                        <td className='title-rank'>rank</td>
                                        <td className='title-name'>name</td>
                                        <td className='title-exp'>exp</td>
                                    </tr>
                                </tbody>
                                <tbody className='leaderboard-data'>
                                    {tableRows}
                                </tbody>
                        </table>
                    </div>
                  </div>
              </div>
            )
          }
          else {
            return (<div></div>)
          }
    }
}

export default LeaderboardView
