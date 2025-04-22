import * as React from 'react';
import {Map} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import TreeButton from "./treebutton";
import Trees from '../treenodes';
import FutureNodes from '../futurenodes';
import PastNodes from '../pastnodes';

function TreeMap ({state}) {
  const bounds = [
    [-84.38, 33.744], // Southwest coordinates
    [-84.365, 33.755] // Northeast coordinates
  ];
  if (state === "Future") {
    return <Map
      initialViewState={{
        longitude: -84.373093,
        latitude: 33.748720,
        zoom: 16.5
      }}
      style={{width: "80%", height: '80vh', transform:'translateX(10%)'}}
      maxBounds={bounds}
      mapStyle="https://api.maptiler.com/maps/0196353f-ceaf-7560-ba8b-ea0384067836/style.json?key=KjjL6dFdWjXBhJd69IwT"
    >
      {FutureNodes.map((e) => {
        return (
            <TreeButton lat={e.lat} long={e.long} name={e.name} number={e.number} img={e.img} desc={e.desc}/>
        );
      })}
    </Map>
  } else if (state === "Present") {
    return <Map
      initialViewState={{
        longitude: -84.373093,
        latitude: 33.748720,
        zoom: 16.5
      }}
      style={{width: "80%", height: '80vh', transform:'translateX(10%)'}}
      maxBounds={bounds}
      mapStyle="https://api.maptiler.com/maps/0196353f-ceaf-7560-ba8b-ea0384067836/style.json?key=KjjL6dFdWjXBhJd69IwT"
    >
      {Trees.map((e) => {
        return (
            <TreeButton lat={e.lat} long={e.long} name={e.name} number={e.number} img={e.img} desc={e.desc}/>
        );
      })}
    </Map>
  }
  else {
    return <Map
      initialViewState={{
        longitude: -84.373093,
        latitude: 33.748720,
        zoom: 16.5
      }}
      style={{width: "80%", height: '80vh', transform:'translateX(10%)'}}
      maxBounds={bounds}
      mapStyle="https://api.maptiler.com/maps/0196353f-ceaf-7560-ba8b-ea0384067836/style.json?key=KjjL6dFdWjXBhJd69IwT"
    >
      {PastNodes.map((e) => {
        return (
            <TreeButton lat={e.lat} long={e.long} name={e.name} number={e.number} img={e.img} desc={e.desc}/>
        );
      })}
    </Map>
  }
};

export default TreeMap;
