import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type StandingsSelectorProps = {
  overallView: boolean;
  onClick: () => void;
};

const StandingsSelector = (props: StandingsSelectorProps) => (
  <Row className='align-items-end'>
    <Col lg={3}>
      <h4 className='mt-3'>{props.overallView ? 'Overall Standings' : 'Weekly Matchups'}</h4>
    </Col>
    <Col>
      <small>
        <a href='#' onClick={() => props.onClick()}>
          {props.overallView ? 'Weekly Matchups' : 'Overall Standings'}
        </a>
      </small>
    </Col>
  </Row>
);

export default StandingsSelector;
