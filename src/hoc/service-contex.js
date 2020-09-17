import { Bconsumer } from '../contex';
import React from 'react';
const serviceContex = (mapMethodsToProps) => (Wraped) => {
    return (props) => {
        return (
            <Bconsumer>
                {
                    (bikesSevice) => {
                        const serviceProps = mapMethodsToProps(bikesSevice);
                        return (
                            <Wraped {...props} {...serviceProps} />
                        )
                    }
                }
            </Bconsumer>
        )
    }
};
export default serviceContex;