import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Marker} from '@vis.gl/react-maplibre';
import '../App.css';
import pin from "../assets/treepin.svg"
import Button from 'react-bootstrap/Button';

function TreeButton(props) {
    //Using useToggle Hook
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };
  const [toggle, setToggle] = useToggle();
    return (
        <div>
            <Marker
                latitude={props.lat}
                longitude={props.long}
                onClick={setToggle}
            >
              <img src={pin} className="treepin"/>
            </Marker>
            {toggle &&(
              <div>
                <div id="overlay"
                    onClick={setToggle}
                  ></div>
                <Card style={{ width: '18rem', position:'fixed', left:'50%', top:'40%', transform:'translate(-50%, -50%)', zIndex:'100'}}>
                  <Card.Img variant="bottom" src={props.img} />
                  <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    Tree {props.number}<br/>
                      
                      {props.desc}
                  </Card.Text>
                  {/* <Button variant="flat" size="xxl">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            )}
        </div>
    )
  }
  
  export default TreeButton;