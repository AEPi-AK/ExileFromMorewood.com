import React from 'react'

import '../less/HomeView.less'

class HomeView extends React.Component {

  render() {
    const buttons = [
        {title: 'View Leaderboard', icon: 'trophy.svg'},
        {title: 'View Character', icon: 'character.svg'},
        {title: 'Edit Player Name', icon: 'edit.svg'},
        {title: 'Get Help', icon: 'help.svg'},
    ].map(({title, icon}, i) => (
        <div className='button' key={i}>
            <img src={`static/img/${icon}`}/>
            {title}
        </div>
    ))

    return (
      <div className='container'>
        <div className='logo'><img src='static/img/dnd-logo-full.png'/></div>
        {buttons}
        <div className='copyright'>
            <div className='copyright-title'>&copy; 2016</div>
            <div className='copyright-subtitle'>all your booth are belong to us</div>
        </div>
      </div>
    )
  }
}

export default HomeView
