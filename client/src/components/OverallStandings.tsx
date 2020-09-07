import React from 'react';
import Table from 'react-bootstrap/Table';
import { TeamWeek, Division, PlayoffTeams } from '../Interfaces';

type OverallStandingsProps = {
  teamRecords: TeamWeek[];
  playoffTeams: PlayoffTeams;
  statsView: string;
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const OverallStandings = (props: OverallStandingsProps) => (
  <Table bordered responsive>
    <thead>
      <tr>
        <th>
          <a href='#' onClick={() => props.onClickDesc('rank', 'total_points')}>
            Rank
          </a>
        </th>
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
    {props.statsView === 'overall' || props.statsView === 'rank' ? (
      <tbody>
        {props.teamRecords.map((team, i) => (
          <tr className={i >= 8 ? 'bg-light' : ''} key={team.team_name}>
            <td>
              {props.playoffTeams.divisionClinchers.includes(team.team_name) && <span className='small'>x - </span>}
              {props.playoffTeams.playoffClinchers.includes(team.team_name) && <span className='small'>y - </span>}
              {props.playoffTeams.eliminated.includes(team.team_name) && <span className='small'>z - </span>}
              {team.rank}
            </td>
            <td>{team.team_name}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.ties}</td>
            <td>{team.total_points.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    ) : (
      <tbody>
        {props.teamRecords.map((team, i) => (
          <tr key={team.team_name}>
            <td>{i + 1}</td>
            <td>{team.team_name}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.ties}</td>
            <td>{team.total_points.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

export default OverallStandings;
