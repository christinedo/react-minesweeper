import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  render() {
    let rows = this.props.board.grid.map((row, idx) => (
      <div key={idx} className='row'>
        {row.map((tile, i) => (
          <Tile key={i} tile={tile} update={this.props.update} />
        ))}
      </div>
    ));
    return <div>{rows}</div>;
  }
}

export default Board;
