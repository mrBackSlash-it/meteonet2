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
/* eslint-disable no-restricted-globals */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import MainScreen from './MainScreen';

test('Full app rendering', () => {
  render(<MainScreen />);
  expect(screen.getByTestId("leafletContainer")).toBeInTheDocument();
  
  const leftClick = { button: 0 };
  
  //placeholder checks
  //TODO: Replace this with actual checks when components are implemented
  userEvent.click(screen.getByTestId("sidebar-item-stationdetails"), leftClick);
  expect(screen.getByText(/Dettaglio stazione/i)).toBeInTheDocument();

  userEvent.click(screen.getByTestId("sidebar-item-archive"), leftClick);
  expect(screen.getByText(/Consulta archivio meteo/i)).toBeInTheDocument();

  userEvent.click(screen.getByTestId("sidebar-item-webcams"), leftClick);
  expect(screen.getByText(/Webcams/i)).toBeInTheDocument();

  userEvent.click(screen.getByTestId("sidebar-item-info"), leftClick);
  expect(screen.getByText(/Dettaglio stazione/i)).toBeInTheDocument();

});

test('Check bad page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  render(<MainScreen />);
  //checks if bad route redirects to home
  setTimeout(check2, 3000);
  function check2(){
    expect(history.location).toBe("/");
  }
})