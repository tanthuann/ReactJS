import React, { Component } from 'react';

import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
        let { currentLight } = this.props;
        console.log('Renderinggg.....');
        return(
            <div className='TrafficLight'>
                <div className={classNames('bulb', 'red', {
                    active: currentLight === RED
                    })} >
                </div>
                <div className={classNames('bulb', 'yellow', {
                    active: currentLight === YELLOW
                    })} >
                </div>
                <div className={classNames('bulb', 'green', {
                    active: currentLight === GREEN
                    })} >
                </div>
            </div>
        );
    }
}

export default TrafficLight;