export const initialLyricState = {
	text: ''
}

export default function (prevState = initialLyricState, action) {
 	switch (action.type) {
 		case "SET_LYRICS":
 			return Object.assign({}, prevState, {text: action.lyric})
 		default:
 			return prevState;
 	}
 }
