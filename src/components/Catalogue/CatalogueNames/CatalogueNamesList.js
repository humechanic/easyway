import React from 'react';
import CatalogueNameItem from '../CatalogueTitles/CatalogueNameItem'
import classes from './CatalogueNamesList.module.css'
import {connect} from 'react-redux';

const CatalogueNamesList = (props) => {

    return (
        <div className={classes.Catalogue}>
            {
                props.catalogueNamesList.map((itemData, index) => {
                    return (
                        <CatalogueNameItem
                            key={`${itemData.catalogueNameType}` + {index}}
                            type={itemData.catalogueNameType}>{itemData.catalogueName}</CatalogueNameItem>
                    )
                })
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        catalogueNamesList: state.cataloguePage.CatalogueNameItems,
    }
}

export default connect(mapStateToProps)(CatalogueNamesList);