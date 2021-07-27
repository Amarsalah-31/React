import React from "react";

class Box extends React.Component {
	renderSlider = () => {
		if (this.props.unit !== "L") {
			return (
				<input
					min={this.props.min}
					max={this.props.max}
					value={this.props.value}
					type="range"
					onChange={this.props.onChange}
				/>
			);
		}

		return null;
	};

	render() {
		return (
			<div className="box col-sm-3 col-6">
				<span
					className="material-icons"
					style={{
						color: this.props.color,
						fontSize: 100,
					}}
				>
					{this.props.icon}
				</span>
				<p>
					{Math.round(this.props.value * 100) / 100} {this.props.unit}
				</p>

				{/* {this.props.unit === "L" ? null : <input type="range" />} */}

				{this.renderSlider()}
			</div>
		);
	}
}

export default Box;