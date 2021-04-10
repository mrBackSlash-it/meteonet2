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
import './InfoActivity.css';
import logo from './m1.png';


function InfoActivity() {
  return (
    <div className="InfoActivity">
      <div class="row w-100 justify-content-center align-items-center" style={{height: "100vh"}}>
        <div class="col-auto">
          <div class="row">
            <div class="col s-col">
              <img src={logo} alt="Logo Meteogargano" className="logo-inf" />
              <br />
              <br />
              <h1>WeatherLab360</h1>
              <h5>Un progetto dell' associazione MeteoGargano.</h5>
              <p>Realizzato da <a href="https://vitto.dev">Vittorio Lo Mele</a> e <a href="mailto:ziofil@gmail.com">Filippo Gurgoglione</a>
                <br />Il codice sorgente dell'app è mantenuto su <a href="https://github.com/meteogargano/WeatherLab360">GitHub</a></p>
              <img src="https://github.com/meteogargano/WeatherLab360/workflows/NodeJS%20CI/CD/badge.svg" alt="NodeJS CI/CD" />
              <span> </span>
              <img src="https://github.com/meteogargano/WeatherLab360/workflows/CodeQL%20Analisys/badge.svg" alt="CodeQL" />
              <span> </span>
              <img src="https://img.shields.io/github/license/meteogargano/WeatherLab360?label=License" alt="License" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoActivity;
