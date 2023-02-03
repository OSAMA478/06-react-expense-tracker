import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

// import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

// import ExpenseItem from "./ExpenseItems";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2022");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.item.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpenseList item={filteredExpenses} />
			{/* <ExpenseItem
				date={props.item[0].date}
				title={props.item[0].title}
				amount={props.item[0].amount}
			/>
			<ExpenseItem
				date={props.item[1].date}
				title={props.item[1].title}
				amount={props.item[1].amount}
			/>
			<ExpenseItem
				date={props.item[2].date}
				title={props.item[2].title}
				amount={props.item[2].amount}
			/>
			<ExpenseItem
				date={props.item[3].date}
				title={props.item[3].title}
				amount={props.item[3].amount}
			/> */}
		</Card>
	);
};

export default Expenses;
