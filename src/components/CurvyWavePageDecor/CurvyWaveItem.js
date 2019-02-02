import React from 'react';
import './CurvyWaveItem.css';

const CurvyWaveItem = (props) => {
    return (
                <div className={[props.type] + " CurvyWaveItem"}>
                        <span>
                            {props.waveLength}
                        </span>
                </div>
    )
};

 CurvyWaveItem.defaultProps = {
    type: 'blue', /*from Button.module.css*/
    waveLength: '.......................................................',
 };
export default CurvyWaveItem;