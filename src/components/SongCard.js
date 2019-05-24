import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

class SongCard extends React.Component{
  render() {
    return (
    <div className="ui column" onClick={()=>this.props.handleClick(this.props.card.id)}
    >
      <Card>
        <Image src={this.props.card.img_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{this.props.card.name}</Card.Header>
              <Card.Description>
            {this.props.card.artist}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
    )
  }
}

export default SongCard
