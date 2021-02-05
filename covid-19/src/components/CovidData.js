import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCovidData } from "../actions";
// import StateData from "./StateData";

const CovidData = ({ data, isFetching, error, getCovidData }) => {
	useEffect(() => {});

	const dataArray = [data];
	const stateNames = Object.keys(data);

	const handleGetData = (e) => {
		e.preventDefault();
		getCovidData();
	};

	if (isFetching) {
		return <h2>Fetching Data...</h2>;
	}
	console.log("Covid Data: stateNames =====> ", stateNames);
	console.log("Covid Data: dataArray =====> ", dataArray[0]);
	console.log("Object.keys =====> ", Object.keys(dataArray[0]));

	return (
		<>
			<h2>Current Data By State (updated hourly):</h2>
			<div className="container-state-data">
				{/* <div
					// key={Object.getOwnPropertyNames(data)}
					key={Date.now()}
					className="state-data"
				> */}
				{/* {stateNames.forEach((name) => {
					dataArray.name.map((item) => { */}
				{/* {for ( let i = 0; i < stateNames.length; i++ ) { */}
				{Object.keys(dataArray[0]).map((item) => {
					return (
						<div key={item} className="state-card">
							<div className="state-name">
								{/* {Object.getOwnPropertyNames(item)} */}
								{Object.keys(dataArray[0])}
								{/* Michigan */}
							</div>
							<div className="confirmed-cases">
								Confirmed: {item.confirmed}
							</div>
							<div className="deaths">
								Deaths: {item.deaths}
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
			{error && (
				<div>
					<h2 style={{ color: "red" }}>Error: {error}</h2>
				</div>
			)}
			<button onClick={handleGetData}>Get Recent Data</button>
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
