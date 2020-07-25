import { TeamWeek } from "../Interfaces";

// Initial db call on page load - retrieves all standings info
export const getAllStandings = async (): Promise<TeamWeek[]> => {
  return fetch("/api/standings")
    .then((response) => {
      if (!response.ok) {
        console.log(response.statusText);
      }
      return response.json();
    })
    .then((data) => data);
};
