import { GET_COVID_DATA, START_FETCHING, FETCH_FAILED } from "../actions";

const initialState = {
	data: [],
	isFetching: false,
	error: "",
};

export const covidReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING: {
			return {
				...state,
				isFetching: true,
				error: "",
			};
		}
		case GET_COVID_DATA: {
			return {
				...state,
				data: action.payload,
				isFetching: false,
			};
		}
		case FETCH_FAILED: {
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};
		}
		default:
			return state;
	}
};
