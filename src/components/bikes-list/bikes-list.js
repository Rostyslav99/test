import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBikes, rentBike, removeBike, bikesRequested, bikesOnError } from '../../actions';
import ErrorIndicator from '../../error-indicator';
import Spinner from '../spinner';
import './bikes-list.css';


class BikesList extends Component {

    componentDidMount() {
        console.log("ComponentDidMount");
        const { fetchBikes, getAllBikes } = this.props;
        bikesRequested()
        getAllBikes()
            .then(fetchBikes)
            .catch(bikesOnError)

    }


    onRentSubmit = id => {
        const { addBike, rentBike, bikesOnError } = this.props;
        addBike({ id })
            .then(rentBike(id))
            .catch(bikesOnError)
    }

    onDeleteSubmit = id => {
        const { deleteBike, removeBike, bikesOnError } = this.props;
        deleteBike({ id })
            .then(removeBike(id))
            .catch(bikesOnError)
    }

    render() {
        const { bikes, loading, error } = this.props;
        const list = bikes.map(item => {
            const { id } = item;
            return (
                <li className="item list-group-item " key={id}>
                    <span id="name">{item.name} / {item.type} / ${item.price}</span>
                    <button type="button" className="btn btn-danger float-right col-2 but" onClick={() => this.onDeleteSubmit(id)}>Delete</button>
                    <button type="button" className="btn btn-primary float-right col-2 but" onClick={() => this.onRentSubmit(id)}>Rent</button>
                </li>
            )
        })

        const content = loading ? <Spinner /> : null

        const onError = error ? <ErrorIndicator /> : null

        return (
            <div className="container ">
                <div className='col-9 main'>
                    <h5><span role="img" aria-label="emoji">🚲</span>Available bicycles ({bikes.length})</h5>
                    <div>
                        <ul className="item-list list-group ">
                            {list}
                            {content}
                            {onError}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ bikes, loading, error }) => {
    return { bikes, loading, error };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBikes: bikes => dispatch(fetchBikes(bikes)),
        rentBike: id => dispatch(rentBike(id)),
        removeBike: id => dispatch(removeBike(id)),
        bikesRequested: () => dispatch(bikesRequested()),
        bikesOnError: e => dispatch(bikesOnError(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BikesList);