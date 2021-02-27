import React from "react";

import Header from "../Header/Header";
import Card from "../Card/Card";
import CardList from "../Card/CardList";

const Page = ({ user }) => (
  <article>
    <Header user={user} header="I Can Hazz Cats" />
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
    </CardList>
  </article>
);

export default Page;
