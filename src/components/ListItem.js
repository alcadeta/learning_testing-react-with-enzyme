import React from "react";
import PropTypes from "prop-types";

function ListItem(props) {
    const { item } = props;
    return <li className="item" key={item}>{item}</li>;
}

ListItem.propTypes = {
    item: PropTypes.string.isRequired
};

export default ListItem;
