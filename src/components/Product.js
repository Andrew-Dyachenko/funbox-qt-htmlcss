import React from 'react'
import PropTypes from 'prop-types';
import './Product.css'

const Product = ({pretitle, title, subtitle, properties, weight}) =>
	<div className="product">
		<div className="product__shape">
			<h4 className="product__pretitle">{pretitle}</h4>
			<h2 className="product__title">{title}</h2>
			<h3 className="product__subtitle">{subtitle}</h3>
		</div>
	</div>

Product.propTypes = {
	pretitle: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	properties: PropTypes.array,
	weight: PropTypes.object
}

Product.defaultProps = {
	pretitle: 'Предзаголовок',
	title: 'Заголовок',
	subtitle: 'Подзаголовок',
	properties: [],
	weight: {}
}

export default Product