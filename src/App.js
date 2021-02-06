import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown, ListGroup } from 'react-bootstrap';
import './App.css';

export default function App() {
  const [itemType, setItemType] = useState(["a=Alcoholic"])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${itemType}`)
     .then(response => response.json())
     .then(json => setItemType(json.drinks))
  });

  return (
    <>
        <div className="header">
          <h1> 🍻 Welcome to Cocktail World 🥂</h1>
          <img className="titleImg" src={process.env.PUBLIC_URL + "images/title.jpg"} />
          <p> Choose your drinks from the Menu </p>
        </div>

        <div className="dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic" size="lg">
                Choose Wisely!!
                </Dropdown.Toggle>
                <Dropdown.Menu size="lg">
                  <Dropdown.Item onClick={() => setItemType(["a=Non_Alcoholic"])}>Ordinary drinks</Dropdown.Item>
                  <Dropdown.Item onClick={() => setItemType(["c=Cocktail"])}>Cocktails</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic" size="lg">
               Choose your Glass..
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setItemType(["g=Cocktail_glass"])}>Cocktail Glasses</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic" size="lg">
                Wanna Get High!!!
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setItemType(["i=Gin"])}>Gin Based Drinks</Dropdown.Item>
                <Dropdown.Item onClick={() => setItemType(["i=Vodka"])}>Vodka Based Drinks</Dropdown.Item>
                <Dropdown.Item onClick={() => setItemType(["i=Dry_Vermouth"])}>Poison Based Drinks</Dropdown.Item>
                <Dropdown.Item onClick={() => setItemType(["i=Anis"])}>Anis Based Drinks</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>

    <div>
        <h3> All Beverages </h3>
        <div className="container">
        <ListGroup>
        {itemType.map(item => {
          return <ListGroup.Item variant="danger"><span>🍹 {item.strDrink} 🍸</span></ListGroup.Item>
        })}
        </ListGroup>
        </div>
    </div>

    <div className="footer">
      <h5>Made with ❤️ in India</h5>
      <h6>© Copyright 2021 Cocktail World</h6>
      </div>
    </>
  );
}
