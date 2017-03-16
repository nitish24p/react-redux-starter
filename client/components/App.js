import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  
  }
  componentWillMount() {
    const self = this;
    self.appStore = self.context.store;
  }
	render() {
		return (
			<div className="container">
				<h1>Redux starter Installed</h1>
				<h3>Lets get hacking....</h3>
			</div>
		);
	}
}

App.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    defaultAction: state.defaultAction
  }
}

export default  connect(mapStateToProps, null)(App);
