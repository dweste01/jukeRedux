import {SET_LYRICS} from '../constants'
import axios from 'axios'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'

const setLyricsActionCreator = function(text) {
	return {
		type: SET_LYRICS,
		lyric: text
	}
}



export const setLyrics = function (artist, song) {

	return function (dispatch, getState) {
		axios.get(`/api/lyrics/${artist}/${song}`)
		.then(res => res.data)
		.then(data => {
			dispatch(setLyricsActionCreator(data.lyric));
		})
	}
}