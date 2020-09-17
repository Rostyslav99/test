import React from 'react'
import CreateBike from './create-bike';
import BikesList from './bikes-list';
import RentedBikes from './rented-bikes';
import serviceContex from '../hoc';
const Components = ({ getAllBikes, postBike, addBike, getAllRented, deleteBike, removeRent, onDiscount }) => {

    return (
        <React.Fragment>
            <CreateBike postBike={postBike} />
            <RentedBikes getAllRented={getAllRented} removeRent={removeRent} onDiscount={onDiscount} />
            <BikesList getAllBikes={getAllBikes} addBike={addBike} deleteBike={deleteBike} />
        </React.Fragment>
    )

}
const mapMethodsToProps = (bikesSevice) => {
    return {
        getAllBikes: bikesSevice.getAllBikes,
        postBike: bikesSevice.postBike,
        getAllRented: bikesSevice.getAllRented,
        addBike: bikesSevice.addBike,
        deleteBike: bikesSevice.deleteBike,
        removeRent: bikesSevice.removeRent,
        onDiscount: bikesSevice.onDiscount
    }
}

export default serviceContex(mapMethodsToProps)(Components);