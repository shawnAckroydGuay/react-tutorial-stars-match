import React from 'react';
import {utils} from '../utils/utils';

const StarsDisplay = props => {

    return (
    <>
        {
            utils.range(1, props.starCount).map(starId => 
                <div className="star"></div>    
            )
        }
    </>
    );
}
export default StarsDisplay;
