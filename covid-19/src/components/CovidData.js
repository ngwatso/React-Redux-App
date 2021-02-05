import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCovidData } from "../actions";
// import StateData from "./StateData";

const CovidData = ({ data, isFetching, error, getCovidData }) => {
	useEffect(() => {});

	const dataArray = [data];

	// const dataArr = dataArray[0];
	const stateData = Object.entries(dataArray[0]);

	const dataArr = [
		0,
		1,
		4,
		5,
		6,
		7,
		8,
		9,
		11,
		12,
		13,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		32,
		33,
		34,
		35,
		36,
		37,
		38,
		39,
		41,
		42,
		43,
		44,
		47,
		48,
		49,
		50,
		51,
		53,
		54,
		56,
		57,
		58,
		59,
		60,
	];

	const dataArr2 = [2];

	const totalData = stateData
		.sort()
		.filter((el, i) => dataArr2.some((j) => i === j));

	// stateData.filter((el, i) => dataArr.some((j) => i === j));

	// const removeItems = (arr, remove) => {
	// 	return arr.filter((value) => !remove.includes(value));
	// };

	// console.log(
	// 	"newArray =====> ",

	// );

	const newArray = stateData
		.sort()
		.filter((el, i) => dataArr.some((j) => i === j));

	const handleGetData = (e) => {
		e.preventDefault();
		getCovidData();
	};

	if (isFetching) {
		return <h2>Fetching Data, one moment...</h2>;
	}
	console.log("Covid Data: stateData =====> ", stateData);
	console.log("Covid Data: dataArray =====> ", dataArray[0]);
	// console.log("dataArr =====> ", dataArr);
	// console.log("Object.keys =====> ", Object.keys(dataArray[0]));
	console.log(
		"Object.getOwnPropertyDescriptor =====> ",
		Object.getOwnPropertyDescriptor(dataArray)
	);

	return (
		<>
			<div className="app">
				<h2>Current Data By State (updated hourly):</h2>
				<button onClick={handleGetData}>Get Recent Data</button>
				{error && (
					<div>
						<h2 style={{ color: "red" }}>
							Error: {error}. Please try again later.
						</h2>
					</div>
				)}
				<div className="us-container">
					<div className="us-data">
						{totalData.map((item) => {
							return (
								<div key={item} className="us-card">
									<div className="state-name">
										{/* {item[0]} */}
										United States
										{/* {Object.keys(dataArray[0]).map(
								(name) => name === item
							)} */}
										{/* {Object.getOwnPropertyNames(item)} */}
										{/* {Object.defineProperty(item)} */}
										{/* Michigan */}
									</div>
									<div className="confirmed-cases">
										Confirmed: {item[1].confirmed}
									</div>
									<div className="deaths">
										Deaths: {item[1].deaths}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="container-state-data">
					{/* <div
					// key={Object.getOwnPropertyNames(data)}
					key={Date.now()}
					className="state-data"
				> */}
					{/* {stateNames.forEach((name) => {
					dataArray.name.map((item) => { */}
					{/* {for ( let i = 0; i < stateNames.length; i++ ) { */}
					{newArray.map((item) => {
						/* {Object.keys(dataArray[0]).map((item) => { */

						// console.log("item =====> ", item);
						return (
							<div key={item} className="state-card">
								<div className="state-name">
									{item[0]}
									{/* {Object.keys(dataArray[0]).map(
									(name) => name === item
								)} */}
									{/* {Object.getOwnPropertyNames(item)} */}
									{/* {Object.defineProperty(item)} */}
									{/* Michigan */}
								</div>
								<div className="confirmed-cases">
									Confirmed: {item[1].confirmed}
								</div>
								<div className="deaths">
									Deaths: {item[1].deaths}
								</div>
							</div>
						);
					})}
					{/* </div> */}
				</div>
				{/* <StateData getCovidData={getCovidData} /> */}
				{/* <div key={data.key} className="state-data">
				{data.map((item) => {
					return <div className="state-name"></div>;
				})}
			</div> */}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		data: state.data,
		isFetching: state.isFetching,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getCovidData })(CovidData);
