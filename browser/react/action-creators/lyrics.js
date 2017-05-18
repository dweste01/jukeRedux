import Constants from '../constants'
console.log(Constants);


export const setLyrics = function (text) {
	return {
		type: Constants,
		lyric: text
	}
}