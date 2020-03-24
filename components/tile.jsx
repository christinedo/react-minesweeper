import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.update(this.props.tile, e.altKey);
  }

  render() {
    let value = '';
    if (this.props.tile.bombed && this.props.tile.explored) {
      value = '💣';
    } else if (this.props.tile.explored) {
      let bombCount = this.props.tile.adjacentBombCount();
      if (bombCount > 0) {
        value = `${bombCount}`;
      }
    } else if (this.props.tile.flagged) {
      value = '🚩';
    }

    return (
      <div
        className={
          this.props.tile.explored ? 'tile explored' : 'tile unexplored'
        }
        onClick={this.handleClick}
      >
        {value}
      </div>
    );
  }
}

export default Tile;
