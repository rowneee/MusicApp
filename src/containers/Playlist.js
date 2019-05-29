import React from 'react'
import SongCard from '../components/SongCard'
import { Container, Header } from 'semantic-ui-react'

class Playlist extends React.Component {

  handleClick = songId => {
    this.props.handleRemove(songId)
  }

  render() {
    console.log("All Songs Props", this.props)
    return (
      <Container>
        <div className="ui segment blue">
          <Header as='h3' color='red'>
            {this.props.playlist.name}
          </Header>
          <div className="ui five column grid">
            <div className="row card-row">
            {this.props.playlist.songs.map(card => {
              return <SongCard
              playlistid={this.props.playlist.id}
              inPlaylist={this.props.inPlaylist}
              id={card.id}
              card={card}
              key={card.id}
              handleClick={this.props.handleClick}/>
            })}
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Playlist
