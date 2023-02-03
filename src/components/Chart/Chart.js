import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const datapointValues = props.chartDataPoints.map(
		(dataPoint) => dataPoint.value
	);

	const totalMaximum = Math.max(...datapointValues);
	// console.log(totalMaximum);

	return (
		<div className="chart">
			{props.chartDataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
