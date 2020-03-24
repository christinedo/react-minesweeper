import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';
import Modal from './modal';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(9, 10),
      show: true
    };

    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGame(tileObject, flagging) {
    if (flagging) {
      tileObject.toggleFlag();
    } else {
      tileObject.explore();
    }

    this.setState({
      board: this.state.board
    });
  }

  resetGame() {
    const newBoard = new Minesweeper.Board(9, 10);
    this.setState({
      board: newBoard
    });
  }

  render() {
    const gameOver = this.state.board.lost() || this.state.board.won();
    let status = this.state.board.lost() ? 'lost' : 'win';
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame} />
        {gameOver && (
          <Modal
            show={this.state.show}
            status={status}
            handleClick={this.resetGame}
          />
        )}
      </div>
    );
  }
}

export default Game;
