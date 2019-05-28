import React from 'react'
import SongCard from '../components/SongCard'
import Playlist from './Playlist'

class Playlists extends React.Component {

  handleClick = SongId => {
    this.props.handleRemove(SongId)
  }

  // addToPlaylist = playlistId => {
  //   if (playlist.id === id) {
  //     return {...card, playlist: true}
  //   } else {
  //     return card
  //   }
  // }

  render() {
    console.log("All Songs Props", this.props)
    return (
      <div className="ui segment blue">
        <div className="ui five column grid">
          <div className="row card-row">
            My Playlists
            {this.props.playlists.map(playlist=>{
              return <Playlist playlist={playlist} id={playlist.id}
              key={playlist.id}
              inPlaylist={this.props.inPlaylist}
                />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Playlists
