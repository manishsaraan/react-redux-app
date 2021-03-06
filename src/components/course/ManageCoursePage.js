import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class manageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);    
    this.state = {
      course : Object.assign({}, props.course),
      errors : {},
      saving : false
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
  
  //this will fire is props changes.but not on intial render
  componentWillReceiveProps(nextProps){   
     if(this.props.course.id != nextProps.course.id){
      //necessary to populate form when existing course is loaded directly
      this.setState({course : Object.assign({}, nextProps.course)});
     }
  }

  saveCourse(event){
   event.preventDefault();
   this.setState({saving : true});
   this.props.actions.saveCourse(this.state.course)
                     .then( () => this.redirect())
                     .catch(error => {
                      toastr.error(error);
                      this.setState({saving : false});
                     });
  }

  redirect(){
   this.setState({saving : false});
   toastr.success('Course Saved');
   //redirect to courses list page
   this.context.router.push('/courses');
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
          saving = {this.state.saving}
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

//pull in the React Router context so router is available on this.context.router.
manageCoursePage.contextTypes = {
 router : PropTypes.object
};

//get course by id
function getCourseById(courses, id){
  const course = courses.filter( course => course.id == id);
  if(course) return course[0]; //as filter return array so pass first value
  return null;
}

function mapStateToProps(state, ownProps){
  let courseId = ownProps.params.id; //from path '/course/:id'
  let course = {id : '', watchHref : '', title : '', authorId : '', length : '', category : ''};
  
  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }
  
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
