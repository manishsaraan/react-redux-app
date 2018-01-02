import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component{
	render(){
		return(
             <div>
               <h1>About Page</h1>
               <Link to="/" className="btn btn-primary btn-lg">Home</Link>
             </div>
			);
	}
};

export default AboutPage;