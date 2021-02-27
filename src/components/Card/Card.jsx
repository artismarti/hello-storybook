import React from "react";
import { Text, Title, SubTitle } from "../Typography";
import Button from "../Button/Button";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({
  children,
  image,
  alt,
  title,
  subtitle,
  text,
  button1Label,
  button2Label,
  backgroundColor,
}) => {
  return (
    <div
      className="card container"
      style={backgroundColor && { backgroundColor }}
    >
      <img src={image} alt={alt} />
      <div>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Text>{text}</Text>
        <Button size="small">{button1Label}</Button>
        <Button size="small" variant="danger">
          {button2Label}
        </Button>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  button1Label: PropTypes.string,
  button2Label: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Card.defaultProps = {
  backgroundColor: "white",
  image: "http://link.to/an/image",
  alt: "this is an image",
  title: "Title goes here",
  subtitle: "Subtitle here",
  text: "I am text",
  button1Label: "Button 1 label",
  button2Label: "Button 2 label",
};
