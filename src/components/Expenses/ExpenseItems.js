import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle(props.title);
		console.log(" button is clicked");
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<Card className="expense-item__price">${props.amount}</Card>
			</div>
			<button onClick={clickHandler}>change title</button>
		</Card>
	);
};

export default ExpenseItem;
