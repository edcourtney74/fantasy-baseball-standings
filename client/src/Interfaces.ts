export interface TeamWeek {
  id: number;
  team_name: string;
  wins: number;
  losses: number;
  ties: number;
  week: number;
  grouping: number;
  total_points: number;
  [index: string]: string | number;
}
