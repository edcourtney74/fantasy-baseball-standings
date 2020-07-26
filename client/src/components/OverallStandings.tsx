import React from 'react';
import Table from 'react-bootstrap/Table';
import { TeamWeek, Division } from '../Interfaces';

type DivisionStandingsProps = {
  teams: TeamWeek[];
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const divisions: Division[] = [
  {
    divisionName: 'Al Leiter',
    teams: ['Bugeaters', 'Christa Davis', 'HIGHLANDERS', 'Oliver & Company'],
  },
  {
    divisionName: 'Bobby Jones',
    teams: ['The New Guy', 'SSP Baseball Team', 'The Big Tenowskis', 'The Hebrew Hammers'],
  },
  {
    divisionName: 'Mike Hampton',
    teams: ['African Gray Parrots', 'Bombers', 'For-ev-er', 'Legendary'],
  },
  {
    divisionName: 'Turk Wendell',
    teams: ['Easy Lover', 'Seductive Moves', 'TBD', 'The D Squad'],
  },
];

const DivisionStandings = (props: DivisionStandingsProps) => (
  <Table bordered responsive>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Team Name</th>
        <th>
          <a href='#' onClick={() => props.onClickAsc('wins', 'total_points')}>
            Wins
          </a>
        </th>
        <th>
          <a href='#' onClick={() => props.onClickDesc('losses', 'total_points')}>
            Losses
          </a>
        </th>
        <th>
          <a href='#' onClick={() => props.onClickAsc('ties', 'total_points')}>
            Ties
          </a>
        </th>
        <th>
          <a href='#' onClick={() => props.onClickAsc('total_points', 'wins')}>
            Total Points
          </a>
        </th>
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
