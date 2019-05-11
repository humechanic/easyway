import React from 'react';
import ServiceItem from "./ServiceItem";
import './ServiceCompanies.css';
import ServiceFilters from "../ServicesFilters/DayTimeFilter";
import {connect} from 'react-redux';

const ServiceCompanies = (props) => {
    return (
        <div className={'ServiceCompanies'}>
            <ServiceFilters/>
            {
                props.services.map((services, index) => {
                    return (
                        <ServiceItem
                            key={index + [services.location]}
                            serviceName={services.name}
                            serviceLocation={services.location}
                            serviceWorktime={services.prime}
                            serviceLogo={services.logo}
                        />
                    )
                })
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        services: state.servicePage.Services,
    }
}

export default connect(mapStateToProps)(ServiceCompanies);