import React from 'react'
import SearchBar from './SearchBar'
import MySongs from './MySongs'
import AllSongs from './AllSongs'

class MusicPage extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <MySongs />
        <AllSongs />
      </div>
    )
  }
}



export default MusicPage
