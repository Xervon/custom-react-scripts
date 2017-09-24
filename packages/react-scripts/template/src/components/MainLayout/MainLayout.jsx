// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import type { props } from './props';

export default (props: props) => (
	<div>
		<p>
			<Link to="/">Home</Link>
			<Link to="/about-us">About</Link>
			<Link to="/counter">Counter</Link>
		</p>
		<div>
			{props.children}
		</div>
	</div>
);
