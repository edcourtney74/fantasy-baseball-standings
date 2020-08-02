import React from 'react';
import { getAllResults, getSchedule } from './services/getStats';
import {
  calculateOverallStats,
  sortAscStandings,
  sortDescStandings,
  getWeeklyResults,
  getCurrentSchedule,
  compileSchedule,
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
  view: string;
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
    this.changeViewClick = this.changeViewClick.bind(this);
  }

  state: AppState = {
    allRecords: [],
    combinedRecords: [],
    weeklyRecords: [],
    allSchedule: [],
    currentSchedule: [],
    compiledSchedule: [],
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
    const compiledSchedule = compileSchedule(allSchedule);
    this.setState({
      allRecords,
      combinedRecords,
      allSchedule,
      currentSchedule,
      compiledSchedule,
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
        <HomeNavbar onClick={this.changeViewClick} />
        <Container>
          <Row>
            <Col lg={8}>
              <MainView
                view={this.state.view}
                teams={this.state.combinedRecords}
                allSchedule={this.state.allSchedule}
                compiledSchedule={this.state.compiledSchedule}
                onClickView={this.changeViewClick}
                onClickAsc={this.standingsAscSortClick}
                onClickDesc={this.standingsDescSortClick}
              />
            </Col>
            <Col lg={4}>
              <SidebarView
                teams={this.state.combinedRecords}
                view={this.state.view}
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
