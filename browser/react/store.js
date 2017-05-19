import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const midd = applyMiddleware(loggerMiddleware, thunkMiddleware)

export default createStore(combineReducers({
	lyrics: lyricsReducer,
	player: playerReducer
}), midd);