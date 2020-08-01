import React from 'react';
import Table from 'react-bootstrap/Table';
import { TeamWeek, Division } from '../Interfaces';
import { divisions } from '../utils/divisions';

type DivisionStandingsProps = {
  teams: TeamWeek[];
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const DivisionStandings = (props: DivisionStandingsProps) => (
  <Table bordered responsive size='sm'>
    <thead>
      <tr>
        <th className='text-right' id='rank-col'>
          Rank
        </th>
        <th>Team Name</th>
        <th className='text-center'>Wins</th>
        <th className='text-center'>Losses</th>
        <th className='text-center'>Ties</th>
        <th className='text-center'>Total Points</th>
      </tr>
    </thead>
    {divisions.map((division) => (
      <tbody>
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
                <td className='text-center'>{team.losses}</td>
                <td className='text-center'>{team.ties}</td>
                <td className='text-center'>{team.total_points}</td>
              </tr>
            );
        })}
      </tbody>
    ))}
  </Table>
);

export default DivisionStandings;
