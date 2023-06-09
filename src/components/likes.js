import React from "react"
import img from "./likePhoto.png"
import { connect } from "react-redux"
import { dislikesActionCreator, likesActionCreator } from "../redux/LikesActionCreator/likesActionCreators"

// const Road = "Road"
// const Mountain = "Mountain"
// const Touring = "Touring"
// const Folding = "Folding"
// const Fixed = "Fixed"
// const BMX = "BMX"
// const Recumbent = "Recumbent"
// const Cruiser = "Cruiser"
// const Hybrid = "Hybrid"
// const Cycle = "Cycle"
// const Electric = "Electric"


// let bikeArray = [
//     "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
//     "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
// ]

// let obj = {}
// obj.lalala = "NEW VALUE"

// console.log("bikeArray : ", bikeArray)

// let objBike = bikeArray.map((item, index) => {
//     let name = item
//     obj.name = {
//         id: index,
//         nazva: item,
//     }
//     console.log("new obj : ", obj, "   item  ", item,)
// })

// console.log("objBike : ", objBike)
// console.log("new obj : ", obj)




const Likes = (props) => {
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
    return {
        likes: likesPage.likes,
        dislike: likesPage.dislike,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickFn: () => {
            dispatch(likesActionCreator())
            // const action = { type: CLICK }
            // dispatch(action)
        },
        DislikeClick: () => {
            dispatch(dislikesActionCreator())
            // const action = { type: DISLIKE }
            // dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)




























