import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appHeader: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--holberton-red)',
    borderBottom: '3px solid var(--holberton-red)',
  },
  appLogo: {
    flexGrow: 0,
    pointerEvents: 'none',
    height: 200,
    width: 'auto',
  },
});

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 style={{ flexGrow: 1 }}>School dashboard</h1>
    </header>
  );
}

export default Header;