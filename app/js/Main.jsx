import React from 'react'
import ReactDOM from 'react-dom'

import HomeView from './HomeView.jsx'
import LeaderboardView from './LeaderboardView.jsx'
import ViewCharacterView from './ViewCharacterView.jsx'
import EditNameView from './EditNameView.jsx'
import EnterPlayerNumView from './EnterPlayerNumView.jsx'

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            viewIndex: 0,
        }

        this.views = [
            HomeView,
            LeaderboardView,
            ViewCharacterView,
            EditNameView,
        ].map(component => React.createFactory(component))
    }

    setView(viewIndex) {
        this.setState({viewIndex});
    }

    setHomeView() {
        this.setState({viewIndex: 0,});
    }

    render() {
        const views = this.views.map(view => view({
          setView: this.setView.bind(this),
          setHomeView: this.setHomeView.bind(this),
        }))
        return (
          <div className='view'>
            {views[this.state.viewIndex]}
          </div>
        )
    }

}

ReactDOM.render(<Main/>, document.getElementById('root'))
