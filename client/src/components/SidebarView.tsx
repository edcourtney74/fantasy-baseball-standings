import React from 'react';
import ScheduleSidebar from './ScheduleSidebar';
import StandingsSidebar from './StandingsSidebar';
import { TeamWeek, Schedule } from '../Interfaces';

type SidebarViewProps = {
  view: string;
  teams: TeamWeek[];
  schedule: Schedule[][];
};

const SidebarView = (props: SidebarViewProps) => (
  <div>
    {props.view === 'standings' && <ScheduleSidebar schedule={props.schedule} />}
    {props.view === 'schedule' && <StandingsSidebar teams={props.teams} />}
  </div>
);

export default SidebarView;
