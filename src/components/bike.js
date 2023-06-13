import React from "react";
import { connect } from "react-redux";
import { mapBikeArrayAC, selectorAC, submitAC } from "../redux/BikeActionCreator/bikeActionCreator";


// let bikeArray = [
//     "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
//     "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
// ]

const Bike = (props) => {
    return <div>
        <div className='bike'>
            <div className='bikeName q'>
                <span>Bike name</span>
                <input value={props.bikeName} />
            </div>
            {/* <div>
                <button onClick={props.mapBikeArray} >ClickMap</button>
            </div> */}
            <div className='bikeType q'>
                <span>Bike type</span>
                <select onClick={props.clickSelect} id="select">
                    {/* {
                        bikeArray.map((item, index) => {
                            return <option value={String(item)}>{item}</option>
                        })
                    } */}
                    {/* {props.selectBikeArray} */}
                    {props.selectBikeArray2}
                    {/* {props.selectBikeArray} */}
                    {/* {props.mapBikeArray()} */}
                    {/* {console.log("mapBikeArray : ", props.problemArray)} */}
                    {/* {
                        <select onClick={props.clickSelect} id="select">
                            {bikeArray.map((item, index) => {
                                return <option value={String(item)}>{item}</option>
                            })}
                        </select>
                    } */}
                </select>
            </div>

            <div className='bikePrice q'>
                <span>Price($)</span>
                <input value={props.bikePrice} />
            </div>

            <div className='select q'>
                <button onClick={props.clickSubmit} >Submit</button>

            </div>
        </div>
        {/* <span>{props.now}</span> */}
        {/* {/* <span>NOW :  {props.now}</span> */}
        <div> 1. SpareArray  :   {props.spareArray}</div>
        <div>2. SpareId  :   {props.spareId}</div>
        <div> 3. You can Return Bike  :   {props.canReturnBike}</div>
        {/* <div> selectBikeArray :    {props.selectBikeArray}</div> */}
        {/* <div>  miniArray :    {props.miniArray}</div>
        <div>  bikeArray :    {props.bikeArray}</div>
        <div>  problemArray :    {props.problemArray}</div> */}
        {/* <p>hyi</p>
        <div>  bikeAvailable  :   {props.bikeAvailable}</div>
        <div>  bikeName  :   {props.bikeName}</div>
        <div>  bikePrice  :   {props.bikePrice}</div> */}

        {
            (props.totalCount === 0) ? <p>You have no rented bicycles</p>
                : <p>You have {props.totalCount} rented bike . Yor rent (Total : ${props.totalPrice})</p>

        }
        {
            (props.availableCount) ? <p>Available bicycles ({props.availableCount})</p>
                : <p> There are no available bicycles</p>
        }
        <p>Hello world!!!</p>
        {/* {props.mapSelect} */}
        {/* {props.mapBikeArray()} */}
        {/* {props.bikeArray} */}


    </div>
}
let mapStateToProps = (state) => {
    // debugger
    // console.log("value : ", state.variables.value)
    let v = state.BikePage.variables
    let c = state.BikePage.currentBike
    let page = state.BikePage
    return {
        // mapBikeArray
        selectBikeArray2: page.selectBikeArray2,
        selectBikeArray: page.selectBikeArray,
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
        mapBikeArray: () => {
            dispatch(mapBikeArrayAC())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bike)















