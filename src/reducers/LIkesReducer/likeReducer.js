import { CLICK, DISLIKE } from "../../redux/types"


let initialState = {
    likes: 0,
    dislike: 0,
}

export const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK:
            return { ...state, likes: state.likes + 1 }
        case DISLIKE:
            return { ...state, dislike: state.dislike - 1 }
        default: return state
    }
}














