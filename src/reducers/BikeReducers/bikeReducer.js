import { SELECTOR_CLICK, SUBMIT_CLICK } from "../../redux/types"


let initialState = {
    now: "nichego",
    currentBike: "",
    value: 0,
    selectValue: "",
    nameBike: "",
    priceBike: "",
    selectClick: "",
    two: "dwa",
    Road: {
        id: 1,
        name: "Road Bike",
        price: 10
    },
    mountain: {
        id: 2,
        name: "Mountain Bike",
        price: 20
    },
    Touring: {
        id: 3,
        name: "Touring Bike",
        price: 15
    },
    Folding: {
        id: 4,
        name: "Folding Bike",
        price: 25
    },
    Fixed: {
        id: 5,
        name: "Fixed Bike",
        price: 12
    },
    BMX: {
        id: 6,
        name: "BMX Bike",
        price: 10
    },
    Recumbent: {
        id: 7,
        name: "Recumbent Bike",
        price: 18
    },
    Cruiser: {
        id: 8,
        name: "Cruiser Bike",
        price: 35
    },
    Hybrid: {
        id: 9,
        name: "Hybrid Bike",
        price: 20
    },
    Cycle: {
        id: 10,
        name: "Cycle Bike",
        price: 40
    },
    Electric: {
        id: 11,
        name: "Electric Bike",
        price: 50
    },




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
        case SUBMIT_CLICK:
            return { ...state, value: state.value + 1 }
        case SELECTOR_CLICK:
            let select = document.getElementById("select");
            let getValue = select.value;

            let arrayState = Object.keys(state)
            console.log("arrayState : ", arrayState)

            for (let i = 0; i < arrayState.length; i++) {
                if (getValue === arrayState[i]) {
                    console.log("  state initial   ", state)
                    console.log("  arrayState[i]  ", arrayState[i])
                    console.log("    state.arrayState[i].name  ", state.arrayState[i].name)
                    return { ...state, nameBike: state.arrayState[i].name }
                }

            }
        // arrayState.forEach(el => {
        //     // console.log("arrayState : ", el, getValue, el === getValue)
        //     // console.log("arrayState  state.el: ", state.el)
        //     if (el === getValue) {
        //         // let nazva = el
        //         // console.log(" nazva : ", nazva)
        //         // console.log("arrayState  state.nazva: ", state.nazva)
        //         // console.log(" element : ", state)
        //         // console.log(" element : ", el)
        //         // console.log(" element : ", typeof el)
        //         // console.log(" element : ", Number(el))
        //         // console.log(" element : ", typeof Number(el))
        //         // console.log(" nameBike 'Road': ", state.Mountain)
        //         // console.log(" nameBike Road: ", state.Road)
        //         // console.log(" nameBike Road.name : ", state.Road.name)
        //         // console.log(" nameBike state: ", state)
        //         // console.log(" nameBike getValue: ", state.getValue)
        //         // console.log(" nameBike getValue: ", state.getValue)
        //         // console.log(" nameBike el: ", state.el)
        //         // let imia = initialState.el.name
        //         return {
        //             ...state, selectClick: el
        //         }
        //     }
        // })
        // return { ...state, selectValue: getValue }
        default: return state
    }
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