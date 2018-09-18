import React from 'react'
import PropTypes from 'prop-types'
import './Products.css'
import Product from './Product'

const Products = ({data}) =>
	<form className='products'>
		<ol className='products__list'>
			{data.map((product, i) => {
				const id = `products__item--${i}`
				return (
					<li key={i} className='products__item'>
						<Product {...product} id={id} />
					</li> 
				)
			})}
		</ol>
	</form>

Products.propTypes = {
	data: PropTypes.array.isRequired
}

Products.defaultProps = {
	data: []
}

export default Products
