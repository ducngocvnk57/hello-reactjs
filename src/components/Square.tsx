import * as React from "react";

export default class Square extends React.Component<any, {}> {
	render() {
		return (
			<button style={{ width: 25, height: 25, lineHeight: `25px`, padding: 0, }}
				className="square"
				onClick={() => this.props.onClick()}
			>
				{this.props.value}
			</button>
		);
	};
};