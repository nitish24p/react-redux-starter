// reducer takes in action, copy of current state(store) return a new update fo the store

function defaultAction(state=[], action) {
	console.log(action);
	return state;
}


export default defaultAction;