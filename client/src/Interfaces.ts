export interface TeamWeek {
  id: number;
  team_name: string;
  wins: number;
  losses: number;
  ties: number;
  total_points: number;
  rank: number;
  week: number;
  grouping: number;
  [index: string]: string | number;
}

export interface Division {
  divisionName: string;
  teams: string[];
}
