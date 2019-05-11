import React from 'react';
import StockItem from './StockItem';
import './Stock.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Stock = (props) => {
    const MainPage = props.MainPage;

    if (MainPage) {
        return (
            <div className={"Stock"}>
                {
                    props.stockElements.allStockElements().map((StockList, index) => {
                        return (
                            <>
                                <Link
                                    key={`${StockList.path}` + {index}}
                                    to={`/sales/${StockList.path}`}
                                    className={[StockList.background] + " StockItem"}>
                                    <StockItem
                                        key={StockList.path}
                                        title={StockList.title}
                                        info={StockList.info}
                                        background={StockList.background}
                                        type={StockList.type}
                                        waveLength={StockList.waveLength}
                                        path={StockList.path}
                                    />
                                </Link>

                            </>

                        )
                    }).slice(0, 3)
                }
            </div>
        )
    }
    else {
        return (
            <div className={"Stock"}>
                {
                    props.stockElements.allStockElements().map((StockList, index) => {
                        return (
                            <>
                                <Link
                                    key={`${StockList.path}` + {index} + [StockList.title]}
                                    to={`/sales/${StockList.path}`}
                                    className={[StockList.background] + " StockItem"}>
                                    <StockItem
                                        key={StockList.path}
                                        title={StockList.title}
                                        info={StockList.info}
                                        background={StockList.background}
                                        type={StockList.type}
                                        waveLength={StockList.waveLength}
                                        path={StockList.path}
                                    />
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        stockElements: state.salesPage,
    }

}

export default connect(mapStateToProps)(Stock);