import React, { Component } from 'react'

import './InformationItemsComponent.scss'

export default class InformationItemsComponent extends Component {

	render() {
		const {img, date, title} = this.props
		return (
			<div className='col-4'>
				<div className="col-4-img">
					<img src={img} alt="col-img" />
				</div>
				<div className="date">
					{date}
				</div>
				<div className="col-title">
					{title}
				</div>
			</div>
		)
	}
}
