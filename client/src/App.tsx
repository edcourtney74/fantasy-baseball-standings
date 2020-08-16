import React from 'react';
import { getAllResults, getSchedule } from './services/getStats';
import {
  calculateOverallStats,
  sortAscStandings,
  sortDescStandings,
  getWeeklyResults,
  getCurrentSchedule,
  compileSchedule,
  getLastUpdated,
} from './utils/functions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNavbar from './components/Navbar';
import MainView from './components/MainView';
import SidebarView from './components/SidebarView';
import { TeamWeek, Schedule } from './Interfaces';
import './App.css';

type AppProps = {};
type AppState = {
  allRecords: TeamWeek[];
  combinedRecords: TeamWeek[];
  weeklyRecords: TeamWeek[][];
  standingsView: string;
  statsView: string;
  lastUpdated: string;
  mainView: string;
  week: number;
  allSchedule: Schedule[];
  currentSchedule: Schedule[][];
  compiledSchedule: Schedule[][][];
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.standingsAscSortClick = this.standingsAscSortClick.bind(this);
    this.standingsDescSortClick = this.standingsDescSortClick.bind(this);
    this.changeMainViewClick = this.changeMainViewClick.bind(this);
    this.changeStandingsViewClick = this.changeStandingsViewClick.bind(this);
  }

  state: AppState = {
    allRecords: [],
    combinedRecords: [],
    weeklyRecords: [],
    standingsView: 'division',
    statsView: 'overall',
    allSchedule: [],
    currentSchedule: [],
    compiledSchedule: [],
    mainView: 'standings',
    week: 1,
    lastUpdated: '',
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
    const compiledSchedule = compileSchedule(allSchedule);
    const lastUpdated = getLastUpdated(allSchedule);
    this.setState({
      allRecords,
      combinedRecords,
      allSchedule,
      currentSchedule,
      compiledSchedule,
      lastUpdated,
    });
  }

  // Sort standings ascending
  standingsAscSortClick(val1: string, val2: string): void {
    const sorted = sortAscStandings(this.state.combinedRecords, val1, val2);
    this.setState({
      combinedRecords: sorted,
      statsView: val1,
    });
  }

  // Sort standings descending
  standingsDescSortClick(val1: string, val2: string): void {
    const sorted = sortDescStandings(this.state.combinedRecords, val1, val2);
    this.setState({
      combinedRecords: sorted,
      statsView: val1,
    });
  }

  changeMainViewClick(view: string): void {
    this.setState({
      mainView: view,
    });
  }

  changeStandingsViewClick(view: string): void {
    this.setState({
      standingsView: view,
    });
  }

  render() {
    return (
      <div>
        <HomeNavbar onClick={this.changeMainViewClick} />
        <Container>
          <Row>
            <Col lg={8}>
              <MainView
                mainView={this.state.mainView}
                teams={this.state.combinedRecords}
                standingsView={this.state.standingsView}
                statsView={this.state.statsView}
                allSchedule={this.state.allSchedule}
                compiledSchedule={this.state.compiledSchedule}
                lastUpdated={this.state.lastUpdated}
                onClickStandingsView={this.changeStandingsViewClick}
                onClickAsc={this.standingsAscSortClick}
                onClickDesc={this.standingsDescSortClick}
              />
            </Col>
            <Col lg={4}>
              <SidebarView
                teams={this.state.combinedRecords}
                mainView={this.state.mainView}
                schedule={this.state.currentSchedule}
              />
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
