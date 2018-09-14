import React, { Component } from 'react'
import Helmet from 'react-helmet'
import cssVars from 'css-vars-ponyfill';
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<html lang="ru" />
					<title>Нямушка</title>
				</Helmet>
				<main className="main">
					<h1>Ты сегодня покормил кота?</h1>
				</main>
			</div>
		)
	}
	componentDidMount() {
		this.cssVars = cssVars();
	}
	componentWillUnmount() {
		delete this.cssVars;
	}
}

export default App;
