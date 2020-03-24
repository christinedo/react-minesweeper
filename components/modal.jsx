import React from 'react';

class Modal extends React.Component {
  render() {
    const showHideClass = this.props.show ? 'modal' : 'modal hide';
    return (
      <div id='myModal' className={showHideClass}>
        <div className='modal-content'>
          <p>You {this.props.status}!</p>
          <button onClick={this.props.handleClick}>Play Again</button>
        </div>
      </div>
    );
  }
}

export default Modal;
