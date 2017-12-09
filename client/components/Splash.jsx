import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class Splash extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	// *** React's lifecycle methods ***

	componentWillMount() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			  <p>You're on the splash page dude!</p>
			  <Link to="/home"> To the home page! Duh nuh nuh nuh nuh!</Link>
			</div>
		)
	}
}

export default Splash