import React from 'react';
import { CardGroup, OddsCalculator } from "poker-tools";
import Image from 'next/image'
import {shuffleCards} from '../../helpers/constants/shuffleCards'

export default function Board(){

  var deck = shuffleCards();
  const board = [];
  for (let x = 0; x <= 3; x++){
    let card = `/cards/${deck[x].val}${deck[x].suit}.png`;
    board.push(card);
  }

  return (
    <div>
      <Image src={board[0]} layout="intrinsic" width="100" height="100"/>
      <Image src={board[1]} layout="intrinsic" width="100" height="100"/>
      <Image src={board[2]} layout="intrinsic" width="100" height="100"/>
  
      <button></button>
    </div>
  )
}