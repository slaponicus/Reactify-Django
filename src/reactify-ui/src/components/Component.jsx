{/* template/skeleton file for components with async API calls */}
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionToUse} from "../actions";

class myComponent extends Component {
	state = {
	}

	componentDidMount() {
		if (!this.props.myProp.length){
		   	this.props.fetchMyProp();
		}
	}	

	render(){
		if (!this.props.myProp.isLoading){
			return(
				<div>
				</div>
			)
		} else {
			return(<div>Loading...</div>)
		}
	}
}

const mapStateToProps = state => {
	let errors = [];
	if (state.myProp.errors) {
		errors = Object.keys(state.myProp.errors).map(field => {
			return {field, message: state.myProp.errors[field]};
		});
	}
	if (state.myProp2.errors) {
		errors = [...errors, Object.keys(state.myProp2.errors).map(field => {
			return {field, message: state.myProp2.errors[field]};
		})];
	}
	return {
		myProps: state.myProps,
		myProp2: state.myProp2,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchMyProp: (category) => {
			dispatch(myProp.fetchMyProp());
	    },
		fetchMyProp2: () => {
			dispatch(myProp2.fetchMyProp2());
	    },

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
