import React from "react";

const btnRed = {
	backgroundColor: "red",
};

const btnGreen = {
	backgroundColor: "green",
};

class Counter extends React.Component {
	// Pas de state ici

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<h2>{this.props.count}</h2>

				<button
					onClick={this.props.addFunction}
					/* className="btn-red" */ style={btnRed}
				>
					+
				</button>
				<button
					onClick={this.props.substractFunction}
					/* className="btn-green" */ style={btnGreen}
				>
					-
				</button>
			</div>
		);
	}
}

export default Counter