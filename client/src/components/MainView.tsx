import React from 'react';
import StandingsView from './StandingsView';
import ScheduleFull from './ScheduleFull';
import { TeamWeek, Schedule, LeadersInfo, PlayoffTeams } from '../Interfaces';

type MainViewProps = {
  mainView: string;
  teamRecords: TeamWeek[];
  leaders: LeadersInfo[];
  playoffTeams: PlayoffTeams;
  standingsView: string;
  statsView: string;
  allSchedule: Schedule[];
  compiledSchedule: Schedule[][][];
  lastUpdated: string;
  onClickStandingsView: (val1: string) => void;
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const MainView = (props: MainViewProps) => (
  <div>
    {props.mainView === 'standings' && (
      <StandingsView
        teamRecords={props.teamRecords}
        leaders={props.leaders}
        playoffTeams={props.playoffTeams}
        standingsView={props.standingsView}
        statsView={props.statsView}
        lastUpdated={props.lastUpdated}
        onClickView={props.onClickStandingsView}
        onClickAsc={props.onClickAsc}
        onClickDesc={props.onClickDesc}
      />
    )}
    {props.mainView === 'schedule' && <ScheduleFull schedule={props.compiledSchedule} />}
  </div>
);

export default MainView;
