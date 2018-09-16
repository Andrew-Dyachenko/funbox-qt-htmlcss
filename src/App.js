import React, { Component } from 'react'
import Helmet from 'react-helmet'
import cssVars from 'css-vars-ponyfill'
import './App.css'
import Products from './components/Products'
import DataComponent from './components/DataComponent';

const ProductsList =
	DataComponent(
		Products,
		null
	)

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<html lang="ru" />
					<title>Нямушка</title>
				</Helmet>
				<div className="container App__container">
					<main className="main App__main">
						<h1 className="main__title">Ты сегодня покормил кота?</h1>
						<ProductsList />
					</main>
				</div>
			</div>
		)
	}
	componentDidMount() {
		this.cssVars = cssVars()
	}
	componentWillUnmount() {
		delete this.cssVars
	}
}

export default App
