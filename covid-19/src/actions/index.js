import axios from "axios";

// https://covid-api.mmediagroup.fr/v1

export const GET_COVID_DATA = "GET_COVID_DATA";
export const START_FETCHING = "START_FETCHING";
export const FETCH_FAILED = "FETCH_FAILED";

export const getCovidData = () => {
	return (dispatch) => {
		dispatch({ type: START_FETCHING });

		axios.get("https://covid-api.mmediagroup.fr/v1")
			.then((res) => {
				console.log("API DATA =====> ", res);
			})
			.catch((err) => console.error("ERROR PULLING DATA", err));
	};
};
