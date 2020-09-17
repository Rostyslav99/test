import React, { Component } from 'react';
import './create-bike.css';
import { connect } from 'react-redux';
import { createBike, bikesOnError } from '../../actions';
import ErrorIndicator from '../../error-indicator';
import CreateBikeContent from './create-bike-content';
class CreateBike extends Component {

    state = {
        name: '',
        type: 'Custom',
        price: '',
        syncErr: null
    }

    onNameChange = e => {
        this.setState({ name: e.target.value })
    }
    onTypeChange = e => {
        this.setState({ type: e.target.value });
    }
    onPriceChange = e => {
        this.setState({ price: e.target.value })
    }
    onDataSent = () => {
        const { createBike, postBike, bikesOnError } = this.props;
        postBike(this.state)
            .then(data => {
                console.log(data)
                if (data.errors) {
                    this.setState({ syncErr: data.errors })
                    console.log(!!data.errors)
                    return;
                }
                createBike(data)
                this.setState({ syncErr: null })
            })
            .catch(bikesOnError)
        this.resetState();
    }
    resetState = () => {
        this.setState({
            name: '',
            type: 'Custom',
            price: ''
        })
    }

    render() {
        const { error } = this.props;
        if (error) {
            return <ErrorIndicator />
        }
        const syncErr = this.state.syncErr ? <div className="alert alert-info m-auto" role="alert">
            {this.state.syncErr.map(item => ' #' + item.msg)}
        </div> : null
        return (
            <CreateBikeContent
                name={this.state.name} onNameChange={this.onNameChange}
                onTypeChange={this.onTypeChange} option={this.state.option}
                price={this.state.price} onPriceChange={this.onPriceChange}
                onDataSent={this.onDataSent} syncErr={syncErr} />
        )
    }
}



const mapStateToProps = ({ bikes, loading, error }) => {
    return { bikes, loading, error };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBike: (bike) => dispatch(createBike(bike)),
        bikesOnError: e => dispatch(bikesOnError(e))
    }

}






export default connect(mapStateToProps, mapDispatchToProps)(CreateBike);