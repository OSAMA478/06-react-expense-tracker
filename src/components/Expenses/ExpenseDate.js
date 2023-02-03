import React from "react";
import Card from "../UI/Card";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
	const day = props.date.toLocaleString("en-us", {
		day: "numeric",
	});
	const month = props.date.toLocaleString("en-us", {
		month: "short",
	});
	const year = props.date.getFullYear();

	return (
		<Card className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</Card>
	);
};
export default ExpenseDate;
