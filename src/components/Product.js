import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './Product.css'

class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false,
			clicks: 0,
			indeterminate: true,
			forceUnindeterminated: false
		}
		this.change = this.change.bind(this)
		this._onChange = this._onChange.bind(this)
	}
	static propTypes = {
		disabled: PropTypes.bool,
		id: PropTypes.string,
		pretitle: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		properties: PropTypes.array,
		modificator: PropTypes.string,
		weightVal: PropTypes.string,
		weightUnit: PropTypes.string,
		thumbsay: PropTypes.string,
		thumbsayReplace: PropTypes.string
	}
	static defaultProps = {
		disabled: false,
		id: '',
		pretitle: 'Предзаголовок',
		title: 'Заголовок',
		subtitle: 'Подзаголовок',
		properties: [],
		modificator: '',
		weightVal: '0',
		weightUnit: '',
		thumbsay: '',
		thumbsayReplace: ''
	}
	change(state) {
		this.setState(state)
	}
	_onChange() {
		this.change({
			clicks: this.state.clicks + 1,
			indeterminate: !(this.state.clicks > 0 && this.state.hover)
		})
	}
	render() {
 		const {
			id,
			disabled,
			pretitle,
			title,
			subtitle,
			properties,
			modificator,
			thumbsay,
			thumbsayReplace,
			weightVal,
			weightUnit} = this.props
		
		let thumbsayReplaceREXP

		if (thumbsayReplace) {
			thumbsayReplaceREXP = new RegExp(thumbsayReplace.replace('.', '\\.?'), 'igm')
		}
		console.log('thumbsayReplace: ', thumbsayReplace, '\n', 'thumbsayReplaceREXP: ', thumbsayReplaceREXP)
			
		return (
			<div
				className={`
					${modificator ? `product product--${modificator}` : 'product'}
					${!this.state.indeterminate || this.state.forceUnindeterminated ? '' : ' product--indeterminate'}
				`}>
				<input
					className='product__checkbox'
					type='checkbox'
					name={id}
					id={id}
					onChange={this._onChange}
					disabled={disabled ? 'disabled' : false} />

				<label
					className='product__shape product__shape--1'
					htmlFor={id}
					onMouseEnter={() => {
						this.change({
							hover: true
						})
					}}
					onMouseLeave={() => {
						this.change({
							hover: false,
							indeterminate: !this.state.clicks > 0
						})
					}} >
					<div className='product__shape product__shape--2'>
						<div className='product__shape product__shape--3'>
							<div className='product__shape product__shape--4'>
								<div className='product__header'>
									<h4 className='product__pretitle'>{pretitle}</h4>
									<h2 className='product__title'>{title}</h2>
									<h3 className='product__subtitle'>{subtitle}</h3>
								</div>
								<ul className='product__properties'>
									{properties.map((property, i) => {
										return (
											<li key={i} className='product__property'>
												<h6 className='product__property-h'>{property}</h6>
											</li>
										)
									})}
								</ul>
								<h5 className='product__badget'>
									<big className='product__badget-big'>{weightVal}</big>
									<small className='product__badget__small'>{weightUnit}</small>
								</h5>
							</div>
						</div>
					</div>
				</label>
				{
					thumbsayReplace ? (
					<div className='product__thumbsay'>
						<span>
							{thumbsay.slice(0, thumbsay.indexOf(thumbsayReplace))}
						</span>
						<label
							className='product__thumbsay-action'
							htmlFor={id}
							onClick={() => this.setState({
								forceUnindeterminated: true
							})}>
							купи.
						</label>
						<span>
							{thumbsay.slice(thumbsay.indexOf(thumbsayReplace) + thumbsayReplace.length)}
						</span>
					</div>) :
					<div
						className={`
							product__thumbsay
							${disabled ? ' product__thumbsay--disabled' : ''}
						`}>
						{
							!disabled ?
							thumbsay :
							`Печалька, ${subtitle}  закончился.`
						}
					</div>
				}
			</div>
		)
	}
}

export default Product
