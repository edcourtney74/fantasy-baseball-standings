import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TeamWeek } from '../Interfaces';

type LeadersProps = {
  teams: TeamWeek[];
};

type Widths = {
  secondPlace: number;
  thirdPlace: number;
};

const setColumnWidth = (teams: TeamWeek[]): Widths => {
  const topWins = teams[0].wins;
  const secondPlace = (teams[1].wins / topWins) * 10;
  const thirdPlace = (teams[2].wins / topWins) * 10;
  return { secondPlace, thirdPlace };
};

const Leaders = (props: LeadersProps) => {
  const { secondPlace, thirdPlace } = setColumnWidth(props.teams);
  return (
    <div>
      <Row className='mt-3 mb-1 ml-1'>
        <Col xs={10} id='first-place'>
          <div className='mr-1 text-right'>
            <span className='mr-3'>{props.teams[0].wins}</span>
            {props.teams[0].team_name}
          </div>
        </Col>
      </Row>
      <Row className='mt-1 mb-1 ml-1'>
        <Col xs={secondPlace} id='second-place'>
          <div className='mr-1 text-right'>
            <span className='mr-3'>{props.teams[1].wins}</span>
            {props.teams[1].team_name}
          </div>
        </Col>
      </Row>
      <Row className='mt-1 mb-1 ml-1'>
        <Col xs={thirdPlace} id='third-place'>
          <div className='mr-1 text-right'>
            <span className='mr-2'>{props.teams[2].wins}</span> {props.teams[2].team_name}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Leaders;
