import { CHANGE, TITLE } from "../../redux/types"



let initialState = {
    title: "Google.hub",
    count: 0,
    value: "bay"
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            // let slovo = action.word
            let count = ++state.count
            let title = "Title " + count + "= ' " + state.value + " ' "
            state.value = ""
            return { ...state, title, count }
        case CHANGE:
            let value = action.text
            return { ...state, value }
        default: return state
    }
}

