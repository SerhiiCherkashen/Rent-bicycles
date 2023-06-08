import { createStore } from "redux"
import { CLICK, DISLIKE } from "./types"

let initialState = {
    likes: 0,
    dislike: 0,
}

let reducer = (state = initialState, action) => {
    console.log("reducer state  : ", state)
    console.log("reducer action  : ", action)
    switch (action.type) {
        case CLICK:
            return { ...state, likes: state.likes + 1 }
        case DISLIKE:
            return { ...state, dislike: state.dislike - 1 }
        default: return state
    }
}

let store = createStore(reducer)

export default store












