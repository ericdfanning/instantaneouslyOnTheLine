import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Splash from './Splash.jsx';
import NavBar from './NavBar.jsx';

class App extends React.Component {
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
				<NavBar />	
				<main>
				  <Switch>
				    <Route exact path='/' component={Home} />
				    <Route path='/home' component={Home} />
				    <Route path='/Splash' component={Splash} />
				  </Switch>
				</main>
			</div>
		)
	}
}

export default App