import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => (
    <li>
        <Link to={`/catalogue${item.itemPath}`}>
            {item.itemName}
            {item.ListItem && item.ListItem.length ? (
                <div className={"PopupCatalogueItem"}>
                    <ul>
                        {item.ListItem.map((child, index) => (
                            <Link to={`${child.itemPath}`}>
                                <Item item={child} key={index}/>
                            </Link>
                        ))}
                    </ul>
                </div>
            ) : null}
        </Link>
    </li>
);

export default Item;