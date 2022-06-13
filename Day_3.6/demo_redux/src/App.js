import React from 'react';
import { connect } from 'react-redux';
function App(props) {
	const increment = () => {
		props.dispatch({
			type: 'INCRE'
		});
	};
	const decrement = () => {
		props.dispatch({
			type: 'DECRE'
		});
	};
	return (
		<div>
			<button onClick={increment}>Increnent</button>
			<button onClick={decrement}>Decrement</button>
			<h2>{props.count}</h2>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		count: state.count
	};
};
export default connect(mapStateToProps)(App);
