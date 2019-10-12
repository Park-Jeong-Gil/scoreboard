import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";

export const addPlayer = (name) => {
	return {
		type: ADD_PLAYER,
		name: name
	}
}

export const removePlayer = (id) => {
	return {
		type: REMOVE_PLAYER,
		id
	}
}

export const changeScore = (id, delta) => {
  return {
    type: CHANGE_SCORE,
    id,
    delta
  }
}