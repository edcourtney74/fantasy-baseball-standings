import { TeamWeek, Schedule, TeamInfo } from '../Interfaces';

// Initial db call on page load - retrieves all standings info
export const getAllResults = async (): Promise<TeamWeek[]> => {
  return fetch('/api/stats')
    .then((response) => {
      if (!response.ok) {
        console.log(response.statusText);
      }
      return response.json();
    })
    .then((data) => data);
};

// Initial db call on page load - retrieves all schedule info
export const getSchedule = async (): Promise<Schedule[]> => {
  return fetch('/api/schedule')
    .then((response) => {
      if (!response.ok) {
        console.log(response.statusText);
      }
      return response.json();
    })
    .then((data) => data);
};

// Initial db call on page load - retrieves team info
export const getTeams = async (): Promise<TeamInfo[]> => {
  return fetch('/api/teams')
    .then((response) => {
      if (!response.ok) {
        console.log(response.statusText);
      }
      return response.json();
    })
    .then((data) => data);
};
