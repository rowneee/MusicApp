import React from 'react'
import SongCard from '../components/SongCard'
import Playlist from './Playlist'
import { Header } from 'semantic-ui-react'

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
    return (
        <div className="ui segment blue">
          <Header as='h1' color='blue'>
            My Playlists
          </Header>
          <div className="ui five column grid">
            <div className="row card-row">
              {this.props.playlists.map(playlist=>{
                return <Playlist
                  playlist={playlist}
                  id={playlist.id}
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
