import React from "react"
import { connect } from "react-redux"


let bikeArray = [
    "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
    "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
]

const Bike = (props) => {


    <div>
        <div className='bike'>
            <div className='bikeName q'>
                <span>Bike name</span>
                <input value={"Your bike"} />
            </div>

            <div className='bikeType q'>
                <span>Bike type</span>
                <select id="select">
                    {/* onChange={props.clickSelector}  */}

                    {bikeArray.map((item) => {
                        return <option value={item}>{item}</option>
                    })}
                </select>
            </div>

            <div className='bikePrice q'>
                <span>Price($)</span>
                <input value={10} />
            </div>

            <div className='select q'>
                <button  >Submit</button>
                {/* onClick={props.clickSubmit} */}

            </div>
        </div>

        <p>You have "props.now" rented bike . Yor rent (Total : $0)</p>
        <p>You have no rented bicycles</p>
        <p>Available bicycles (0)</p>
        <p> There are no available bicycles</p>
    </div>
}



let mapStateToProps = (state) => {
    let bike = state.BikePage
    return {
        name: bike.name,
        price: bike.price,
        now: bike.now,
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         // clickSelector: () => {
//         //     dispatch(selectorAC())
//         // },
//         clickSubmit: () => {
//             // dispatch(submitAC())
//             const action = { type: SUBMIT_CLICK }
//             dispatch(action)
//         }
//     }
// }

export default connect(mapStateToProps, null)(Bike)











/* let clickBike = (e) => {*/
/*     // console.log("e", e)*/
/*     console.log("You choose Mauntain bike")*/
/*     var select = document.getElementById("select");*/
/*     var value = select.value;*/
/*     console.log("e", value)*/
/* }*/



{/* <select>
        <option>hyi / 2</option>
        <option>A</option>
        <option>b</option>
        <option>c</option>
      </select> */}
{/*  */ }
{/*  */ }
{/*  */ }










{/* <option value={"1"} >Mountain Bike</option>
                        <option value={"2"}>Road Bike</option>
                        <option value={"3"}>Touring Bike</option>
                        <option value={"4"} >Folding Bike</option>
                        <option value={"5"}>Fixed Gear/ Track Bike</option>
                        <option value={"6"}>BMX </option>
                        <option value={"7"}>Recumbent Bike </option>
                        <option value={"8"}> Cruiser </option>
                        <option value={"9"}>Hybrid Bike </option>
                        <option value={"10"}>Cyclocross Bike </option>
                        <option value={"11"}>Electric Bike </option> */}