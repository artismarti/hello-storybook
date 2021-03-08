import React from 'react';
import PropTypes from 'prop-types';

import CodebarButton from '../CodebarButton/CodebarButton';
import Logo from '../Logo/Logo';
import './Header.css';

import { Title } from '../Typography/index';

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
        <CodebarButton
          size="small"
          onClick={onLogout}
          label="Sign Out"
        ></CodebarButton>
      ) : (
        <>
          <CodebarButton onClick={onLogin} label="Sign In"></CodebarButton>
          <CodebarButton
            variant="ghost"
            onClick={onCreateAccount}
            label="Sign Up"
          ></CodebarButton>
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
