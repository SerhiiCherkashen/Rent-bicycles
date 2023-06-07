import React from "react"


const Bicycle = (props) => {
    let clickBike = () => {
        console.log("You choose Mauntain bike")
    }
    let changeFn = () => {
        console.log("you are creasy")
    }
    return (
        <div>
            <div className='bike' >
                <div className='bikeName q'>
                    <span>Bike name</span>
                    <input value={"Your bike"} />
                </div>
                <div className='bikeType q'>
                    <span>Bike type</span>
                    <select onChange={changeFn} >
                        <option >TEXT</option>
                        <option>Road Bike</option>
                        <option>Touring Bike</option>
                        <option>Folding Bike</option>
                        <option>Fixed Gear/ Track Bike</option>
                        <option>BMX </option>
                        <option>Recumbent Bike </option>
                        <option> Cruiser </option>
                        <option>Hybrid Bike </option>
                        <option>Cyclocross Bike </option>
                        <option>Electric Bike </option>
                    </select>
                </div>
                <div className='bikePrice q'>
                    <span>Price($)</span>
                    <input value={10} />
                </div>
                <div className='select q'>
                    <button>Submit</button>
                </div>
            </div >

            <p>You have 0 rented bike . Yor rent (Total : $0)</p>
            <p>You have no rented bicycles</p>
            <p>Available bicycles (0)</p>
            <p> There are no available bicycles</p>
            <p> TEST</p>
        </div>
    )
}


export default Bicycle









{/* <select>
        <option>hyi / 2</option>
        <option>A</option>
        <option>b</option>
        <option>c</option>
      </select> */}
{/*  */ }
{/*  */ }
{/*  */ }









