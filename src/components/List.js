import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

function List(props) {
    const { items } = props;

    if (!items.length) {
        return <span className="empty-message">No items in list</span>;
    }

    return (
        <div className="list">
            <ul className="list-items">
                {items.map(item => <ListItem key={item} item={item} />)}
            </ul>
        </div>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
};

List.defaultProps = {
    items: []
};

export default List;
