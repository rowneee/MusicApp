import React from 'react'
import SearchBar from './SearchBar'
import Playlists from './Playlists'
import AllSongs from './AllSongs'
import { Search } from 'semantic-ui-react'
import { Route, withRouter } from 'react-router-dom'

class MusicPage extends React.Component {
  state = {
    cards: [],
    playlists: [],
    search: ''
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }

  componentDidMount() {
    const cardPromise = fetch('http://localhost:3000/api/songs').then(r => r.json())
    const playlistPromise = fetch('http://localhost:3000/api/playlists').then(r => r.json())

    Promise.all([
      cardPromise,
      playlistPromise
    ]).then(([cards, playlists]) => {
      console.log('cards', cards);
      console.log('playlists', playlists);
      const updatedCards = cards.map(card => ({...card, playlist: false}))
      this.setState({cards: updatedCards, playlists})
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
    console.log("hi", inPlaylist);
    const filtered = this.state.cards.filter(card => {
      return card.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return(
      <div>
        <Search onSearchChange={this.handleSearch}
        showNoResults={false}
        />
      <Route path="/playlists" render={(props)=> <Playlists {...props}
          cards={this.state.cards}
          inPlaylist={inPlaylist}
          handleRemove={this.handleRemove}
          playlists={this.state.playlists}
          />}
        />
      <Route path="/about" render={(props)=>  <AllSongs {...props}
          cards={filtered}
          onChosenCard={this.handleChosenCard}
          playlists={this.state.playlists}
        />}
        />
      </div>
    )
  }
}

export default MusicPage
