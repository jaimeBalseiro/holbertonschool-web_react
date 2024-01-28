import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({});

function Login() {
  return (
    <section key="login" id="section_login">
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" />
        &nbsp; &nbsp;
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />
        &nbsp; &nbsp;
        <input type="submit" value="OK" />
      </form>
    </section>
  );
}

export default Login;