import { SCHETCHIK_MINUS, SCHETCHIK_PLUS } from "../../redux/types"





let initialState = {
    name: "Schetchik",
    hello: "Hello !",
    value: 0,
    zapas: "",
    total: 0
}

export const schetchikReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCHETCHIK_PLUS:
            return { ...state, value: state.value + 1, total: state.total + 1 }
        case SCHETCHIK_MINUS:
            return { ...state, value: state.value - 1, total: state.total + 1 }
        default: return state
    }
}











