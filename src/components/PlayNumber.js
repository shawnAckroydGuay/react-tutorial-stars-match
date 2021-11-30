import React from 'react';
import { createPortal } from 'react-dom';
import { isElementOfType } from 'react-dom/test-utils';
import {colors} from '../utils/utils';


const PlayNumber = props => {

    return (
        <button
            className="number"
            onClick={() => props.onNumberClick(props.number, props.status)}
            style={{
                backgroundColor: colors[props.status]
            }}
        >{props.number}</button>
    );
}
export default PlayNumber;