import React from "react"
import img from "./likePhoto.png"
import { connect } from "react-redux"
import { CLICK, DISLIKE } from "../redux/types"

const Likes = (props) => {
    console.log("Likes components props : ", props)
    return <div className="likeWrapper" >
        <img src={img} />
        <div>
            <button onClick={props.onClickFn} >like :  {props.likes} </button>
            <button onClick={props.DislikeClick}  >Dislike : {props.dislike}</button>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    console.log("mapStatetoprops : ", state)
    return {
        likes: state.likes,
        dislike: state.dislike,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickFn: () => {
            console.log("click")
            const action = { type: CLICK }
            dispatch(action)
        },
        DislikeClick: () => {
            console.log("dis click")
            const action = { type: DISLIKE }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)




























