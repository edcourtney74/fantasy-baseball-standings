import React from 'react';
import StandingsView from './StandingsView';
import ScheduleFull from './ScheduleFull';
import { TeamWeek, Schedule } from '../Interfaces';

type MainViewProps = {
  view: string;
  teams: TeamWeek[];
  allSchedule: Schedule[];
  compiledSchedule: Schedule[][][];
  onClickView: (val1: string) => void;
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const MainView = (props: MainViewProps) => (
  <div>
    {props.view === 'standings' && (
      <StandingsView
        view={props.view}
        teams={props.teams}
        onClickView={props.onClickView}
        onClickAsc={props.onClickAsc}
        onClickDesc={props.onClickDesc}
      />
    )}
    {props.view === 'schedule' && <ScheduleFull schedule={props.compiledSchedule} />}
  </div>
);

export default MainView;
