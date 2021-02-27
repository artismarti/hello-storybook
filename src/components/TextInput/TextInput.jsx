import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const getVariant = (variant) => {
  console.log({ variant });
  switch (variant) {
    case "normal":
      return normal;
    case "error":
      return error;
    default:
      return normal;
  }
};

const normal = css`
  font: 16px sans-serif;
`;

const error = css`
  font: 18px sans-serif;
  border: solid 2px red;
  color: red;
`;

const textinputbase = css`
  color: black;
  padding: 10px;
  margin: 4px 2px;
`;

const TextInputBase = styled.input`
  ${textinputbase};
  ${(props) => getVariant(props.variant)}
`;
const TextInput = ({ variant, label }) => {
  /* console.log({ variant }); */
  return (
    <label>
      {label}:
      <TextInputBase variant={variant} />
    </label>
  );
};

export default TextInput;

TextInput.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.element.isRequired,
};

TextInput.defaultProps = {
  variant: "normal",
  size: "normal",
};
