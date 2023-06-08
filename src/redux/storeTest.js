
import { createStore } from "redux"
import { CHANGE, TITLE } from "./types"
import { titleReducer } from "../reducers/TitleReducer/titleReducer"


// let initialState = {
//     title: "Google.hub",
//     count: 0,
//     value: "bay"
// }
// 
// const store = createStore((state = initialState, action) => {
//     switch (action.type) {
//         case TITLE:
//             // let slovo = action.word
//             let count = ++state.count
//             let title = "Title " + count + "= ' " + state.value + " ' "
//             state.value = ""
//             return { ...state, title, count }
//         case CHANGE:
//             let value = action.text
//             return { ...state, value }
//         default: return state
//     }
// })

export const storeTitle = createStore(titleReducer)

window.store = storeTitle
// export default store

export const setTitle = (word) => ({
    type: TITLE, word
})

export const changeValue = (text) => ({
    type: CHANGE, text
})







// export const plusActionCreator = () => ({
//     type: PLUS
// })
// export const minusActionCreator = () => ({
//     type: PLUS
// })
// export const resultActionCreator = () => ({
//     type: RESULT
// })

















