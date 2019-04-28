import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { SliderRail, Handle, Track } from './SliderRail';
import PriceFilter from './../Catalogue/PriceFilter';

const sliderStyle = {
    position: 'relative',
    width: '100%',
};
const defaultValues = [0, 3000];


class RangeSlider extends Component {

    state = {
        domain: [0, 3000],
        values: defaultValues.slice(),
        update: defaultValues.slice(),
        reversed: false,
    };
    onUpdate = update => {
        this.setState({update})
    };

    onChange = values => {
        this.setState({values})
    };

    render() {
        const {
            state: {domain, values, update, reversed,},
        } = this;


        return (
            <div style={{height: 50, width: '85%',}}>
                <Slider
                    mode={2}
                    step={1}
                    domain={domain}
                    reversed={reversed}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                >
                    <Rail>
                        {({getRailProps}) => <SliderRail getRailProps={getRailProps}/>}
                    </Rail>
                    <Handles>
                        {({handles, getHandleProps}) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        domain={domain}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks left={false} right={false}>
                        {({tracks, getTrackProps}) => (
                            <div className="slider-tracks">
                                {tracks.map(({id, source, target}) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>

                </Slider>

                <PriceFilter prices={this.props.products} values={values}/>
            </div>
        )
    }
}

export default RangeSlider;