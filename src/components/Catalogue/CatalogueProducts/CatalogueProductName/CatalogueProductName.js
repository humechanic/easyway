import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const CatalogueProductName = (props) => {
  return (
      <div className={'CatalogueProductName'}>
          <Link to={[props.url] + '/' + [props.path]} className={'ProductName'}>
              {props.productName}
          </Link>
      </div>
  )
};
export default CatalogueProductName;
