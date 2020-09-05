import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import { Container } from '@material-ui/core';

export default class Page extends Component {
	render() {
		return (
			<>
				<Meta />
				<Container maxWidth='lg' className='cont'>
					<Header />
					<NavBar />
					{this.props.children}
					<Footer />
				</Container>
			</>
		);
	}
}
