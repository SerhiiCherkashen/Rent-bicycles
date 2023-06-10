import { act } from "react-dom/test-utils"
import { DELETE_VALUE, ON_CLICK_ON_INPUT, SEND_VALUE } from "../../redux/types"


let initialState = {
    hello: "Hello World!!!",
    text: 'Hello World!!!',
    value: "AAA",
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_VALUE:
            return { ...state, hello: action.text, text: action.text }
        case DELETE_VALUE:
            return { ...state, hello: "", value: state.text }
        case ON_CLICK_ON_INPUT:
            return { ...state, hello: "" }
        default: return state
    }
}











