const Road = "Road"
const Mountain = "Mountain"
const Touring = "Touring"
const Folding = "Folding"
const Fixed = "Fixed"
const BMX = "BMX"
const Recumbent = "Recumbent"
const Cruiser = "Cruiser"
const Hybrid = "Hybrid"
const Cycle = "Cycle"
const Electric = "Electric"

let bikeArray = [
    Road, Mountain, Touring, Folding, Fixed, BMX,
    Recumbent, Cruiser, Hybrid, Cycle, Electric,
]

let initialState = {
    MountainBike: "Mountain Bike",
    RoadBike: "Road Bike",
    TouringBike: "Touring Bike",
    FoldingBike: "Folding Bike",
    Fixed: "Fixed Gear/ Track Bike",
    BMX: "BMX",
    RecumbentBike: "Recumbent Bike",
    Cruiser: "Cruiser",
    HybridBike: "Hybrid Bike",
    CycleCrossBike: "Cycle cross Bike",
    ElectricBike: "Electric Bike",
}



let nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case Mountain:
            return "hello"
        case Road:
            return "hello"
        case Touring:
            return "hello"
        case Folding:
            return "hello"
        case Fixed:
            return "hello"
        default: return state
    }
}

export const roadActionCreator = () => ({
    type: Road
})
export const mountainActionCreator = () => ({
    type: Mountain
})
export const bmxActionCreator = () => ({
    type: BMX
})
export const fixedActionCreator = () => ({
    type: Fixed
})
export const electricActionCreator = () => ({
    type: Electric
})







        //     return "hello"
        // case Mountain:
        //     return "hello"
        // case Mountain:
        //     return "hello"
        // case Mountain:
        //     return "hello"
        // case Mountain:
        //     return "hello"
        // case Mountain:
        //     return "hello"
        // case Mountain:
        //     return "hello"









    // < option > Mountain Bike</option>
    //         <option>Road Bike</option>
    //         <option>Touring Bike</option>
    //         <option>Folding Bike</option>
    //         <option>Fixed Gear/ Track Bike</option>
    //         <option>BMX </option>
    //         <option>Recumbent Bike </option>
    //         <option> Cruiser </option>
    //         <option>Hybrid Bike </option>
    //         <option>Cyclocross Bike </option>
    //         <option>Electric Bike </option>