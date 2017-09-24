// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '@Components/MainLayout/';

import Home from '@Containers/HomeContainer/';
import About from '@Components/About/';
import Counter from '@Containers/CounterContainer/';

const AppRouter = () => (
	<main>
		<MainLayout>
			<Route exact path="/"         component={Home}    />
			<Route exact path="/about-us" component={About}   />
			<Route exact path="/counter"  component={Counter} />
		</MainLayout>
	</main>
);

export default AppRouter;
