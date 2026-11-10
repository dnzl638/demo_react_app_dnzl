import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
		this.increment = this.increment.bind(this);
	}
	increment()
	{this.setState(state => { return { count: this.state.count + 1}; });}

	render() {
		return (
			<div>
			<button className='inc' onClick={this.increment}>Increment!</button>
			<button className='dec' onClick={this.decrement}>Decrement!</button>
			<button className='reset' onClick={this.reset}>Reset</button>
			<h1>Current Count: {this.state.count}</h1>
			</div>
		);
	}
};


export default Counter
