import { DELETE_CLICK, SELECTOR_CLICK, SUBMIT_CLICK } from "../types";



export const submitAC = () => ({ type: SUBMIT_CLICK })

export const selectorAC = () => ({ type: SELECTOR_CLICK })

export const deleteClickAC = (id) => ({ type: DELETE_CLICK, id })
