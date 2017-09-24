// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '@Components/Home/';

import type { props } from './props';
import {
	mapStateToProps,
	mapDispatchToProps,
} from './props';

@connect( mapStateToProps, mapDispatchToProps )
class HomeContainer
	extends Component<props>
{
	render ()
	{
		return (
			<Home
				changePage={ (path) => this.props.changePage(path) } />
		);
	}
}

export default HomeContainer;
