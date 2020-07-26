import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type StandingsSelectorProps = {
  view: string;
  onClick: (view: string) => void;
};

const StandingsSelector = (props: StandingsSelectorProps) => (
  <Row className='align-items-end'>
    <Col lg={3}>{props.view === 'standings' ? <h4 className='mt-3'>Standings</h4> : null}</Col>
  </Row>
);

export default StandingsSelector;

// const StandingsSelector = (props: StandingsSelectorProps) => (
//   <Row className='align-items-end'>
//     <Col lg={3}>
//       {props.view === 'standings' ? (
//         <h4 className='mt-3'>Standings</h4>
//       ) : (
//         <small>
//           <a href='#' onClick={() => props.onClick('standings')}>
//             Overall Standings
//           </a>
//         </small>
//       )}
//     </Col>
//     <Col lg={3}>
//       {props.view === 'results' ? (
//         <h4 className='mt-3'>Weekly Results</h4>
//       ) : (
//         <small>
//           <a href='#' onClick={() => props.onClick('results')}>
//             Weekly Results
//           </a>
//         </small>
//       )}
//     </Col>
//     <Col lg={3}>
//       {props.view === 'schedule' ? (
//         <h4 className='mt-3'>Schedule</h4>
//       ) : (
//         <small>
//           <a href='#' onClick={() => props.onClick('schedule')}>
//             Schedule
//           </a>
//         </small>
//       )}
//     </Col>
//   </Row>
// );
