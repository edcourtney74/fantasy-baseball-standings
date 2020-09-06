import React from 'react';

import { TeamWeek, LeadersInfo } from '../Interfaces';
import Leaders from './Leaders';
import StandingsSelector from './StandingsSelector';
import DivisionStandings from './DivisionStandings';
import OverallStandings from './OverallStandings';

type StandingsViewProps = {
  teamRecords: TeamWeek[];
  leaders: LeadersInfo[];
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
      <DivisionStandings teamRecords={props.teamRecords} />
    ) : (
      <OverallStandings
        teamRecords={props.teamRecords}
        statsView={props.statsView}
        onClickAsc={props.onClickAsc}
        onClickDesc={props.onClickDesc}
      />
    )}
  </div>
);

export default StandingsView;
