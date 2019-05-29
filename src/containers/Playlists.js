import React from 'react'
import SongCard from '../components/SongCard'
import Playlist from './Playlist'
import { Form, Header } from 'semantic-ui-react'

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
        <div className="ui segment black music-page">
          <Header as='h1' color='blue' className="music-page">
            My Playlists
          </Header>
          <div style={{display: 'flex', justifyContent: 'center'}} className="form">
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Group>
                <Form.Input placeholder='New Playlist' name='name'/>
                <Form.Button content='Add ' />
              </Form.Group>
            </Form>
          </div>
          <div className="ui five column grid music-page">
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
