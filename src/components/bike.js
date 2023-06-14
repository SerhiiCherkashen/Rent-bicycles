import React from "react";
import { connect } from "react-redux";
import { deleteClickAC, mapBikeArrayAC, selectorAC, submitAC } from "../redux/BikeActionCreator/bikeActionCreator";
import { buttonClickFn } from "../reducers/BikeReducers/bikeReducer";

const Bike = (props) => {
    return <div>
        <div className='bike'>
            <div className='bikeName q'>
                <span>Bike name</span>
                <input value={props.bikeName} />
            </div>

            <div className='bikeType q'>
                <span>Bike type</span>
                <select onClick={props.clickSelect} id="select">
                    {props.selectOptionBikeArray}
                </select>
            </div>

            <div className='bikePrice q'>
                <span>Price($)</span>
                <input value={props.bikePrice} />
            </div>

            <div className='select q'>
                <button onClick={props.clickSubmit} >Submit</button>
            </div>

            <div className='select q'>
                <button onClick={props.clickDelete} >Delete</button>
            </div>
        </div>

        <div> 1. You can Return Bike  :   {props.canReturnBike}</div>

        {
            (props.totalCount === 0) ? <p>You have no rented bicycles</p>
                : <p>You have {props.totalCount} rented bike . Yor rent (Total : ${props.totalPrice})</p>

        }
        {
            (props.availableCount) ? <p>Available bicycles ({props.availableCount})</p>
                : <p> There are no available bicycles</p>
        }


    </div>
}
let mapStateToProps = (state) => {
    // debugger
    // console.log("value : ", state.variables.value)
    let v = state.BikePage.variables
    let c = state.BikePage.currentBike
    let page = state.BikePage
    return {
        selectOptionBikeArray: page.selectOptionBikeArray,
        spareArray: page.spareArray,
        spareId: page.spareId,
        canReturnBike: page.canReturnBike,
        miniArray: page.miniArray,
        problemArray: page.problemArray,
        bikeArray: page.bikeArray,
        now: v.now,
        now2: v.now,
        value: v.value,
        selectValue: v.selectValue,
        selectClick: v.selectClick,
        totalCount: v.totalCount,
        totalPrice: v.totalPrice,
        availableCount: v.availableCount,

        bikeId: c.bikeId,
        bikeAvailable: c.bikeAvailable,
        bikeSelectName: c.bikeSelectName,
        bikeName: c.bikeName,
        bikePrice: c.bikePrice,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        clickSubmit: () => {
            dispatch(submitAC())
        },
        clickSelect: () => {
            dispatch(selectorAC())
        },
        // buttonClickFn: () => {
        //     dispatch(deleteClickAC())
        // },
        clickDelete: () => {
            dispatch(deleteClickAC())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bike)































// mapBikeArray: () => {
//     dispatch(mapBikeArrayAC())
// },


{/* <div> selectBikeArray :    {props.selectBikeArray}</div> */ }
{/* <div>  miniArray :    {props.miniArray}</div>
        <div>  bikeArray :    {props.bikeArray}</div>
        <div>  problemArray :    {props.problemArray}</div> */}
{/* <p>hyi</p>
        <div>  bikeAvailable  :   {props.bikeAvailable}</div>
        <div>  bikeName  :   {props.bikeName}</div>
        <div>  bikePrice  :   {props.bikePrice}</div> */}


{/* {
                        <select onClick={props.clickSelect} id="select">
                            {bikeArray.map((item, index) => {
                                return <option value={String(item)}>{item}</option>
                            })}
                        </select>
                    } */}

{/* {
                        bikeArray.map((item, index) => {
                            return <option value={String(item)}>{item}</option>
                        })
                    } */}
{/* <div>
                <button onClick={props.mapBikeArray} >ClickMap</button>
            </div> */}

// let bikeArray = [
//     "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
//     "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
// ]