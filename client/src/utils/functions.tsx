import { TeamWeek } from "../Interfaces";

// Sorts by wins initially
export const calculateOverallStats = (allRecords: TeamWeek[]): TeamWeek[] => {
  const combinedRecs: TeamWeek[] = [];
  const teamNamesCollected: string[] = [];

  // Create wins/points total and sort
  allRecords.forEach((rec) => {
    const { team_name, wins, losses, ties, total_points } = rec;
    if (!teamNamesCollected.includes(team_name)) {
      combinedRecs.push(rec);
      teamNamesCollected.push(team_name);
    } else {
      const teamIndex = combinedRecs.findIndex(
        (combRec) => combRec.team_name === team_name
      );
      combinedRecs[teamIndex].wins += wins;
      combinedRecs[teamIndex].losses += losses;
      combinedRecs[teamIndex].ties += ties;
      combinedRecs[teamIndex].total_points += total_points;
    }
  });
  // Sort by wins initially
  return sortAscStandings(combinedRecs, "wins", "total_points");
};

// Sort standings by up to two levels
export const sortAscStandings = (
  teams: TeamWeek[],
  sortVal1: string,
  sortVal2: string
) => {
  return teams.sort((a, b) => {
    if (a[sortVal1] > b[sortVal1]) {
      return -1;
    }
    if (b[sortVal1] > a[sortVal1]) {
      return 1;
    }
    // If first value is equal, sort by second value
    if (a[sortVal2] > b[sortVal2]) {
      return -1;
    }
    if (b[sortVal2] > a[sortVal2]) {
      return 1;
    }
    return 0;
  });
};

// Sort standings for most losses, fewest points
export const sortDescStandings = (
  teams: TeamWeek[],
  sortVal1: string,
  sortVal2: string
) => {
  return teams.sort((a, b) => {
    if (a[sortVal1] > b[sortVal1]) {
      return -1;
    }
    if (b[sortVal1] > a[sortVal1]) {
      return 1;
    }
    // If losses are equal, sort by lowest total points
    if (b[sortVal2] > a[sortVal2]) {
      return -1;
    }
    if (a[sortVal2] > b[sortVal2]) {
      return 1;
    }
    return 0;
  });
};

export const getWeeklyResults = (
  allRecords: TeamWeek[],
  week: number
): TeamWeek[][] => {
  // Get array of all records for that week
  const weekRecs = allRecords.filter((rec) => rec.week === week);
  // Separate by groups into array
  const groups: TeamWeek[][] = [];
  let groupNumber = 0;
  weekRecs.forEach((rec) => {
    // If group number matches, push to that array. If not, start new array
    if (rec.grouping === groupNumber) {
      groups[groups.length - 1].push(rec);
    } else {
      groups.push([rec]);
      groupNumber += 1;
    }
  });
  // Sort groups by total points

  return groups;
};
