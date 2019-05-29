import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
  //   console.log('Navbar starts rendering');
  //   console.log('state is', this.state, this);
    // const { title, color, icon } = this.props
    return (
      <div className={`ui inverted menu blue`}>
        <Link
          className='item'
          to="/"
        >
          <h2 className="ui header">
            <i className={`sound icon`}></i>
            <div className="content">
              Home
            </div>
          </h2>
        </Link>
        <div className="item">
          <Link to="/login">
            Login
          </Link>
        </div>
        <div className="item">
          <Link to="/playlists">
            Playlists
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
