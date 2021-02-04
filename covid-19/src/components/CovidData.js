import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCovidData } from "../actions";
// import StateData from "./StateData";

const CovidData = ({ data, isFetching, error, getCovidData }) => {
	useEffect(() => {});

	const dataArray = [data];

	const handleGetData = (e) => {
		e.preventDefault();
		getCovidData();
	};

	if (isFetching) {
		return <h2>Fetching Data...</h2>;
	}
	console.log("Covid Data: CovidData.js =====> ", dataArray);

	return (
		<>
			<h2>Current Data By State:</h2>
			<div className="container-state-data">
				<div
					// key={Object.getOwnPropertyNames(data)}
					key={Date.now()}
					className="state-data"
				>
					{dataArray.map((item) => {
						return (
							<>
								<div className="state-name">
									{Object.getOwnPropertyNames(item)}
								</div>
								<div className="confirmed-cases">
									{item.confirmed}
								</div>
								<div className="deaths">
									{item.deaths}
								</div>
							</>
						);
					})}
				</div>
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
