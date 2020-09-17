import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRented, deleteRent, discount, bikesRequested, bikesOnError } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../../error-indicator';

class RentedBikes extends Component {


    componentDidMount() {
        console.log('!')
        const { getAllRented, fetchRented, bikesOnError } = this.props;
        bikesRequested()
        getAllRented()
            .then(fetchRented)
            .catch(bikesOnError)
    }

    rentDiscont = id => {
        const { onDiscount, discount, bikesOnError } = this.props;
        console.log(id);
        onDiscount({ id })
            .then(discount(id))
            .catch(bikesOnError)
    }
    cancelRent = id => {
        const { removeRent, deleteRent, bikesOnError } = this.props;
        removeRent({ id })
            .then(deleteRent(id))
            .catch(data => bikesOnError(data.message))
    }


    render() {
        const { rented, loading, error } = this.props;

        const list = rented.map(item => {
            const { id } = item;
            const discountIcon = <i className="fa fa-tag fa-lg icon" onClick={() => this.rentDiscont(id)}></i>
            const date = Date.now();
            const initialDate = date - Date.parse(item.date)
            const rentDate = initialDate / 1000 / 60;

            return (
                <li className="item list-group-item" key={id}>
                    {rentDate > 0.1 && discountIcon}
                    <span id="name">{item.name} / {item.type} / ${item.price}   </span>

                    <button type="button" className="btn btn-danger float-right col-3 but" onClick={() => this.cancelRent(id)}>Cancel rent</button>
                </li>
            )

        })
        const price = rented.reduce((total, next) => {
            return total + next.price
        }, 0)

        const content = loading ? <Spinner /> : null;
        const onError = error ? <ErrorIndicator /> : null
        return (
            <div className="container ">
                <div className='col-9 main'>
                    <h5 id="rent"><span role="img" aria-label="emoji">🤩</span>Your rent (Total: {price}$)</h5>
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

const mapStateToProps = ({ loading, error, rented }) => {
    return { loading, error, rented }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRented: rented => dispatch(fetchRented(rented)),
        deleteRent: id => dispatch(deleteRent(id)),
        discount: id => dispatch(discount(id)),
        bikesRequested: () => dispatch(bikesRequested()),
        bikesOnError: e => dispatch(bikesOnError(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentedBikes);