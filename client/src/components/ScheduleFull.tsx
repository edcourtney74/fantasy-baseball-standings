import React from 'react';
import { Schedule } from '../Interfaces';

type ScheduleFullProps = {
  schedule: Schedule[][][];
};

const ScheduleFull = (props: ScheduleFullProps) => (
  <div>
    <h4 className='mt-3'>Season Schedule</h4>
    {props.schedule.map((week: Schedule[][], i) => (
      <div>
        <h5 className='mt-4'>Week {i + 1}</h5>
        {week.map((group) => {
          const teamString = group.map((team) => team.team_name).join(', ');
          return <p>{teamString}</p>;
        })}
      </div>
    ))}
  </div>
);

export default ScheduleFull;
