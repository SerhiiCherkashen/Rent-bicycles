import React from "react"
import img from "./likePhoto.png"
import { connect } from "react-redux"
import { CLICK, DISLIKE } from "../redux/types"
import { dislikesActionCreator, likesActionCreator } from "../redux/LikesActionCreator/likesActionCreators"

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
    const likesPage = state.LikesPage
    console.log("mapStatetoprops : ", state)
    return {
        likes: likesPage.likes,
        dislike: likesPage.dislike,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickFn: () => {
            console.log("click")
            dispatch(likesActionCreator())
            // const action = { type: CLICK }
            // dispatch(action)
        },
        DislikeClick: () => {
            console.log("dis click")
            dispatch(dislikesActionCreator())
            // const action = { type: DISLIKE }
            // dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)




























