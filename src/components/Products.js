import React from 'react'
import PropTypes from 'prop-types'
import './Products.css'
import Product from './Product'

const Products = ({data}) =>
	<ol className="products">
		{data.map((product, i) => {
			return (
				<li key={i} className="products__item">
					<Product {...product} />
				</li>
			)
		})}
	</ol>

Products.propTypes = {
	data: PropTypes.array.isRequired
}

Products.defaultProps = {
	data: []
}

export default Products
