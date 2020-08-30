import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TeamWeek } from '../Interfaces';

type LeadersProps = {
  teams: TeamWeek[];
};

type LeadersInfo = {
  secondPlace: number;
  thirdPlace: number;
  teamNicknames: string[];
};

type Nicknames = {
  [key: string]: string;
};

const nicknames: Nicknames = {
  AfricanGrayParrots: 'AGP',
  Bombers: 'Bmb',
  Bugeaters: 'Bugs',
  ChristaDavis: 'CD',
  EasyLover: 'EL',
  Forever: '4-ev',
  HIGHLANDERS: 'HGH',
  Legendary: 'Leg',
  OliverCompany: 'O&C',
  SeductiveMoves: 'SM',
  SSPBaseballTeam: 'SSP',
  TBD: 'TBD',
  TheBigTenowskis: 'Tenow',
  TheDSquad: 'DSq',
  TheHebrewHammers: 'HH',
  TheNewGuy: 'TNG',
};

const setLeaders = (teams: TeamWeek[]): LeadersInfo => {
  const topWins = teams[0].wins;
  const secondPlace = (teams[1].wins / topWins) * 10;
  const thirdPlace = (teams[2].wins / topWins) * 10;
  const topThreeTeams = [teams[0], teams[1], teams[2]];
  const teamNicknames = topThreeTeams.map((team) => {
    const newTeam = team.team_name.replace(/&/g, '').split(' ').join('');
    return nicknames[newTeam];
  });
  return { secondPlace, thirdPlace, teamNicknames };
};

const Leaders = (props: LeadersProps) => {
  const { secondPlace, thirdPlace, teamNicknames } = setLeaders(props.teams);
  return (
    <div>
      <Row className='mt-3 mb-1 ml-1'>
        <Col xs={10} id='first-place'>
          <div className='mr-1 text-right'>
            <span className='mr-3'>{props.teams[0].wins}</span>
            {teamNicknames[0]}
          </div>
        </Col>
      </Row>
      <Row className='mt-1 mb-1 ml-1'>
        <Col xs={secondPlace} id='second-place'>
          <div className='mr-1 text-right'>
            <span className='mr-3'>{props.teams[1].wins}</span>
            {teamNicknames[1]}
          </div>
        </Col>
      </Row>
      <Row className='mt-1 mb-1 ml-1'>
        <Col xs={thirdPlace} id='third-place'>
          <div className='mr-1 text-right'>
            <span className='mr-2'>{props.teams[2].wins}</span> {teamNicknames[2]}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Leaders;
