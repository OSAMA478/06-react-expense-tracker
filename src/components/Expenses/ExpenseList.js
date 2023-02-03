import React from "react";

import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItems";

function ExpenseList(props) {
	if (props.item.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}
	return (
		<ul>
			{props.item.map((element) => (
				<ExpenseItem
					key={element.id}
					date={element.date}
					title={element.title}
					amount={element.amount}
				/>
			))}
		</ul>
	);
}

export default ExpenseList;
