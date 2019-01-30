import React, {Component} from 'react'
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Button from '../Button/Button'

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
        <div
            className={"ArrowNext fas fa-chevron-right"}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div
            className={"ArrowBack fas fa-chevron-left"}
            onClick={onClick}
        />
    );
}


class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            className: 'Slider',
            dotsClass: 'Dots',

            customPaging: i => (
                <button
                    className={"Dot"}
                >
                    {i + 1}
                </button>
            ),
        };
        return (

                <Slider {...settings}>
                    <div className={"slideContent firstSlide"}>
                        <div className={"slideContentWrap"}>
                            <h2>Благотворительные пожертвования для детского дома №12</h2>
                        <Button type="catalog">Подробнее</Button>
                        </div>
                    </div>
                    <div className={"slideContent secondSlide"}>
                        <div className={"slideContentWrap"}>
                            <h2>Благотворительные пожертвования в фонд Хосписа</h2>
                            <Button type="catalog">Подробнее</Button>
                        </div>
                    </div>
                    <div className={"slideContent thirdSlide"}>
                        <div className={"slideContentWrap"}>
                            <h2>Благотворительные пожертвования куда-нибудь ещё</h2>
                            <Button type="catalog">Подробнее</Button>
                        </div>
                    </div>
                    <div className={"slideContent forthSlide"}>
                        <div className={"slideContentWrap"}>
                            <h2>Благотворительные пожертвования и ещё туда куда-нибудь</h2>
                            <Button type="catalog">Подробнее</Button>
                        </div>
                    </div>
                </Slider>

        );
    }
}
export default Carousel;