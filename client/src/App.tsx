import React from "react";
import { getAllStandings } from "./services/getStandings";
import {
  calculateOverallStats,
  sortAscStandings,
  sortDescStandings,
  getWeeklyResults,
} from "./utils/functions";
import HomeNavbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import OverallStandings from "./components/OverallStandings";
import WeeklyResults from "./components/WeeklyResults";
import StandingsSelector from "./components/StandingsSelector";
import { TeamWeek } from "./Interfaces";
import "./App.css";

type AppProps = {};
type AppState = {
  allRecords: TeamWeek[];
  combinedRecords: TeamWeek[];
  weeklyRecords: TeamWeek[][];
  overallView: boolean;
  week: number;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.standingsAscSortClick = this.standingsAscSortClick.bind(this);
    this.standingsDescSortClick = this.standingsDescSortClick.bind(this);
    this.changeViewClick = this.changeViewClick.bind(this);
  }

  state: AppState = {
    allRecords: [],
    combinedRecords: [],
    weeklyRecords: [],
    overallView: true,
    week: 1,
  };

  async componentDidMount() {
    document.body.style.background = "#9bcaf1";
    await this.handleInitialStandings();
  }

  async handleInitialStandings(): Promise<void> {
    const allRecords: TeamWeek[] = await getAllStandings();
    // const recordsCopy = this.cloneArray(allRecords);
    const combinedRecords: TeamWeek[] = calculateOverallStats(allRecords);
    this.setState({
      allRecords,
      combinedRecords,
    });
  }

  // Sort standings ascending
  standingsAscSortClick(val1: string, val2: string): void {
    const sorted = sortAscStandings(this.state.combinedRecords, val1, val2);
    this.setState({
      combinedRecords: sorted,
    });
  }

  // Sort standings descending
  standingsDescSortClick(val1: string, val2: string): void {
    const sorted = sortDescStandings(this.state.combinedRecords, val1, val2);
    this.setState({
      combinedRecords: sorted,
    });
  }

  changeViewClick(): void {
    const weeklyRecords = getWeeklyResults(this.state.allRecords, 1);
    this.setState({
      overallView: !this.state.overallView,
      weeklyRecords,
    });
  }

  render() {
    return (
      <div>
        <HomeNavbar></HomeNavbar>
        <Container>
          <StandingsSelector
            overallView={this.state.overallView}
            onClick={this.changeViewClick}
          />
          {this.state.overallView ? (
            <OverallStandings
              teams={this.state.combinedRecords}
              onClickAsc={this.standingsAscSortClick}
              onClickDesc={this.standingsDescSortClick}
            />
          ) : (
            <WeeklyResults
              week={this.state.week}
              records={this.state.weeklyRecords}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
