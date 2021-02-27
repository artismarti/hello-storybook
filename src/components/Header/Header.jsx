import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Header.css";

import { Title } from "../Typography/index";

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  header,
}) => (
  <header>
    <div className="header">
      <Logo />
      <h2>{header}</h2>
      {user ? (
        <Button size="small" onClick={onLogout}>
          Log out
        </Button>
      ) : (
        <>
          <Button onClick={onLogin}>Log in</Button>
          <Button variant="ghost" onClick={onCreateAccount}>
            Sign up
          </Button>
        </>
      )}
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
