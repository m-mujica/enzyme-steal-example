import React from 'react';

class Foo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span className="item">1</span>
				<span className="item">2</span>
				<span className="item">3</span>
			</div>
		);
	}
}

export default Foo;
