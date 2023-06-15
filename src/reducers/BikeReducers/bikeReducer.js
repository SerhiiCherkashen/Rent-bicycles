import { DELETE_CLICK, SELECTOR_CLICK, SUBMIT_CLICK } from "../../redux/types"


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
    selectOptionBikeArray: [],

    canReturnBike: [],
    availableBikes: [],
    itemsCanReturnBike: [],

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
    renderOptionsFn() {
        this.bikeArray.map(el => {
            this.selectOptionBikeArray.push(<option value={String(el)}>{el}</option>)
        })
    }
}
initialState.renderOptionsFn()


export const bikeReducer = (state = initialState, action) => {
    switch (action.type) {
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

                c.bikeArray = [...state.bikeArray]
                c.canReturnBike = [...state.canReturnBike]
                c.availableBikes = [...state.availableBikes]
                c.availableBikes.push(c.currentBike.bikeId)

                return c
            } else {
                alert("this bike is no available !")
                return state
            }
        case DELETE_CLICK:
            let d = { ...state }

            d.variables = { ...state.variables }
            d.variables.totalCount = state.variables.totalCount - 1
            d.variables.availableCount = state.variables.availableCount + 1
            d.variables.totalPrice = state.variables.totalPrice - state.currentBike.bikePrice
            d.availableBikes = [...state.availableBikes]

            for (let i = 0; i < d.availableBikes.length; i++) {
                if (d.availableBikes[i] === action.id) {
                    d.availableBikes.splice(i, 1)
                    break
                }
            }

            return d
        default: return state
    }
}


