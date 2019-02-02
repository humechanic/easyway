import React from 'react';
import Button from './../Button/Button';
import CurvyWaveItem from './CurvyWaveItem';
import './CurvyTitle.css';

const CurvyTitle = (props) => {
        return (
            <div className={"CurvyTitle"}>
                        <CurvyWaveItem
                            type={props.type}
                            waveLength={props.waveLength}
                        />
                        <Button
                            buttonType={[props.buttonType]}
                            buttonStyle={[props.buttonStyle]}
                        >{props.title}</Button>
                        <CurvyWaveItem
                            type={props.type}
                            waveLength={props.waveLength}
                        />
            </div>

        )
    };
export default CurvyTitle;
