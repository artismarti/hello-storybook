import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SVG = styled.svg``;

SVG.propTypes = {
  xlinkHref: PropTypes.string,
  version: PropTypes.string,
  xmlns: PropTypes.string,
};
SVG.defaultProps = {
  xlinkHref: "http://www.w3.org/1999/xlink",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
};

export default SVG;
