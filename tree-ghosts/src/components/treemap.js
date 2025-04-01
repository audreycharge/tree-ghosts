import * as React from 'react';
import {Map, useControl, Marker} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import TreeButton from "./treebutton";
import Trees from '../treenodes';

function TreeMap () {
  return <Map
  initialViewState={{
    longitude: -84.373093,
    latitude: 33.748720,
    zoom: 3
  }}
  style={{width: "100%", height: '100vh'}}
  mapStyle="https://demotiles.maplibre.org/style.json"
>
  {Trees.map((e) => {
    return (
      <Marker latitude={e.lat} longitude={e.long}>
        <TreeButton name={e.name} img={e.img}/>
      </Marker>
    );
  })}

  {/* <Marker
    latitude={33.748720} longitude={-84.373093}
  ><TreeButton/></Marker> */}
  {/* <TreeButton/> */}
</Map>;
};

export default TreeMap;
