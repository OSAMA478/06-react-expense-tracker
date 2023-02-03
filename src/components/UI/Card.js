import React from "react";
import "./Card.css";
const Card = (prop) => {
	const classes = prop.className + " card ";
	return <div className={classes}>{prop.children}</div>;
};
export default Card;
