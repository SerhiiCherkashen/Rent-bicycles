import { MAP_BIKE_ARRAY, SELECTOR_CLICK, SUBMIT_CLICK } from "../../redux/types"


let initialState = {
    variables: {
        now: "nichego",
        currentBike: "",
        value: 0,
        selectValue: "",
        nameBike: "Road Bike",
        priceBike: 10,
        selectClick: "",
        two: "dwa",
        totalCount: 0,
        totalPrice: 0,
        availableCount: 11
    },
    currentBike: {
        bikeId: "1",
        bikeAvailable: true,
        bikeSelectName: "Road",
        bikeName: "Road Bike",
        bikePrice: 10,
    },
    miniArray: "qwerty",
    mapBikeArray: [],
    bikeArray: [
        "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
        "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
    ],
    bikes: [
        {
            id: 1,
            available: true,
            selectName: "Road",
            name: "Road Bike",
            price: 10
        },
        {
            id: 2,
            available: true,
            selectName: "Mountain",
            name: "Mountain Bike",
            price: 20
        },
        {
            id: 3,
            available: true,
            selectName: "Touring",
            name: "Touring Bike",
            price: 15
        },
        {
            id: 4,
            available: true,
            selectName: "Folding",
            name: "Folding Bike",
            price: 25
        },
        {
            id: 5,
            available: true,
            selectName: "Fixed",
            name: "Fixed Bike",
            price: 12
        },
        {
            id: 6,
            available: true,
            selectName: "BMX",
            name: "BMX Bike",
            price: 10
        },
        {
            id: 7,
            available: true,
            selectName: "Recumbent",
            name: "Recumbent Bike",
            price: 18
        },
        {
            id: 8,
            available: true,
            selectName: "Cruiser",
            name: "Cruiser Bike",
            price: 35
        },
        {
            id: 9,
            available: true,
            selectName: "Hybrid",
            name: "Hybrid Bike",
            price: 20
        },
        {
            id: 10,
            available: true,
            selectName: "Cycle",
            name: "Cycle Bike",
            price: 40
        },
        {
            id: 11,
            available: true,
            selectName: "Electric",
            name: "Electric Bike",
            price: 50
        },
    ],




}
// switch (action.type) {
//     case Mountain:
//         return "hello"
//     case Road:
//         return "hello"
//     case Touring:
//         return "hello"
//     case Folding:
//         return "hello"
//     case Fixed:
//         return "hello"
//     default:   }

export const bikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAP_BIKE_ARRAY:
            return {
                // ...state, miniArray: state.bikeArray[3]

                ...state, mapBikeArray: state.bikeArray.forEach((item, index) => {
                    <option value={String(item)}>{item}</option>
                })
            }
        case SELECTOR_CLICK:
            let select = document.getElementById("select");
            let getValue = select.value;
            let i = ""
            let element = ""
            state.bikes.forEach((el, index) => {
                if (el.selectName === getValue) {
                    i = index
                    element = el
                    return (i, el)
                }
                return (i, el)
            })
            let b = { ...state }

            b.currentBike = { ...state.currentBike }

            b.currentBike.bikeId = state.bikes[i].id
            b.currentBike.bikeAvailable = state.bikes[i].available
            b.currentBike.bikeSelectName = state.bikes[i].selectName
            b.currentBike.bikeName = state.bikes[i].name
            b.currentBike.bikePrice = state.bikes[i].price

            console.log("b : ", b)

            return b
        case SUBMIT_CLICK:
            if (state.currentBike.bikeAvailable) {

                let a = { ...state }
                a.currentBike = { ...state.currentBike }
                a.currentBike.bikeAvailable = false
                a.bikes[state.currentBike.bikeId - 1] = { ...state.bikes[state.currentBike.bikeId - 1] }
                a.bikes[state.currentBike.bikeId - 1].available = false

                a.variables = { ...state.variables }
                a.variables.totalCount = state.variables.totalCount + 1
                a.variables.totalPrice = state.variables.totalPrice + state.currentBike.bikePrice
                a.variables.availableCount = state.variables.availableCount - 1
                return a

                // return {
                //     ...state,
                //      ...state.currentBike,
                //     bikeAvailable: false,
                //     ...state.bikes[state.currentBike.bikeId - 1],
                //     available: false,
                //     ...state.variables,
                //     totalCount: state.variables.totalCount + 1,
                //     totalPrice: state.variables.totalPrice + state.currentBike.bikePrice,
                //     availableCount: state.variables.availableCount - 1,
                // }

            } else {
                alert("this bike is no available !")
            }

        // return { ...state, value: state.variables.value + 1 }
        default: return state
    }





















    // let y = 0
    // for (let i = 0; i < state.bikes.length; i++) {
    //     y = i
    //     console.log(" i >>>", i, "y", y)
    //     if (getValue === state.bikes[i].selectName) {
    //         // console.log("true")
    //         // console.log("getValue", getValue)
    //         // console.log("state.bikes[i].selectName", state.bikes[i].selectName)
    //         // console.log("state.bikes[i = 6].name  : ", state.bikes[6].selectName)
    //         // return { ...state, nameBike: state.bikes[5].name, now: "hyi" }
    //     }
    //     // console.log("y end   AAAAA: ")
    //     // console.log("y end : ", y)
    //     // return y
    // }
    // 
    // console.log("for end  : ")
    // console.log("y 3 : ", y)
    // return {
    //     ...state, nameBike: state.bikes[y].name
    // }
    // return { ...state, nameBike: "lol" }
    // a = { ...state }





    // let arrayState = Object.keys(state.bikes)
    // console.log("arrayState : ", arrayState)
    // 
    // for (let i = 0; i < arrayState.length; i++) {
    //     if (getValue === arrayState[i]) {
    //         return {
    //             ...state, nameBike: state.bikes[arrayState[i]].name
    //         }
    //     }
    // }
    // let rrr = state.bikes
    // console.log("state.bike : ", state.bikes)









    // switch (action.type) {
    //     case SUBMIT_CLICK:
    //         return { ...state }
    //     // , now: state.BMX
    //     case CLICK_SELECTOR:
    //         // let select = document.getElementById("select");
    //         // let getValue = select.value;
    //         // console.log(getValue);
    //         return { ...state, }
    //     // currentBike: getValue 
    //     default: return state
    // }
}


// let obj2 = {
//     name: "ivan",
//     id: 3,
//     ves: "50kg",
// }

// let masivObj = Object.keys(obj2)

// masivObj.forEach



    // RoadBike: "Road Bike",
    // TouringBike: "Touring Bike",
    // FoldingBike: "Folding Bike",
    // Fixed: "Fixed Gear/ Track Bike",
    // BMX: "BMX",
    // RecumbentBike: "Recumbent Bike",
    // Cruiser: "Cruiser",
    // HybridBike: "Hybrid Bike",
    // CycleCrossBike: "Cycle cross Bike",
    // ElectricBike: "Electric Bike",



// export const roadActionCreator = () => ({
//     type: Road
// })
// export const mountainActionCreator = () => ({
//     type: Mountain
// })
// export const bmxActionCreator = () => ({
//     type: BMX
// })
// export const fixedActionCreator = () => ({
//     type: Fixed
// })
// export const electricActionCreator = () => ({
//     type: Electric
// })







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