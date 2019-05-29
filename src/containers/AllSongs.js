import React from 'react'
import SongCard from '../components/SongCard'
import { Container } from 'semantic-ui-react'

class AllSongs extends React.Component {

  handleClick = songId => {
    this.props.onChosenCard(songId)
  }

  render() {
    console.log("All Songs Props", this.props)
    return (
      <div className="ui container">
        <div className="ui five column grid">
          <div className="row card-row">
            {this.props.cards.map(card => {
              return <SongCard
                playlist={this.props.playlists}
                card={card}
                key={card.id}
                id={card.id}
                handleClick={this.handleClick}
                />
            })}
          </div>
        </div>
      </div>
    )
  }
}



export default AllSongs
