import React, { Component } from 'react';
import { CardGroup, OddsCalculator } from "poker-tools";


class Board extends Component {

  render() {
    const player1Cards = CardGroup.fromString("JHJS");
    const player2Cards = CardGroup.fromString("JDQC");
    const board = CardGroup.fromString("7S9STS");
    const board2 = CardGroup.fromString("7S9STDQS3D");
    
    var result = OddsCalculator.calculateEquity([player1Cards, player2Cards], board);
    var eq1 = result.equities[0].getEquity();
    var eq2 = result.equities[1].getEquity();

    result = OddsCalculator.calculateWinner([player1Cards, player2Cards], board);
    const winner = OddsCalculator.calculateWinner([player1Cards, player2Cards], board)

    console.log("Player #1 -", player1Cards, " - ", eq1);
    console.log("Player #2 -", player2Cards, " - ", eq2);
    console.log(winner);

    return (
        <div>
            {/* <span>Player #1 - {player1Cards} - {result.equities[0].getEquity()}</span> */}
        </div>
    )
  }

}

export default Board;
