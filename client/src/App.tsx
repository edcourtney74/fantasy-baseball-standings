import React from 'react';
import { getAllResults, getSchedule } from './services/getStats';
import {
  calculateOverallStats,
  sortAscStandings,
  sortDescStandings,
  getWeeklyResults,
  getCurrentSchedule,
} from './utils/functions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNavbar from './components/Navbar';
import StandingsView from './components/StandingsView';
import ScheduleSidebar from './components/ScheduleSidebar';
import DivisionStandings from './components/DivisionStandings';
import WeeklyResults from './components/WeeklyResults';
import StandingsSelector from './components/StandingsSelector';
import { TeamWeek, Schedule } from './Interfaces';
import './App.css';

type AppProps = {};
type AppState = {
  allRecords: TeamWeek[];
  combinedRecords: TeamWeek[];
  weeklyRecords: TeamWeek[][];
  view: string;
  week: number;
  allSchedule: Schedule[];
  currentSchedule: Schedule[][];
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
    allSchedule: [],
    currentSchedule: [],
    view: 'standings',
    week: 1,
  };

  async componentDidMount() {
    document.body.style.background = '#9bcaf1';
    await this.getInitialStats();
  }

  async getInitialStats(): Promise<void> {
    const allRecords: TeamWeek[] = await getAllResults();
    const allSchedule: Schedule[] = await getSchedule();
    const currentSchedule: Schedule[][] = getCurrentSchedule(allSchedule);
    const combinedRecords: TeamWeek[] = calculateOverallStats(allRecords);
    this.setState({
      allRecords,
      combinedRecords,
      allSchedule,
      currentSchedule,
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

  changeViewClick(view: string): void {
    // const weeklyRecords = getWeeklyResults(this.state.allRecords, 1);
    this.setState({
      view,
      // weeklyRecords,
    });
  }

  render() {
    return (
      <div>
        <HomeNavbar></HomeNavbar>
        <Container>
          <Row>
            <Col lg={8}>
              <StandingsView
                view={this.state.view}
                teams={this.state.combinedRecords}
                onClickView={this.changeViewClick}
                onClickAsc={this.standingsAscSortClick}
                onClickDesc={this.standingsDescSortClick}
              />
            </Col>
            <Col lg={4}>
              <ScheduleSidebar schedule={this.state.currentSchedule} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

{
  /* : (
            <WeeklyResults week={this.state.week} records={this.state.weeklyRecords} />
          )} */
}
