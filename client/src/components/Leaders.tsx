import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TeamWeek, LeadersInfo } from '../Interfaces';

type LeadersProps = {
  teamRecords: TeamWeek[];
  leaders: LeadersInfo[];
};

const Leaders = (props: LeadersProps) => {
  return (
    <div>
      <Row className='mt-3 mb-1 ml-1'>
        <Col xs={props.leaders[0].barWidth} id='first-place'>
          <div className='mr-1 text-right'>
            <span className='mr-3'>{props.leaders[0].wins}</span>
            {props.leaders[0].nickname}
          </div>
        </Col>
      </Row>
      <Row className='mt-1 mb-1 ml-1'>
        <Col xs={props.leaders[1].barWidth} id='second-place'>
          <div className='mr-1 text-right'>
            <span className='mr-3'>{props.leaders[1].wins}</span>
            {props.leaders[1].nickname}
          </div>
        </Col>
      </Row>
      <Row className='mt-1 mb-1 ml-1'>
        <Col xs={props.leaders[2].barWidth} id='third-place'>
          <div className='mr-1 text-right'>
            <span className='mr-2'>{props.leaders[2].wins}</span> {props.leaders[2].nickname}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Leaders;
