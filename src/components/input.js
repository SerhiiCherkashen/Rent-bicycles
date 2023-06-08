import React from "react"
import { connect } from "react-redux"


const Input = (props) => {
    return <div className="inputWrapper" >
        <input value={"Hello World!!!"} />
        <button onClick={sendValue} >Send</button>
        {/* onClick={sendButton} */}
    </div>
}

const mapStateToProps = (state) => {
    let inputState = state.InputPage
    return {
        value: inputState.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendValue: () => {
            dispatch(sendValueAC())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)









