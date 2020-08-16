import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type StandingsSelectorProps = {
  standingsView: string;
  lastUpdated: string;
  onClick: (view: string) => void;
};

const StandingsSelector = (props: StandingsSelectorProps) => (
  <div>
    <Row className='align-items-end'>
      <Col lg={12}>
        <h4 className='mt-3'>Standings</h4>
      </Col>
    </Row>
    <Row className='align-items-end mt-2'>
      <Col lg={2}>
        <span className={props.standingsView === 'division' ? 'font-weight-bold' : ''}>
          <a href='#' onClick={() => props.onClick('division')}>
            Divisional
          </a>
        </span>
      </Col>
      <Col lg={2}>
        <span className={props.standingsView === 'overall' ? 'font-weight-bold' : ''}>
          <a href='#' onClick={() => props.onClick('overall')}>
            Overall
          </a>
        </span>
      </Col>
      <Col lg={8} className='mb-1 text-right'>
        <small>Last updated: {props.lastUpdated}</small>
      </Col>
    </Row>
  </div>
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
