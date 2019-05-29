import React from "react"
import { Dropdown, Button } from 'semantic-ui-react'

class AddToPlaylist extends React.Component {

  render() {
    console.log("ATP", this.props);
    if (this.props.inPlaylist) {
      return (
        <Button content='Remove'
          onClick={()=>this.props.handleClick(this.props.card.id)}
          />
      )
    } else if (!this.props.inPlaylist) {
      return(
        <Dropdown text='Add to Playlist'>
          <Dropdown.Menu >
            {this.props.playlists.map(playlist => {
              return <Dropdown.Item
              key = {playlist.id}
              text={playlist.name}
              onClick={()=>this.props.setPlaylist(playlist.id)}
            />})
            }
          </Dropdown.Menu>
        </Dropdown>
      )
    }
  }
}


export default AddToPlaylist
