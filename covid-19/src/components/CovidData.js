import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCovidData } from "../actions";

const CovidData = ({ data, isFetching, error, getCovidData }) => {
	useEffect(() => {});

	const handleGetData = (e) => {
		e.preventDefault();
		getCovidData();
	};

	if (isFetching) {
		return <h2>Fetching Data...</h2>;
	}

	return (
		<>
			<h2>Current Data: {data}</h2>
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
