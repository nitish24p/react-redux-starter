// Each function must return an object with type and some data
function dummyAction(index) {
	return {
		type : 'INCREMENT_LIKES',
		index: index
	};
}

export default dummyAction;
