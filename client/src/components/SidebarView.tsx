import React from 'react';
import ScheduleSidebar from './ScheduleSidebar';
import StandingsSidebar from './StandingsSidebar';
import { TeamWeek, Schedule } from '../Interfaces';

type SidebarViewProps = {
  mainView: string;
  teamRecords: TeamWeek[];
  schedule: Schedule[][];
};

const SidebarView = (props: SidebarViewProps) => (
  <div>
    {props.mainView === 'standings' && <ScheduleSidebar schedule={props.schedule} />}
    {props.mainView === 'schedule' && <StandingsSidebar teamRecords={props.teamRecords} />}
  </div>
);

export default SidebarView;
