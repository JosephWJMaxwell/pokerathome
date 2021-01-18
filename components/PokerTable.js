import React, { Component } from 'react';
import Board from './Dealer/Board';

class PokerTable extends Component {

  render() {
    return <div>
        <span>
            <span style={{color: '#999'}}>Hello!</span> {this.props.user}
            <Board/>
        </span>
    </div>
  }

}

export default PokerTable;
