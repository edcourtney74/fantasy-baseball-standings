import React from "react";
import Table from "react-bootstrap/Table";
import { TeamWeek } from "../Interfaces";

type WeeklyResultsProps = {
  week: number;
  records: TeamWeek[][];
};

const WeeklyResults = (props: WeeklyResultsProps) => (
  <div>
    <h5 className="pt-3">`{`Week ${props.week}`}</h5>
    {/* Handle first grouping */}
    <Table striped bordered>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Points</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Ties</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.teams.map((team) => (
          <tr key={team.team_name}>
            <td>{team.team_name}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.ties}</td>
            <td>{team.total_points}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  </div>
);

export default WeeklyResults;
