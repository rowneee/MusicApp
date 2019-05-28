import React from 'react'
import SongCard from '../components/SongCard'

class Playlist extends React.Component {

  handleClick = songId => {
    this.props.handleRemove(songId)
  }

  render() {
    console.log("All Songs Props", this.props)
    return (
      <div className="ui segment blue">
        <div className="ui five column grid">
          <div className="row card-row">
          {this.props.inPlaylist.map(card => {
            return <SongCard id={card.id}
            card={card}
            key={card.id}
            handleClick={this.props.handleClick}/>
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default Playlist
