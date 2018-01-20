import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  render(){
    const { courses } = this.props;
    return(
             <div>
               <h1>Courses</h1>
               <CourseList courses={courses} test="hello"/>
             </div>
      );
  }
}

CoursesPage.propTypes = {
  courses : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return {
    courses : state.courses //state.course is containing key we set up in the reducer ex. courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(courseActions, dispatch) //all actions will be available under this.props.actions
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
