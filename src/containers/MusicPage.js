import React from 'react'
import Playlists from './Playlists'
import AllSongs from './AllSongs'
import { Container, Search } from 'semantic-ui-react'
import { Switch, Route, withRouter } from 'react-router-dom'

class MusicPage extends React.Component {

  state = {
    timesClicked: 0,
    cards: [],
    playlists: [],
    search: ''
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/api/playlists', {
      method: "POST",
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        name: e.target.name.value
      })
    })
    .then(r => r.json())
    .then(playlist => {
      console.log("playlist post", playlist);
      this.setState({playlists: [...this.state.playlists, playlist]})
    })
  }


  componentDidMount() {
    const cardPromise = fetch('http://localhost:3000/api/songs').then(r => r.json())
    const playlistPromise = fetch('http://localhost:3000/api/playlists').then(r => r.json())

    Promise.all([
      cardPromise,
      playlistPromise
    ]).then(([cards, playlists]) => {
      // console.log('here', playlists);
      // const updatedCards = cards.map(card => ({...card, playlist: false}))
      // console.log('and here', updatedCards);
      this.setState({cards: cards, playlists: playlists}, () => {
        console.log(this.state);
      })
    })
  }

  handleChosenCard = (songId, playlistId) => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(card => {
          if (card.id === songId) {
            return {...card, playlist: true}
          } else {
            return card
          }
        })
      }
    })
  }

  handleRemove = (songId, playlistId) => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(card => {
          if (card.id === songId) {
            return {...card, playlist: false}
          } else {
            return card
          }
        })
      }
    })
  }


  render() {
    console.log("Music Page", this.state);
    const inPlaylist = this.state.cards.filter(card => card.playlist)
    const filtered = this.state.cards.filter(card => {
      return card.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return(
      <div className="MusicPage">
      <Switch>
      <Route path="/playlists" render={(props)=> <Playlists {...props}
          cards={this.state.cards}
          inPlaylist={inPlaylist}
          handleRemove={this.handleRemove}
          playlists={this.state.playlists}
          handleSubmit={this.handleSubmit}
          />}
        />
      <Container>
      <Route path="/" render={(props)=> <Search
          onSearchChange={this.handleSearch}
          showNoResults={false}
          placeholder="Search By Song"
          className="searchbar"
          />}
      />
      <Route path="/" render={(props)=>  <AllSongs {...props}
          cards={filtered}
          onChosenCard={this.handleChosenCard}
          playlists={this.state.playlists}
        />}
        />
    </Container>
    </Switch>
      </div>
    )
  }
}

export default MusicPage
