import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class manageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course : {},
      errors : {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  
  updateCourseState(event){ 
     const field = event.target.name;
     let course = this.state.course;
     course[field] = event.target.value;
     return this.setState({course : course});
  }

  saveCourse(event){
   event.preventDefault();
   this.props.actions.saveCourse(this.state.course);
  }

  render(){
    return (
       <div>
         <CourseForm
          course={this.state.course}
          errors = {this.state.errors}
          allAuthors= {this.props.authors}
          onChange = {this.updateCourseState}
          onSave = {this.saveCourse}
         />
       </div>
      );
  }
}

manageCoursePage.propTypes = {
  course : PropTypes.object.isRequired,
  authors : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};

function mapStateToProps(state, ownState){
  let course = {id : '', watchHref : '', title : '', authorId : '', length : '', category : ''};
  const authorsFormattedForDropdown = state.authors.map( author => {
    return {
      value : author.id,
      text : author.firstName +' '+ author.lastName 
    };
  });

  return {
    course : course,
    authors : authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return {
     actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(manageCoursePage);
