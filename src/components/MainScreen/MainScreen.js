/* 
MIT License

Copyright (c) 2021 Associazione MeteoGargano
Copyright (c) 2021 Vittorio Lo Mele  [AUTHOR OF THIS FILE]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MapActivity from '../MapActivity/MapActivity'
import WebcamsActivity from '../WebcamsActivity/WebcamsActivity'
import StationDetailsActivity from '../StationDetailsActivity/StationDetailsActivity';
import ArchiveActivity from '../ArchiveActivity/ArchiveActivity'
import InfoActivity from '../InfoActivity/InfoActivity'
import { Map, CameraVideo, Server, ThermometerSun, InfoCircle } from 'react-bootstrap-icons'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './MainScreen.css';


function MainScreen() {
  return (
    <Router>
      <Route render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              if (location.pathname !== to) {
                if (selected === "home") {
                  history.push('/')
                } else {
                  history.push(to);
                }
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <Map width="1.75em" height="1.75em" />
                </NavIcon>
                <NavText>
                  Mappa
                </NavText>
              </NavItem>
              <NavItem eventKey="details">
                <NavIcon>
                  <ThermometerSun width="1.75em" height="1.75em" />
                </NavIcon>
                <NavText>
                  Dettaglio Stazioni
                </NavText>
              </NavItem>
              <NavItem eventKey="archive">
                <NavIcon>
                  <Server width="1.75em" height="1.75em" />
                </NavIcon>
                <NavText>
                  Archivio Meteo
                </NavText>
              </NavItem>
              <NavItem eventKey="webcams">
                <NavIcon>
                  <CameraVideo width="1.75em" height="1.75em" />
                </NavIcon>
                <NavText>
                  Webcams
                </NavText>
              </NavItem>
              <NavItem eventKey="info">
                <NavIcon>
                  <InfoCircle width="1.75em" height="1.75em" />
                </NavIcon>
                <NavText>
                  Informazioni
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main className="main">
            <Route path="/" exact component={props => <MapActivity />} />
            <Route path="/details" component={props => <StationDetailsActivity />} />
            <Route path="/archive" component={props => <ArchiveActivity />} />
            <Route path="/webcams" component={props => <WebcamsActivity />} />
            <Route path="/info" component={props => <InfoActivity />} />
          </main>
        </React.Fragment>
      )}
      />
    </Router>
  );
}

export default MainScreen;
