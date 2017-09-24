// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	mapDispatchToProps,
	mapStateToProps
} from './props';
import type { props } from './props';

import Counter from '@Components/Counter/';

@connect( mapStateToProps, mapDispatchToProps )
class CounterContainer
	extends Component<props>
{
	render ()
	{
		return <Counter { ...this.props } />
	}
}

export default CounterContainer;
