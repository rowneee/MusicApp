import React from 'react';
import AddToPlaylist from "../components/AddToPlaylist"
import { Button, Card, Image } from 'semantic-ui-react'

class SongCard extends React.Component{

  state = {
    details: false,
    // activePlaylist: ''
  }

  setPlaylist = (playlistId) => {
    const API = 'http://localhost:3000/api/song_playlists'
    console.log(playlistId);
    // this.setState({activePlaylist: playlistId})
    //add song to playlist backend
    fetch(API , {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        song_id: this.props.card.id,
        playlist_id: playlistId
      })
    })
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render() {
    console.log(this.props);
    if (this.state.details === false) {
      return (
    <div className="ui column song-card" >
      <Card onClick={this.toggleDetails}>
        <Image src={this.props.card.img_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{this.props.card.name}</Card.Header>
              <Card.Description>
            {this.props.card.artist}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )}
  else if (this.state.details === true) {
    return (
      <Card onClick={this.toggleDetails}>
        <Card.Content className="cardBack">
          <Image floated='right' size='mini' src={this.props.card.img_url} />
          <Card.Header>{this.props.card.name}</Card.Header>
          <Card.Meta>{this.props.card.artist}</Card.Meta>
          <Card.Description>
            {this.props.card.album}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
           <AddToPlaylist
             card={this.props.card}
             inPlaylist={this.props.inPlaylist}
             setPlaylist={this.setPlaylist}
             playlists={this.props.playlist}
             handleClick={this.props.handleClick}
             />
        </Card.Content>
       </Card>
      )
    }
  }
}

export default SongCard
