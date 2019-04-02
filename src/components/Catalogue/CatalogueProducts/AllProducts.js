import React from 'react'
import CatalogueProductItem from "./CatalogueProductItem";
import itemImage from './../../../img/Catalogue/itemImage.png';
import './AllProducts.css'

const Products = [
    {
        id: 1,
        path: '/atlantМХМ2826-90',
        productName: 'Холодильник ATLANT МХМ 2826-90',
        productDesc: 'без всяких там No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
        itemImg: itemImage,
        productPrice: '160,00',
        offers: '13'
    },
    {
        id: 2,
        path: '/atlantМХМ2226-90',
        productName: 'Холодильник ATLANT МХМ 2226-90',
        productDesc: 'без No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
        itemImg: itemImage,
        productPrice: '160,00',
        offers: '12'
    },
    {
        id: 3,
        path: '/boschmxm4446-90',
        productName: 'Холодильник BOSCH МХМ 4446-90',
        productDesc: 'заменить текст No Frost, механическое управление, класс A, полезный объём: 288 л (235 + 53 л), 60x63x167 см, белый',
        itemImg: itemImage,
        productPrice: '160,00',
        offers: '15'
    },

];

const AllProducts = ({match}) => {
    return (
        <div className={'Products'}>{
            Products.map((Products, index) => {
                return (
                    <CatalogueProductItem
                        key={{index} + `${Products.id}`}
                        itemImg={Products.itemImg}
                        productName={Products.productName}
                        productDesc={Products.productDesc}
                        productPrice={Products.productPrice}
                        offers={Products.offers}
                        path={Products.path}
                    />
                )
            })
        }</div>
    )
};


export default AllProducts;