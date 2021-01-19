import React from 'react';
import Board from './Dealer/Board';
import {
  Container,
  Row
} from 'reactstrap';

export default function (props) {

  return( 
    <Container>
      <Row>
        <div className="py-3">
          <span style={{color: '#999'}}>Hello!</span> {props.user}
        </div>
      </Row>
      <Row>
        <Board/>
      </Row>
    </Container>
  )
}
