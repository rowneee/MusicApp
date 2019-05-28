import React from 'react';
import { Button, Card, Image, Dropdown } from 'semantic-ui-react'

class SongCard extends React.Component{

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }


  render() {
    console.log('rendering', this.props);
    if (this.state.details === false) {
      return (
    <div className="ui column" >
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
      <Card>
         <Card.Content className="cardBack">
           <Image floated='right' size='mini' src={this.props.card.img_url} />
           <Card.Header>{this.props.card.name}</Card.Header>
           <Card.Meta>{this.props.card.artist}</Card.Meta>
           <Card.Description>
             {this.props.card.album}
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
            <Button color="red" onClick={() =>this.props.handleClick(this.props.card.id)} >
               Add To Playlist
            </Button>
            <Dropdown text='Add to Playlist'>
              <Dropdown.Menu>

                <Dropdown.Item text='hi' />
              </Dropdown.Menu>
            </Dropdown>
         </Card.Content>
       </Card>
      )
    }
  }
}

export default SongCard
