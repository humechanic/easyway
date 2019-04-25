import React, {Component} from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import './ProductCarousel.css';
import itemImage1 from './../../../img/Catalogue/itemImage1.png';
import itemImage2 from './../../../img/Catalogue/itemImage2.png';
import itemImage3 from './../../../img/Catalogue/itemImage3.png';
import itemImage4 from './../../../img/Catalogue/itemImage4.png';
import itemImage5 from './../../../img/Catalogue/itemImage5.png';



export default class ProductCarousel extends Component {
    render() {
        const settings = {
            customPaging: i => (
                <div>
                    <img src={require(`./../../../img/Catalogue/itemImage${i + 1}.png`)}/>
                </div>
            ),
            dotsClass: 'ProductCarouselDots',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className={'ProductSlider'}>
                <Slider {...settings}>
                    <div className={'ProductSlide'}>
                        <img src={itemImage1}/>
                    </div>
                    <div className={'ProductSlide'}>
                        <img src={itemImage2}/>
                    </div>
                    <div className={'ProductSlide'}>
                        <img src={itemImage3}/>
                    </div>
                    <div className={'ProductSlide'}>
                        <img src={itemImage4}/>
                    </div>
                    <div className={'ProductSlide'}>
                        <img src={itemImage5}/>
                    </div>
                </Slider>
            </div>
        );
    }
}
