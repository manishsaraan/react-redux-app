import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class manageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course : Object.assign({}, this.props.course),
      errors : {}
    };
  }

  render(){
    return (
       <div>
         <CourseForm
          course={this.props.course}
          errors = {this.state.errors}
          allAuthors= {[]}
         />
       </div>
      );
  }
}

manageCoursePage.propTypes = {
  course : PropTypes.object.isRequired
};

function mapStateToProps(state, ownState){
  let course = {id : '', watchHref : '', title : '', authorId : '', length : '', category : ''};
  return {
    course : course
  };
}

function mapDispatchToProps(dispatch){
  return {
     actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(manageCoursePage);
