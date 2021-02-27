import React from 'react';
import './Card.css';

const CardList = ({ children, ...props }) => {
  return <div className="container">{children}</div>;
};

export default CardList;
