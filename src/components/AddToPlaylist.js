import React from "react"
import { Dropdown } from 'semantic-ui-react'

class AddToPlaylist extends React.Component {

  handleReload = () => {
    fetch('http://localhost:3000/api/playlist')
    .then(r => r.json())
    .then(data => console.log("yo", data))
  }

  render() {
    return(
      <Dropdown text='Add to Playlist'>
        <Dropdown.Menu >
          {this.props.playlists.map(playlist => {
            return <Dropdown.Item
            text={playlist.name}
            onClick={()=>this.props.setPlaylist(playlist.id)}
          />})
          }

        </Dropdown.Menu>
      </Dropdown>
    )
  }
}


export default AddToPlaylist
