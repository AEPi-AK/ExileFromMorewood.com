import React from 'react'

import '../less/HomeView.less'

class HomeView extends React.Component {

  render() {
    const buttons = [
        {title: 'View Leaderboard', icon: 'trophy.svg', click:1},
        {title: 'View Character', icon: 'character.svg', click:2},
        {title: 'Edit Player Name', icon: 'edit.svg', click:3},
        // {title: 'Get Help', icon: 'help.svg', click:0},
    ].map(({title, icon, click}, i) => (
        <div className='button' onClick={this.props.setView.bind(this, click)} key={i}>
            <img src={`static/img/${icon}`}/>
            {title}
        </div>
    ))

    if (window.innerWidth>=1024) {
        console.log(`width is ${screen.width}`);
        return (
            <div className='laptop-display'>
                <div className='laptop-logo'>
                    <img src='static/img/dnd-logo-full.png'/>
                </div>
                <div className='laptop-text'> Please view our website on your 
                smartphone or tablet. </div>
            </div>
        )
    }

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
