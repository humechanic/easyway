import React from 'react';
import './CategoryList.css'

const CategoryName = ( props ) => {
  return (
          <h5 className={'CategoryName'}>{props.children}</h5>
  )
};

export default CategoryName;