import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
	// // //multiple states
	const [enteredAmount, setEnteredAmount] = useState("500");
	const [enteredTitle, setEnteredTitle] = useState("Cycle");
	const [enteredDate, setEnteredDate] = useState(new Date(2021, 5, 12));

	// // // one state
	// const [enteredValue, setEnteredValue] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const amountChangeHandler = (event) => {
		// //when you use one state instead of multiple
		// setEnteredValue({
		// 	...enteredValue,
		// 	enteredAmount: event.target.value,
		// });
		// console.log(enteredValue);

		// // when you use multiple states
		setEnteredAmount(event.target.value);
	};

	const titleChangeHandler = (event) => {
		// // //when you use one state instead of multiple
		// setEnteredValue({
		// 	...enteredValue,
		// 	enteredTitle: event.target.value,
		// });
		// console.log(enteredValue);

		// // when you use multiple states
		setEnteredTitle(event.target.value);
		console.log(event.target.value);
	};
	const dateChangeHandler = (event) => {
		// // //when you use one state instead of multiple
		// setEnteredValue({
		// 	...enteredValue,
		// 	enteredDate: new Date(event.target.value),
		// });
		// console.log(enteredValue);

		// // when you use multiple states
		setEnteredDate(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
			id: Math.random(),
		};
		props.dataTransToParent(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						value={enteredTitle}
						type="text"
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						value={enteredAmount}
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input value={enteredDate} type="date" onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default NewExpenseForm;
