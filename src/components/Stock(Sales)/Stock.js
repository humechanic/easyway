import React, {Component} from 'react';
import StockItem from './StockItem';
import './Stock.css';


class Stock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            StockList : [
                {
                    title:'15%',
                    info:'Скидка на размещение в каталоге',
                    type:'blue',
                    background:'Cart',
                    waveLength: '..........',

                },
                {
                    title: 'Призы!',
                    info: 'Регистрируйся и участвуй в розыгрыше призов',
                    type: 'red',
                    background: 'Price',
                    waveLength: '..................',

                },
                {
                    title: 'Акция',
                    info: 'Бесплатная неделя размещения в каталоге',
                    type: 'yellow',
                    background: 'Sale',
                    waveLength: '..................',

                },


            ],
        }


    };
    render() {
        return ( <div className={"Stock"}>
                {
                    this.state.StockList.map((StockList, index) => {
                        return <StockItem
                            key={index}
                            title={StockList.title}
                            info={StockList.info}
                            background={StockList.background}
                            type={StockList.type}
                            waveLength={StockList.waveLength}
                        />
                    })
                }
            </div>

        )
    }
}

export default Stock;