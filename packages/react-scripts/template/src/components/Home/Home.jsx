// @flow
import React from 'react';

import type { props } from './props';
import s from './Home.module.css';

import logo from '@Assets/logo.svg';

const Home = (props: props) => (
	<div>
		<h1>Home</h1>
		<p className={s.test}>Welcome home!</p>
		<img src={logo} width={50} alt="Logo" />
		<button onClick={() => props.changePage('/about-us')}>About Us</button>
	</div>
);

export default Home;
