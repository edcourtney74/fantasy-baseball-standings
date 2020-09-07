import React from 'react';

import { TeamWeek, LeadersInfo, PlayoffTeams } from '../Interfaces';
import Leaders from './Leaders';
import StandingsSelector from './StandingsSelector';
import DivisionStandings from './DivisionStandings';
import OverallStandings from './OverallStandings';

type StandingsViewProps = {
  teamRecords: TeamWeek[];
  leaders: LeadersInfo[];
  playoffTeams: PlayoffTeams;
  standingsView: string;
  statsView: string;
  lastUpdated: string;
  onClickView: (view: string) => void;
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const StandingsView = (props: StandingsViewProps) => (
  <div>
    <Leaders teamRecords={props.teamRecords} leaders={props.leaders} />
    <StandingsSelector
      standingsView={props.standingsView}
      lastUpdated={props.lastUpdated}
      onClick={props.onClickView}
    />
    {props.standingsView === 'division' ? (
      <DivisionStandings teamRecords={props.teamRecords} playoffTeams={props.playoffTeams} />
    ) : (
      <OverallStandings
        teamRecords={props.teamRecords}
        playoffTeams={props.playoffTeams}
        statsView={props.statsView}
        onClickAsc={props.onClickAsc}
        onClickDesc={props.onClickDesc}
      />
    )}
    <div className='small'>x - clinched division</div>
    <div className='small'>y - clinched playoff spot</div>
    <div className='small'>z - eliminated</div>
  </div>
);

export default StandingsView;
