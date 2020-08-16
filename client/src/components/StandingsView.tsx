import React from 'react';

import { TeamWeek } from '../Interfaces';
import StandingsSelector from './StandingsSelector';
import DivisionStandings from './DivisionStandings';
import OverallStandings from './OverallStandings';

type StandingsViewProps = {
  teams: TeamWeek[];
  standingsView: string;
  statsView: string;
  lastUpdated: string;
  onClickView: (view: string) => void;
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const StandingsView = (props: StandingsViewProps) => (
  <div>
    <StandingsSelector
      standingsView={props.standingsView}
      lastUpdated={props.lastUpdated}
      onClick={props.onClickView}
    />
    {props.standingsView === 'division' ? (
      <DivisionStandings teams={props.teams} />
    ) : (
      <OverallStandings
        teams={props.teams}
        statsView={props.statsView}
        onClickAsc={props.onClickAsc}
        onClickDesc={props.onClickDesc}
      />
    )}
  </div>
);

export default StandingsView;
