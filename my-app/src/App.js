import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableGrid from './TableGrid/TableGrid.jsx';
import Filters from './Filters/Filters.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exceptions</h1>
        </header>
        <Grid className="GridApp">
          <Row className="show-grid">
            <Col md={3}>
              <Filters />
            </Col>
            <Col md={9}>
              <TableGrid />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
