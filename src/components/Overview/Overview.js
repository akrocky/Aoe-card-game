import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAllInfo } from '../../context/Context';
import classes from './OverView.module.css';
import Player from './Player/Player';

const Overview = () => {

     const{state}= useAllInfo()
   return (
        <div>
          <h3 className='mx-5'> Player Cards</h3>
         <Container className={classes.overViewContainer} >
         <Row className={classes.overViewRow} >
         

          {
           state?.playerCards?.map(p=><Col lg={4} key={p.id} > <Player  player={p} /> </Col>)   
          }

</Row>


     </Container>
        </div>
    );
};

export default Overview;