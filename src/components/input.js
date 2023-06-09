import React from "react"
import { connect } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { deleteValueAC, sendValueAC } from "../redux/InputActionCreater/inputActionCreater"


const Input = (props) => {
    // console.log("Input props :  ", props)
    const text = useSelector((state) => {
        console.log("state >>>>>", state)
        return state.InputPage.text
    })
    const value = useSelector((state) => state.InputPage.value)
    const hello = useSelector((state) => state.InputPage.hello)

    const dispatch = useDispatch()

    let sendValue = () => {
        dispatch(deleteValueAC())
    }
    let onChangeValue = (e) => {
        console.log("onChangeValue :  ", e.target.value)
        dispatch(sendValueAC(e.target.value))
    }
    let onClickONInput = () => {
        dispatch(onClickONInput())
    }

    return <div className="inputWrapper" >
        {value}
        <input value={hello} onChange={onChangeValue} />
        <button onClick={sendValue} >Send</button>
        {/* onClick={sendButton} */}
    </div>
}

// const mapStateToProps = (state) => {
//     let inputState = state.InputPage
//     return {
//         value: inputState.value
//     }
// }
// 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendValue: () => {
//             dispatch(sendValueAC())
//         }
//     }
// }

export default Input









