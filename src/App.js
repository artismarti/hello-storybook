import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CardList from "./components/Card/CardList";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header user header="I Can Hazz Cats"></Header>
      <CardList>
        <Card
          image="http://placekitten.com/g/200/300"
          alt="kitten"
          title="Mittens"
          subtitle="Cute AF"
          text="Lorem Ipsum Catsum"
          button1Label="Extremely Cute"
          button2Label="Dangerously Cute"
        />
        <Card
          image="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=300&q=60"
          alt="kitten"
          title="Kitty Cat"
          subtitle="OMG"
          text="Lorem Ipsum Catsum"
          button1Label="Extremely Cute"
          button2Label="Dangerously Cute"
        />
        <Card
          image="https://images.unsplash.com/photo-1566458226966-5d1efe19e4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=300&q=60"
          alt="kitten"
          title="Meowster"
          subtitle="Cute Overload"
          text="Lorem Ipsum Catsum"
          button1Label="Extremely Cute"
          button2Label="Dangerously Cute"
        />
      </CardList>
    </div>
  );
}

export default App;
