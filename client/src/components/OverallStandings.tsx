import React from "react";
import Table from "react-bootstrap/Table";
import { TeamWeek } from "../Interfaces";

type OverallStandingsProps = {
  teams: TeamWeek[];
  onClickAsc: (val1: string, val2: string) => void;
  onClickDesc: (val1: string, val2: string) => void;
};

const OverallStandings = (props: OverallStandingsProps) => (
  <Table striped bordered>
    <thead>
      <tr>
        <th>Team Name</th>
        <th>
          <a href="#" onClick={() => props.onClickAsc("wins", "total_points")}>
            Wins
          </a>
        </th>
        <th>
          <a
            href="#"
            onClick={() => props.onClickDesc("losses", "total_points")}
          >
            Losses
          </a>
        </th>
        <th>
          <a href="#" onClick={() => props.onClickAsc("ties", "total_points")}>
            Ties
          </a>
        </th>
        <th>
          <a href="#" onClick={() => props.onClickAsc("total_points", "wins")}>
            Total Points
          </a>
        </th>
      </tr>
    </thead>
    <tbody>
      {props.teams.map((team) => (
        <tr key={team.team_name}>
          <td>{team.team_name}</td>
          <td>{team.wins}</td>
          <td>{team.losses}</td>
          <td>{team.ties}</td>
          <td>{team.total_points}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default OverallStandings;
