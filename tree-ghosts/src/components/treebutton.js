import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Marker} from '@vis.gl/react-maplibre';
import '../App.css';
// import TreeCard from "./treecard";

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
            </Marker>
            {toggle &&(
                <div>
                    <div id="overlay"
                        onClick={setToggle}
                    ></div>
                    <Card style={{ width: '18rem', position:'fixed', left:'50%', top:'50%', transform:'translate(-50%, -50%)', zIndex:'100'}}>
                    <Card.Img variant="bottom" src={props.img} />
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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