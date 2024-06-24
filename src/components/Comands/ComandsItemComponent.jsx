import React, { Component } from 'react'

// import img from "../../assets/image/149071 1.svg"

import './ComandsItemComponent.scss'

export default class ComandsItemComponent extends Component {


	render() {
		const {img, title, subtitle, phoneNumber, email} = this.props
		return (
			<div className="col-5">
				<div className="col-img">
					<img src={img} alt="comands-item-img" />
				</div>
				<h4 className="comands-item-title">{title}</h4>
				<p className='comands-item-subtitle'>{subtitle}</p>
				<p className='comands-item-number'>
					{phoneNumber}
				</p>
				<p className='comands-item-gmail'>{email}</p>
			</div>
		)
	}
}
