
const rentBike = (state, payload) => {
    const idx = state.bikes.findIndex(({ id }) => id === payload)
    return {
        ...state,
        bikes: [
            ...state.bikes.slice(0, idx),
            ...state.bikes.slice(idx + 1)
        ],
        rented: [
            ...state.rented,
            state.bikes[idx]
        ],
        loading: false,
        error: null
    };
}

const removeBike = (state, payload) => {
    const idx = state.rented.findIndex(({ id }) => id === payload)
    return {
        ...state,
        rented: [
            ...state.rented.slice(0, idx),
            ...state.rented.slice(idx + 1)
        ],
        bikes: [
            ...state.bikes,
            state.rented[idx] = {
                ...state.rented[idx],
                price: state.rented[idx].discount * 2
            }
        ],
        loading: false,
        error: null
    };
}
const deleteBike = (state, payload) => {
    const idx = state.bikes.findIndex(({ id }) => id === payload)
    return {
        ...state,
        bikes: [
            ...state.bikes.slice(0, idx),
            ...state.bikes.slice(idx + 1)
        ],
        loading: false,
        error: null
    }
}

const createBike = (state, payload) => {
    return {
        ...state,
        bikes: [...state.bikes, payload],
        loading: false,
        error: null,
    }
}
const initialState = {
    bikes: [],
    rented: [],
    loading: true,
    error: null
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BIKES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'BIKES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'BIKES_FETCH':
            return {
                ...state,
                bikes: [...action.payload],
                loading: false,
                error: null
            };

        case 'FETCH_RENTED':
            return {
                ...state,
                rented: [...action.payload],
                loading: false,
                error: null,
            }

        case 'DISCOUNT':
            console.log(action.payload);
            const idx = state.rented.findIndex(({ id }) => id === action.payload);
            const newItemPrice = {
                ...state.rented[idx],
                price: state.rented[idx].price / 2,
                date: null
            }
            return {
                ...state,
                rented: [
                    ...state.rented.slice(0, idx),
                    newItemPrice,
                    ...state.rented.slice(idx + 1)
                ],
                loading: false,
                error: null,
            }

        case 'DELETE_RENT':
            return removeBike(state, action.payload)

        case 'CREATE_BIKE':
            return createBike(state, action.payload);

        case 'RENT_BIKE':
            return rentBike(state, action.payload)

        case 'REMOVE_BIKE':
            return deleteBike(state, action.payload)


        default:
            return state;
    }
}

export default reducer;


