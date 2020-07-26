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
  <Table bordered responsive>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Team Name</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>Ties</th>
        <th>Total Points</th>
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
                <td>{team.rank}</td>
                <td>{team.team_name}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.ties}</td>
                <td>{team.total_points}</td>
              </tr>
            );
        })}
      </tbody>
    ))}
  </Table>
);

export default DivisionStandings;
