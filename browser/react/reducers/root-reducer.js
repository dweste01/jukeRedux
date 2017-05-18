 function reducer(prevState, action) {
 	switch (action.type) {
 		case "SET_LYRICS":
 			return Object.assign({}, prevState, {text: action.lyric})
 	

 		default:
 			return prevState;
 	}
 }

 export default reducer;