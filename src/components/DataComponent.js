import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'

const DataComponent = (ComposedComponent, url) =>
	class DataComponent extends Component {
		constructor(props) {
			super(props)
			this.state = {
				data: [],
				loading: false,
				loaded: false
			}
		}
		componentWillMount() {
			this.setState({
				loading: true
			})
			url ?
			fetch(url)
				.then(response => response.json())
				.then(data => this.setState({
					loaded: true,
					loading: false,
					data
				})) :
			import('../data/products.json')
				.then(data => this.setState({
					loaded: true,
					loading: false,
					data
				})
			);
		}
		render() {
			return (
				<div className='data-component'>
					{(this.state.loading) ?
					<Loader>Загрузка</Loader> :
					<ComposedComponent {...this.state} />}
				</div>
			)
		}
	}

DataComponent.propTypes = {
	ComposedComponent: PropTypes.element.isRequired,
	url: PropTypes.string
}

DataComponent.defaultProps = {
	ComposedComponent: () => <div>Composed component</div>,
	url: ''
}

export default DataComponent
