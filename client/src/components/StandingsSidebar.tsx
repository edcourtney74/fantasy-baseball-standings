import React from 'react';
import { divisions } from '../utils/divisions';
import { TeamWeek } from '../Interfaces';
import Table from 'react-bootstrap/Table';

type StandingsSidebarProps = {
  teams: TeamWeek[];
};

const StandingsSidebar = (props: StandingsSidebarProps) => (
  <div>
    <h4 className='mt-3 mb-3'>Standings</h4>

    <Table bordered responsive size='sm'>
      <thead>
        <tr>
          <th className='text-right' id='rank-col'>
            Rank
          </th>
          <th>Team</th>
          <th className='text-center'>Wins</th>
          <th className='text-center'>Points</th>
        </tr>
      </thead>
      {divisions.map((division) => (
        <tbody key={division.divisionName}>
          <tr>
            <td colSpan={6}>
              <b>{division.divisionName}</b>
            </td>
          </tr>
          {props.teams.map((team) => {
            if (division.teams.includes(team.team_name))
              return (
                <tr key={team.team_name}>
                  <td className='text-right' id='rank-col'>
                    {team.rank}
                  </td>
                  <td>{team.team_name}</td>
                  <td className='text-center'>{team.wins}</td>
                  <td className='text-center'>{team.total_points}</td>
                </tr>
              );
          })}
        </tbody>
      ))}
    </Table>
  </div>
);

export default StandingsSidebar;