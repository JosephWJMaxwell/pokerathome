import React, { Component } from 'react';
import { CardGroup, OddsCalculator } from "poker-tools";
import Image from 'next/image'

// class Board extends Component {

//   render() {
//     const player1Cards = CardGroup.fromString("JHJS");
//     const player2Cards = CardGroup.fromString("JDQC");
//     const board = CardGroup.fromString("7S9STS");
//     const board2 = CardGroup.fromString("7S9STDQS3D");
    
//     var result = OddsCalculator.calculateEquity([player1Cards, player2Cards], board);
//     var eq1 = result.equities[0].getEquity();
//     var eq2 = result.equities[1].getEquity();

//     result = OddsCalculator.calculateWinner([player1Cards, player2Cards], board);
//     const winner = OddsCalculator.calculateWinner([player1Cards, player2Cards], board)

//     console.log("Player #1 -", player1Cards, " - ", eq1);
//     console.log("Player #2 -", player2Cards, " - ", eq2);
//     console.log(winner);

//   }

// }

// export default Board;
export default function Board(){


  const player1Cards = CardGroup.fromString("JhJs");
  const player2Cards = CardGroup.fromString("JdQc");
  const board = CardGroup.fromString("7s9sTs");
  const board2 = CardGroup.fromString("7s9sTdQs3d");
   
  const result = OddsCalculator.calculateEquity([player1Cards, player2Cards], board);
   
  console.log(`Player #1 - ${player1Cards} - ${result.equities[0].getEquity()}%`);
  console.log(`Player #2 - ${player2Cards} - ${result.equities[1].getEquity()}%`);
  console.log(`Tie - ${player2Cards} - ${result.equities[1].getTiePercentage()}%`);
   
  const result2 = OddsCalculator.calculateWinner([player1Cards, player2Cards], board);
   
  console.log(result2);
  return (
    <div>
        <Image src="/cards/2C.png" layout="intrinsic" width="100" height="100"/>
    </div>
  )
}