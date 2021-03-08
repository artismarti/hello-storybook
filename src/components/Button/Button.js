import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const getVariant = (variant) => {
  console.log({ variant });
  switch (variant) {
    case 'primary':
      return primary;
    case 'ghost':
      return ghost;
    case 'danger':
      return danger;
    default:
      return primary;
  }
};
const getSize = (size) => {
  console.log({ size });
  switch (size) {
    case 'small':
      return small;
    case 'medium':
      return medium;
    case 'large':
      return large;
    default:
      return medium;
  }
};

const primary = css`
  background: green;
`;
const ghost = css`
  background: grey;
`;
const danger = css`
  background: red;
`;
const small = css`
  font: 13px sans-serif;
  border-radius: 12px;
  padding: 10px 25px;
`;
const medium = css`
  font: 16px sans-serif;
  border-radius: 16px;
  padding: 10px 30px;
`;
const large = css`
  font: 26px sans-serif;
  border-radius: 26px;
  padding: 20px 35px;
`;
const buttonbase = css`
  color: white;
  border: none;
  margin: 4px 2px;
`;

const ButtonBase = styled.button`
  ${buttonbase};
  ${(props) => getVariant(props.variant)}
  ${(props) => getSize(props.size)}
`;
const Button = ({ variant, size, children, backgroundColor }) => {
  return (
    <ButtonBase
      variant={variant}
      size={size}
      style={backgroundColor && { backgroundColor }}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'danger', 'ghost']),
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: 'primary',
  size: 'medium',
  children: 'Button Label',
};

