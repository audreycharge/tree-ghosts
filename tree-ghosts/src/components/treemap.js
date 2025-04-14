import * as React from 'react';
import {Map, useControl} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import TreeButton from "./treebutton";
import Trees from '../treenodes';

function TreeMap () {
  const bounds = [
    [-84.38, 33.744], // Southwest coordinates
    [-84.365, 33.755] // Northeast coordinates
  ];

  return <Map
  initialViewState={{
    longitude: -84.373093,
    latitude: 33.748720,
    zoom: 16.5
  }}
  style={{width: "80%", height: '80vh', transform:'translateX(10%)'}}
  // mapStyle="https://api.maptiler.com/maps/streets/style.json?key=KjjL6dFdWjXBhJd69IwT"
  maxBounds={bounds}
  mapStyle="https://api.maptiler.com/maps/0196353f-ceaf-7560-ba8b-ea0384067836/style.json?key=KjjL6dFdWjXBhJd69IwT"
>
  {Trees.map((e) => {
    return (
        <TreeButton lat={e.lat} long={e.long} name={e.name} img={e.img}/>
    );
  })}

  {/* <Marker
    latitude={33.748720} longitude={-84.373093}
  ><TreeButton/></Marker> */}
  {/* <TreeButton/> */}
</Map>;
};

export default TreeMap;
