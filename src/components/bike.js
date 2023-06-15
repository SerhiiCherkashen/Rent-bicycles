import React from "react";
import { connect } from "react-redux";
import { deleteClickAC, selectorAC, submitAC } from "../redux/BikeActionCreator/bikeActionCreator";


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
        </div>

        <div> 1. You can Return Bike  :


            {
                props.bikes
                    .filter((b) => (
                        props.availableBikes.find((ab) => ab === b.id)
                    ))
                    .map((element) => (
                        < div >
                            <span>{element.name}</span>
                            < button onClick={() => {
                                let id = element.id
                                props.clickDelete(id)
                            }}> Delete </button>
                        </div>
                    ))
            }

        </div >
        {
            (props.totalCount === 0) ? <p>You have no rented bicycles</p>
                : <p>You have {props.totalCount} rented bike . Yor rent (Total : ${props.totalPrice})</p>

        }
        {
            (props.availableCount) ? <p>Available bicycles ({props.availableCount})</p>
                : <p> There are no available bicycles</p>
        }
    </div >
}
let mapStateToProps = (state) => {
    let v = state.BikePage.variables
    let c = state.BikePage.currentBike
    let page = state.BikePage
    return {
        availableBikes: page.availableBikes,
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
        bikes: page.bikes,
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
        clickDelete: (id) => {
            dispatch(deleteClickAC(id))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bike)










{/* 
            {
                props.bikes.filter((b) => (
                    props.availableBikes.find((ab) => ab === b.id)
                )).length
            } */}















