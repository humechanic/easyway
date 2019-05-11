import React from 'react';
import StockItem from "./StockItem";
import CurvyTitle from "../CurvyWavePageDecor/CurvyTitle";
import TextBlock from "../TextBlock/TextBlock";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const StockDetails = (props) => {
    const SingleStockElement = props.stockElement.getStockElement(props.match.params.salePath);

    if (!SingleStockElement) {
        return <div>Sorry, but the page wasn't found</div>
    }
    return (
        <>
            <div className={"Stock"}>
                <div className={[SingleStockElement.background] + " SingleStockItem"}>
                    <StockItem
                        key={SingleStockElement.path}
                        title={SingleStockElement.title}
                        info={SingleStockElement.info}
                        background={SingleStockElement.background}
                        type={SingleStockElement.type}
                        waveLength={SingleStockElement.waveLength}
                        path={SingleStockElement.path}
                    />

                </div>
            </div>
            <CurvyTitle
                title={'Условия:'}
                buttonType={"noBorder"} //yellow, blue, noBorder
                titleStyle={"fontSize"} //textBlack (white = default), fontSize (font-size: 40px)
            />
            <TextBlock>{SingleStockElement.terms}</TextBlock>
        </>
    )
};

function mapStateToProps(state) {
    return {
        stockElement: state.salesPage,
    }

}

export default connect(mapStateToProps)(withRouter(StockDetails));