const bikesRequested = () => {
    return{
        type: 'BIKES_REQUEST'
    }
};

const bikesOnError = e => {
    return {
        type: 'BIKES_ERROR',
        payload: e
    }
}

const fetchBikes = bikes => {
    return {
        type: 'BIKES_FETCH',
        payload: bikes
    }
};

const fetchRented = rented => {
    return {
        type: 'FETCH_RENTED',
        payload: rented
    }
};

const createBike = bike => {
    return {
        type: 'CREATE_BIKE',
        payload: bike
    }
};

const rentBike = id => {
    return {
        type: 'RENT_BIKE',
        payload: id
    }
};

const removeBike = id => {
    return {
        type: 'REMOVE_BIKE',
        payload: id
    }
};

const deleteRent = id =>{
    return {
        type: 'DELETE_RENT',
        payload: id
    }
};

const discount = id => {
    return {
        type: 'DISCOUNT',
        payload: id
    }
};


export {
    bikesRequested,
    bikesOnError,
    fetchRented,
    createBike,
    fetchBikes,
    rentBike,
    removeBike,
    deleteRent,
    discount
}