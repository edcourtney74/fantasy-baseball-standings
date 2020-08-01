import React from 'react';

import { TeamWeek } from '../Interfaces';
import StandingsSelector from './StandingsSelector';
import DivisionStandings from './DivisionStandings';

type StandingsViewProps = {
  view: string;
  teams: TeamWeek[];
  onClickView: (view: string) => void;
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const StandingsView = (props: StandingsViewProps) => (
  <div>
    <StandingsSelector view={props.view} onClick={props.onClickView} />
    {props.view === 'standings' && (
      <DivisionStandings teams={props.teams} onClickAsc={props.onClickAsc} onClickDesc={props.onClickDesc} />
    )}
  </div>
);

export default StandingsView;
