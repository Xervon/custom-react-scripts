// @flow
import React from 'react';

import type { props } from './props';

export default (props: props) => (
	<div>
		<div>
			<p>{props.counterValue}</p>
			<div>
				<button onClick={() => props.setCounter(0)}>Reset</button>
				<button onClick={() => props.changeCounter(-1)}>Decrement</button>
				<button onClick={() => props.changeCounter(1)}>Increment</button>
			</div>
		</div>
	</div>
);
