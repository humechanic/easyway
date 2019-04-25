import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './BankMap.css';
import ServiceMapPointer from "../../MapPointer/ServicesMapPointer/ServiceMapPointer";

class BankMap extends Component {
    static defaultProps = {
        center: {
            lat: 53.8833852,
            lng: 27.5597663,
        },
        zoom: 12
    };
    render () {
        return (
            <div className={'ServiceMaps'}>
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <ServiceMapPointer
                    lat={53.9033852}
                    lng={27.5597663}
                />
                <ServiceMapPointer
                    lat={53.9133852}
                    lng={27.5497663}
                />
                <ServiceMapPointer
                    lat={53.9155555}
                    lng={27.5597663}
                />
                <ServiceMapPointer
                    lat={53.9097752}
                    lng={27.5597663}
                />
                <ServiceMapPointer
                    lat={53.9055552}
                    lng={27.5497223}
                />
                <ServiceMapPointer
                    lat={53.909}
                    lng={27.541}
                />
            </GoogleMapReact>
            </div>
        )
    }
}

export default BankMap;