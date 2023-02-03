import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = () => {
	const initialArr = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	const [expenses, setExpensesArr] = useState(initialArr);
	const takingDataFromChild = (expenseData) => {
		setExpensesArr((prevExpensesArr) => [expenseData, ...prevExpensesArr]);
		console.log(expenses);
	};

	// //using React dependency
	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h1", {}, "let's get started!!"),
	// 	React.createElement(Expences, { item: expenses })
	// );

	return (
		<div>
			<NewExpense dataTransToParent={takingDataFromChild} />

			<Expenses item={expenses} />
		</div>
	);
};

export default App;
