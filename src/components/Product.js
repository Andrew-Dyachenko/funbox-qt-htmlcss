import React from 'react'
import PropTypes from 'prop-types';
import './Product.css'
import Autolinker from 'autolinker';

const Product = ({disabled, pretitle, title, subtitle, properties, modificator, weightVal, weightUnit, theme, thumbsay}) => {
	return (
		<div className={modificator ? `product product--${modificator}` : "product"} style={{["--theme-color"]:` var(--color-${theme})`}} disabled={disabled ? "disabled" : false}>
			<div className="product__shape product__shape--1">
				<div className="product__shape product__shape--2">
					<div className="product__shape product__shape--3">
						<div className="product__shape product__shape--4">
							<div className="product__header">
								<h4 className="product__pretitle">{pretitle}</h4>
								<h2 className="product__title">{title}</h2>
								<h3 className="product__subtitle">{subtitle}</h3>
							</div>
							<ul className="product__properties">
								{properties.map((property, i) => {
									return (
										<li key={i} className="product__property">
											<h6 className="product__property-h">{property}</h6>
										</li>
									)
								})}
							</ul>
							<h5 className="product__badget">
								<big className="product__badget-big">{weightVal}</big>
								<small className="product__badget__small">{weightUnit}</small>
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="product__thumbsay" dangerouslySetInnerHTML={{__html: Autolinker.link(thumbsay)}} />
		</div>
	)
}

Product.propTypes = {
	disabled: PropTypes.bool,
	pretitle: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	properties: PropTypes.array,
	modificator: PropTypes.string,
	weightVal: PropTypes.string,
	weightUnit: PropTypes.string,
	theme: PropTypes.string,
	thumbsay: PropTypes.string
}

Product.defaultProps = {
	disabled: false,
	pretitle: 'Предзаголовок',
	title: 'Заголовок',
	subtitle: 'Подзаголовок',
	properties: [],
	modificator: "",
	weightVal: "0",
	weightUnit: "",
	theme: "",
	thumbsay: ""
}

export default Product