import React from "react";
import { connect } from "react-redux";
import { selectorAC, submitAC } from "../redux/BikeActionCreator/bikeActionCreator";


let bikeArray = [
    "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
    "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
]

const Bike = (props) => {
    return <div>
        <div className='bike'>
            <div className='bikeName q'>
                <span>Bike name</span>
                <input value={props.nameBike} />
            </div>

            <div className='bikeType q'>
                <span>Bike type</span>
                <select onClick={props.clickSelect} id="select">
                    {bikeArray.map((item, index) => {
                        return <option value={String(item)}>{item}</option>
                    })}
                </select>
            </div>

            <div className='bikePrice q'>
                <span>Price($)</span>
                <input value={props.priceBike} />
            </div>

            <div className='select q'>
                <button onClick={props.clickSubmit} >Submit</button>

            </div>
        </div>
        {/* <span>{props.now}</span> */}
        <span>   {props.selectValue}</span>
        <p> nazva : {props.selectClick}</p>
        <p>You have "props.now" rented bike . Yor rent (Total : $0)</p>
        <p>You have no rented bicycles</p>
        <p>Available bicycles (0)</p>
        <p> There are no available bicycles</p>

    </div>
}
let mapStateToProps = (state) => {
    let page = state.BikePage
    return {
        now: page.now,
        value: page.value,
        selectValue: page.selectValue,
        nameBike: page.nameBike,
        priceBike: page.priceBike,
        selectClick: page.selectClick,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        clickSubmit: () => {
            dispatch(submitAC())
        },
        clickSelect: () => {
            dispatch(selectorAC())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bike)
















