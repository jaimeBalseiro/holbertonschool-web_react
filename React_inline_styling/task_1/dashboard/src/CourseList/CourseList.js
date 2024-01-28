import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  tblCourseList: {
    border: '1px solid rgba(0, 0, 0, 0.4)',
    width: '100%',
  },
});

const CourseList = (props) => {
  const { listCourses } = props;
  return (
    <table
      key="course-list"
      id="course-list"
      className={css(styles.tblCourseList)}
    >
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td>No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={`course-${course.id}`}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;