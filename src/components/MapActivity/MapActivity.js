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
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import './MapActivity.css';
import { StationMarker } from './StationMarker';
import * as appSettings from '../../settings';

function MapActivity() {
  useEffect(() => {
    loadNet();
  }, [])

  const [networkData, setNetworkData] = useState([]);
  const [stationData, setStationData] = useState([]);

  const loadNet = async () => {
    const net_data = await fetch(appSettings.METEONET_URL + 'execute.php?action=json&json_request=load_net');
    const station_data = await fetch(appSettings.METEONET_URL + 'execute.php?action=json&json_request=load_last');
    const json_net_data = await net_data.json();  
    const json_station_data = await station_data.json();
    setNetworkData(json_net_data.stations);
    setStationData(json_station_data.stations);
  }

  return (
    <div className="MapActivity">
      <div className="leaflet-container">
        <MapContainer center={[appSettings.MAP_CENTER_LAT, appSettings.MAP_CENTER_LON]} zoom={11}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="/info">WeatherLab360</a> visualizer'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            Object.entries(networkData).map(([statSysName,station]) => (
              <Marker position={[station.gps_long, station.gps_lat]} icon={StationMarker}>
                <Popup>
                  <b>{station.location}</b><br/>
                  Orario: {stationData.length !== 0 && new Date(stationData[statSysName].data.timestamp * 1000).toLocaleTimeString()} <br/>
                  Temperatura: {stationData.length !== 0 && stationData[statSysName].data.temp} C°<br/>
                  Umidità: {stationData.length !== 0 && stationData[statSysName].data.rh} %<br/>
                  Pressione: {stationData.length !== 0 && stationData[statSysName].data.press} hPa<br/>
                  Vento: {stationData.length !== 0 && stationData[statSysName].data.wind_speed} km/h<br/>
                  Pioggia (Anno): {stationData.length !== 0 && stationData[statSysName].data.rain_year} mm<br/>
                  {//TODO: Cambiare nell'API meteonet il fuzionamento del valore rain così che ritorni la giornaliera
                  }
                  </Popup>
                <Tooltip direction="left" offset={[-20, 0]} opacity={1} permanent>
                  <b>{stationData.length !== 0 && stationData[statSysName].data.temp}C°</b>
                </Tooltip>
              </Marker>
            ))
          }
        </MapContainer>
      </div>
    </div>
  );
}

export default MapActivity;
