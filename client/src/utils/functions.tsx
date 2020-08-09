import { divisions } from './divisions';
import { TeamWeek, Division, Schedule } from '../Interfaces';

// Sorts by wins initially
export const calculateOverallStats = (allRecords: TeamWeek[]): TeamWeek[] => {
  const combinedRecs: TeamWeek[] = [];
  const teamNamesCollected: string[] = [];

  // Combine wins, losses, ties, points
  allRecords.forEach((rec) => {
    const { team_name, wins, losses, ties, total_points } = rec;
    if (!teamNamesCollected.includes(team_name)) {
      combinedRecs.push(rec);
      teamNamesCollected.push(team_name);
    } else {
      const teamIndex = combinedRecs.findIndex((combRec) => combRec.team_name === team_name);
      combinedRecs[teamIndex].wins += wins;
      combinedRecs[teamIndex].losses += losses;
      combinedRecs[teamIndex].ties += ties;
      combinedRecs[teamIndex].total_points += total_points;
    }
  });

  // Sort by wins initially
  const sortedTeams = sortAscStandings(combinedRecs, 'wins', 'total_points');

  // Calculate ranks
  return calculateRanks(sortedTeams);
};

const calculateRanks = (teamRecs: TeamWeek[]): TeamWeek[] => {
  const rankedTeams: TeamWeek[] = [];
  const divisionsFound: string[] = [];
  const remainingTeams: TeamWeek[] = [];

  // Loop through teams, skipping team if one from its division is already there
  teamRecs.forEach((team, i) => {
    // Check if the team is the first one in that division. If so, add rank.
    const divIndex: number = divisions.findIndex((division) => division.teams.includes(team.team_name));
    if (!divisionsFound.includes(divisions[divIndex].divisionName)) {
      divisionsFound.push(divisions[divIndex].divisionName);
      team.rank = rankedTeams.length + 1;
      rankedTeams.push(team);
    } else {
      remainingTeams.push(team);
    }
  });
  // Loop through remaining teams and rank overall
  remainingTeams.forEach((remTeam) => {
    remTeam.rank = rankedTeams.length + 1;
    rankedTeams.push(remTeam);
  });
  return rankedTeams;
};

// Sort standings by up to two levels
export const sortAscStandings = (teams: TeamWeek[], sortVal1: string, sortVal2: string): TeamWeek[] => {
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
export const sortDescStandings = (teams: TeamWeek[], sortVal1: string, sortVal2: string) => {
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

export const getWeeklyResults = (allRecords: TeamWeek[], week: number): TeamWeek[][] => {
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
  return groups;
};

// Get schedule by current week and sort into arrays base on grouping
export const getCurrentSchedule = (allSchedule: Schedule[]): Schedule[][] => {
  const today = new Date().toISOString().slice(0, 10);
  const weeksGames = allSchedule.filter(
    (sked) =>
      today >= new Date(sked.start_date).toISOString().slice(0, 10) &&
      today <= new Date(sked.end_date).toISOString().slice(0, 10),
  );
  const structuredSchedule: Schedule[][] = [];
  let currentArr: Schedule[] = [];
  weeksGames.forEach((game, i) => {
    currentArr.push(game);
    if ((i + 1) % 4 === 0) {
      structuredSchedule.push(currentArr);
      currentArr = [];
    }
  });
  return structuredSchedule;
};

// Compile schedule into array of weeks, array of groupings
export const compileSchedule = (allSchedule: Schedule[]): Schedule[][][] => {
  const finalGroupedSchedule: Schedule[][][] = [];
  // Hold arrays scheduled by week and group
  let currentWeekGroup: Schedule[][] = [];
  // Hold schedule by week and group
  let currentGrouping: Schedule[] = [];
  let currentWeekCount = 1;
  let currentGroupingCount = 1;
  allSchedule.forEach((sked) => {
    // If it's a new week, start new arrays
    if (sked.week !== currentWeekCount) {
      currentWeekGroup.push(currentGrouping);
      finalGroupedSchedule.push(currentWeekGroup);
      currentGrouping = [sked];
      currentWeekGroup = [];
      currentWeekCount += 1;
      currentGroupingCount = 1;
    } else {
      // If it's the same week, check if it's part of the same group
      if (sked.grouping !== currentGroupingCount) {
        currentWeekGroup.push(currentGrouping);
        currentGrouping = [sked];
        currentGroupingCount += 1;
      } else {
        currentGrouping.push(sked);
      }
    }
  });
  currentWeekGroup.push(currentGrouping);
  finalGroupedSchedule.push(currentWeekGroup);
  return finalGroupedSchedule;
};

export const getLastUpdated = (allSchedule: Schedule[]): string => {
  // Find weeks with complete results, put weeks in array, then find max value
  const mostRecentWeek = allSchedule
    .filter((item) => item.time_completed)
    .map((rec) => rec.week)
    .reduce((a, b) => Math.max(a, b));
  // Get info for one record with mostRecentWeek
  const lastUpdatedObj: Schedule | undefined = allSchedule.find((sked) => sked.week === mostRecentWeek);
  // Get time_completed of record - if undefined, return empty string
  let lastUpdatedTime = lastUpdatedObj !== undefined ? lastUpdatedObj.time_completed : '';
  if (lastUpdatedTime.length > 0) {
    lastUpdatedTime = new Date(lastUpdatedTime).toLocaleString();
  }
  return lastUpdatedTime;
};
