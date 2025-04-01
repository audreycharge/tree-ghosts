import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import broken from '../assets/broken.jpg';
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
            <Button
                onClick={setToggle}
                variant="primary"
            >
                Open Me
            </Button>
            {toggle &&(
                <div>
                    <div id="overlay"
                        onClick={setToggle}
                    ></div>
                    <Card style={{ width: '18rem', position:'absolute', left:'50%', transform:'translateX(-50%)', zIndex:'100'}}>
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