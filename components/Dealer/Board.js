import React from 'react';
import Image from 'next/image'
import {shuffleCards} from '../../helpers/constants/shuffleCards'
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default function (props){

  var deck = shuffleCards();
  const board = [];
  for (let x = 0; x < 5; x++){
    let card = `/cards/${deck[x].val}${deck[x].suit}.png`;
    board.push(card);
  }

  return board.map(o=>{
    return <Col>
        <Image src={o} layout="intrinsic" width="100" height="100"/>
      </Col>
  })
}