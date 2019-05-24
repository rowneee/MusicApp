import React from 'react'
import SearchBar from './SearchBar'
import Favorites from './Favorites'
import AllSongs from './AllSongs'
import { Search } from 'semantic-ui-react'

class MusicPage extends React.Component {
  state = {
    cards: [],
    myFavs: [],
    search: ''
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/songs')
    .then(r => r.json())
    .then(cards => {
      const updatedCards = cards.map(card => ({...card, favorites: false}))
      this.setState({cards: updatedCards})
    })
  }

  handleChosenCard = (id) => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(card => {
          if (card.id === id) {
            return {...card, favorites: true}
          } else {
            return card
          }
        })
      }
    })
  }

  handleRemove = (id) => {
    const chosenCards = this.state.cards.filter(card => card.id !== id)
    console.log(chosenCards);
        this.setState({cards: chosenCards})
  }

  render() {
    console.log("Music Page", this.state);
    const inFavorites = this.state.cards.filter(card => card.favorites)
    const filtered = this.state.cards.filter(card => {
      return card.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return(
      <div>
        <Search onSearchChange={this.handleSearch}
        showNoResults={false}
        />
      <Favorites
          cards={this.state.cards}
          inFavorites={inFavorites}
          handleRemove={this.handleRemove}
        />
        <AllSongs
          cards={filtered}
          onChosenCard={this.handleChosenCard}
        />
      </div>
    )
  }
}

export default MusicPage
