import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationsWrapper: {
    marginRight: 32,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    maxWidth: '40%',
  },
  menuItem: {
    justifyContent: 'flex-end',
    width: '100%',
    display: 'inline-flex',
  },
  notifications: {
    position: 'relative',
    padding: 12,
    border: '1px dashed var(--holberton-red)',
    width: '100%',
  },
  hidden: {
    display: 'none',
  },
  priorityUrgent: {
    color: 'var(--holberton-red)',
  },
  priorityDefault: {
    color: 'var(--default-blue)',
  },
});

class Notifications extends PureComponent {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      (this.props.listNotifications || []).length <
      (nextProps.listNotifications || []).length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const handleCloseClick = () => {
      console.log('Close button has been clicked');
    };
    return (
      <div className={css(styles.notificationsWrapper)}>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div
          className={clsx(css(styles.notifications), {
            [css(styles.hidden)]: !displayDrawer,
          })}
        >
          <button
            onClick={handleCloseClick}
            aria-label="Close"
            style={{
              boxShadow: 'unset',
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'transparent',
              border: 'unset',
            }}
          >
            X
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  class_urgent={css(styles.priorityUrgent)}
                  class_default={css(styles.priorityDefault)}
                  key={`notification-${notification.id}`}
                  markAsRead={this.markAsRead}
                  {...notification}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;