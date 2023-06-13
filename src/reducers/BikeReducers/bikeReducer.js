import { MAP_BIKE_ARRAY, SELECTOR_CLICK, SUBMIT_CLICK } from "../../redux/types"

function privet() {
    alert("privet!!!")
}

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
    bikeArray: [
        "Road", "Mountain", "Touring", "Folding", "Fixed", "BMX",
        "Recumbent", "Cruiser", "Hybrid", "Cycle", "Electric",
    ],
    miniArray: "qwerty",
    problemArray: [
        "qwerty", "yuiop", "lol",
        // "aaa", "bbb", "ccc"
    ],
    // selectBikeArray: [
    //     <option id={1} value={String("Road")}>{"Road"}</option>,
    //     <option id={2} value={String("Mountain")}>{"Mountain"}</option>,
    //     <option id={3} value={String("Touring")}>{"Touring"}</option>,
    //     <option id={4} value={String("Folding")}>{"Folding"}</option>,
    //     <option id={5} value={String("Fixed")}>{"Fixed"}</option>,
    //     <option id={6} value={String("BMX")}>{"BMX"}</option>,
    //     <option id={7} value={String("Recumbent")}>{"Recumbent"}</option>,
    //     <option id={8} value={String("Cruiser")}>{"Cruiser"}</option>,
    //     <option id={9} value={String("Hybrid")}>{"Hybrid"}</option>,
    //     <option id={10} value={String("Cycle")}>{"Cycle"}</option>,
    //     <option id={11} value={String("Electric")}>{"Electric"}</option>,
    // ],
    selectBikeArray2: [],
    spareArray: "road",
    spareId: 1,
    canReturnBike: [],

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
let fn = () => {
    initialState.bikeArray.map(el => {
        initialState.selectBikeArray2.push(<option value={String(el)}>{el}</option>)
    })
    console.log("bikeArray : ", initialState.bikeArray)
    console.log("selectBikeArray2 : ", initialState.selectBikeArray2)
}
fn()

export const bikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAP_BIKE_ARRAY:

        // let a = { ...state }
        // a.bikeArray = [...state.bikeArray]
        // a.selectBikeArray2 = [...state.selectBikeArray2]

        // state.bikeArray.map(el => {
        //     a.selectBikeArray2.push(<option value={String(el)}>{el}</option>)
        // })
        // a.selectBikeArray2.push(state.bikeArray.map((item, index) => {
        //     // <option value={String(item)}>{item}</option>
        //     return item
        // })
        // )
        // console.log("bikeArray : ", state.bikeArray)
        // console.log("selectBikeArray2 : ", a.selectBikeArray2)
        // return a
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

            return b
        case SUBMIT_CLICK:
            if (state.currentBike.bikeAvailable) {

                let c = { ...state }
                c.currentBike = { ...state.currentBike }
                c.currentBike.bikeAvailable = false
                c.bikes[state.currentBike.bikeId - 1] = { ...state.bikes[state.currentBike.bikeId - 1] }
                c.bikes[state.currentBike.bikeId - 1].available = false

                c.variables = { ...state.variables }
                c.variables.totalCount = state.variables.totalCount + 1
                c.variables.totalPrice = state.variables.totalPrice + state.currentBike.bikePrice
                c.variables.availableCount = state.variables.availableCount - 1

                // a.spareArray = { ...state.spareArray }
                // a.spareArray = state.selectBikeArray.splice(state.currentBike.bikeId - 1, 1)
                // a.spareId = state.currentBike.bikeId
                // a.canReturnBike = state.spareArray
                // a.canReturnBike = a.spareArray
                // 
                // a.spareArray = { ...state.spareArray }
                // a.spareArray = state.selectBikeArray.splice(state.currentBike.bikeId - 1, 1)
                // a.spareId = state.currentBike.bikeId
                // a.canReturnBike = state.spareArray
                // a.canReturnBike = a.spareArray
                // a.canReturnBike = state.spareArray

                // a.selectBikeArray2 = [...state.selectBikeArray2]
                // a.bikeArray = [...state.bikeArray]
                // a.selectBikeArray2.push(state.bikeArray.map((item, index) => {
                //     return <option value={String(item)}>{item}</option>
                // })
                // )

                console.log("a : ", c)
                console.log("spareArray : ", state.spareArray)
                // {
                //     bikeArray.map((item, index) => {
                //         return <option value={String(item)}>{item}</option>
                //     })
                // }
                return c
            } else {
                alert("this bike is no available !")
            }

        default: return state
    }









    // function: () => {
    //     let localArray = []
    //     initialState.bikeArray.map((item, index) => {
    //         localArray.push(item)
    //     })
    //     console.log("localArray : ", localArray)
    //     return localArray
    // },

    // initialState.privet = privet
    // let funcForEach = () => {
    //     let localArray = []
    //     initialState.bikeArray.map((item, index) => {
    //         localArray.push(item)
    //     })
    //     console.log("localArray : ", localArray)
    //     return localArray
    // }
    // let resultFunc = funcForEach()
    // console.log("resultFunc : ", resultFunc)



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