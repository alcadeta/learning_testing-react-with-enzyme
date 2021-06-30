import React from "react";
import PropTypes from "prop-types";

function List(props) {
    const {items} = props;

    if (!items.length) {
        return <span className="empty-message">No items in list</span>;
    }

    return (
        <ul className="list-items">
            {items.map(item => <li className="item" key={item}>{item}</li>)}
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.array,
}

List.defaultProps = {
    items: [],
}

export default List;