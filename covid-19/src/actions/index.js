import axios from "axios";

// https://covid-api.mmediagroup.fr/v1

export const GET_COVID_DATA = "GET_COVID_DATA";
export const START_FETCHING = "START_FETCHING";
export const FETCH_FAILED = "FETCH_FAILED";

export const getCovidData = () => {
	return (dispatch) => {
		dispatch({ type: START_FETCHING });

		axios.get(
			"https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases"
		)
			.then((res) => {
				console.log("API DATA =====> ", res.data.US);
				console.log(
					"ObjectNames =====> ",
					Object.getOwnPropertyNames(res.data.US)
				);
				dispatch({
					type: GET_COVID_DATA,
					payload: res.data.US,
				});
			})
			.catch((err) => {
				console.error("ERROR PULLING DATA", err.message);
				dispatch({ type: FETCH_FAILED, payload: err.message });
			});
	};
};
