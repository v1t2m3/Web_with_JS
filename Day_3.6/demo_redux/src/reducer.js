let initialState = { count: 0 };
function reducer(state = initialState, action) {
	if (action.type === 'INCRE') {
		return {
			count: state.count + 1
		};
	}
	if (action.type === 'DECRE') {
		return {
			count: state.count - 1
		};
	}
	return state;
}
export default reducer;
