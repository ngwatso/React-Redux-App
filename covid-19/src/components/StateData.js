// import React from "react";

// class StateData extends Component {
// 	constructor() {
// 		super();
// 		this.state = { stateData: [] };
// 	}

// 	componentDidMount(props) {
// 		this.setState({ stateData: props.getCovidData });
//   }
//   // console.log("getCovidData, StateData.js =====> ", stateData);

// 	render() {

// 		return (
// 			<>
// 				<div className="container-state-data">
// 					{this.state.stateData.map((state) => {
// 						return (
// 							<div key={state.name} className="state-data">
// 								<div className="state-name">
// 									{state.name}
// 								</div>
// 								<div className="state-population">
// 									{state.population}
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</>
// 		);
// 	}
// }

// export default StateData;
