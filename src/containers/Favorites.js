import React from 'react'
import SongCard from '../components/SongCard'

class Favorites extends React.Component {

  handleClick = id => {
    this.props.handleRemove(id)
  }

  render() {
    console.log("All Songs Props", this.props)
    return (
      <div className="ui segment blue">
        <div className="ui five column grid">
          <div className="row card-row">
            Favorites
            {this.props.inFavorites.map((card, i) => {
              return <SongCard id={card.id} card={card} key={card.id} handleClick={this.handleClick}/>
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Favorites
