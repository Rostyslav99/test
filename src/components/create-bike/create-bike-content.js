import React from 'react';

const CreateBikeContent = ({ syncErr, name, onNameChange, onTypeChange, option, price, onPriceChange, onDataSent }) => {
    return (
        <div className="container">
            {syncErr}
            <div className='col-9 main'>
                <h5><span role="img" aria-label="emoji">🤑</span> Create new rent</h5>

                <div className="block d-flex justify-content-center">
                    <ul className="row" >
                        <li className="col-4">
                            <label htmlFor="exampleFormControlSelect1" className="lable">Bike name</label>
                            <input type="text" className="form-control" placeholder="name" aria-describedby="inputGroup-sizing" value={name} onChange={onNameChange}></input>
                        </li>
                        <li className="col-3">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1" className="lable">Bike type</label>
                                <select className="form-control" id="exampleFormControlSelect1" onChange={onTypeChange} value={option}>
                                    <option>Custom</option>
                                    <option>Road</option>
                                    <option>Mountain</option>
                                    <option>Cyclocross</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                        </li>
                        <li className="col-2">
                            <label htmlFor="exampleFormControlSelect1 " className="lable">Rent price</label>
                            <input type="text" className="form-control" placeholder="price" aria-describedby="inputGroup-sizing" value={price} onChange={onPriceChange}></input>
                        </li>
                        <li id="btn" >
                            <button className="btn btn-success" onClick={onDataSent}>Submit rent</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default CreateBikeContent;