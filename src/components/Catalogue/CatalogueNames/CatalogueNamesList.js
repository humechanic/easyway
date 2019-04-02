import React, {Component} from 'react';
import CatalogueNameItem from '../CatalogueTitles/CatalogueNameItem'
import classes from './CatalogueNamesList.module.css'

const CatalogueNameItems = [
    {
        catalogueNameType: 'appliance',
        catalogueName: 'Бытовая техника',
    },
    {
        catalogueNameType: 'beauty',
        catalogueName: 'Красота и здоровье',
    },
    {
        catalogueNameType: 'sport',
        catalogueName: 'Спорт и туризм',
    },
    {
        catalogueNameType: 'forkids',
        catalogueName: 'Для детей',
    },
    {
        catalogueNameType: 'education',
        catalogueName: 'Образование',
    },
    {
        catalogueNameType: 'catalogue',
        catalogueName: 'Весь каталог',
    },



];
class CatalogueNamesList extends Component {
    render () {
        return (
            <div className={classes.Catalogue}>
                {
                    CatalogueNameItems.map((itemData, index) => {
                        return (
                            <CatalogueNameItem
                                key={`${itemData.catalogueNameType}` + {index}}
                                type={itemData.catalogueNameType}>{itemData.catalogueName}</CatalogueNameItem>
                        )
                    })
                }
            </div>
        )
    }

}

export default CatalogueNamesList;