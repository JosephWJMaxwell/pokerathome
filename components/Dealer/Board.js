import React, { Component } from 'react';
import { CardGroup, OddsCalculator } from "poker-tools";
import Image from 'next/image'
import {shuffleCards} from '../../helpers/constants/shuffleCards'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import {store, useLocalState} from 'state-pool';



const board = [];
store.setState("board", board);
deck = shuffleCards();
store.setState("deck", deck);
store.setState("count", 0);

class Board extends Component{
  
  constructor(props){
    const [board, updateboard, setboard] = useGlobalState("board");
    const [deck, updatedeck, setdeck] = useGlobalState("deck");
    super(props)

    for (let x = 0; x < 3; x++){
      let card = `/cards/${deck[x].val}${deck[x].suit}.png`;
      updateboard(b=>{
        b.push.push(card);
      })
    }
  }

  addCard(){
    console.log(this.board)
    let count = this.board.length;
    if(count != 5){
      count += 1;
      this.board.push(this.deck[count])
    }
    console.log(this.board)
  }

  render(){
    let button;
    if (this.board.length < 5) {
      button = <Button variant="secondary" onClick={this.addCard}>Next card</Button>;
    } else {
      button = <Button variant="secondary">New Board</Button>;
    }

    return (
      <div>
        <Image src={this.board[0]} layout="intrinsic" width="100" height="100"/>
        <Image src={this.board[1]} layout="intrinsic" width="100" height="100"/>
        <Image src={this.board[2]} layout="intrinsic" width="100" height="100"/>
        
        {button}
      </div>
    )
  }
}


export default Board;