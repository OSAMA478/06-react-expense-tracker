import React from "react";

import "./NewExpenese.css";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
	const takingDataFromChild = (expenseData) => {
		props.dataTransToParent(expenseData);
	};

	return (
		<div className="new-expense">
			<NewExpenseForm dataTransToParent={takingDataFromChild} />
		</div>
	);
};

export default NewExpense;
