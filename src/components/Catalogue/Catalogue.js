import React, {Component} from 'react';
import CatalogueItem from './CatalogueItem'
import classes from './Catalogue.module.css'

class Catalogue extends Component {
    render () {
        return (<div className={classes.Catalogue}>
                <CatalogueItem type={"appliance"}>Бытовая техника</CatalogueItem>
                <CatalogueItem type={"beauty"}>Здоровье и красота</CatalogueItem>
                <CatalogueItem type={"sport"}>Спорт и туризм</CatalogueItem>
                <CatalogueItem type={"forkids"}>Для детей</CatalogueItem>
                <CatalogueItem type={"education"}>Обучение</CatalogueItem>
                <CatalogueItem type={"wholeCatalogue"}>Весь каталог</CatalogueItem>
                </div>
        )
    }

}

export default Catalogue;