import { DELETE_VALUE, ON_CLICK_ON_INPUT, SEND_VALUE } from "../types";


export const sendValueAC = (text) => ({ type: SEND_VALUE, text })

export const deleteValueAC = () => ({ type: DELETE_VALUE })

export const onClickOnInputAC = () => ({ type: ON_CLICK_ON_INPUT })