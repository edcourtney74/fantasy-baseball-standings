import React from 'react';
import { Schedule } from '../Interfaces';

type ScheduleSidebarProps = {
  schedule: Schedule[][];
};

const ScheduleSidebar = (props: ScheduleSidebarProps) => (
  <div>
    <h4 className='mt-3 mb-3'>This Week's Matchups</h4>
    {props.schedule.map((group, i) => (
      <div key={i}>
        <h6>Group {group[0].grouping}</h6>
        {group.map((team) => (
          <p key={team.team_name} className='my-0'>
            <small>{team.team_name}</small>
          </p>
        ))}
        <br />
      </div>
    ))}
  </div>
);

export default ScheduleSidebar;
