
import React from "react"
import { connect } from "react-redux"
import { schetchikMinusAC, schetchikPlusAC } from "../redux/SchetchikActionCreator/schetchikAC"


const Schetchic = (props) => {
    return <div className="schetchikWrapper" >
        <h4>{props.name}</h4>
        <p>{props.hello}</p>
        {props.total}<input value={props.value} />
        <button onClick={props.clickPlus} >+</button>
        <button onClick={props.clickMinus} >-</button>
    </div>
}

let mapStateToProps = (state) => {
    let page = state.SchetchikPage
    return {
        hello: page.hello,
        value: page.value,
        name: page.name,
        total: page.total,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        clickPlus: () => {
            dispatch(schetchikPlusAC())
        },
        clickMinus: () => {
            dispatch(schetchikMinusAC())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schetchic)









