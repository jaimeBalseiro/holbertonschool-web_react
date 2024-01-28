import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null,
};

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const extended = StyleSheet.extend([globalExtension]);
const globalStyles = extended.StyleSheet.create({
  [GLOBALS]: {
    body: {
      margin: 0,
      overflow: 'hidden',
      fontFamily: 'Arial, Helvetica, sans-serif',
      '--holberton-red': '#e0003c',
      '--default-blue': 'rgb(0, 0, 255)',
    },
    'div#root': {
      backgroundColor: '#fff',
      height: 'calc(100vw - 16px)',
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

const styles = StyleSheet.create({
  appBody: {
    flexGrow: 1,
    padding: 24,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    extended.css(globalStyles[GLOBALS]);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleKeydown(event) {
    const { key, ctrlKey } = event;
    if (ctrlKey && key === 'h') {
      window.alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.props.displayDrawer}
        />
        <Header />
        <main className={css(styles.appBody)}>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySectionWithMarginBottom title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
              erat eget urna mattis volutpat. In eu malesuada purus, eget mollis
              lectus. Donec vitae elit et ipsum lobortis porttitor. Proin felis
              arcu, sagittis sit amet massa ac, consectetur hendrerit leo. Sed
              tempor eros ac ligula tempor convallis. Ut nec luctus turpis. Sed
              hendrerit imperdiet nulla.
            </p>
          </BodySectionWithMarginBottom>
        </main>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => {},
};

export default App;