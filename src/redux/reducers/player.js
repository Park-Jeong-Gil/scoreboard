import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

const playerInitialState = {
	// a: 'aaa',
	players: [
		{name: 'LDK', score: 30, id: 1},
		{name: 'HONG', score: 40, id: 2},
		{name: 'KIM', score: 50, id: 3},
		{name: 'PARK', score: 60, id: 4}
	],
	title: 'Redux Scoreboard'
}
let maxId = 4;

export const playerReducer = (state = playerInitialState, action) => {
	let players;
	switch (action.type) {
		case ADD_PLAYER:
			console.log('addPlayer');
			players = [...state.players];
			players.push({name: action.name, id: ++maxId, score: 0});
			return {
				...state,
				players
			};
		case REMOVE_PLAYER:
			console.log('removePlayer');
			players = state.players.filter(player => player.id !== action.id);
			return {
				...state,
				players
			};
		case CHANGE_SCORE:
			console.log('change_score');
			players = [...state.players];
			// const player = players.find(player => player.id === action.id);
			// player.score += action.delta;
			players.forEach(player => {
				if (player.id === action.id) {
					player.score += action.delta;
				}
			})
			return {
				...state,
				players
			};
	}
	return state;
}